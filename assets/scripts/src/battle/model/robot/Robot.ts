import { BattleModel } from "../BattleModel";
import { Building } from "../entity/Building";
import { Simulator } from "../simulator/Simulator";

export class Robot {
    static uid: string = 'robot';

    get uid() { return Robot.uid; }
    
    private _logicIndex = 0;
    private _oprationInverval: number;
    constructor(oprationInvervalMs: number = 200) {
        this._oprationInverval = oprationInvervalMs / 1000 * Simulator.frameRate;
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
        const buildingList = simulator.getBuildingListByUid(this.uid);
        const midPos = cc.v2(0, 0);
        buildingList.forEach((building) => { midPos.addSelf(building.position) });
        midPos.divSelf(buildingList.length);
        const sum = this.getCanDispatchSporeNum(buildingList);
        const enemyBuildingList = simulator.getBuildingListExcludeUid(this.uid)
            .filter(building => sum > building.sporeCount)
            .sort((a, b) => { return a.sporeCount - b.sporeCount })
            .sort((a, b) => { return cc.Vec2.distance(midPos, a.position) - cc.Vec2.distance(midPos, b.position) });
        if (enemyBuildingList.length > 0) {
            const targetBuilding = enemyBuildingList[0];
            const dispatchRate = Math.max(targetBuilding.sporeCount, 1) / sum * 1.2;
            buildingList.forEach((builing) => {
                builing.dispatchSpore(dispatchRate, targetBuilding);
            });
        }
    }

    private getCanDispatchSporeNum(BuildingList: Building[] = BattleModel.ins().simulator.getBuildingListByUid(this.uid)) {
        let sum = 0;
        for (const building of BuildingList) {
            sum += building.getUndispathchSporeCount();
        }
        return sum;
    }
}