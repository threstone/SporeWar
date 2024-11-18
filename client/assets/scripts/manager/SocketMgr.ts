import { WsClient } from "../framework/net/WsClient";
import { SingleClass } from "../framework/SingleClass";

export class SocketClientMgr extends SingleClass {
    private _mainClient: WsClient;

    private _battleUrl: string;
    private _battleClient: WsClient;

    connect(url: string) {
        if (!this._mainClient) {
            this._mainClient = new WsClient();
        }
        this._mainClient.connect(url);
    }

    sendGameMessage(msg: IGameMessage) {
        this._mainClient.sendMessage(msg);
    }

    close() {
        this._mainClient.close();
    }

    connectToBattle(url: string) {
        if (this._battleClient && this._battleUrl === url) {
            return;
        }
        this._battleClient?.close();
        this._battleClient = new WsClient();
        this._battleClient.connect(url);
        this._battleUrl = url;
    }

    sendBattleMessage(msg: IGameMessage) {
        this._battleClient.sendMessage(msg);
    }

    closeBattleConnect() {
        this._battleClient.close();
    }
}