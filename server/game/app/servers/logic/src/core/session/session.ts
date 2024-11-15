import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from '../ProtoBufEncoder';
import { GlobalVar } from '../../GlobalVar';
import { SystemPto } from '../../CommonProto';
import { Player } from '../player/Player';
import { EventEnum } from '../../../../../Enum';

export class Session {
    /** 所在gate */
    gateNodeId: string;

    sessionId: number;

    uuid: string;

    ip: string;

    player: Player;

    createdAt: number;

    constructor(gateNodeId: string, sessionId: number) {
        this.gateNodeId = gateNodeId;
        this.sessionId = sessionId;
        this.createdAt = Date.now();
    }

    /** 记录玩家session信息,踢掉同账号其他在线的链接 */
    async onNewSession() {
        const client = await GlobalVar.redisMgr.getClient(1);
        const sessionJson = await client.getData(`Session_${this.uuid}`);
        if (sessionJson) {
            const sessionInfo = JSON.parse(sessionJson);
            if (sessionInfo.gateNodeId !== this.gateNodeId || sessionInfo.sessionId !== this.sessionId) {
                const notify = new SystemPto.S_KICK({ reason: '账号在其他地方登录' });
                const buffer = ProtoBufEncoder.encode(notify);
                rpc.gate.gateRemote.sendKick({ type: RpcRouteType.Target, nodeId: sessionInfo.gateNodeId }, sessionInfo.sessionId, buffer);
            }
        }

        client.setData(
            `Session_${this.uuid}`,
            JSON.stringify({
                gateNodeId: this.gateNodeId,
                sessionId: this.sessionId,
            }),
            -1,
        );
    }

    onPlayerOffline() {
        if (this.player) {
            if (this.player.playerInfo) {
                this.player.playerInfo.online = false;
                this.player.savePlayerInfo('online');
            } else {
                logger.error(`${this.uuid} playerInfo is null`);
            }

            this.player.emit(EventEnum.Offline);
            this.player.session = null;
            this.player = null;
        }
    }

    async initByToken(token: string) {
        const redis = await GlobalVar.redisMgr.getClient();
        const jsonStr = await redis.getData(token);
        if (!jsonStr) {
            return null;
        }
        const redisData = JSON.parse(jsonStr);
        this.uuid = redisData.uuid;
        this.ip = redisData.ip;
        return this;
    }

    sendMessage(msg: IGameMessage) {
        if (msg.constructor.name !== 'S_HEART_BEAT') {
            logger.debug(`[${this.uuid}][${this.player?.userId}] 发送消息:${msg.constructor.name}`, JSON.stringify(msg));
        }
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            ProtoBufEncoder.encode(msg),
        );
    }

    sendBuffer(buff: Buffer) {
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            buff,
        );
    }

    sendErrorMessage(msg: string, code: number = 500) {
        this.sendMessage(new SystemPto.S_ERROR({ msg, code }));
    }

    kick(reason?: string) {
        let buffer: Buffer;
        if (reason) {
            const notify = new SystemPto.S_KICK({ reason });
            buffer = ProtoBufEncoder.encode(notify);
        }
        this.kickWithBuffer(buffer);
    }

    kickWithBuffer(buffer: Buffer) {
        rpc.gate.gateRemote.sendKick(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            buffer,
        );
    }
}
