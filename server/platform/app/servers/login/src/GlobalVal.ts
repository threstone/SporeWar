import * as fs from 'fs';
import * as path from 'path';
import { LoginServer } from './LoginServer';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../core/redis/RedisMgr';
import { SequelizeMgr } from '../../../core/sequelize/SequelizeMgr';
import { SequelizeSelf } from '../../../core/sequelize/SequelizeSelf';
import { RoleModel } from '../../../core/sequelize/model/platform/RoleModel';
import { BlockMgr } from './BlockMgr';

export class GlobalVar {
    static loginServer: LoginServer;

    static redisMgr: RedisMgr;

    static sequelizeMgr: SequelizeMgr;

    static platformSeq: SequelizeSelf;

    static blockMgr: BlockMgr;

    static async init() {
        global.serviceConfig = service[env];
        // 初始化db相关
        await this.initDb();
        // 初始化
        await this.initUserId();

        // 开启登录服务器
        this.loginServer = new LoginServer(serviceConfig.loginServerPort);
        // 黑名单管理
        this.blockMgr = await (new BlockMgr()).init();
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

    private static async initUserId() {
        const model = this.platformSeq.getModel(RoleModel);
        let maxUserId: number = await model.max('userId');
        if (Number.isNaN(maxUserId) || maxUserId < 10000) {
            maxUserId = 10000;
        }
        (await this.redisMgr.getClient()).setData(`${startupParam.env}_newUserId`, maxUserId, -1);
    }
}
