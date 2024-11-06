
const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleUIView extends cc.Component {
    @property(cc.ProgressBar)
    dispatchBar: cc.ProgressBar = null;
    get dispatchRate() {
        return this.dispatchBar.progress;
    }
}