import { MatchPto } from '../../../../core/proto/CommonProto';
import { GlobalVar } from '../GlobalVar';

export class MatchRemote {
    matchSuccess(battleToken: string, address: string, userId: string, serverId: number, expireTime: number): void {
        const server = GlobalVar.serverMgr.getServerEntity(serverId);
        const session = server.getPlayerByUserId(userId);
        session.sendMessage(new MatchPto.S_MATCH_SUCCESS({
            battleToken,
            address,
            expireTime,
        }));
    }
}
