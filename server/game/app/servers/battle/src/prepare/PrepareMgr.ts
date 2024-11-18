import { PrepareTable } from './PrepareTable';

export class PrepareMgr {
    private static _ins: PrepareMgr;

    public static ins() {
        if (this._ins == null) {
            this._ins = new PrepareMgr();
        }
        return this._ins;
    }

    private _tableMap = new Map<string, PrepareTable>();

    constructor() {
        setInterval(this.delExpireTable.bind(this), 1000);
    }

    private delExpireTable() {
        const now = Date.now();
        this._tableMap.forEach((table, token, map) => {
            if (now > table.expireTime) {
                table.onExpire();
                map.delete(token);
            }
        });
    }

    createPrepareTable(matchType: number, uuid1: string, logicNode1: string, uuid2: string, logicNode2: string): void {
        const table = new PrepareTable(matchType, uuid1, logicNode1, uuid2, logicNode2);
        this._tableMap.set(table.battleToken, table);
    }
}
