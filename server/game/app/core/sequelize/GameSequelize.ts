/* eslint-disable max-classes-per-file */
import { Model } from 'sequelize';
import * as path from 'path';
import { SequelizeSelf } from './SequelizeSelf';

export class GameSequelize extends SequelizeSelf {
    private _serverModelMap = new Map<number, Map<string, typeof Model> | Promise<Map<string, typeof Model>>>();

    async getGameModel<T extends typeof Model>(serverId: number, template: T): Promise<T> {
        let modelMap = this._serverModelMap.get(serverId);

        if (!modelMap) {
            const promise = this.initServerModel(serverId);
            this._serverModelMap.set(serverId, promise);
            modelMap = await promise;
            this._serverModelMap.set(serverId, modelMap);
        }

        if (modelMap instanceof Promise) {
            modelMap = await modelMap;
        }

        return modelMap.get(`${template.tableName}_${serverId}`) as any;
    }

    async initServerModel(serverId: number) {
        const result = new Map<string, typeof Model>();
        const models = this.getModelsByPath(path.join(__dirname, './model/game'));
        const tasks = [];
        for (let index = 0; index < models.length; index++) {
            const modelTemplate = models[index];
            // 方法1
            // const tableName = `${modelTemplate.tableName}_${serverId}`;
            // const model = this.define(tableName, modelTemplate.rawAttributes, modelTemplate.options);
            // (model as any).tableName = tableName;
            // result.set(tableName, model);
            // 方法2
            const model = class extends modelTemplate { } as any;
            const tableName = `${modelTemplate.tableName}_${serverId}`;
            this.addModels([model]);
            model.tableName = tableName;
            tasks.push(model.sync({ alter: true }));
            result.set(tableName, model);
        }
        await Promise.all(tasks);
        return result;
    }
}
