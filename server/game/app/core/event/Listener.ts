export class Listener {
    private _fn: Function;

    private _caller: any;

    constructor(fn: Function, caller: any) {
        this.fn = fn;
        this.caller = caller;
    }

    get fn() {
        return this._fn;
    }

    set fn(value: Function) {
        this._fn = value;
    }

    get caller() {
        return this._caller;
    }

    set caller(value: any) {
        this._caller = value;
    }
}
