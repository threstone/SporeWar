import { ServerModel } from '../../../../../core/sequelize/model/platform/ServerModel';
import { EventEnum } from '../../../../../Enum';
import { SystemPto } from '../../CommonProto';
import { GlobalVar } from '../../GlobalVar';
import { ProtoBufEncoder } from '../ProtoBufEncoder';
import { TimeMgr } from '../TimeMgr';
import { Server } from './Server';

export class ServerMgr {
    private _serverMap: Map<number, Server> = new Map();

    private _serverDataMap = new Map<number, ServerModel>();

    serverList: ServerModel[];

    async init() {
        (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe(`${startupParam.env}_serverInfo_update`, this.initServerData.bind(this));
        const redis = await GlobalVar.redisMgr.getClient();
        this.initServerData(await redis.getData(`${startupParam.env}_serverInfo`));

        setInterval(this.checkServersStatus.bind(this), 5000);
        setInterval(this.clearServerPlayers.bind(this), 35000);
        TimeMgr.ins().on(EventEnum.NewDay, this.onNewDay, this);
        return this;
    }

    onNewDay() {
        const buffer = ProtoBufEncoder.encode(new SystemPto.S_NEW_DAY({ dayStartMs: TimeMgr.ins().dayStartMs }));
        this._serverMap.forEach((server) => {
            server.onNewDay(buffer);
        });
    }

    private checkServersStatus() {
        this._serverMap.forEach((server) => {
            server.checkServerStatus();
        });
    }

    private clearServerPlayers() {
        this._serverMap.forEach((server) => {
            server.clearPlayers();
        });
    }

    private initServerData(jsonStr: string) {
        this._serverDataMap.clear();
        const list: ServerModel[] = JSON.parse(jsonStr);
        list?.forEach((server) => {
            this._serverDataMap.set(server.id, server);
        });
        this.serverList = list;
        logger.debug('initServerData:', jsonStr);
    }

    getServerEntity(serverId: number) {
        if (serverId === 0) {
            serverId = this.getSuggestServerId();
        }

        let server = this._serverMap.get(serverId);
        if (!server) {
            server = new Server(serverId);
            this._serverMap.set(serverId, server);
        }
        return server;
    }

    getServerData(serverId: number) {
        return this._serverDataMap.get(serverId);
    }

    /** 获取推荐的服务器id */
    getSuggestServerId() {
        let maxId = 0;
        for (const [serverId, serverData] of this._serverDataMap) {
            if (serverData.status === 2) {
                return serverId;
            }
            maxId = Math.max(maxId, serverId);
        }
        return maxId;
    }
}
