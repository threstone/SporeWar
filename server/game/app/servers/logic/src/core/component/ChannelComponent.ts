import { RpcRouteType } from 'stone-framework';
import { GlobalVar } from '../../GlobalVar';
import { Player } from '../player/Player';
import { ProtoBufEncoder } from '../ProtoBufEncoder';
import { BaseComponent } from './BaseComponent';

export class ChannelComponent extends BaseComponent<any> {
    private _channelSet = new Set<string>();

    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected init(player: Player) {
        this.addChannel(`PlayerChanel${player.userId}`);
        this.addChannel('OnlinePlayer');
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
        this._channelSet.forEach((channelName) => {
            GlobalVar.channelMgr.removeFromChannel(channelName, this.player);
        });
    }

    addChannel(channelName: string) {
        this._channelSet.add(channelName);
        GlobalVar.channelMgr.addToChannel(channelName, this.player);
    }

    sendMessageToChannel(channelName: string, message: IGameMessage) {
        rpc.logic.channelRemote.sendBroadCastChannelMsg(
            { type: RpcRouteType.All },
            channelName,
            ProtoBufEncoder.encode(message),
        );
    }
}
