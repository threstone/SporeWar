import { Notifier } from "../../../framework/notify/Notifier";
import { NotifyID } from "../../../framework/notify/NotifyID";
import { SingleClass } from "../../../framework/SingleClass";
import { ViewMgr } from "../../../manager/ViewMgr";
import { BattleModel } from "../model/BattleModel";
import { SimulatorTypeEnum } from "../model/simulator/Simulator";
import BattleView from "../view/BattleView";

export class BattleController extends SingleClass{

    private _model = BattleModel.ins();
    private _view: BattleView;

    get view() { return this._view; }

    constructor() {
        super();
        Notifier.addListener(NotifyID.StartBattle, this.startBattle, this);
        Notifier.addListener(NotifyID.EndBattle, this.endBattle, this);
    }

    private async startBattle(mapId: number, p1Uid: string, p2Uid: string) {
        const battleView = await ViewMgr.ins().openView('/prefab/battle/BattleView');
        if (this._model.startBattle(SimulatorTypeEnum.Local, mapId, p1Uid, p2Uid) === false) {
            ViewMgr.ins().closeView('/prefab/battle/BattleView');
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
            ViewMgr.ins().closeView('/prefab/battle/BattleView');
        }
    }

}
BattleController.ins();