import { UserVo } from "./vo/UserVo";
import { Notifier } from "./framework/notify/Notifier";
import { NotifyID } from "./framework/notify/NotifyID";
import { Cfg } from "./config/Cfg";
import { Robot } from "./battle/model/robot/Robot";
import { BattleModel } from "./battle/model/BattleModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    async start() {
        await this.loadConfig();
        this.test();
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

    private test() {
        const robot = new Robot();
        Notifier.send(NotifyID.StartBattle, 1, UserVo.ins().uid, robot.uid);
        BattleModel.ins().setRobot(robot);
    }
}
