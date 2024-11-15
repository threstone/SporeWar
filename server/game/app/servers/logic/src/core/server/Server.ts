import { PlayerModel } from '../../../../../core/sequelize/model/game/PlayerModel';
import { RoleModel } from '../../../../../core/sequelize/model/platform/RoleModel';
import { UserModel } from '../../../../../core/sequelize/model/platform/UserModel';
import { ServerPto, SystemPto } from '../../CommonProto';
import { GlobalVar } from '../../GlobalVar';
import { Session } from '../session/session';
import { ProtoBufEncoder } from '../ProtoBufEncoder';
import { Player } from '../player/Player';
import { BlockModel } from '../../../../../core/sequelize/model/platform/BlockModel';
import { TimeMgr } from '../TimeMgr';
import { EventEnum } from '../../../../../Enum';

export class Server {
    serverId: number;

    private _playerMapForUserId = new Map<string, Player>();

    private _playerMapForUUid = new Map<string, Player>();

    constructor(serverId: number) {
        this.serverId = serverId;
    }

    onNewDay(buffer: Buffer) {
        this._playerMapForUserId.forEach((player) => {
            player.sendBuffer(buffer);
        });
    }

    /** 清理没有session的玩家 */
    clearPlayers() {
        this._playerMapForUserId.forEach((player) => {
            if (player.session) {
                return;
            }

            if (player.nextClearFlag === true) {
                this.playerDispose(player);
            } else {
                player.nextClearFlag = true;
            }
        });
    }

    /** 服务器状态检查 */
    checkServerStatus() {
        if (this.allowToEnter() === false) {
            this.kickAllPlayer('服务器维护');
        }
    }

    async enterServer(session: Session) {
        const player = this._playerMapForUUid.get(session.uuid);
        if (player) {
            // 存在用户信息的情况下
            player.nextClearFlag = false;
            // 少数情况下重连时的新socket会比socket断开事件先处理,导致新会话的player被销毁
            // 所以这里需要优先将可能存在的session.player置空
            if (player.session) {
                player.session.player = null;
                logger.debug(`[${session.uuid}]少数情况下重连时的新socket会比socket断开事件先处理,导致新会话的player被销毁`);
            }
            player.session = session;
            session.player = player;
        } else {
            // 不存在用户信息的情况下,加载
            const playerModel = await GlobalVar.sequelizeMgr.getGameModel(this.serverId, PlayerModel);
            // 获取该服务器的账号信息
            let playerInfo = await playerModel.findOne({ where: { uuid: session.uuid } });
            // 该服没有账号信息,创建一个新的账号
            if (!playerInfo) {
                const userId = `${await (await GlobalVar.redisMgr.getClient()).incr(`${startupParam.env}_newUserId`)}`;
                playerInfo = await playerModel.create({ userId, uuid: session.uuid });
                const platformDb = await GlobalVar.sequelizeMgr.getPlatfromSeq();
                const roleModel = platformDb.getModel(RoleModel);
                await roleModel.create({ userId, uuid: session.uuid, serverId: this.serverId });
                logger.debug(`serverId:${this.serverId} 新玩家注册 uuid:${session.uuid} userId:${userId}`);
            }
            session.player = await new Player().init(session, playerInfo, this);
            this._playerMapForUserId.set(session.player.userId, session.player);
            this._playerMapForUUid.set(session.uuid, session.player);
        }

        // 发送登录成功协议
        session.sendMessage(new ServerPto.S_CONNECT({
            loginInfo: session.player.getLoginInfo(),
        }));

        session.player.playerInfo.online = true;
        session.player.savePlayerInfo('online');
        session.player.emit(EventEnum.Online);

        const userModel = (await GlobalVar.sequelizeMgr.getPlatfromSeq()).getModel(UserModel);
        // 修改玩家上次进入服务器id
        userModel.update({ serverId: this.serverId }, { where: { uuid: session.uuid } });
    }

    getPlayerByUserId(userId: string) {
        return this._playerMapForUserId.get(userId);
    }

    getPlayerByUUid(uuid: string) {
        return this._playerMapForUUid.get(uuid);
    }

    playerDispose(player: Player) {
        logger.debug(`[${player.playerInfo.uuid}] 玩家释放  serverId:${this.serverId}   userId:${player.userId}`);
        this._playerMapForUserId.delete(player.userId);
        this._playerMapForUUid.delete(player.playerInfo.uuid);
        player.destroy();
    }

    kickAllPlayer(reason: string) {
        if (this._playerMapForUserId.size === 0) {
            return;
        }

        const notify = new SystemPto.S_KICK({ reason });
        const buffer = ProtoBufEncoder.encode(notify);
        this._playerMapForUserId.forEach((p) => {
            p.kickWithBuffer(buffer);
        });
    }

    /** 服务器是否开启 */
    isOpen() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return Date.now() >= serverData?.startTime;
    }

    /** 服务器是否允许进入 */
    allowToEnter() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return serverData?.status === 1;
    }

    /** 是否是白名单玩家 */
    async isWhiteUser(session: Session) {
        const redis = await GlobalVar.redisMgr.getClient();
        return redis.sismember(`${startupParam.env}__whiteList`, session.uuid);
    }

    /** 是否被封禁 */
    async isBlock(uuid: string): Promise<boolean> {
        const platform = await GlobalVar.sequelizeMgr.getPlatfromSeq();
        const roleModel = platform.getModel(RoleModel);
        const role = await roleModel.findOne({ where: { uuid, serverId: this.serverId } });
        if (role) {
            const blockModel = platform.getModel(BlockModel);
            const blockInfo = await blockModel.findOne({ where: { userInfo: role.userId } });
            return blockInfo?.blockTime === 0 || blockInfo?.blockTime > Date.now();
        }
        return false;
    }

    /** 获取开服天数 */
    getOpenDay() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return 1 + Math.floor((TimeMgr.ins().dayStartMs - TimeMgr.ins().getDayStartMs(serverData.startTime)) / TimeMgr.dayMs);
    }

    /** 获取开服周数 */
    getOpenWeek() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return 1 + Math.floor((TimeMgr.ins().weekStartMs - TimeMgr.ins().getWeekStartMs(serverData.startTime)) / TimeMgr.weekMs);
    }
}
