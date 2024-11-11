import { BuildingCfg } from "../../../../config/BuildingCfg";
import { Cfg } from "../../../../config/Cfg";
import { Spore } from "./Spore";
import { Entity } from "./Entity";
import { DispatchTask } from "../DispatchTask";

export class Building extends Entity {

    createDt: number = 0;
    /** 创建速度 */
    createSpeed: number;
    /** 最大容量 */
    maxSporeCount: number;

    /** 当前数量,单一孢子只需要记录数量就行 */
    sporeCount: number;

    baseConfig: BuildingCfg;

    dispatchTasks: DispatchTask[] = [];

    constructor(uid: string, id: number, data: number[]) {
        super(uid, id, data[0], data[1]);
        const baseId = data[2];
        this.baseConfig = Cfg.Building.get(baseId);

        this.createSpeed = this.baseConfig.createSpeed / 10000;
        this.maxSporeCount = this.baseConfig.maxCount;
        this.sporeCount = this.baseConfig.startCount;
    }

    update(dt: number) {
        this.createSpore(dt);
        this.updateDispatchTasks(dt)
    }

    private updateDispatchTasks(dt: number) {
        this.dispatchTasks.forEach((task) => { task.update(dt); });
        for (let index = this.dispatchTasks.length - 1; index >= 0; index--) {
            const task = this.dispatchTasks[index];
            task.update(dt);
        }
    }

    private createSpore(dt: number) {
        if (this.sporeCount >= this.maxSporeCount) {
            return;
        }

        this.createDt += dt;
        if (this.createDt < this.createSpeed) {
            return;
        }

        this.sporeCount++;
        this.createDt -= this.createSpeed;
    }

    onSporeEnter(spore: Spore) {
        if (spore.uid === this.uid) {
            this.sporeCount += 1;
            return;
        }

        this.sporeCount -= 1;
        if (this.sporeCount < 0) {
            this.uid = spore.uid;
            this.sporeCount = 0;
            this.createDt = 0;
        }
    }

    dispatchSpore(dispatchRate: number, targetBase: Building) {
        if (this.sporeCount === 0) {
            return;
        }
        const task = this.getTaskByTarget(targetBase);
        if (!task) {
            const count = Math.floor(this.sporeCount * dispatchRate);
            this.dispatchTasks.push(new DispatchTask(this, targetBase, count));
        } else {
            task.addDispatchCount(Math.floor((this.sporeCount - task.leastDispatchNum) * dispatchRate));
        }
    }

    private getTaskByTarget(targetBase: Building) {
        for (let index = 0; index < this.dispatchTasks.length; index++) {
            const task = this.dispatchTasks[index];
            if (task.targetBase === targetBase) {
                return task;
            }
        }
    }

    /** 获取为调度的孢子数量 */
    getUndispathchSporeCount() {
        let sum = this.sporeCount;
        for (let index = 0; index < this.dispatchTasks.length; index++) {
            const task = this.dispatchTasks[index];
            sum -= task.leastDispatchNum;
        }
        return sum;
    }
}