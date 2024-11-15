import { MonthModel } from '../../../../../core/sequelize/model/game/MonthModel';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { TimeMgr } from '../TimeMgr';
import { BaseComponent } from './BaseComponent';

/** 玩家每月信息组件 */
export class MonthComponent extends BaseComponent<MonthModel> {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected async init() {
        TimeMgr.ins().on(EventEnum.NewMonth, this.onNewMonth, this);
        await this.onNewMonth();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
        TimeMgr.ins().off(EventEnum.NewMonth, this.onNewMonth, this);
    }

    protected async onNewMonth() {
        const { intFormatMonth } = TimeMgr.ins();
        const monthModel = await this.player.getModel(MonthModel);
        const modelInfo = (await monthModel.findOrCreate({ where: { userId: this.player.userId, month: intFormatMonth } }))[0];
        if (!this.model || modelInfo.month > this.model.month) {
            this.model = modelInfo;
        }
    }
}
