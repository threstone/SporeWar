import { MatchPto } from '../CommonProto';
import { GlobalVar } from '../GlobalVar';

export class MatchRemote {
    matchSuccess(battleToken: string, address: string, uuid: string, expireTime: number): void {
        const session = GlobalVar.SessionMgr.getSessionByUuid(uuid);
        session.sendMessage(new MatchPto.S_MATCH_SUCCESS({
            battleToken,
            address,
            expireTime,
        }));
    }
}
