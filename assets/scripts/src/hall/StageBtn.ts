import { StageCfg } from "../../config/StageCfg";
import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
import { BattleModel } from "../battle/model/BattleModel";
import { Robot } from "../battle/model/robot/Robot";
import { UserVo } from "../vo/UserVo";

const { ccclass, property } = cc._decorator;
@ccclass
export default class StageBtn extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    private _cfg: StageCfg

    setStage(cfg: StageCfg) {
        this.label.string = `关卡${cfg.id}`;
        this._cfg = cfg;
    }

    onClick(){
        const battleModel =BattleModel.ins();
        if(battleModel.isBattle){
            return;
        }
        const robot = new Robot();
        Notifier.send(NotifyID.StartBattle, this._cfg.mapId, UserVo.ins().uid, robot.uid);
        battleModel.setRobot(robot);

    }
}