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
            if (!table.isDestroy && now > table.expireTime) {
                table.onExpire();
            }

            if (table.isDestroy) {
                map.delete(token);
            }
        });
    }

    createPrepareTable(
        matchType: number,
        userId1: string, logicNode1: string, serverId1: number,
        userId2: string, logicNode2: string, serverId2: number,
    ): void {
        const table = new PrepareTable(
            matchType,
            userId1, logicNode1, serverId1,
            userId2, logicNode2, serverId2,
        );
        this._tableMap.set(table.battleToken, table);
    }

    getTable(token: string) {
        return this._tableMap.get(token);
    }
}
