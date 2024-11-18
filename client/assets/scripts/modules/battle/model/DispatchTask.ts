import { Cfg } from "../../../config/Cfg";
import { BattleModel } from "./BattleModel";
import { Building } from "./simulator/entity/Building";
import { Spore } from "./simulator/entity/Spore";



export class DispatchTask {

    from: Building;
    targetBuilding: Building;
    private _maxDispatchCount: number;
    private _curDispatchCount: number = 0;
    private _interval: number = 0;

    get leastDispatchNum() {
        return this._maxDispatchCount - this._curDispatchCount;
    }

    constructor(from: Building, targetBuilding: Building, maxDispatchCount: number) {
        this.from = from;
        this.targetBuilding = targetBuilding;
        this._maxDispatchCount = maxDispatchCount;
    }

    addDispatchCount(count: number) {
        this._maxDispatchCount += count;
    }

    update(dt: number) {
        if (this._interval <= 0) {
            this.dispatch();
            return;
        } else {
            this._interval -= dt;
        }
    }

    private dispatch() {
        const sporeConfig = Cfg.Spore.get(1);
        this._interval = sporeConfig.height / sporeConfig.speed * 1.5;

        // 本次派出数量
        const dispatchCount = Math.min(
            this._maxDispatchCount - this._curDispatchCount,
            sporeConfig.maxColumnCount,
            this.from.sporeCount
        );

        // 生成派出的孢子
        const simulator = BattleModel.ins().simulator;

        for (let index = 0; index < dispatchCount; index++) {
            const spore = new Spore(this.from, this.targetBuilding, index, dispatchCount, sporeConfig);
            simulator.entityMap.set(spore.id, spore);
        }


        this.from.sporeCount -= dispatchCount;
        this._curDispatchCount += dispatchCount;

        // 达到派遣数量预期或者基地没有孢子了
        if (this._curDispatchCount >= this._maxDispatchCount || this.from.sporeCount <= 0) {
            this.from.dispatchTasks.indexOf(this);
            this.from.dispatchTasks.splice(this.from.dispatchTasks.indexOf(this), 1);
        }
    }
}