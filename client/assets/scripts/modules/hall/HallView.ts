import { Cfg } from "../../config/Cfg";
import BaseView from "../../framework/BaseView";
import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
import { MatchPto } from "../../framework/proto/CommonProto";
import { MatchController } from "../match/MatchController";
import StageBtn from "./StageBtn";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallView extends BaseView {

    @property(cc.Layout)
    stageList: cc.Layout = null;

    @property(cc.Prefab)
    stageBtnPrefab: cc.Prefab = null;

    onOpen(): void {
        this.refreshStageList();
    }

    onClose(): void {
    }

    changeListener(enable: boolean) {
        Notifier.changeListener(enable, NotifyID.PassStage, this.refreshStageList, this);
    }

    refreshStageList() {
        const stageConfigs = Cfg.Stage.getArray();
        this.stageList.node.destroyAllChildren();
        for (let index = 0; index < stageConfigs.length; index++) {
            const cfg = stageConfigs[index];
            const item = cc.instantiate(this.stageBtnPrefab);
            const script = item.getComponent(StageBtn);
            script.setStage(cfg);
            item.parent = this.stageList.node;
        }
    }

    onMatchBtnClick() {
        MatchController.ins().startMatching(MatchPto.MatchTypeEnum.Normal);
    }
}