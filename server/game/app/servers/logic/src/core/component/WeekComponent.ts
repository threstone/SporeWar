import { WeekModel } from '../../../../../core/sequelize/model/game/WeekModel';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { TimeMgr } from '../TimeMgr';
import { BaseComponent } from './BaseComponent';

/** 玩家每周信息组件 */
export class WeekComponent extends BaseComponent<WeekModel> {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected async init() {
        TimeMgr.ins().on(EventEnum.NewWeek, this.onNewWeek, this);
        await this.onNewWeek();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
        TimeMgr.ins().off(EventEnum.NewWeek, this.onNewWeek, this);
    }

    protected async onNewWeek() {
        const { intFormatWeek } = TimeMgr.ins();
        const weekModel = await this.player.getModel(WeekModel);
        const modelInfo = (await weekModel.findOrCreate({ where: { userId: this.player.userId, week: intFormatWeek } }))[0];
        if (!this.model || modelInfo.week > this.model.week) {
            this.model = modelInfo;
        }
    }
}
