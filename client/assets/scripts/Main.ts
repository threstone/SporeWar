import { Notifier } from "./framework/notify/Notifier";
import { NotifyID } from "./framework/notify/NotifyID";
import { Cfg } from "./config/Cfg";
import { ViewManager } from "./manager/ViewManager";

const { ccclass } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    async start() {
        await this.loadConfig();

        ViewManager.ins();
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
