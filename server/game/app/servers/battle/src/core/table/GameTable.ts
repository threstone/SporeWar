import { MatchTypeEnum } from '../../../../../Enum';

export class GameTable {
    tableId: number;

    matchType: MatchTypeEnum;

    userId1: string;

    logicNode1: string;

    userId2: string;

    logicNode2: string;

    constructor(tableId: number, matchType: MatchTypeEnum, userId1: string, logicNode1: string, userId2: string, logicNode2: string) {
        this.tableId = tableId;
        this.matchType = matchType;
        this.userId1 = userId1;
        this.logicNode1 = logicNode1;
        this.userId2 = userId2;
        this.logicNode2 = logicNode2;
    }
}
