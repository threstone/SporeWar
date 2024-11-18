import BaseView from "../../framework/BaseView";
import { MatchModel } from "./MatchModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MatchView extends BaseView {

    @property(cc.Label)
    timeLabel: cc.Label = null;

    private _startTime: number;

    onOpen(startTime: number): void {
        this.timeLabel.string = '0s';
        this._startTime = startTime;
    }

    onCancelBtnClick() {
        MatchModel.ins().stopMatching();
    }

    protected update(dt: number): void {
        const now = Date.now();
        const time = now - this._startTime;
        this.timeLabel.string = `${Math.floor(time / 1000)}s`;
    }
}