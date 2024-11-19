import { BaseModel } from "../../framework/BaseModel";
import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
import { StagePto } from "../../framework/proto/CommonProto";
import { UserVo } from "../vo/UserVo";

export class HallModel extends BaseModel {

    passStage(stageId: number) {
        this.sendGameMessage(new StagePto.C_PASS_STAGE({ stageId }));
    }

    S_PASS_STAGE(msg: StagePto.S_PASS_STAGE) {
        UserVo.ins().stageId = msg.stageId;
        Notifier.send(NotifyID.PassStage);
    }
}