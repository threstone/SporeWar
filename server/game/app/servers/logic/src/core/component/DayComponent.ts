import { DayModel } from '../../../../../core/sequelize/model/game/DayModel';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { TimeMgr } from '../TimeMgr';
import { BaseComponent } from './BaseComponent';

/** 玩家每日信息组件 */
export class DayComponent extends BaseComponent<DayModel> {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected async init() {
        TimeMgr.ins().on(EventEnum.NewDay, this.onNewDay, this);
        await this.onNewDay();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
        TimeMgr.ins().off(EventEnum.NewDay, this.onNewDay, this);
    }

    protected async onNewDay() {
        const { intFormatDay } = TimeMgr.ins();
        const dayModel = await this.player.getModel(DayModel);
        const modelInfo = (await dayModel.findOrCreate({ where: { userId: this.player.userId, day: intFormatDay } }))[0];
        if (!this.model || modelInfo.day > this.model.day) {
            this.model = modelInfo;
        }
    }
}
