import { Notifier } from "../../../framework/notify/Notifier";
import { NotifyID } from "../../../framework/notify/NotifyID";
import { ViewManager } from "../../../manager/ViewManager";
import { BattleModel } from "../model/BattleModel";
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
        Notifier.addListener(NotifyID.GameUpdate, this.update, this);
        Notifier.addListener(NotifyID.StartBattle, this.startBattle, this);
    }

    private update(dt: number) {
        this._model.update(dt);
    }

    private async startBattle(mapId: number, p1Uid: string, p2Uid: string) {
        if (!this._view) {
            const battleView = await ViewManager.ins().openView('/prefab/battle/BattleView');
            this._model.startBattle(mapId, p1Uid, p2Uid);
            this._view = battleView.getComponent(BattleView);
            this._view.startBattle();
        } else {
            this._model.startBattle(mapId, p1Uid, p2Uid);
            this._view.node.active = true;
            this._view.startBattle();
        }
    }
}
BattleController.ins();
