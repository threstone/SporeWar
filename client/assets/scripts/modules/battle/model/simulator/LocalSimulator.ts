import { Robot } from "../robot/Robot";
import { LocalInputHandler } from "./inputHandler/LocalInputHandler";
import { Simulator } from "./Simulator";

export class LocalSimulator extends Simulator {
    private _timer: number;
    constructor() {
        super();
        this._timer = setInterval(this.update.bind(this), Simulator.frameInterval * 1000);
        this.robot = new Robot();
        this.inputHandler = new LocalInputHandler(this);
    }

    endGame(): void {
        clearInterval(this._timer);
        super.endGame();
    }
}