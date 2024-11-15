import { RpcRouteType, StoneEvent } from 'stone-framework';
import * as crypto from 'crypto';
import { WebSocketServer } from '../../../core/net/WebSocketServer';
import { GateSession } from './GateSession';

export class GateServer extends WebSocketServer<GateSession> {
    private _logicList: ServerConfig[];

    constructor(listenPort: number) {
        super(listenPort, GateSession, { maxPayload: 1024 * 1024 });
        eventEmitter.on(StoneEvent.ServersConfigUpdate, this.updateLogicList.bind(this));
        this.updateLogicList();
    }

    onClientConnect(session: GateSession): void {
        session.logicRoute = this.getRouterLogic(session.remoteAddress);
    }

    onClientSocketClose(session: GateSession): void {
        rpc.logic.playerRemote.sendOnPlayerSocketClose(
            { type: RpcRouteType.Target, nodeId: session.logicRoute },
            startupParam.nodeId,
            session.sessionId,
        );
    }

    private updateLogicList() {
        this._logicList = [];
        serversConfigMap.forEach((server) => {
            if (server.serverType === 'logic') { this._logicList.push(server); }
        });
    }

    private getRouterLogic(remoteAddress: string) {
        return this._logicList[this.getIntHash(remoteAddress) % this._logicList.length].nodeId;
    }

    public getIntHash(remoteAddress: string) {
        // 创建一个哈希实例，这里使用'md5'
        const hash = crypto.createHash('md5');
        // 更新哈希实例的数据，这里是要哈希的字符串
        hash.update(remoteAddress);
        // 计算哈希值，返回一个十六进制的字符串
        const hexHash = hash.digest('hex');
        return parseInt(hexHash.substring(0, 8), 16);
    }
}
