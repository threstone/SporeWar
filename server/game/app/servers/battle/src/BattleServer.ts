import * as http from 'http';
import { WebSocketServer } from '../../../core/net/WebSocketServer';
import { BattleSession } from './BattleSession';

export class BattleServer extends WebSocketServer<BattleSession> {
    address: string;

    constructor() {
        const listenPort = serverConfig.port;
        super(listenPort, BattleSession, { maxPayload: 1024 * 1024 });
        if (serviceConfig.ssl) {
            this.address = `wss://${serverConfig.ip}:${listenPort}`;
        } else {
            this.address = `ws://${serverConfig.ip}:${listenPort}`;
        }
    }

    onClientConnect(session: BattleSession, request: http.IncomingMessage): void {
        logger.debug(session.sessionId, request.headers.token);
    }

    onClientSocketClose(session: BattleSession): void {
        logger.debug(session);
        session.onClose();
    }
}
