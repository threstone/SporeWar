import * as WS from 'ws';
import { WebSocketSession } from '../../../core/net/WebSocketSesstion';
import { ProtoBufEncoder } from '../../../core/proto/ProtoBufEncoder';
import { BattlePto } from '../../../core/proto/CommonProto';
import { PrepareMgr } from './prepare/PrepareMgr';
import { PrepareTable } from './prepare/PrepareTable';
import { BattleTable } from './battle/BattleTable';

export class BattleSession extends WebSocketSession {
    userId: string;

    private _prepareTable: PrepareTable;

    private _battleTable: BattleTable;

    get battleTable() { return this._battleTable; }

    async onClientMessage(message: WS.Data) {
        try {
            if (!Buffer.isBuffer(message)) {
                return;
            }
            const buffer = message as Buffer;
            if (buffer.length < 8) {
                return;
            }
            const msg = ProtoBufEncoder.decode(buffer, 0);
            await ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd)(this, msg);
        } catch (error) {
            logger.error('处理消息失败', error);
        }
    }

    onRegiest(msg: BattlePto.C_BATTLE_REGIEST) {
        logger.debug(msg.battleToken);
        const table = PrepareMgr.ins().getTable(msg.battleToken);
        if (!table) {
            this.sendMessage(new BattlePto.S_BATTLE_EXPIRE());
            this.close();
            return;
        }
        this._prepareTable = table;
        this.userId = msg.userId;
        table.onPlayerConnect(this);
    }

    onClose(): void {
        this._prepareTable?.onPlayerDisConnect(this);
    }

    startBattle(table: BattleTable) {
        this._prepareTable = null;
        this._battleTable = table;
    }
}
