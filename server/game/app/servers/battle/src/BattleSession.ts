import * as WS from 'ws';
import { WebSocketSession } from '../../../core/net/WebSocketSesstion';

export class BattleSession extends WebSocketSession {
    onClientMessage(message: WS.Data) {
        logger.debug(message);
    }
}
