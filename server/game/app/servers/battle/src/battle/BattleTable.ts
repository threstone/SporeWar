import { BattlePto } from '../../../../core/proto/CommonProto';
import { ProtoBufEncoder } from '../../../../core/proto/ProtoBufEncoder';
import { Random } from '../../../../core/utils/Random';
import { BattleSession } from '../BattleSession';

export class BattleTable {
    static FrameRate = 60;

    tableId: number;

    protected _isDestroy: boolean;

    get isDestroy() { return this._isDestroy; }

    random: Random;

    protected sessions: BattleSession[];

    private _dispatchInfos: BattlePto.IDispatchInfo[] = [];

    constructor(tableId: number, randomSeed: number, session1: BattleSession, session2: BattleSession) {
        this.tableId = tableId;
        this.random = new Random(randomSeed);
        this.sessions = [session1, session2];
        session1.startBattle(this);
        session2.startBattle(this);
    }

    onRun() {
        this.broadcast(new BattlePto.S_BATTLE_LOGIC_FRAME({ dispatchInfos: this._dispatchInfos }));
        if (this._dispatchInfos.length !== 0) {
            this._dispatchInfos = [];
        }
    }

    startGame() {
        this.broadcast(new BattlePto.S_BATTLE_START({
            mapId: 1,
            userId1: this.sessions[0].userId,
            userId2: this.sessions[1].userId,
            seed: this.random.seed,
            frameRate: BattleTable.FrameRate,
        }));
    }

    broadcast(message: IGameMessage) {
        this.broadcastBuffer(ProtoBufEncoder.encode(message));
    }

    broadcastBuffer(buffer: Buffer) {
        this.sessions.forEach((s) => {
            s.sendBuffer(buffer);
        });
    }

    destroy(isError: boolean) {
        if (isError) {
            const msg = new BattlePto.S_BATTLE_ERROR();
            this.broadcast(msg);
            return;
        }

        this.sessions.forEach((s) => {
            s.close();
        });
        this._isDestroy = true;
    }

    addDispatchInfo(dispatchInfo: BattlePto.IDispatchInfo) {
        this._dispatchInfos.push(dispatchInfo);
    }
}
