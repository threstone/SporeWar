import { MatchPto } from "../../framework/proto/CommonProto";
import { SingleClass } from "../../framework/SingleClass";
import { Manager } from "../../manager/Manger";
import { MatchModel } from "./MatchModel";

export class MatchController extends SingleClass {
    startMatching(type: MatchPto.MatchTypeEnum) {
        MatchModel.ins().startMatching(type);
        Manager.viewMgr.openView('/prefab/match/MatchView');
    }
}