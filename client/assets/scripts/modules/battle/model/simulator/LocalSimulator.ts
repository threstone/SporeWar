import { Robot } from "../robot/Robot";
import { LocalInputHandler } from "./inputHandler/LocalInputHandler";
import { Simulator } from "./Simulator";

export class LocalSimulator extends Simulator {
    private _timer: NodeJS.Timer;
    constructor(frameRate: number) {
        super(frameRate);
        this.robot = new Robot(this);
        this.inputHandler = new LocalInputHandler(this);
    }

    startBattle(mapId: number, p1UserId: string, p2UserId: string, seed?: number): boolean {
        this._timer = setInterval(this.update.bind(this), this.frameInterval * 1000);
        return super.startBattle(mapId, p1UserId, p2UserId, seed);
    }

    endGame(): void {
        clearInterval(this._timer);
        super.endGame();
    }
}