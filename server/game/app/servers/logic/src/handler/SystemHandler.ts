import { SystemPto } from '../CommonProto';
import { Session } from '../core/session/session';

export class SystemHandler {
    // 心跳
    static C_HEART_BEAT(session: Session) {
        session.sendMessage(new SystemPto.S_HEART_BEAT({ serverTime: Date.now() }));
    }
}
