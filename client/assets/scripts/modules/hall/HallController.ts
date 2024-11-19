import { StageCfg } from "../../../../plugin-resource/js/client/StageCfg";
import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
import { SingleClass } from "../../framework/SingleClass";
import { Robot } from "../battle/model/robot/Robot";
import { SimulatorTypeEnum } from "../battle/model/simulator/Simulator";
import { UserVo } from "../vo/UserVo";
import { HallModel } from "./HallModel";

export class HallController extends SingleClass {
    constructor() {
        super();
        Notifier.addListener(NotifyID.StageChallengeStart, this.stageChallengeStart, this);
    }

    private _stageId: number;

    private stageChallengeStart(cfg: StageCfg) {
        Notifier.send(NotifyID.StartBattle, SimulatorTypeEnum.Local, cfg.mapId, UserVo.ins().userId, Robot.userId, 60);
        this._stageId = cfg.id;
        Notifier.addListener(NotifyID.EndBattle, this.stageChallengeEnd, this);
    }

    private stageChallengeEnd(winUserId: string) {
        Notifier.removeListener(NotifyID.EndBattle, this.stageChallengeEnd, this);
        const vo = UserVo.ins();
        if (this._stageId === vo.stageId && winUserId === vo.userId) {
            HallModel.ins().passStage(this._stageId);
        }
    }
}
HallController.ins();