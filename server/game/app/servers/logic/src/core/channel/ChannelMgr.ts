import { Player } from '../player/Player';
import { Channel } from './Channel';

export class ChannelMgr {
    private _channelMap = new Map<string, Channel>();

    addToChannel(channelName: string, player: Player) {
        let channel = this._channelMap.get(channelName);
        if (!channel) {
            channel = new Channel(channelName);
            this._channelMap.set(channelName, channel);
        }

        channel.add(player);
    }

    removeFromChannel(channelName: string, player: Player) {
        const channel = this._channelMap.get(channelName);
        channel?.remove(player);
    }

    handleChannelMessage(channelName: string, buffer: Buffer) {
        this._channelMap.get(channelName)?.broadcastBuffer(buffer);
    }
}
