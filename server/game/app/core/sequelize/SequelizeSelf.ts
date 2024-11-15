/* eslint-disable max-classes-per-file */
import { Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import * as fs from 'fs';
import * as path from 'path';

export class SequelizeSelf extends Sequelize {
    private _modelMap = new Map<string, typeof Model>()

    registerModels(modelPath: string) {
        if (fs.existsSync(modelPath)) {
            const modelNames = fs.readdirSync(modelPath);
            const models = [];
            for (let index = 0; index < modelNames.length; index++) {
                const modelName = modelNames[index];
                if (modelName.endsWith('Model.js')) {
                    logger.debug(`register model:${modelName}`);
                    models.push(path.join(modelPath, modelName));
                }
            }
            this.addModels(models);
        }
    }

    initModels(models: typeof Model[]) {
        const childList = [];
        for (let index = 0; index < models.length; index++) {
            const modelTemplate = models[index];
            class model extends modelTemplate { }
            childList.push(model);
            this._modelMap.set(modelTemplate.tableName, model);
        }
        this.addModels(childList);
    }

    getModelsByPath(modelPath: string) {
        const modelNames = fs.readdirSync(modelPath);
        const models: typeof Model[] = [];
        for (let index = 0; index < modelNames.length; index++) {
            const modelName = modelNames[index];
            if (modelName.endsWith('Model.js')) {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                const modelClass = require(path.join(modelPath, modelName));
                models.push(modelClass[modelName.substring(0, modelName.length - 3)]);
            }
        }
        return models;
    }

    getModel<T extends typeof Model>(template: T): T {
        return this._modelMap.get(template.tableName) as any;
    }
}
