/* eslint-disable no-unused-vars */
import * as WS from 'ws';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
import { ServerOptions } from 'ws';
import { WebSocketSession } from './WebSocketSesstion';

export abstract class WebSocketServer<T extends WebSocketSession> {
    private _clientSocket_: WS.Server

    private _clientConnectedCount_: number = 0;

    private _clientIndex: number = 0;

    private _sessionMap = new Map<number, T>();

    private _sessionClass: new (socket: WS, sessionId: number, remoteAddress: string) => T;

    abstract onClientConnect(session: T, request: http.IncomingMessage): void;

    abstract onClientSocketClose(session: T): void;

    constructor(listenPort: number, sessionClass: new (socket: WS, sessionId: number, remoteAddress: string) => T, opt: ServerOptions) {
        this._sessionClass = sessionClass;
        if (serviceConfig.ssl) {
            const cert = fs.readFileSync(serviceConfig.ssl.cert);
            const key = fs.readFileSync(serviceConfig.ssl.key);
            const server = https.createServer({ cert, key });
            opt.server = server;
            server.listen(listenPort, () => {
                logger.info(`wss启动完成, port:${listenPort}`);
            });
        } else {
            opt.port = listenPort;
        }
        this._clientSocket_ = new WS.Server(opt);
        this._clientSocket_.on('connection', this._onClientConnect.bind(this));
        logger.info(`socket 启动 监听端口:${listenPort}`);

        setInterval(this.messageCountReset.bind(this), 3000);
    }

    // 当客户端连接上来了
    private _onClientConnect(socket: WS, request: http.IncomingMessage) {
        this._clientConnectedCount_ += 1;
        this._clientIndex += 1;
        const session = new this._sessionClass(
            socket,
            this._clientIndex,
            request.socket.remoteAddress,
        );
        this._sessionMap.set(session.sessionId, session);
        socket.on('close', this._onClientSocketClose.bind(this, session));
        socket.on('message', this.onClientMessage.bind(this, session));
        logger.info(`新的连接 => ip:${session.remoteAddress}  sessionId:${session.sessionId} `
            + ` 当前socket数量:${this._clientConnectedCount_}`);

        this.onClientConnect(session, request);
    }

    // 客户端Socket关闭
    private _onClientSocketClose(session: T) {
        session.socket.removeAllListeners();
        this._sessionMap.delete(session.sessionId);
        this._clientConnectedCount_ -= 1;
        this.onClientSocketClose(session);
        logger.info(`连接断开 => ip:${session.remoteAddress}  sessionId:${session.sessionId} `
            + `当前socket数量:${this._clientConnectedCount_}`);
    }

    // 客户端信息到达
    private onClientMessage(session: T, message: WS.Data) {
        try {
            session.$onClientMessage(message);
        } catch (error) {
            logger.error('处理客户端信息出错:', error);
        }
    }

    send(sessionId: number, buff: Buffer) {
        this._sessionMap.get(sessionId)?.socket.send(buff);
    }

    kick(sessionId: number) {
        this._sessionMap.get(sessionId)?.socket.close();
    }

    private messageCountReset() {
        this._sessionMap.forEach((session) => {
            session.recieveMsgCount = 0;
            session.socket.ping();
        });
    }
}
