import { GlobalVar } from '../GlobalVar';

export class PlayerRemote {
    onPlayerSocketClose(gateNodeId: string, sessionId: number): void {
        const session = GlobalVar.SessionMgr.getSession(gateNodeId, sessionId);
        if (session) {
            logger.debug(`[${session.uuid}] 玩家socket断开 userId:${session.player?.userId} `
                + `gateNodeId:${gateNodeId} sessionId:${sessionId} ip:${session.ip}`);
            GlobalVar.SessionMgr.deleteSession(session);
            session.onPlayerOffline();
        }
    }
}
