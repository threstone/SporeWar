import { MatchTypeEnum } from '../../../../Enum';
import { PrepareMgr } from '../prepare/PrepareMgr';

export class BattleRemote {
    createTable(matchType: MatchTypeEnum, uuid1: string, logicNode1: string, uuid2: string, logicNode2: string): void {
        PrepareMgr.ins().createPrepareTable(matchType, uuid1, logicNode1, uuid2, logicNode2);
    }
}
