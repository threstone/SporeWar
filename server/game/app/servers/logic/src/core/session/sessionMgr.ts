import { ServerPto } from '../../CommonProto';
import { GlobalVar } from '../../GlobalVar';
import { Session } from './session';

export class SessionMgr {
    private _sessionMap: Map<string, Session> = new Map();

    private _uuidMap: Map<string, Session> = new Map();

    constructor() {
        this.initEvent();
    }

    private async initEvent() {
        const subClient = await GlobalVar.redisMgr.getClientForSubscribe();
        subClient.subscribe(`${startupParam.env}_kick`, this.kickPlayer.bind(this));
    }

    private kickPlayer(kickJsonStr: string) {
        const kickInfo = JSON.parse(kickJsonStr);
        if (kickInfo.userIdOrIp.indexOf('.') !== -1) {
            const ip = kickInfo.userIdOrIp;
            this._sessionMap.forEach((session) => {
                if (session.ip === ip) {
                    session.kick(kickInfo.reason);
                }
            });
        } else {
            const userId = kickInfo.userIdOrIp;
            this._sessionMap.forEach((session) => {
                if (session.player?.userId === userId) {
                    session.kick(kickInfo.reason);
                }
            });
        }
    }

    getSession(gateNodeId: string, sessionId: number) {
        return this.getSessionByKey(this.getSessionKey(gateNodeId, sessionId));
    }

    getSessionByUuid(uuid: string) {
        return this._uuidMap.get(uuid);
    }

    deleteSession(session: Session) {
        const key = this.getSessionKey(session.gateNodeId, session.sessionId);
        this._sessionMap.delete(key);
        this._uuidMap.delete(session.uuid);
    }

    private getSessionByKey(key: string) {
        return this._sessionMap.get(key);
    }

    getSessionKey(gateNodeId: string, sessionId: number) {
        return `${gateNodeId}-${sessionId}`;
    }

    async initSession(gateNodeId: string, sessionId: number, msg: ServerPto.C_CONNECT) {
        const session = await new Session(gateNodeId, sessionId).initByToken(msg.token);
        if (!session) {
            return null;
        }
        this._sessionMap.set(this.getSessionKey(gateNodeId, sessionId), session);
        this._uuidMap.set(session.uuid, session);
        return session;
    }
}
