/* eslint-disable consistent-return */
import { ItemModel } from '../../../../../core/sequelize/model/game/ItemModel';
import { ItemPto } from '../../CommonProto';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';
import { DictionaryComponent } from './DictionaryComponent';
import { EnergyComponent } from './EnergyComponent';
import { DictEnum, EventEnum } from '../../../../../Enum';
import { Cfg } from '../../../../../core/config/Cfg';

/** 玩家道具组件 */
export class ItemComponent extends BaseComponent<ItemModel> {
    private _itemsMap = new Map<number, ItemModel>();

    private _expireItemMap = new Map<number, ItemModel>();

    private _ItemModel: typeof ItemModel;

    private _expireTimer: NodeJS.Timeout;

    protected async init(player: Player) {
        this._ItemModel = await player.getModel(ItemModel);
        const items = await this._ItemModel.findAll({ where: { userId: player.userId } });
        items.forEach((item) => {
            this._itemsMap.set(item.itemId, item);
            if (item.expireTime) {
                this._expireItemMap.set(item.itemId, item);
            }
        });
        this.checkExpireItems(false);
        this._expireTimer = setInterval(this.checkExpireItems.bind(this), 1000);
    }

    protected onPlayerInitEnd(): void {
        const dic = this.player.getComponent(DictionaryComponent);
        // 新玩家需要增加初始道具
        if (dic.getValue(DictEnum.IsItemInit) !== true) {
            this.updateItems(Cfg.InitialItems.initialItems);
            dic.setValue(DictEnum.IsItemInit, true);
            dic.saveModel();
        }
    }

    protected onDestroy() {
        clearInterval(this._expireTimer);
    }

    /** 检查过期道具 */
    private checkExpireItems(isNotify = true) {
        if (this._expireItemMap.size === 0) {
            return;
        }
        const now = Date.now();
        const updateItems: ItemPto.IItem[] = [];
        this._expireItemMap.forEach((item) => {
            if (item.expireTime === 0) {
                return null;
            }
            if (now > item.expireTime) {
                item.count = 0;
                item.expireTime = 0;
                if (isNotify) {
                    updateItems.push(item.toJSON());
                }
                this._expireItemMap.delete(item.itemId);
                // 派发道具过期事件
                this.player.emit(EventEnum.ItemExpire, item);
                item.save({ validate: false });
            }
        });
        if (isNotify) {
            this.player.sendMessage(new ItemPto.S_ITEMS_UPDATE({ items: updateItems }));
        }
    }

    getItem(itemId: number) {
        return this._itemsMap.get(itemId);
    }

    /** 获取道具数量 */
    getItemCount(itemId: number) {
        if (Cfg.Items.get(itemId).type === 13) {
            return this.player.getComponent(EnergyComponent).getEnergyCount(itemId);
        }
        return this._itemsMap.get(itemId)?.count || 0;
    }

    /** 检查是否有足够数量的道具 */
    hasEnoughItems(items: ItemPto.IItem[]) {
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            if (this.getItemCount(item.itemId) < Math.abs(item.count)) {
                return false;
            }
        }
        return true;
    }

    // eslint-disable-next-line no-unused-vars
    forEachItemMap(callbackfn: (value: ItemModel, itemId: number) => void, thisArg?: unknown) {
        this._itemsMap.forEach(callbackfn, thisArg);
    }

    /**
     * 更新道具
     * @returns 返回真正变更的道具
     */
    updateItems(items: ItemPto.IItem[]) {
        items = Cfg.Items.mergeItems(items);
        const realItemsChange: ItemPto.IItem[] = [];
        // 扣除道具时的数量检查、配置检查， 合并同类道具
        for (let index = 0; index < items.length; index++) {
            const tempItem = items[index];
            if (tempItem.count === 0) {
                continue;
            }
            const config = Cfg.Items.get(tempItem.itemId);
            if (!config) {
                throw new Error(`未知道具 itemId:${tempItem.itemId}`);
            }

            const hasCount = this.getItemCount(tempItem.itemId);
            if (tempItem.count < 0 && hasCount < Math.abs(tempItem.count)) {
                throw new Error(`道具不足 itemId:${tempItem.itemId}, changeCount:${tempItem.count}, hasCount:${hasCount}`);
            }
        }

        // 处理道具变更
        for (let index = 0; index < items.length; index++) {
            const tempItem = items[index];
            const config = Cfg.Items.get(tempItem.itemId);
            // 根据不同的类型处理道具
            this[`updateItem${config.type}`](tempItem, realItemsChange, config);
        }

        this.notifyItemsUpdate(realItemsChange);
        return realItemsChange;
    }

    /** 通知道具变动 */
    private notifyItemsUpdate(realItemsChange: ItemPto.IItem[]) {
        if (realItemsChange.length === 0) {
            return;
        }
        const message = new ItemPto.S_ITEMS_UPDATE();
        realItemsChange.forEach((item) => {
            const itemEntity = this._itemsMap.get(item.itemId);
            if (itemEntity) {
                message.items.push(this._itemsMap.get(item.itemId).toJSON());
                this.player.emit(EventEnum.ItemChange, itemEntity, item);
            }
        });
        this.player.sendMessage(message);
    }

    /** 普通道具变动 */
    private updateItem0(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[]) {
        let item = this._itemsMap.get(tempItem.itemId);
        if (!item) {
            item = new this._ItemModel({
                itemId: tempItem.itemId,
                count: tempItem.count,
                userId: this.player.userId,
                expireTime: tempItem.expireTime || 0, // 过期时间
            });
            item.isFirstSaving = true;
            this._itemsMap.set(item.itemId, item);
            item.save({ validate: false }).then(() => {
                item.isFirstSaving = false;
            });
        } else {
            const fields = ['count'];
            item.count += tempItem.count;
            if (tempItem.expireTime) {
                item.expireTime = tempItem.expireTime;
                fields.push('expireTime');
            }
            if (item.isFirstSaving) {
                item.save({ validate: false });
            } else {
                item.save({ fields, validate: false });
            }
        }

        if (tempItem.expireTime) {
            this._expireItemMap.set(item.itemId, item);
        }
        realItemsChange.push(tempItem);
    }

    /** 使用类道具变动(大多数使用类道具其实跟普通道具没有太大区别),主要处理自动使用类道具的逻辑 */
    private updateItem1(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[], config?: ItemsDefine) {
        switch (config.subType) {
            // 101=抽取所有（自动使用）
            case 101: {
                // 掉落库
                for (let x = 0; x < config.json.length; x++) {
                    const array = config.json[x];
                    for (let y = 0; y < array.length; y++) {
                        const poolId = array[y];
                        // 通过掉落库抽取道具
                        const items = Cfg.DropPool.getItems(poolId, this.player);
                        const updateResult = this.updateItems(items);
                        realItemsChange.push(...updateResult);
                    }
                }
                break;
            }
            // 102 = 道具随机（自动使用）
            case 102: {
                const items = Cfg.Items.getItems1and102(tempItem);
                const updateResult = this.updateItems(items);
                realItemsChange.push(...updateResult);
                break;
            }
            default:
                return this.updateItem0(tempItem, realItemsChange);
        }
    }

    /**  可恢复类道具变动 */
    private updateItem2(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[]) {
        const comp = this.player.getComponent(EnergyComponent);
        if (comp.updateEnergy(tempItem)) {
            realItemsChange.push(tempItem);
        }
    }

    /** 藏品 */
    private updateItem3(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[]) {
        this.updateItem0(tempItem, realItemsChange);
    }

    /** 战车技能 */
    private updateItem4(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[]) {
        this.updateItem0(tempItem, realItemsChange);
    }

    /** 使用道具 */
    useItems(msg: ItemPto.C_USE_ITEMS) {
        const itemEntity = this._itemsMap.get(msg.itemId);
        if (!itemEntity || itemEntity.count < msg.count) {
            return logger.error('useItem 道具不足', msg.itemId, msg.count);
        }

        const config = Cfg.Items.get(msg.itemId);
        if (config?.type !== 1) {
            return logger.error('useItem 非可使用道具', msg.itemId, msg.count);
        }

        try {
            // 根据不同的类型处理道具
            this[`useItems${config.subType}`](msg, config);
        } catch (error) {
            logger.error('使用道具出错', msg.itemId, msg.count, error);
        }
    }

    /**
     * 1 = 抽取所有
     * [[掉落ID,掉落ID,……]]
     */
    private useItems1(msg: ItemPto.C_USE_ITEMS, config: ItemsDefine) {
        // 消耗
        const items: ItemPto.IItem[] = [{ itemId: msg.itemId, count: -msg.count }];
        for (let index = 0; index < config.json.length; index++) {
            const array = config.json[index];
            for (let z = 0; z < array.length; z++) {
                const poolId = array[z];
                items.push(...Cfg.DropPool.getItems(poolId, this.player));
            }
        }
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }

    /**
     * 2 = 道具随机
     * [[道具id1,数量1,权重1],[道具id2,数量2,权重2],[......]]
     */
    private async useItems2(msg: ItemPto.C_USE_ITEMS, config: ItemsDefine) {
        const items = Cfg.Items.getItemsByWeightArray(config.json, msg.count);
        // 加入消耗
        items.push({ itemId: msg.itemId, count: -msg.count });
        // 道具变动
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }

    /**
     * 3 = 自选道具
     * [[道具ID,数量],[道具ID,数量]]
     */
    private async useItems3(msg: ItemPto.C_USE_ITEMS, config: ItemsDefine) {
        const array = config.json[msg.selectIndex];
        if (!array || array.length !== 2) {
            return this.player.sendErrorMessage('参数错误');
        }

        const items: ItemPto.IItem[] = [
            { itemId: array[0], count: array[1] },
            { itemId: msg.itemId, count: msg.count },
        ];

        // 道具变动
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }
}

// private _isHandle = false;

// private _itemsQueue: { items: ItemPto.IItem[], resolve: Function, reject: Function } [] = [];

// /** 更新道具 */
// updateItems(items: ItemPto.IItem[]): Promise<UpdateItemsResult> {
//     if (this.isInitEnd() === false) {
//         throw new Error('尝试在组件未初始化前更新道具');
//     }
//     return new Promise((resolve, reject) => {
//         this._itemsQueue.push({ items, resolve, reject });
//         if (this._isHandle === false) {
//             this.doUpdateItems();
//         }
//     });
// }

// // 考虑改为同步
// private async doUpdateItems() {
//     if (this._itemsQueue.length === 0) {
//         return;
//     }
//     this._isHandle = true;
//     const queueItem = this._itemsQueue.shift();
//     ItemComponent._mergeItemMap.clear();
//     try {
//         const result: UpdateItemsResult = { items: [] };
//         // 扣除道具时的数量检查、配置检查， 合并同类道具
//         for (let index = 0; index < queueItem.items.length; index++) {
//             const tempItem = queueItem.items[index];
//             const config = Cfg.Items.get(tempItem.itemId);
//             if (!config) {
//                 throw new Error(`未知道具 itemId:${tempItem.itemId}`);
//             }

//             const hasCount = this.getItemCount(tempItem.itemId);
//             if (tempItem.count < 0 && hasCount < Math.abs(tempItem.count)) {
//                 throw new Error(`道具不足 itemId:${tempItem.itemId}, changeCount:${tempItem.count}, hasCount:${hasCount}`);
//             }

//             let saveItem = ItemComponent._mergeItemMap.get(tempItem.itemId);
//             if (!saveItem) {
//                 saveItem = { itemId: tempItem.itemId, count: 0 };
//                 ItemComponent._mergeItemMap.set(saveItem.itemId, saveItem);
//             }
//             saveItem.count += tempItem.count;
//         }

//         const tasks = [];
//         // 处理道具变更
//         ItemComponent._mergeItemMap.forEach((tempItem) => {
//             if (tempItem.count === 0) {
//                 return;
//             }
//             const config = Cfg.Items.get(tempItem.itemId);
//             // 根据不同的类型处理道具
//             tasks.push(this[`updateItem${config.type}`](tempItem, result, config));
//         });
//         await Promise.all(tasks);
//         this.notifyItemsUpdate(result);
//         queueItem.resolve(result);
//     } catch (error) {
//         queueItem.reject(error);
//     } finally {
//         this._isHandle = false;
//         this.doUpdateItems();
//     }
// }
