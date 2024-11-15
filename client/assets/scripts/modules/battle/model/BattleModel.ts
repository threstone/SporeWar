import { BaseModel } from "../../../framework/BaseModel";
import { LocalSimulator } from "./simulator/LocalSimulator";
import { OnlineSimulator } from "./simulator/OnlineSimulator";
import { Simulator, SimulatorTypeEnum } from "./simulator/Simulator";

export class BattleModel extends BaseModel{

    simulator: Simulator;

    endGame() {
        this.simulator?.endGame();
        this.simulator = null;
    }

    startBattle(type: SimulatorTypeEnum, mapId: number, p1Uid: string, p2Uid: string) {
        let simulator: Simulator = null;
        switch (type) {
            case SimulatorTypeEnum.Local:
                simulator = new LocalSimulator();
                break
            case SimulatorTypeEnum.Online:
                simulator = new OnlineSimulator();
                break
        }

        if (simulator?.startBattle(mapId, p1Uid, p2Uid)) {
            this.simulator = simulator;
            return true;
        }
        return false;
    }
}

