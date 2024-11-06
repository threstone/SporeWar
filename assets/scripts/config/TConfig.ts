

type FlagExcludedType<Base, Type> = { [Key in keyof Base]: Base[Key] extends Type ? never : Key };
type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];
type KeyPartial<T, K extends keyof T> = { [P in K]?: T[P] };
type OmitType<Base, Type> = KeyPartial<Base, AllowedNames<Base, Type>>;
type ConstructorType<T> = OmitType<T, Function>;
declare interface Map<T> {
    [key: number | string]: T;
}

declare interface Param {
    [key: string]: any
}

export class TConfig<T extends IConfig> {
    protected _name: string = "";
    protected _map: Map<T>;

    public initByMap(map: Map<T>) {
        if (this._map != null) {
            // cc.error(this._name + " TConfig.initByMap repetition");
            // return;
        }

        this._map = map;
    }

    public initByArray(array: T[]) {
        if (this._map != null) {

            return;
        }

        this._map = {};
        array.forEach(element => {
            this._map[element.id] = element;


        });
    }

    public tryGet(id: number | string): [boolean, T] {
        if (this._map == null) {

            return;
        }

        const element = this._map[id];
        return [element != null, element];
    }

    //根据配置表id获取行
    public get(id: number | string): T {
        if (this._map == null) {

            return;
        }

        const element = this._map[id];
        if (element == null) {
            // cc.warn('can not find cfg id', id);
        }

        return element;
    }

    //找到第一个符合条件的行
    /// <param name="param">如{"type":2,"level":2}</param>
    public find(param: Param): T {
        if (this._map == null) {

            return;
        }


        for (const key in this._map) {
            const element = this._map[key];
            let fit = true;
            for (const k in param) {
                const v = param[k];
                const value = element[k];
                if (v !== value) {
                    fit = false;
                    break;
                }
            }
            if (fit) {
                return element;
            }
        }


        return null;
    }

    public findBy(call: (value: T, index?: number, array?: T[]) => boolean): T {
        for (const key in this._map) {
            const element = this._map[key];
            if (call(element)) return element;
        }
    }


    //通过条件筛选满足的所有行
    /// <param name="param">如{"type":2,"level":2}</param>
    public filter(param: ConstructorType<T>): T[] {
        if (this._map == null) {

            return;
        }


        let results = [];
        for (const key in this._map) {
            const element = this._map[key];
            let fit = true;
            for (const k in param) {
                const v = param[k];
                const value = element[k];
                if (v !== value) {
                    fit = false;
                    break;
                }
            }
            if (fit) {
                results.push(element);
            }
        }

        if (results.length <= 0) {
            //
        }
        return results;
    }





    /// <summary>
    /// 根据给定的属性排序，1表示顺序，-1表示倒序，多个属性时按传入顺序判断，不存在是属性不判断
    /// </summary>
    /// <param name="go">如{"type":-1,"level":1}</param>
    public sort(array: T[], param: Param): void {
        array.sort((a: T, b: T): number => {
            for (const key in param) {
                const weigth = param[key];
                const aValue = a[key];
                const bValue = b[key];
                if (aValue != null && bValue != null) {
                    return weigth * (aValue - bValue);
                } else {
                    //
                }
            }
            return 0;
        });
    }

    public forEach(func: (value: T) => void, thisArg?: any): void {
        if (this._map == null) {

            return;
        }

        for (const key in this._map) {
            const element = this._map[key];
            func.call(thisArg, element);
        }
    }

    private _keyMap = null;
    /// <summary>
    /// 将两列表项进行映射，多个值会用最后的覆盖
    /// </summary>
    /// <param name="go">如{"type":-1,"level":1}</param>
    public keyMap<U>(key: string, mapKey: string, value): U {
        if (this._keyMap == null) {
            this._keyMap = {};
        }
        let keyMap = this._keyMap[key];
        if (keyMap == null) {
            keyMap = {};
            this._keyMap[key] = keyMap;
        }
        let map = keyMap[mapKey];
        if (map == null) {
            map = {};
            keyMap[mapKey] = map;

            for (const id in this._map) {
                const element = this._map[id];
                const keyValue = element[key];
                const mapValue = element[mapKey];
                if (keyValue != null && mapValue != null) {
                    map[keyValue] = mapValue;
                }
            }
        }

        return map[value] as U;
    }

    /// </summary>
    //获取整张表
    /// </summary>
    public getAll(): Map<T> {
        if (this._map == null) {
            return;
        }
        return this._map;
    }


    // _list: T[];
    public getArray(): T[] {
        // if (this._list) return this._list;
        let list: T[] = [];
        this.forEach(item => list.push(item));
        // this._list = list;
        return list as T[];
    }

    public addItems(id: number | string, data: T) {
        let item = this.get(id);
        if (item) {
            cc.warn("id add repeat", id);
        }
        this._map[id] = data;
    }
}