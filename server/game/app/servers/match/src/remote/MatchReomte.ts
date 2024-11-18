import { MatchTypeEnum } from '../../../../Enum';
import { MatchMgr } from '../MatchMgr';

export class MatchReomte {
    startMatch(matchType: MatchTypeEnum, logicNode: string, userId: string, serverId: number, rank?: number): boolean {
        return MatchMgr.getMgr(matchType).startMatch(logicNode, userId, serverId, rank);
    }

    stopMatch(matchType: MatchTypeEnum, userId: string): boolean {
        return MatchMgr.getMgr(matchType).stopMatch(userId);
    }
}
