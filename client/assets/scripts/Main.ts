import { Notifier } from "./framework/notify/Notifier";
import { NotifyID } from "./framework/notify/NotifyID";
import { Cfg } from "./config/Cfg";
import { ViewMgr } from "./manager/ViewMgr";
import { MessageMgr } from "./manager/MessageMgr";
import * as CommonProto from "./framework/proto/CommonProto";


const { ccclass } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    async start() {
        await this.loadConfig();

        ViewMgr.ins();
        MessageMgr.init(CommonProto);
    }

    loadConfig() {
        let loadlist = [];
        for (let key in Cfg.keyJson) {
            loadlist.push(Cfg.initLocalJson(key));
        }
        return Promise.all(loadlist);
    }

    protected update(dt: number): void {
        Notifier.send(NotifyID.GameUpdate, dt);
    }
}
