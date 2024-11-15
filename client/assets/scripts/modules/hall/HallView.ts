import { Cfg } from "../../config/Cfg";
import BaseView from "../../framework/BaseView";
import { UserVo } from "../vo/UserVo";
import StageBtn from "./StageBtn";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallView extends BaseView {

    @property(cc.Layout)
    stageList: cc.Layout = null;

    @property(cc.Prefab)
    stageBtnPrefab: cc.Prefab = null;

    @property(cc.Label)
    matchBtnLabel: cc.Label = null;

    onOpen(): void {
        const stageConfigs = Cfg.Stage.getArray();
        this.stageList.node.removeAllChildren();
        for (let index = 0; index < stageConfigs.length; index++) {
            const cfg = stageConfigs[index];
            const item = cc.instantiate(this.stageBtnPrefab);
            const script = item.getComponent(StageBtn);
            script.setStage(cfg);
            item.parent = this.stageList.node;
        }
    }


    private _isMatching: boolean = false;
    private _startMatchingTime: number;
    onMatchBtnClick() {
        if (this._isMatching) {
            this.stopMatching();
        } else {
            this.startMatching();
        }
    }

    protected update(dt: number): void {
        if (this._isMatching) {
            const now = Date.now();
            const time = now - this._startMatchingTime;
            this.matchBtnLabel.string = `匹配中,点击取消(${Math.floor(time / 1000)})`;
        }
    }

    protected onDisable(): void {
        this.stopMatching();
    }

    private startMatching() {
        if (this._isMatching === true) {
            return;
        }
        this._isMatching = true;
        this.matchBtnLabel.string = '匹配中,点击取消';
        this._startMatchingTime = Date.now();
    }

    private stopMatching() {
        if (this._isMatching === false) {
            return;
        }
        this._isMatching = false;
        this.matchBtnLabel.string = '匹配';
    }
}