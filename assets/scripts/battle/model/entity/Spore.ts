import { SporeCfg } from "../../../config/SporeCfg";
import { BattleModel } from "../BattleModel";
import { Base } from "./Base";
import { Entity } from "./Entity";

export class Spore extends Entity {

    private _speed: number;
    from: Base
    targetBase: Base;

    cfg: SporeCfg;
    indexOfColumn: number;
    columnCount: number;
    anger: number;

    constructor(from: Base, target: Base, indexOfColumn: number, columnCount: number, cfg: SporeCfg) {
        super(from.uid, BattleModel.ins().entityId, from.position.x, from.position.y);
        this.cfg = cfg;
        this.from = from;
        this.targetBase = target;
        this._speed = this.cfg.speed;
        this.indexOfColumn = indexOfColumn;
        this.columnCount = columnCount;
        const subPos = target.position.sub(from.position);
        this.anger = (360 * Math.atan2(subPos.y, subPos.x) / (2 * Math.PI));
    }

    public update(dt: number): void {
        if (cc.Vec2.squaredDistance(this.targetBase.position, this.position) < 16) {
            this.onEnterBase();
            return;
        }

        this.closeBase(dt);
    }


    setTarget(targetBase: Base) {
        this.targetBase = targetBase;
    }

    protected onEnterBase() {
        this.targetBase.onSporeEnter(this);
        this.isDestroy = true;
    }

    protected closeBase(dt: number) {
        // 靠近目标
        const distance = this._speed * dt;
        const dir = this.targetBase.position.sub(this.position);
        this.position.addSelf(dir.mul(distance / dir.len()));
    }
}