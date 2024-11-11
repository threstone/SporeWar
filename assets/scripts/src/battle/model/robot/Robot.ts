import { BattleModel } from "../BattleModel";
import { Building } from "../entity/Building";

export class Robot {
    uid: string = 'robot';

    private _logicIndex = 0;
    private _oprationInverval: number;
    constructor(oprationInverval: number = 10) {
        this._oprationInverval = oprationInverval;
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
        this._logicIndex = this._oprationInverval * BattleModel.ins().random.randomDouble(0.5, 1.5);
    }

    private robotLogic() {
        const bases = BattleModel.ins().getBaseListByUid(this.uid);
        const midPos = cc.v2(0, 0);
        bases.forEach((base) => { midPos.addSelf(base.position) });
        midPos.divSelf(bases.length);
        const sum = this.getCanDispatchSporeNum(bases);
        const enemyBases = BattleModel.ins().getBaseListExcludeUid(this.uid)
            .filter(base => sum > base.sporeCount)
            .sort((a, b) => { return a.sporeCount - b.sporeCount })
            .sort((a, b) => { return cc.Vec2.distance(midPos, a.position) - cc.Vec2.distance(midPos, b.position) });
        if (enemyBases.length > 0) {
            const targetBase = enemyBases[0];
            const dispatchRate = Math.max(targetBase.sporeCount, 1) / sum * 1.2;
            bases.forEach((base) => {
                base.dispatchSpore(dispatchRate, targetBase);
            });
        }
    }

    private getCanDispatchSporeNum(bases: Building[] = BattleModel.ins().getBaseListByUid(this.uid)) {
        let sum = 0;
        for (const base of bases) {
            sum += base.getUndispathchSporeCount();
        }
        return sum;
    }
}