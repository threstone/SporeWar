class _Log {
    private _log: any;
    private _enableLog: boolean;
    public constructor() {
        this._log = cc;
        this._enableLog = false;
    }

    public setLogEnable(boo: boolean) {
        this._enableLog = boo;
    }
    public log(...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.log("[Log]:", ...subst);
    }

    public debug(...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.debug("[Debug]:", ...subst);
    }

    public warn( ...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.warn("[Warn]:", ...subst);
    }

    public error( ...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.error("[Error]:", ...subst);
    }

    public time( ...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.time("[TimeStart]:", ...subst);
    }

    public timeEnd( ...subst: any[]): void {
        if (!this._enableLog) return;
        this._log.time("[TimeEnd]:", ...subst);
    }
}

export const Log = new _Log();