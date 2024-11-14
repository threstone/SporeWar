import { Cfg } from "../../config/Cfg";
import BaseView from "../../framework/BaseView";
import StageBtn from "./StageBtn";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallView extends BaseView {

    @property(cc.Layout)
    stageList: cc.Layout = null;

    @property(cc.Prefab)
    stageBtnPrefab: cc.Prefab = null;

    onOpen(): void {
        Cfg.Stage.getArray().forEach((cfg) => {
            const item = cc.instantiate(this.stageBtnPrefab);
            const script = item.getComponent(StageBtn);
            script.setStage(cfg);
            item.parent = this.stageList.node;
        });
    }
}