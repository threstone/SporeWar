import { Notifier } from "../../../framework/notify/Notifier";
import { NotifyID } from "../../../framework/notify/NotifyID";
import { ViewManager } from "../../../manager/ViewManager";
import { BattleModel } from "../model/BattleModel";
import { SimulatorTypeEnum } from "../model/simulator/Simulator";
import BattleView from "../view/BattleView";

export class BattleController {
    private static _ins: BattleController;
    static ins() {
        return this._ins || (this._ins = new this());
    }

    private _model = BattleModel.ins();
    private _view: BattleView;

    get view() { return this._view; }

    constructor() {
        Notifier.addListener(NotifyID.StartBattle, this.startBattle, this);
        Notifier.addListener(NotifyID.EndBattle, this.endBattle, this);
    }

    private async startBattle(mapId: number, p1Uid: string, p2Uid: string) {
        const battleView = await ViewManager.ins().openView('/prefab/battle/BattleView');
        if (this._model.startBattle(SimulatorTypeEnum.Local, mapId, p1Uid, p2Uid) === false) {
            ViewManager.ins().closeView('/prefab/battle/BattleView');
        }

        if (!this._view) {
            this._view = battleView.getComponent(BattleView);
        }
        this._view.startBattle();
    }

    private endBattle(winUid: number) {
        this._model.endGame();
        this.view.endBattle();
        if (!winUid) {
            ViewManager.ins().closeView('/prefab/battle/BattleView');
        }
    }

}
BattleController.ins();