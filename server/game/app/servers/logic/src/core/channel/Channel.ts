import { GlobalVar } from '../../GlobalVar';
import { Player } from '../player/Player';
import { ProtoBufEncoder } from '../ProtoBufEncoder';

export class Channel {
    channelName: string;

    private _keySet = new Set<string>();

    constructor(channelName: string) {
        this.channelName = channelName;
    }

    add(player: Player) {
        this._keySet.add(player.uuid);
    }

    remove(player: Player) {
        this._keySet.delete(player.uuid);
    }

    broadcastMessage(message: IGameMessage) {
        logger.debug(`广播频道消息 channelName : ${this.channelName} , ${message.constructor.name} : ${JSON.stringify(message)}`);
        this.broadcastBuffer(ProtoBufEncoder.encode(message));
    }

    broadcastBuffer(buffer: Buffer) {
        this._keySet.forEach((uuid) => {
            GlobalVar.SessionMgr.getSessionByUuid(uuid)?.sendBuffer(buffer);
        });
    }
}
