import { ServerModel } from '../../../../core/sequelize/model/platform/ServerModel';
import { ServerPto } from '../CommonProto';
import { Player } from '../core/player/Player';
import { ProtoBufEncoder } from '../core/ProtoBufEncoder';
import { Session } from '../core/session/session';
import { GlobalVar } from '../GlobalVar';

export class ServerHandler {
    private static serverInfoBuffer: Buffer;

    private static serverList: ServerModel[];

    // 请求连接
    static async C_CONNECT(session: Session, player: Player, msg: ServerPto.C_CONNECT) {
        const server = GlobalVar.serverMgr.getServerEntity(msg.serverId);
        if (server.isOpen() === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 1 } }));
            return;
        }

        if (server.allowToEnter() === false && await server.isWhiteUser(session) === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 3 } }));
            return;
        }

        // 被封禁
        if ((await server.isBlock(session.uuid)) === true) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 5 } }));
            return;
        }

        // 玩家请求进入指定服务器
        server.enterServer(session);
    }

    // 请求切换服务器
    static async C_SWITCH_SERVER(session: Session, player: Player, msg: ServerPto.C_SWITCH_SERVER) {
        if (player?.serverId === msg.serverId) {
            session.sendMessage(new ServerPto.S_SWITCH_SERVER({ loginInfo: { code: 2 } }));
            return;
        }

        const server = GlobalVar.serverMgr.getServerEntity(msg.serverId);
        if (server.isOpen() === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 1 } }));
            return;
        }

        if (server.allowToEnter() === false && await server.isWhiteUser(session) === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 3 } }));
            return;
        }

        // 被封禁
        if ((await server.isBlock(session.uuid)) === true) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 5 } }));
            return;
        }

        session.onPlayerOffline();

        // 玩家请求进入指定服务器
        server.enterServer(session);
    }

    // 请求服务器信息
    static C_GET_SERVER_LIST(session: Session) {
        if (this.serverList !== GlobalVar.serverMgr.serverList) {
            this.serverInfoBuffer = ProtoBufEncoder.encode(new ServerPto.S_GET_SERVER_LIST({ list: GlobalVar.serverMgr.serverList }));
        }
        session.sendBuffer(this.serverInfoBuffer);
    }
}
