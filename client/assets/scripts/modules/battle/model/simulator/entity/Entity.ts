import { Simulator } from "../Simulator";

export abstract class Entity {
    userId: string;

    id: number;
    position: cc.Vec2;

    isDestroy: boolean = false;

    simulator: Simulator;

    constructor(userId: string, id: number, x: number, y: number, simulator: Simulator) {
        this.userId = userId;
        this.id = id;
        this.position = cc.v2(x, y);
        this.simulator = simulator;
    }

    public abstract update(dt: number): void;
}