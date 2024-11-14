import { SporeCfg } from "../../../../config/SporeCfg";
import { BattleModel } from "../BattleModel";
import { Building } from "./Building";
import { Entity } from "./Entity";

export class Spore extends Entity {
    private _speed: number;
    from: Building
    targetBuilding: Building;

    cfg: SporeCfg;

    private _sourcePosition: cc.Vec2;
    private _offsetPosition: cc.Vec2;

    constructor(from: Building, target: Building, indexOfColumn: number, columnCount: number, cfg: SporeCfg) {
        super(from.uid, BattleModel.ins().simulator.entityId, from.position.x, from.position.y);
        this.cfg = cfg;
        this.from = from;
        this.targetBuilding = target;
        this._speed = this.cfg.speed;

        this._sourcePosition = cc.v2(from.position.x, from.position.y);
        const subPos = target.position.sub(from.position);
        const anger = (360 * Math.atan2(subPos.y, subPos.x) / (2 * Math.PI)) - 90;

        // y = i + 0.5 - n / 2
        // 以x轴方向为基准,将所有元素平放于y轴上,y轴的位置即斜边长
        // 再根据角度计算新的坐标
        const hypotenuseLen = (indexOfColumn + 0.5 - columnCount / 2) * cfg.width;
        // 已知斜边长和角度,求x,y
        const x = Math.cos(anger * Math.PI / 180) * hypotenuseLen;
        const y = Math.sin(anger * Math.PI / 180) * hypotenuseLen;
        this._offsetPosition = cc.v2(x, y);
    }

    public update(dt: number): void {
        if (cc.Vec2.squaredDistance(this.targetBuilding.position, this.position) < 16) {
            this.onEnterBuilding();
            return;
        }

        this.closeBuilding(dt);
    }


    setTarget(targetBuilding: Building) {
        this.targetBuilding = targetBuilding;
    }

    protected onEnterBuilding() {
        this.targetBuilding.onSporeEnter(this);
        this.isDestroy = true;
    }

    protected closeBuilding(dt: number) {
        // 靠近目标
        const distance = this._speed * dt;
        const dir = this.targetBuilding.position.sub(this._sourcePosition);
        this._sourcePosition.addSelf(dir.mul(distance / dir.len()));

        const minDistance = Math.min(this._sourcePosition.sub(this.from.position).len(), this._sourcePosition.sub(this.targetBuilding.position).len());
        const offsetScaler = Math.min(1, minDistance / 30);
        this.position.set(this._sourcePosition.add(this._offsetPosition.mul(offsetScaler)));
    }
}