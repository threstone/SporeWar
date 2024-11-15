import * as fs from 'fs';
import * as path from 'path';
import { CommandServer } from './CommandServer';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../core/redis/RedisMgr';
import { SequelizeMgr } from '../../../core/sequelize/SequelizeMgr';
import { SequelizeSelf } from '../../../core/sequelize/SequelizeSelf';
import { ServerMgr } from './ServerMgr';

export class GlobalVar {
    static commandServer: CommandServer;

    static redisMgr: RedisMgr;

    static sequelizeMgr: SequelizeMgr;

    static platformSeq: SequelizeSelf;

    static serverMgr: ServerMgr;

    static async init() {
        global.serviceConfig = service[env];

        // 初始化db相关
        await this.initDb();
        // 创建服务器管理
        this.serverMgr = await new ServerMgr().init();
        // 开启命令服务器
        this.commandServer = new CommandServer(serviceConfig.manageServerPort);
        // 加载路由
        this.initRouter();
    }

    private static async initDb() {
        this.redisMgr = new RedisMgr();

        // sequelize相关
        this.sequelizeMgr = new SequelizeMgr(serviceConfig.mysql);
        this.platformSeq = await this.sequelizeMgr.getPlatfromSeq();
    }

    private static initRouter() {
        const pathStr = path.join(__dirname, 'router');
        const files = fs.readdirSync(pathStr);
        files.forEach((fileName) => {
            if (fileName.endsWith('.js')) {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require(path.join(pathStr, fileName));
            }
        });
    }
}
