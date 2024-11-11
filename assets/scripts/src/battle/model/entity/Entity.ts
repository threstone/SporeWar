export abstract class Entity {
    uid: string;

    id: number;
    position: cc.Vec2;

    isDestroy: boolean = false;

    constructor(uid: string, id: number, x: number, y: number) {
        this.uid = uid;
        this.id = id;
        this.position = cc.v2(x, y);
    }

    public abstract update(dt: number): void;
}