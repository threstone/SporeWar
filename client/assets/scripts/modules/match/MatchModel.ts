import { BaseModel } from "../../framework/BaseModel";
import { MatchPto } from "../../framework/proto/CommonProto";

export class MatchModel extends BaseModel {

    isMatching: boolean = false;

    startMatching(type: MatchPto.MatchTypeEnum) {
        const msg = new MatchPto.C_START_MATCHING({ type });
        this.sendGameMessage(msg);
        this.isMatching = true;
    }


    S_MATCH_SUCCESS(msg: MatchPto.S_MATCH_SUCCESS) {
        this.isMatching = false;
    }
}