import { ItemPto } from '../CommonProto';
import { EnergyComponent } from '../core/component/EnergyComponent';
import { ItemComponent } from '../core/component/ItemComponent';
import { Player } from '../core/player/Player';
import { Session } from '../core/session/session';

export class ItemHandler {
    // 道具信息请求
    static C_GET_ITEMS_INFO(session: Session, player: Player) {
        const comp = player.getComponent(ItemComponent);
        const items: ItemPto.IItem[] = [];
        comp.forEachItemMap((item) => {
            items.push(item.toJSON());
        });
        session.sendMessage(new ItemPto.S_GET_ITEMS_INFO({ items }));
    }

    // 获取体力相关道具信息
    static C_GET_ENERGY_INFO(session: Session, player: Player) {
        const comp = player.getComponent(EnergyComponent);
        const energyList: ItemPto.IEnergy[] = [];
        comp.forEachItemMap((energy) => {
            energyList.push(energy.toJSON());
        });
        session.sendMessage(new ItemPto.S_GET_ENERGY_INFO({ energyList }));
    }

    // 使用道具请求
    static C_USE_ITEMS(session: Session, player: Player, msg: ItemPto.C_USE_ITEMS) {
        const comp = player.getComponent(ItemComponent);
        comp.useItems(msg);
    }

    // 清除新道具标识
    static C_CLEAR_NEW_TAG(session: Session, player: Player, msg: ItemPto.C_USE_ITEMS) {
        const comp = player.getComponent(ItemComponent);
        const item = comp.getItem(msg.itemId);
        if (item && item.isNew === true) {
            item.isNew = false;
            item.save({ fields: ['isNew'], validate: false });
            session.sendMessage(new ItemPto.S_ITEMS_UPDATE({ items: [item.toJSON()] }));
        }
    }
}
