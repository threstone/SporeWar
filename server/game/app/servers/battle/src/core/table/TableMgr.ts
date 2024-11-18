// import { GameTable } from './GameTable';

// export class TableMgr {
//     private static _ins: TableMgr;

//     public static ins() {
//         if (this._ins == null) {
//             this._ins = new TableMgr();
//         }
//         return this._ins;
//     }

//     private _tableId: number = 100000;

//     private _logicIndex = 0;

//     private _tables: GameTable[] = [];

//     private _logicTimerId: NodeJS.Timeout = null;

//     public startLogic() {
//         if (this._logicTimerId) {
//             this.stopLogic();
//         }
//         this._logicTimerId = setInterval(this.logicRun.bind(this), 5);
//     }

//     public stopLogic() {
//         if (this._logicTimerId) {
//             clearInterval(this._logicTimerId);
//         }
//     }

//     /** 创建桌子 */
//     public createTable() {
//         let index = this._tables.indexOf(null);
//         if (index === -1) {
//             index = this._tables.length;
//         }
//         const table = new GameTable(this.newTableId(), index);
//         const rand = Math.floor(Math.random() * 999999);
//         // const rand = 456692;
//         table.setRandSeed(rand);
//         logger.info(`table${table.tableId}随机数设置为:${rand}`);
//         this._tables[index] = table;
//         return table;
//     }

//     private destroyTable(table: GameTable) {
//         this._tables[table.talbeIndex] = null;
//     }

//     /**
//      * 基于增量标记的思路 让出资源
//      * 驱动桌子执行逻辑 每次执行指定数量桌子的逻辑就跳出 给其他io操作让出资源
//      * */
//     private logicRun() {
//         const now = Date.now();
//         const { length } = this._tables;
//         let count = 0;
//         let i = this._logicIndex;
//         for (; i < length; i++) {
//             const table = this._tables[i];
//             if (!table) {
//                 continue;
//             }
//             if (!table.isDestroy) {
//                 try {
//                     table.onRun(now);
//                 } catch (err) {
//                     table.destroy(true);
//                     const { message } = err;
//                     const { stack } = err;
//                     logger.error(`桌局执行发生错误:\nmessage:${message}\nstack:${stack}`);
//                 }
//             } else {
//                 this.destroyTable(table);
//                 logger.info('清理table');
//             }
//             count += 1;
//             if (count >= 30) {
//                 break;
//             }
//         }
//         this._logicIndex = i + 1;
//         if (this._logicIndex >= length) {
//             this._logicIndex = 0;
//         }
//     }

//     // 创建一个新的桌子id
//     private newTableId(): number {
//         this._tableId += 1;
//         return this._tableId;
//     }
// }
