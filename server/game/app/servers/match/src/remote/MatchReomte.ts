import { MatchTypeEnum } from '../../../../Enum';
import { MatchMgr } from '../MatchMgr';

export class MatchReomte {
    startMatch(matchType: MatchTypeEnum, logicNode: string, uuid: string, rank?: number): boolean {
        return MatchMgr.getMgr(matchType).startMatch(logicNode, uuid, rank);
    }

    stopMatch(matchType: MatchTypeEnum, uuid: string): boolean {
        return MatchMgr.getMgr(matchType).stopMatch(uuid);
    }
}
