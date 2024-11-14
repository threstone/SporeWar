import { Simulator } from "../Simulator";

export abstract class InputHandler {
    protected simulator: Simulator;
    constructor(simulator: Simulator) {
        this.simulator = simulator;
    }

    abstract dispatchSpore(fromId: number, targetId: number, dispatchRate: number): void;
}