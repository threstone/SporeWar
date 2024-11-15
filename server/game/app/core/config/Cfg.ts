/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
import * as fs from 'fs';
import path = require('path');
import { InitialItems as InitialItemsTable } from './types/InitialItems';
import { Spore as SporeTable } from './types/Spore';
import { Map as MapTable } from './types/Map';
import { Stage as StageTable } from './types/Stage';
import { Items as ItemsTable } from './types/Items';
import { DropPool as DropPoolTable } from './types/DropPool';
import { Building as BuildingTable } from './types/Building';

export class Cfg {
    static InitialItems: InitialItemsTable;

    static Spore: SporeTable;

    static Map: MapTable;

    static Stage: StageTable;

    static Items: ItemsTable;

    static DropPool: DropPoolTable;

    static Building: BuildingTable;

    static init(serverType: 'server' | 'client', cloudConfigPath: string = null) {
        // eslint-disable-next-line no-console
        console.info('Cfg init...');

        Cfg.InitialItems = new InitialItemsTable(this.configRequire(`${serverType}/InitialItems.json`, cloudConfigPath));
        Cfg.Spore = new SporeTable(this.configRequire(`${serverType}/Spore.json`, cloudConfigPath));
        Cfg.Map = new MapTable(this.configRequire(`${serverType}/Map.json`, cloudConfigPath));
        Cfg.Stage = new StageTable(this.configRequire(`${serverType}/Stage.json`, cloudConfigPath));
        Cfg.Items = new ItemsTable(this.configRequire(`${serverType}/Items.json`, cloudConfigPath));
        Cfg.DropPool = new DropPoolTable(this.configRequire(`${serverType}/DropPool.json`, cloudConfigPath));
        Cfg.Building = new BuildingTable(this.configRequire(`${serverType}/Building.json`, cloudConfigPath));
    }

    private static configRequire(fileName: string, cloudConfigPath: string) {
        if (!cloudConfigPath) {
            return require(`./${fileName}`);
        }

        const cloudPath = path.join(cloudConfigPath, fileName);
        const isExit = fs.existsSync(cloudPath);
        if (!isExit) {
            return require(`./${fileName}`);
        }
        return JSON.parse(fs.readFileSync(cloudPath, 'utf8'));
    }
}
