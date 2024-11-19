import { BattlePto } from '../../../../core/proto/CommonProto';
import { BattleSession } from '../BattleSession';

export class BattleHandler {
    static C_BATTLE_REGIEST(session: BattleSession, msg: BattlePto.C_BATTLE_REGIEST) {
        session.onRegiest(msg);
    }

    static C_BATTLE_DISPATCH(session: BattleSession, msg: BattlePto.C_BATTLE_DISPATCH) {
        session.battleTable.addDispatchInfo(msg.dispatchInfo);
    }

    static C_BATTLE_END(session: BattleSession, msg: BattlePto.C_BATTLE_END) {
        session.battleTable.onGameOver(msg.winUserId);
    }
}
