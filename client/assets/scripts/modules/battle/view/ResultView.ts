import BaseView from "../../../framework/BaseView";
import { ViewMgr } from "../../../manager/ViewMgr";
import { UserVo } from "../../vo/UserVo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultView extends BaseView {
    @property(cc.Node)
    winSp: cc.Node = null;

    @property(cc.Node)
    loseSp: cc.Node = null;

    onOpen(winUserId: string): void {
        this.winSp.active = winUserId === UserVo.ins().userId;
        this.loseSp.active = winUserId !== UserVo.ins().userId;
    }

    close(): void {
        ViewMgr.ins().closeView('/prefab/battle/BattleView');
        super.close();
    }
}