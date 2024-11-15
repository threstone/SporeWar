import { GlobalVar } from '../GlobalVar';

export class GateRemote {
    sendMessage(sessionId: number, buff: Buffer): void {
        GlobalVar.gateServer.send(sessionId, buff);
    }

    kick(sessionId: number, buffer?: Buffer): void {
        if (buffer) {
            GlobalVar.gateServer.send(sessionId, buffer);
        }
        GlobalVar.gateServer.kick(sessionId);
    }
}
