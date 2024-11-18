import { IntervalTimer } from '../../../../core/utils/IntervalTimer';
import { BattleSession } from '../BattleSession';
import { BattleTable } from './BattleTable';

export class BattleTableMgr {
    private static _ins: BattleTableMgr;

    public static ins() {
        if (this._ins == null) {
            this._ins = new BattleTableMgr();
        }
        return this._ins;
    }

    private _tableId: number = 100000;

    private _tableMap = new Map<number, BattleTable>();

    private _intervalTimer: IntervalTimer;

    constructor() {
        this._intervalTimer = new IntervalTimer(1000 / BattleTable.FrameRate, this.logicRun.bind(this));
        this.startLogic();
    }

    public startLogic() {
        this._intervalTimer.startTimer();
    }

    public stopLogic() {
        this._intervalTimer.stopTimer();
    }

    startBattle(sessions: BattleSession[]) {
        const session1 = Math.random() < 0.5 ? sessions.pop() : sessions.shift();
        const session2 = Math.random() < 0.5 ? sessions.pop() : sessions.shift();
        const rand = Math.floor(Math.random() * 999999);
        // const rand = 456692;
        const tableId = this.newTableId();
        const table = new BattleTable(tableId, rand, session1, session2);
        table.startGame();
        logger.info(`table${tableId}随机数设置为:${rand}`);
        this._tableMap.set(tableId, table);
    }

    private destroyTable(table: BattleTable) {
        this._tableMap.delete(table.tableId);
    }

    private logicRun() {
        this._tableMap.forEach((table) => {
            if (!table.isDestroy) {
                try {
                    table.onRun();
                } catch (err) {
                    table.destroy(true);
                    const { message } = err;
                    const { stack } = err;
                    logger.error(`桌局执行发生错误:\nmessage:${message}\nstack:${stack}`);
                }
            } else {
                this.destroyTable(table);
                logger.debug('清理table');
            }
        });
    }

    // 创建一个新的桌子id
    private newTableId(): number {
        this._tableId += 1;
        return this._tableId;
    }
}
