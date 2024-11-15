import { ServerModel } from '../../../core/sequelize/model/platform/ServerModel';
import { GlobalVar } from './GlobalVar';

export class ServerMgr {
    private _serverMap = new Map<number, ServerModel>();

    async init() {
        const serverModel = GlobalVar.platformSeq.getModel(ServerModel);
        let serverList = await serverModel.findAll();
        if (serverList.length === 0) {
            serverList = await serverModel.bulkCreate([{
                id: 1, name: '测试1', startTime: Date.now(), status: 1, tag: 2,
            }]);
        }
        serverList.forEach((server) => {
            this._serverMap.set(server.id, server);
        });
        await this.updateRedisInfo();
        return this;
    }

    /** 添加服务器 */
    async addServer(serverInfo: ServerModel) {
        if (serverInfo.id == null || serverInfo.name == null || serverInfo.startTime == null) {
            return false;
        }

        // 检查是不是有这个服了
        if (this._serverMap.has(serverInfo.id)) {
            return false;
        }

        const Model = GlobalVar.platformSeq.getModel(ServerModel);
        const server = new Model(serverInfo);
        await server.save();
        this._serverMap.set(server.id, server);
        this.updateRedisInfo();
        return true;
    }

    /** 获取服务器信息列表 */
    getAllServer() {
        return this.toArray();
    }

    /** 更新服务器信息 */
    async updateServer(serverInfo: ServerModel) {
        const server = this._serverMap.get(serverInfo.id);
        if (!server) {
            return false;
        }

        await server.update(serverInfo);
        this.updateRedisInfo();
        return true;
    }

    async updateRedisInfo() {
        const redis = await GlobalVar.redisMgr.getClient();
        const value = JSON.stringify(this.toArray());
        redis.setData(`${startupParam.env}_serverInfo`, value, -1);
        redis.publish(`${startupParam.env}_serverInfo_update`, value);
    }

    private toArray() {
        const array = [];
        this._serverMap.forEach((server) => {
            array.push(server.toJSON());
        });
        return array;
    }
}
