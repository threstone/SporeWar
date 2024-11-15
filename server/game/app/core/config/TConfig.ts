interface IConfig {
    id?: number | string;
}

export class TConfig<T extends IConfig> {
    private _all: T[];

    private _map: { [key: string]: T } | { [key: number]: T };

    private _filterCache: { [key: string]: T } | { [key: number]: T };

    protected initList(configs: T[]) {
        this._all = configs || [];
        this._map = {};
        this._filterCache = {};
        configs?.forEach((c) => {
            this._map[c.id] = c;
        });
    }

    getAll(): ReadonlyArray<T> {
        return this._all;
    }

    get(id: number | string): T {
        return this._map?.[id];
    }

    getOne(param: T): T {
        const list = this.filter(param);
        if (list && list.length) return list[0];
        return null;
    }

    filter(param: T): ReadonlyArray<T> {
        const key = JSON.stringify(param);
        if (this._filterCache[key]) {
            return this._filterCache[key];
        }
        const result = [];
        this._filterCache[key] = result;

        this._all.forEach((c) => {
            let match = true;
            const keys = Object.keys(param);
            for (let index = 0; index < keys.length; index++) {
                const k = keys[index];
                const v = param[k];
                const value = c[k];
                if (v !== value) {
                    match = false;
                    break;
                }
            }

            if (match) { result.push(c); }
        });
        return result;
    }

    // eslint-disable-next-line no-unused-vars
    forEach(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any) {
        this._all.forEach(callbackfn, thisArg);
    }
}
