import { ItemPto } from '../../../servers/logic/src/CommonProto';
import { TConfig } from '../TConfig';

export class Items extends TConfig<ItemsDefine> {
    private _mergeItemMap = new Map<number, ItemPto.IItem>();

    constructor(configs: ItemsDefine[]) {
        super();
        this.initList(configs);
    }

    /**
     * 将一维数组转化为道具数组
     * [道具id,数量,道具id,数量…]
     * @argument isInversion 是否取反,用于消耗道具时
    */
    getItemsBy1DArray(array: number[], isInversion = false) {
        const items: ItemPto.IItem[] = [];
        for (let index = 0; index < array?.length; index += 2) {
            items.push({ itemId: array[index], count: isInversion ? -array[index + 1] : array[index + 1] });
        }
        return items;
    }

    /**
     * 将二维数组转化为道具数组
     * [[道具id,数量],[道具id,数量],[],[]……]
     * @argument isInversion 是否取反,用于消耗道具时
    */
    getItemsBy2DArray(array: number[][], isInversion = false) {
        const items: ItemPto.IItem[] = [];
        for (let index = 0; index < array?.length; index++) {
            const tempArray = array[index];
            items.push({ itemId: tempArray[0], count: isInversion ? -tempArray[1] : tempArray[1] });
        }
        return items;
    }

    /** 将同类item合并成在一起 */
    mergeItems(items: ItemPto.IItem[]) {
        this._mergeItemMap.clear();
        items.forEach((item) => {
            let saveItem = this._mergeItemMap.get(item.itemId);
            if (!saveItem) {
                saveItem = { itemId: item.itemId, count: 0 };
                this._mergeItemMap.set(saveItem.itemId, saveItem);
            }
            saveItem.count += item.count;
        });

        // 合并同类道具返回
        const result: ItemPto.IItem[] = [];
        this._mergeItemMap.forEach((item) => {
            result.push(item);
        });
        return result;
    }

    /**
     * 适用于通过权重获取道具
     * [[道具id1,数量1,权重1],[道具id2,数量2,权重2],[......]]
     */
    getItemsByWeightArray(array: number[][], times: number): ItemPto.IItem[] {
        const items: ItemPto.IItem[] = [];

        let sumWeight = 0;
        array.forEach((arr) => {
            sumWeight += arr[2];
        });

        for (let x = 0; x < times; x++) { // sum 100 => rand 0~99.999
            let rand = Math.random() * sumWeight;
            for (let index = 0; index < array.length; index++) {
                const arr = array[index];
                const weight = arr[2];
                if (rand < arr[2]) {
                    items.push({ itemId: arr[0], count: arr[1] });
                    break;
                }
                rand -= weight;
            }
        }
        return items;
    }

    /** 道具乘法 */
    times(items: ItemPto.IItem[], times: number) {
        const result: ItemPto.IItem[] = [];
        items.forEach((item) => {
            result.push({ itemId: item.itemId, count: item.count * times });
        });
        return result;
    }

    getItems1and102(tempItem: ItemPto.IItem): ItemPto.IItem[] {
        const config = this.get(tempItem.itemId);
        if (!config || config.type !== 1 || config.subType !== 102) {
            logger.error('getItems_1_102 错误的道具类型', tempItem);
            return [];
        }

        return this.getItemsByWeightArray(config.json, tempItem.count);
    }
}
