import { Building } from "../../entity/Building";
import { InputHandler } from "./InputHandler";

export class LocalInputHandler extends InputHandler {
    dispatchSpore(fromId: number, targetId: number, dispatchRate: number) {
        const fromBuilding = this.simulator.entityMap.get(fromId) as Building;
        const targetBuilding = this.simulator.entityMap.get(targetId) as Building;
        fromBuilding.dispatchSpore(dispatchRate, targetBuilding);
    }
}