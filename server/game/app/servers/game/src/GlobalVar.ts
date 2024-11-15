import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../core/redis/RedisMgr';
import { PlayerModel } from '../../../core/sequelize/model/game/PlayerModel';
import { ServerModel } from '../../../core/sequelize/model/platform/ServerModel';
import { WhiteModel } from '../../../core/sequelize/model/platform/WhiteModel';
import { SequelizeMgr } from '../../../core/sequelize/SequelizeMgr';

export class GlobalVar {
    static redisMgr: RedisMgr;

    static sequelizeMgr: SequelizeMgr;

    static init() {
        global.serviceConfig = service[env];
        this.redisMgr = new RedisMgr();
        // sequelize相关
        this.sequelizeMgr = new SequelizeMgr(serviceConfig.mysql);
        this.beforeOpration();
    }

    private static async beforeOpration() {
        this.initGateInfo();
        this.makeAllUserOffline();
        this.deleteSessionInfo();
        this.initWhiteList();
    }

    private static async initGateInfo() {
        const gateList = [];
        serversConfigMap.forEach((serverConfig) => {
            if (serverConfig.serverType !== 'gate') {
                return;
            }
            if (serviceConfig.ssl) {
                gateList.push(`wss://${serverConfig.ip}:${serverConfig.port}`);
            } else {
                gateList.push(`ws://${serverConfig.ip}:${serverConfig.port}`);
            }
        });

        const redis = await GlobalVar.redisMgr.getClient();
        const value = JSON.stringify(gateList);
        redis.setData(`${startupParam.env}_gateInfo`, value, -1);
        redis.publish(`${startupParam.env}_gateInfo_update`, value);
    }

    private static async makeAllUserOffline() {
        // 将所有玩家在线状态设置为离线
        const model = (await this.sequelizeMgr.getPlatfromSeq()).getModel(ServerModel);
        const serverList = await model.findAll({ attributes: ['id'] });
        serverList.forEach(async (server) => {
            const playerModel = await this.sequelizeMgr.getGameModel(server.id, PlayerModel);
            playerModel.sequelize.query(`update ${playerModel.tableName} set online = false`);
        });
    }

    private static async deleteSessionInfo() {
        // 删除session信息
        await (await this.redisMgr.getClient(1)).flushDB();
    }

    private static async initWhiteList() {
        const whiteList = await (await this.sequelizeMgr.getPlatfromSeq()).getModel(WhiteModel).findAll();
        const redis = await this.redisMgr.getClient();
        const redisKey = `${startupParam.env}_whiteList`;
        redis.delete(redisKey);
        if (whiteList.length === 0) {
            return;
        }
        const saveList: string[] = [];
        whiteList.forEach((white) => {
            saveList.push(white.uuid);
        });
        redis.sadd(redisKey, saveList);
    }
}
