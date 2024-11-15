import * as WS from 'ws';
import { RpcRouteType } from 'stone-framework';
import { WebSocketSession } from '../../../core/net/WebSocketSesstion';

export class GateSession extends WebSocketSession {
    logicRoute: string;

    onClientMessage(message: WS.Data) {
        if (!Buffer.isBuffer(message)) {
            return;
        }
        const buffer = message as Buffer;
        if (buffer.length < 8) {
            return;
        }

        rpc.logic.transferRemote.sendHandleMessage(
            { type: RpcRouteType.Target, nodeId: this.logicRoute },
            startupParam.nodeId,
            this.sessionId,
            buffer,
        );
    }
}
