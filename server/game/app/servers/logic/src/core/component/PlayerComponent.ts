import { PlayerModel } from '../../../../../core/sequelize/model/game/PlayerModel';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';

export class PlayerComponent extends BaseComponent<PlayerModel> {
    protected init(player: Player): Promise<void> | void {
        this.model = player.playerInfo;
    }

    protected onDestroy(): void {
    }

    protected onPlayerInitEnd(): void {
    }
}
