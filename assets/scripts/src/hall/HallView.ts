import { Cfg } from "../../config/Cfg";
import BaseView from "../../framework/BaseView";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallView extends BaseView {

    @property(cc.Layout)
    stageList: cc.Layout = null;

    @property(cc.Prefab)
    stageItem: cc.Prefab = null;


    onOpen(): void {
        Cfg.Stage.getArray().forEach((cfg) => {
            const item = cc.instantiate(this.stageItem);
            item.getChildByUuid('55XRC1PjFH56xrZOPj9x6s').getComponent(cc.Label).string = `关卡${cfg.id}`;
            item.parent = this.stageList.node;
        });
    }
}