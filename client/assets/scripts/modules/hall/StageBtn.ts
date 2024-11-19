import { StageCfg } from "../../config/StageCfg";
import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
import { BattleModel } from "../battle/model/BattleModel";
import { Robot } from "../battle/model/robot/Robot";
import { SimulatorTypeEnum } from "../battle/model/simulator/Simulator";
import { UserVo } from "../vo/UserVo";

const { ccclass, property } = cc._decorator;
@ccclass
export default class StageBtn extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    private _cfg: StageCfg

    setStage(cfg: StageCfg) {
        const isUnlock = UserVo.ins().stageId >= cfg.id;
        this.label.string = `关卡${cfg.id}${isUnlock ? '' : '(未解锁)'}`;
        this.label.node.parent.color = isUnlock ? cc.Color.WHITE : cc.Color.GRAY;
        this._cfg = cfg;

        if (isUnlock && UserVo.ins().stageId > cfg.id) {
            this.label.string += '(已通关)';
        }
    }

    onClick() {
        if (UserVo.ins().stageId < this._cfg.id) {
            return cc.error('未解锁');
        }

        const simulator = BattleModel.ins().simulator;
        if (simulator) {
            return;
        }
        Notifier.send(NotifyID.StageChallengeStart, this._cfg);
    }
}