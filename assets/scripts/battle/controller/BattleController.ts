import { Notifier } from "../../framework/notify/Notifier";
import { NotifyID } from "../../framework/notify/NotifyID";
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

    private startBattle(mapId: number, p1Uid: string, p2Uid: string) {
        if (!this._view) {
            cc.resources.load('/prefab/battle/BattleView', cc.Prefab, (err, battlePrefab) => {
                const battleView = cc.instantiate(battlePrefab);
                this._view = battleView.getComponent(BattleView);
                cc.director.getScene().getChildByName("Canvas").addChild(battleView);
                this._model.startBattle(mapId, p1Uid, p2Uid);
                this._view.startBattle();
            });
        } else {
            this._model.startBattle(mapId, p1Uid, p2Uid);
            this._view.node.active = true;
            this._view.startBattle();
        }
    }
}
BattleController.ins();
