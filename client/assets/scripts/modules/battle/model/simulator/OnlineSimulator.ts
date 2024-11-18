import { BattlePto } from "../../../../framework/proto/CommonProto";
import { OnlineHandler } from "./inputHandler/OnlineHandler";
import { Simulator } from "./Simulator";

export class OnlineSimulator extends Simulator {
    constructor(frameRate: number) {
        super(frameRate);
        this.inputHandler = new OnlineHandler(this);
    }

    handleDispatchInfo(msg: BattlePto.S_BATTLE_LOGIC_FRAME) {
        if (msg.dispatchInfos.length === 0) { return; }
        msg.dispatchInfos.forEach((info) => {
            this.buildingMap.get(info.fromId).dispatchSpore(info.dispatchRate, this.buildingMap.get(info.targetId));
        });
    }
}