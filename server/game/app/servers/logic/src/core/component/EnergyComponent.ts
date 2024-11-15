import { EnergyModel } from '../../../../../core/sequelize/model/game/EnergyModel';
import { ItemPto } from '../../CommonProto';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';
import { Energy } from './entity/Energy';

export class EnergyComponent extends BaseComponent<EnergyModel> {
    private _modelMap = new Map<number, Energy>();

    private _timer: NodeJS.Timeout;

    private _EnergyModel: typeof EnergyModel;

    protected async init(player: Player) {
        const model = await player.getModel(EnergyModel);
        const energys = await model.findAll({ where: { userId: player.userId } });
        energys.forEach((energy) => {
            this._modelMap.set(energy.itemId, new Energy(energy, player));
        });
        this._timer = setInterval(this.onUpdate.bind(this), 1000);
        this._EnergyModel = await player.getModel(EnergyModel);
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy(): void {
        clearInterval(this._timer);
    }

    private onUpdate() {
        this._modelMap.forEach((energy) => {
            energy.onUpdate(Date.now());
        });
    }

    // eslint-disable-next-line no-unused-vars
    forEachItemMap(callbackfn: (value: Energy, itemId: number) => void, thisArg?: any) {
        this._modelMap.forEach(callbackfn, thisArg);
    }

    updateEnergy(tempItem: ItemPto.IItem) {
        let entity = this._modelMap.get(tempItem.itemId);
        if (!entity) {
            entity = new Energy(new this._EnergyModel({ itemId: tempItem.itemId, count: 0, userId: this.player.userId }), this.player);
            this._modelMap.set(tempItem.itemId, entity);
        }

        return entity.update(tempItem.count);
    }

    /** 获取体力(能量)值 */
    getEnergyCount(itemId: number) {
        return this._modelMap.get(itemId)?.count || 0;
    }
}
