import { MatchTypeEnum } from '../../../../Enum';
import { PrepareMgr } from '../prepare/PrepareMgr';

export class BattleRemote {
    createTable(
        matchType: MatchTypeEnum,
        userId1: string, logicNode1: string, serverId1: number,
        userId2: string, logicNode2: string, serverId2: number,
    ): void {
        PrepareMgr.ins().createPrepareTable(
            matchType,
            userId1, logicNode1, serverId1,
            userId2, logicNode2, serverId2,
        );
    }
}
