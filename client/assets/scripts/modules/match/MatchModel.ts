import { BaseModel } from "../../framework/BaseModel";
import { Notifier } from "../../framework/notify/Notifier";
import { BattlePto, MatchPto } from "../../framework/proto/CommonProto";
import { Manager } from "../../manager/Manger";
import { UserVo } from "../vo/UserVo";

export class MatchModel extends BaseModel {

    isMatching: boolean = false;
    private _type: MatchPto.MatchTypeEnum;

    reqStartMatching(type: MatchPto.MatchTypeEnum) {
        this._type = type;
        const msg = new MatchPto.C_START_MATCHING({ type });
        this.sendGameMessage(msg);
    }

    stopMatching() {
        const msg = new MatchPto.C_CANCEL_MATCHING({ type: this._type });
        this.sendGameMessage(msg);
        this.isMatching = false;
        this.matchEnd();
    }

    private matchEnd() {
        this.isMatching = false;
        Manager.viewMgr.closeView('/prefab/match/MatchView');
    }

    S_START_MATCHING(msg: MatchPto.S_START_MATCHING) {
        this.isMatching = true;
        Manager.viewMgr.openView('/prefab/match/MatchView', msg.startTime);
    }

    S_CANCEL_MATCHING(msg: MatchPto.S_MATCH_SUCCESS) {
        this.matchEnd();
    }

    S_MATCH_SUCCESS(msg: MatchPto.S_MATCH_SUCCESS) {
        if (Date.now() > msg.expireTime) {
            return;
        }

        this.matchEnd();
        Manager.socketClientMgr.connectToBattle(msg.address);
        this.sendBattleMessage(
            new BattlePto.C_BATTLE_REGIEST({
                battleToken: msg.battleToken, userId: UserVo.ins().userId
            })
        );
    }
}