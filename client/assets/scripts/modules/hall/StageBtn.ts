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
        this.label.string = `关卡${cfg.id}${UserVo.ins().stageId < cfg.id ? '(未解锁)' : ''}`;
        this._cfg = cfg;
    }

    onClick() {
        if (UserVo.ins().stageId < this._cfg.id) {
            return cc.error('未解锁');
        }

        const simulator = BattleModel.ins().simulator;
        if (simulator) {
            return;
        }
        Notifier.send(NotifyID.StartBattle, SimulatorTypeEnum.Local, this._cfg.mapId, UserVo.ins().userId, Robot.userId, 60);
    }
}