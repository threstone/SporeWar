import { RpcRouteType } from 'stone-framework';
import { MatchPto } from '../../../../core/proto/CommonProto';
import { Player } from '../core/player/Player';
import { Session } from '../core/session/session';

export class MatchHandler {
    static async C_START_MATCHING(session: Session, player: Player, msg: MatchPto.C_START_MATCHING) {
        await rpc.match.matchReomte.callStartMatch(
            { type: RpcRouteType.Random },
            msg.type,
            nodeId,
            player.playerInfo.userId,
            player.serverId,
            0,
        );
        session.sendMessage(new MatchPto.S_START_MATCHING({ startTime: Date.now() }));
    }

    static async C_CANCEL_MATCHING(session: Session, player: Player, msg: MatchPto.C_CANCEL_MATCHING) {
        await rpc.match.matchReomte.callStopMatch(
            { type: RpcRouteType.Random },
            msg.type,
            player.playerInfo.userId,
        );
        session.sendMessage(new MatchPto.S_CANCEL_MATCHING());
    }
}
