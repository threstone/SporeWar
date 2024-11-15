import axios from 'axios';
import * as WS from 'ws';

const ReqestTimeout = 15000;
export class ClientForResp {

    private _socket: WS;
    private _requestMap = new Map<number, CallReq>();
    private _reqId: number = 1234;

    messageHandler: Function;

    doLogin(url: string, body?: any) {
        return new Promise<void>(async (resolve) => {
            const postResult = await axios.post(url, body);
            console.log('post login response :', postResult.data)
            const socket = new WS(postResult.data.url);
            socket.on("open", () => {
                resolve();
            });

            socket.on('message', (buffer: Buffer) => {
                const type = buffer.readInt8();
                if (type === MessageTypeEnum.Response) {
                    this.onServerResponse(buffer);
                } else if (type === MessageTypeEnum.Push) {
                    this.onServerPushMessage(buffer);
                }
                !!this.messageHandler && this.messageHandler(buffer);
            });

            //断线重连
            socket.on("close", () => {
                console.log("client close! ");
            });

            //失败重连
            socket.on("error", (err) => {
                console.error('client error! ', err);
            });
            this._socket = socket;
            setInterval(this.clearTimeOutReq.bind(this), 1000);
        });
    }

    onServerResponse(buffer: Buffer) {
        const reqId = buffer.readInt32BE(1);
        const req = this._requestMap.get(reqId);
        if (req) {
            this._requestMap.delete(req.requestId);
            const msg = buffer.toString('utf8', 5);
            req.resolve(msg)
        }
    }

    onServerPushMessage(buffer: Buffer) {
        console.log('on server push message:', buffer.toString('utf8', 1));
    }

    request(msg: string) {
        return new Promise((resolve, reject) => {
            const requestId = this._reqId++;
            this._requestMap.set(requestId, {
                requestId,
                resolve,
                reject,
                sendTime: Date.now(),
            });
            this._socket.send(this.getRequestBuffer(requestId, msg));
        });
    }

    notify(msg: string) {
        this._socket.send(this.getNotifyBuffer(msg));
    }

    getRequestBuffer(id: number, msg: string) {
        const msgBuffer = Buffer.from(msg);
        const buffer = Buffer.alloc(5 + msgBuffer.length);
        buffer.writeInt8(MessageTypeEnum.Request, 0);
        buffer.writeInt32BE(id, 1);
        msgBuffer.copy(buffer, 5);
        return buffer;
    }

    getNotifyBuffer(msg: string) {
        const msgBuffer = Buffer.from(msg);
        const buffer = Buffer.alloc(1 + msgBuffer.length);
        buffer.writeInt8(MessageTypeEnum.Notify, 0);
        msgBuffer.copy(buffer, 1);
        return buffer;
    }

    /** 清理过期请求 */
    private clearTimeOutReq() {
        const now = Date.now();
        this._requestMap.forEach((req, requestId, map) => {
            if (req.sendTime + ReqestTimeout < now) {
                console.error(`reqest timeout `)
                req.reject();
                map.delete(requestId);
            }
        })
    }
}

enum MessageTypeEnum {
    Request,
    Response,
    Notify,
    Push
}

interface CallReq {
    requestId: number;
    resolve: Function;
    reject: Function;
    sendTime: number;
}
// (new Client).doLogin('http://localhost:1234/login', {})