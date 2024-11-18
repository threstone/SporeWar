import { BaseModel } from "../../../framework/BaseModel";
import { Notifier } from "../../../framework/notify/Notifier";
import { NotifyID } from "../../../framework/notify/NotifyID";
import { BattlePto } from "../../../framework/proto/CommonProto";
import { LocalSimulator } from "./simulator/LocalSimulator";
import { OnlineSimulator } from "./simulator/OnlineSimulator";
import { Simulator, SimulatorTypeEnum } from "./simulator/Simulator";

export class BattleModel extends BaseModel {

    simulator: Simulator;

    endGame() {
        this.simulator?.endGame();
        this.simulator = null;
    }

    startBattle(type: SimulatorTypeEnum, mapId: number, p1UserId: string, p2UserId: string, frameRate: number) {
        let simulator: Simulator = null;
        switch (type) {
            case SimulatorTypeEnum.Local:
                simulator = new LocalSimulator(frameRate);
                break
            case SimulatorTypeEnum.Online:
                simulator = new OnlineSimulator(frameRate);
                break
        }

        if (simulator?.startBattle(mapId, p1UserId, p2UserId)) {
            this.simulator = simulator;
            return true;
        }
        return false;
    }

    sendDispatch(msg: BattlePto.C_BATTLE_DISPATCH) {
        this.sendBattleMessage(msg);
    }

    S_BATTLE_EXPIRE() {
        console.log('进入战斗超时');
    }

    S_BATTLE_START(msg: BattlePto.S_BATTLE_START) {
        Notifier.send(NotifyID.StartBattle, SimulatorTypeEnum.Online, msg.mapId, msg.userId1, msg.userId2, msg.frameRate);
    }

    S_BATTLE_LOGIC_FRAME(msg: BattlePto.S_BATTLE_LOGIC_FRAME) {
        const simulator = this.simulator as OnlineSimulator;
        simulator.handleDispatchInfo(msg);
        simulator?.update();
    }
}

