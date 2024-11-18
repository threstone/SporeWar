import { Notifier } from "../../../../framework/notify/Notifier";
import { NotifyID } from "../../../../framework/notify/NotifyID";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleUIView extends cc.Component {
    @property(cc.ProgressBar)
    dispatchBar: cc.ProgressBar = null;

    get dispatchRate() {
        return Math.floor(this.dispatchBar.progress * 10000);
    }

    onCloseBtnClick() {
        Notifier.send(NotifyID.EndBattle);
    }
}