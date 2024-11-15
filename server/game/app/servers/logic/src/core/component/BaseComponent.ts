/* eslint-disable no-use-before-define */
import * as fs from 'fs';
import * as path from 'path';
import { Model } from 'sequelize';
import { Player } from '../player/Player';

// eslint-disable-next-line no-unused-vars
type ComponentClass = new (player: Player) => BaseComponent<Model>;

const InitTimeLimit = 30000;
export abstract class BaseComponent<T extends Model> {
    private static _components: ComponentClass[];

    static getAllComponents(): ComponentClass[] {
        if (!BaseComponent._components) {
            BaseComponent._components = [];
            fs.readdirSync(__dirname).forEach((fileName) => {
                if (fileName.endsWith('Component.js') && fileName.startsWith('BaseComponent') === false) {
                    // eslint-disable-next-line import/no-dynamic-require, global-require
                    BaseComponent._components.push(require(path.join(__dirname, fileName))[fileName.substring(0, fileName.length - 3)]);
                }
            });
        }
        return BaseComponent._components as any;
    }

    private _isInit: boolean;

    private _initFail: boolean;

    private _waitingList: { resolve: Function, reject: Function }[];

    protected initEventName = `${this.constructor.name}Init`;

    /** 是否是必要组件,用以决定加载顺序,普通组件将在所有必要组件加载完成后加载 */
    get isNecessary() { return this._isNecessary; }

    private _isNecessary: boolean;

    protected player: Player;

    model: T;

    /**
     * @param player 玩家对象
     * @param isNecessary 是否是必要组件,用以决定加载顺序,普通组件将在所有必要组件加载完成后加载
     */
    constructor(player: Player, isNecessary: boolean = false) {
        this._isNecessary = isNecessary;
        this._isInit = false;
        this._initFail = false;
        this._waitingList = [];
        this.player = player;
    }

    /** 组件的初始化方法 */
    // eslint-disable-next-line no-unused-vars
    protected abstract init(player: Player): Promise<void> | void;

    /** 当组件被销毁 */
    protected abstract onDestroy(): void;

    /** 当玩家初始化完成(所有组件都加载完毕) */
    protected abstract onPlayerInitEnd(): void;

    /** 在组件初始化完成后执行 */
    waitingToInit() {
        if (this.isInitEnd()) {
            return null;
        }
        return new Promise((resolve, reject) => {
            this._waitingList.push({ resolve, reject });
        });
    }

    /** 是否初始化完成 */
    isInitEnd() {
        if (this._initFail) {
            throw new Error('组件初始化失败');
        }
        if (this._isInit === true) {
            return true;
        }
        return false;
    }

    /** 初始化组件 */
    async initComponent(player: Player) {
        // console.time(`[${player.userId}]${this._initEventName}`);
        // 监听组件完成加载事件
        this.player.once(this.initEventName, (errMsg: string | Error) => {
            // console.timeEnd(`[${player.userId}]${this._initEventName}`);
            if (errMsg) {
                logger.error(`[${this.player.userId}] ${this.initEventName} 加载组件异常:`, errMsg);
                this._initFail = true;
                this._waitingList.forEach((element) => {
                    element.reject(errMsg);
                });
            } else {
                this._isInit = true;
                this._waitingList.forEach((element) => {
                    element.resolve();
                });
            }
            this._waitingList = null;
        });

        try {
            const initResult = this.init(player);
            if (initResult instanceof Promise) {
                // 如果是异步函数,限定组件的加载最大时长,超时则抛出异常
                Promise.race([
                    initResult.then(() => {
                        this.player.emit(this.initEventName);
                    }),
                    new Promise<void>((resolve) => {
                        setTimeout(() => {
                            this.player.emit(this.initEventName,
                                `加载用时已经超过${InitTimeLimit},请检查逻辑`);
                            resolve();
                        }, InitTimeLimit);
                    }),
                ]);
                await initResult;
            } else {
                this.player.emit(this.initEventName);
            }
        } catch (error) {
            this.player.emit(this.initEventName, error);
        }
    }

    /** 销毁组件 */
    async destroy() {
        if (!this._initFail) {
            await this.waitingToInit();
        }
        this.onDestroy();
    }

    /** 存储模型的数据到数据库,如果有模型的话 */
    saveModel(fields?: (keyof T)[]) {
        return this.model?.save({ fields: fields as string[], validate: false });
    }
}
