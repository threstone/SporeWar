import { GlobalVar } from '../GlobalVar';

export class ChannelRemote {
    broadCastChannelMsg(channelName: string, buffer: Buffer): void {
        GlobalVar.channelMgr.handleChannelMessage(channelName, buffer);
    }
}
