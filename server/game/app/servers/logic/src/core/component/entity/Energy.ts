import { Cfg } from '../../../../../../core/config/Cfg';
import { EnergyModel } from '../../../../../../core/sequelize/model/game/EnergyModel';
import { ItemPto } from '../../../CommonProto';
import { Player } from '../../player/Player';

export class Energy {
    private _model: EnergyModel;

    private _player: Player;

    get recoverInterval() {
        return Cfg.Items.get(this._model.itemId).json[0][0];
    }

    get max() {
        return Cfg.Items.get(this._model.itemId).json[0][1];
    }

    /** 是否允许体力突破上限 */
    get allowUpperLimit() {
        return Cfg.Items.get(this._model.itemId).json[0][2];
    }

    get count() {
        return this._model.count;
    }

    constructor(model: EnergyModel, player: Player) {
        this._model = model;
        this._player = player;
        this.onUpdate(Date.now());
    }

    update(num: number) {
        if (num === 0) {
            return null;
        }
        return num < 0 ? this.reduce(num) : this.add(num);
    }

    private add(num: number) {
        if (this.allowUpperLimit) {
            this._model.count += num;
        } else {
            this._model.count = Math.min(this._model.count + num, this.max);
        }

        if (this._model.count >= this.max) {
            this._model.nextRecoverTime = 0;
        }
        this.saveAndNotify();
        return true;
    }

    private reduce(num: number) {
        if (this._model.count < Math.abs(num)) {
            return false;
        }

        this._model.count += num;
        if (this._model.count < this.max && this._model.nextRecoverTime === 0) {
            this._model.nextRecoverTime = Date.now() + this.recoverInterval;
        }
        this.saveAndNotify();
        return true;
    }

    private saveAndNotify() {
        this._model.save({ validate: false });
        this._player.sendMessage(new ItemPto.S_ENERGY_UPDATE({ energy: this._model.toJSON() }));
    }

    onUpdate(now: number) {
        const { max } = this;
        if (this._model.count >= max) {
            return;
        }

        const { recoverInterval } = this;
        if (this._model.nextRecoverTime === 0) {
            this._model.nextRecoverTime = now + recoverInterval;
            return;
        }

        let addNum = 0;
        while (this._model.nextRecoverTime < now && (this._model.count + addNum) < max) {
            this._model.nextRecoverTime += recoverInterval;
            addNum += 1;
        }
        this.update(addNum);
    }

    toJSON() {
        return this._model.toJSON();
    }
}
