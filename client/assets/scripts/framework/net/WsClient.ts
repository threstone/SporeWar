import { MessageMgr } from "../../manager/MessageMgr";
import { SingleClass } from "../SingleClass";

export class WsClient extends SingleClass {
    private _ws: WebSocket;
    private _messageQueue: Array<IGameMessage> = [];

    connect(url: string) {
        if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
                console.log("websocket connecting, wait for a moment...")
                return false;
            }
        }

        this._ws = new WebSocket(url);
        this._ws.binaryType = "arraybuffer";
        this._ws.onopen = this.onOpen.bind(this);
        this._ws.onmessage = this.onMessage.bind(this);
        this._ws.onerror = this.onError.bind(this);
        this._ws.onclose = this.onClosed.bind(this);
        return true;
    }

    close() {
        this._ws?.close();
    }

    sendMessage(message: IGameMessage) {
        if (this._ws.readyState !== WebSocket.OPEN) {
            this._messageQueue.push(message);
            return;
        }
        this._ws.send(MessageMgr.encode(message));
    }

    private onOpen(event: any) {
        console.log('onOpen', event);
        while (this._messageQueue.length > 0) {
            let message = this._messageQueue.shift();
            this._ws.send(MessageMgr.encode(message));
        }
    }

    private onMessage(event: any) {
        MessageMgr.handleBuffer(event.data, 0);
    }

    private onError(event: any) {
        console.log('onError', event);
    }
    private onClosed(event: any) {
        console.log('onClosed', event);
    }
}