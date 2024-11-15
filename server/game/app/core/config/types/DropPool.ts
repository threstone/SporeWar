/* eslint-disable no-use-before-define */
import { ItemPto } from '../../../servers/logic/src/CommonProto';
import { Player } from '../../../servers/logic/src/core/player/Player';
import { Cfg } from '../Cfg';
import { TConfig } from '../TConfig';

export class DropPool extends TConfig<DropPoolDefine> {
    constructor(configs: DropPoolDefine[]) {
        super();
        this.initList(configs);
    }

    /** 根据掉落库id获取道具 */
    getItems(poolId: number, player: Player): ItemPto.IItem[] {
        const poolConfig = this.get(poolId);
        // 获取抽取次数
        const times = this.getDropTimes(poolConfig);
        if (times === 0) {
            return [];
        }
        return poolConfig.drawType === 0 ? this.getItemsByReturn(poolConfig, player, times) : this.getItemsNoReturn(poolConfig, player, times);
    }

    /** 根据条件获取DropItems */
    private getDropItemsByCondition(dropItems: IDropItem[], player: Player): IDropItem[] {
        const result: IDropItem[] = [];
        dropItems.forEach((item) => {
            // 关卡条件判断 关卡数 (stageId)：需要通过XX关卡后再将该条目置入随机库中
            if (item.stageId && player.playerInfo.stageId < item.stageId) {
                return;
            }
            result.push(item);
        });
        return result;
    }

    /** 放回抽的方式 */
    private getItemsByReturn(poolConfig: DropPoolDefine, player: Player, times: number): ItemPto.IItem[] {
        const dropItems = this.getDropItemsByCondition(poolConfig.dropItems, player);
        // 没有符合条件的抽取道具
        if (dropItems.length === 0) {
            return [];
        }

        let sumWeight = 0;
        for (let index = 0; index < dropItems.length; index++) {
            const dropItem = dropItems[index];
            sumWeight += dropItem.weight;
        }

        const result: ItemPto.IItem[] = [];
        for (let t = 0; t < times; t++) {
            let rand = Math.random() * sumWeight;
            for (let index = 0; index < dropItems.length; index++) {
                const dropItem = dropItems[index];
                if (rand < dropItem.weight) {
                    const item = this.getItemByDropItem(dropItem);
                    result.push(item);
                    break;
                }
                rand -= dropItem.weight;
            }
        }

        return Cfg.Items.mergeItems(result);
    }

    /** 不放回抽的方式 */
    private getItemsNoReturn(poolConfig: DropPoolDefine, player: Player, times: number): ItemPto.IItem[] {
        const dropItems = this.getDropItemsByCondition(poolConfig.dropItems, player);
        // 没有符合条件的抽取道具
        if (dropItems.length === 0) {
            return [];
        }
        // 总权重
        let sumWeight = 0;
        for (let index = 0; index < dropItems.length; index++) {
            const dropItem = dropItems[index];
            sumWeight += dropItem.weight;
        }

        const result: ItemPto.IItem[] = [];

        let curSumWeight = sumWeight;
        let curDropItems = [...dropItems];
        for (let t = 0; t < times; t++) {
            let rand = Math.random() * curSumWeight;
            for (let index = 0; index < curDropItems.length; index++) {
                const dropItem = curDropItems[index];
                if (rand < dropItem.weight) {
                    const item = this.getItemByDropItem(dropItem);
                    result.push(item);
                    // 取出道具
                    curSumWeight -= dropItem.weight;
                    curDropItems.splice(index, 1);
                    if (curDropItems.length === 0 && poolConfig.resetType === 0) {
                        curSumWeight = sumWeight;
                        curDropItems = [...dropItems];
                    }
                    break;
                }
                rand -= dropItem.weight;
            }
        }

        return Cfg.Items.mergeItems(result);
    }

    /** 获取抽取的道具 */
    private getItemByDropItem(dropItem: IDropItem): ItemPto.IItem {
        const item: ItemPto.IItem = { itemId: dropItem.id, count: 0 };
        if (dropItem.count) {
            item.count = dropItem.count;
        } else if (dropItem.min != null && dropItem.max != null) {
            item.count = Math.floor(Math.random() * (dropItem.max + 1 - dropItem.min)) + dropItem.min;
        }
        return item;
    }

    /** 获取抽取次数 */
    private getDropTimes(poolConfig: DropPoolDefine) {
        if (!poolConfig) {
            return 0;
        }
        const timeCnt = poolConfig.timeCnt as TimeCnt[];
        if (timeCnt.length === 1) {
            return timeCnt[0].c;
        }

        let sumWeight = 0;
        timeCnt.forEach((item) => {
            sumWeight += item.w;
        });

        let rand = Math.random() * sumWeight;
        for (let index = 0; index < timeCnt.length; index++) {
            const item = timeCnt[index];
            if (rand < item.w) {
                return item.c;
            }
            rand -= item.w;
        }
        return 0;
    }
}

interface IDropItem {
    id?: number;
    count?: number;
    weight?: number;
    min?: number;
    max?: number;
    stageId?: number;
    level?: number;
}

interface TimeCnt {
    c?: number;
    w?: number;
}
