import * as WS from 'ws';

export abstract class WebSocketSession {
    socket: WS;

    sessionId: number;

    remoteAddress: string;

    recieveMsgCount: number;

    maxRecieveMsgCount: number = 300;

    constructor(socket: WS, sessionId: number, remoteAddress: string) {
        this.socket = socket;
        this.sessionId = sessionId;
        this.remoteAddress = remoteAddress;
        this.recieveMsgCount = 0;
    }

    $onClientMessage(message: WS.Data) {
        this.recieveMsgCount += 1;
        if (this.recieveMsgCount > this.maxRecieveMsgCount) {
            this.socket.close();
            logger.error(`[${this.remoteAddress}]异常客户端,3S内收到消息${this.recieveMsgCount}条,已踢下线`);
            return;
        }

        this.onClientMessage(message);
    }

    // eslint-disable-next-line no-unused-vars
    abstract onClientMessage(message: WS.Data): void;
}
