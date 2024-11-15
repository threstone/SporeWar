import { Model, SequelizeOptions } from 'sequelize-typescript';
import * as path from 'path';
import { SequelizeSelf } from './SequelizeSelf';
import { GameSequelize } from './GameSequelize';

export class SequelizeMgr {
    /** 公共的,未选择database的实例，用以初始化model */
    private _commonIns: SequelizeSelf;

    private _platformIns: SequelizeSelf | Promise<SequelizeSelf>;

    private _gameIns: GameSequelize | Promise<GameSequelize>;

    private _mysqlConfig: IMysqlOption;

    constructor(config: IMysqlOption) {
        this._mysqlConfig = config;
        this._commonIns = new SequelizeSelf(this.getOpt());
        this._commonIns.registerModels(path.join(__dirname, './model/game'));
        this._commonIns.registerModels(path.join(__dirname, './model/platform'));
    }

    public getOpt(database?: string): SequelizeOptions {
        return {
            dialect: 'mysql',
            username: this._mysqlConfig.user,
            password: this._mysqlConfig.password,
            host: this._mysqlConfig.host,
            port: this._mysqlConfig.port,
            logQueryParameters: true,
            timezone: this._mysqlConfig.timezone,
            database,
            logging: false,
            pool: { max: 30 },
        };
    }

    async getPlatfromSeq(database: string = `sporeWar_${startupParam.env}`) {
        if (!this._platformIns) {
            const promise = new Promise<SequelizeSelf>(async (resolve) => {
                await this._commonIns.query(`CREATE DATABASE IF NOT EXISTS ${database} DEFAULT CHARACTER SET utf8mb4;`);
                const tempIns = new SequelizeSelf(this.getOpt(database));
                tempIns.initModels(tempIns.getModelsByPath(path.join(__dirname, './model/platform')));
                await tempIns.sync({ alter: true });
                this._platformIns = tempIns;
                resolve(tempIns);
            });
            this._platformIns = promise;
        }

        return this._platformIns;
    }

    async getGameModel<T extends typeof Model>(serverId: number, template: T): Promise<T> {
        if (!serverId) {
            logger.trace('getGameModel serverId为空', new Error());
            return null;
        }
        const gameSeq = await this.getGameSeq();
        return gameSeq.getGameModel(serverId, template);
    }

    private async getGameSeq(database: string = `car_${startupParam.env}`) {
        if (!this._gameIns) {
            const promise = new Promise<GameSequelize>(async (resolve) => {
                await this._commonIns.query(`CREATE DATABASE IF NOT EXISTS ${database} DEFAULT CHARACTER SET utf8mb4;`);
                const tempIns = new GameSequelize(this.getOpt(database));
                // tempIns.initModels(tempIns.getModelsByPath(path.join(__dirname, './model/game')));
                // await tempIns.sync({ alter: true });
                this._gameIns = tempIns;
                resolve(tempIns);
            });
            this._gameIns = promise;
        }
        return this._gameIns;
    }
}
