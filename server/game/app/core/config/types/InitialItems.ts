import { ItemPto } from '../../../servers/logic/src/CommonProto';
import { TConfig } from '../TConfig';

export class InitialItems extends TConfig<InitialItemsDefine> {
    initialItems: ItemPto.IItem[];

    constructor(configs: InitialItemsDefine[]) {
        super();
        this.initList(configs);
        this.initialItems = [];
        for (let index = 0; index < configs[0].newUserItem.length; index++) {
            const info = configs[0].newUserItem[index];
            this.initialItems.push({ itemId: info[0], count: info[1] });
        }
    }
}
