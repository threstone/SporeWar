import { BattlePto } from "../../../../framework/proto/CommonProto";
import { Manager } from "../../../../manager/Manger";
import { OnlineHandler } from "./inputHandler/OnlineHandler";
import { Simulator } from "./Simulator";

export class OnlineSimulator extends Simulator {
    constructor(frameRate: number) {
        super(frameRate);
        this.inputHandler = new OnlineHandler(this);
    }

    handleDispatchInfo(msg: BattlePto.S_BATTLE_LOGIC_FRAME) {
        if (msg.leastStartFrame > 0) {
            this.leastStartFrame = msg.leastStartFrame;
        }
        
        this.update();
        if (msg.dispatchInfos.length === 0) { return; }
        msg.dispatchInfos.forEach((info) => {
            this.buildingMap.get(info.fromId).dispatchSpore(info.dispatchRate, this.buildingMap.get(info.targetId));
        });

    }

    onGameOver(winUserId: string): void {
        super.onGameOver(winUserId);
        Manager.socketClientMgr.sendBattleMessage(new BattlePto.C_BATTLE_END({ winUserId }))
    }
}