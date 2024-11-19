import { StagePto } from '../../../../core/proto/CommonProto';
import { Player } from '../core/player/Player';
import { Session } from '../core/session/session';

export class StageHandler {
    static async C_PASS_STAGE(session: Session, player: Player, msg: StagePto.C_PASS_STAGE) {
        if (msg.stageId === player.playerInfo.stageId) {
            player.playerInfo.stageId = msg.stageId + 1;
            player.savePlayerInfo(['stageId']);
        }
        session.sendMessage(new StagePto.S_PASS_STAGE({ stageId: player.playerInfo.stageId }));
    }
}
