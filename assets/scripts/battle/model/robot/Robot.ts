import { UserVo } from "../../../vo/UserVo";
import { BattleModel } from "../BattleModel";
import { Base } from "../entity/Base";

export class Robot {
    uid: string = 'robot';

    update() {
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
            const dispatchRate = targetBase.sporeCount / sum * 1.2;
            bases.forEach((base) => {
                base.dispatchSpore(dispatchRate, targetBase);
            });
            console.log('robot dispatch', dispatchRate);
        }
    }

    private getCanDispatchSporeNum(bases: Base[] = BattleModel.ins().getBaseListByUid(this.uid)) {
        let sum = 0;
        for (const base of bases) {
            sum += base.getUndispathchSporeCount();
        }
        return sum;
    }
}