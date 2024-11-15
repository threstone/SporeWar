import { Log } from "../framework/Log";
import { SingleClass } from "../framework/SingleClass";
import LZString = require("../util/lzstring");
import { Utils } from "../util/Utils";
/**
 * @description 本地存储管理器
 * @author 吴建奋
 * @date 2020-01-01
 * @export
 * @class StorageManager
 */
const storage = cc.sys.localStorage;
export class StorageMgr extends SingleClass {

    public clear(): void {
        storage.clear();
    }

    public remove(key: string): void {
        storage.removeItem(key);
    }

    public getBool(key: string, defaultValue = false): boolean {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            return defaultValue;
        }
        return value != 0;
    }

    public setBool(key: string, value: boolean) {
        let val = value ? 1 : 0;
        storage.setItem(key, val);
    }

    public getNumber(key: string, defaultValue = 0): number {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            //cc.warn("getNumber null key:" + key, "defaultValue:" + defaultValue);
            return defaultValue;
        }
        //cc.log("getNumber key:" + key, "value:", typeof(value), value);
        return Number(value);
    }

    public setNumber(key: string, value: number) {
        storage.setItem(key, value);
    }

    public getString(key: string, defaultValue = "", iscompress: boolean = false): string {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            return defaultValue;
        }

        return iscompress ? LZString.decompressFromBase64(value) : value;
    }

    public getItem(key: string, iscompress: boolean = true): string {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            return "";
        }
        return iscompress ? LZString.decompressFromBase64(value) : value;
    }

    public setItem(key: string, value: string, iscompress: boolean = true) {
        this.setString(key, value, iscompress);
    }

    public setString(key: string, value: string, iscompress: boolean = false) {
        storage.setItem(key, iscompress ? LZString.compressToBase64(value) : value);
    }

    public getObject<T>(key: string, defaultValue = null): T {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            return defaultValue;
        }
        let t = JSON.parse(value) as T;
        if (t == null) {
            Log.error("StorageManager.getObject error", key, value);
        }
        return t;
    }

    public setObject(key: string, value: object) {
        if (value == null) {
            Log.error("StorageManager.setObject null", key);
            return;
        }
        let str = JSON.stringify(value);
        storage.setItem(key, str);
    }

    public getArray<T>(key: string, defaultValue = null): T[] {
        let value = storage.getItem(key);
        if (Utils.isNullOrEmpty(value)) {
            return defaultValue;
        }

        let t = JSON.parse(value) as T[];
        if (t == null) {
            Log.error("StorageManager.getArray error", key, value);
        }
        return t;
    }

    public setArray(key: string, value: object) {
        if (value == null) {
            Log.error("StorageManager.setArray null", key);
            return;
        }
        let str = JSON.stringify(value);
        storage.setItem(key, str);
    }

    //当前登录角色的唯一标示
    private _personKey: string;
    public setPersonKey(key: string) {
        this._personKey = key;
    }

    public getPrivyBool(key: string, defaultValue = false): boolean {
        if (this._personKey == null) {
            Log.error("getPrivyBool _personKey null")
            return defaultValue;
        }
        key = this._personKey + key;
        return this.getBool(key, defaultValue);
    }

    public setPrivyBool(key: string, value: boolean) {
        if (this._personKey == null) {
            Log.error("setPrivyBool _personKey null")
            return;
        }
        key = this._personKey + key;
        this.setBool(key, value);
    }

    public getPrivyNumber(key: string, defaultValue = 0): number {
        if (this._personKey == null) {
            Log.error("getPrivyNumber _personKey null")
            return defaultValue;
        }
        key = this._personKey + key;
        return this.getNumber(key, defaultValue);
    }

    public setPrivyNumber(key: string, value: number) {
        if (this._personKey == null) {
            Log.error("setPrivyNumber _personKey null")
            return;
        }
        key = this._personKey + key;
        this.setNumber(key, value);
    }

    public getPrivyString(key: string, defaultValue = ""): string {
        if (this._personKey == null) {
            Log.error("getPrivyString _personKey null")
            return defaultValue;
        }
        key = this._personKey + key;
        return this.getString(key, defaultValue);
    }

    public setPrivyString(key: string, value: string) {
        if (this._personKey == null) {
            Log.error("setPrivyString _personKey null")
            return;
        }
        key = this._personKey + key;
        this.setString(key, value);
    }

    public getPrivyObject<T>(key: string, defaultValue = null): T {
        if (this._personKey == null) {
            Log.error("getPrivyObject _personKey null")
            return defaultValue;
        }
        key = this._personKey + key;
        return this.getObject<T>(key, defaultValue);
    }

    public setPrivyObject(key: string, value: object) {
        if (this._personKey == null) {
            Log.error("setPrivyObject _personKey null")
            return;
        }
        key = this._personKey + key;
        this.setObject(key, value);
    }

    public getPrivyArray<T>(key: string, defaultValue = null): T[] {
        if (this._personKey == null) {
            Log.error("getPrivyArray _personKey null")
            return defaultValue;
        }
        key = this._personKey + key;
        return this.getArray<T>(key, defaultValue);
    }

    public setPrivyArray(key: string, value: object) {
        if (this._personKey == null) {
            Log.error("setPrivyArray _personKey null")
            return;
        }
        key = this._personKey + key;
        this.setArray(key, value);
    }
    public get personKey() {
        return this._personKey;
    }
}