import { BattleModel } from "../BattleModel";
import { Building } from "../simulator/entity/Building";
import { LocalSimulator } from "../simulator/LocalSimulator";

export class Robot {
    static userId: string = 'robot';

    get userId() { return Robot.userId; }

    private _logicIndex = 0;
    private _oprationInverval: number;
    constructor(simulator: LocalSimulator, oprationInvervalMs: number = 200) {
        this._oprationInverval = oprationInvervalMs / 1000 * simulator.frameRate;
    }

    update() {
        this._logicIndex--;
        if (this._logicIndex > 0) {
            return;
        }
        this.resetLogicIndex();
        this.robotLogic();
    }

    private resetLogicIndex() {
        this._logicIndex = this._oprationInverval * BattleModel.ins().simulator.random.randomDouble(0.5, 1.5);
    }

    private robotLogic() {
        const simulator = BattleModel.ins().simulator;
        const buildingList = simulator.getBuildingListByUserId(this.userId);
        const midPos = cc.v2(0, 0);
        buildingList.forEach((building) => { midPos.addSelf(building.position) });
        midPos.divSelf(buildingList.length);
        const sum = this.getCanDispatchSporeNum(buildingList);
        const enemyBuildingList = simulator.getBuildingListExcludeUserId(this.userId)
            .filter(building => sum > building.sporeCount)
            .sort((a, b) => { return a.sporeCount - b.sporeCount })
            .sort((a, b) => { return cc.Vec2.distance(midPos, a.position) - cc.Vec2.distance(midPos, b.position) });
        if (enemyBuildingList.length > 0) {
            const targetBuilding = enemyBuildingList[0];
            const dispatchRate = Math.max(targetBuilding.sporeCount, 1) / sum * 1.2 * 10000;
            buildingList.forEach((builing) => {
                builing.dispatchSpore(dispatchRate, targetBuilding);
            });
        }
    }

    private getCanDispatchSporeNum(BuildingList: Building[] = BattleModel.ins().simulator.getBuildingListByUserId(this.userId)) {
        let sum = 0;
        for (const building of BuildingList) {
            sum += building.getUndispathchSporeCount();
        }
        return sum;
    }
}