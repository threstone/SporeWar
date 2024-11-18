import { RpcRouteType } from 'stone-framework';
import { MatchTypeEnum } from '../../../../Enum';
import { GlobalVar } from '../GlobalVar';
import { BattleSession } from '../BattleSession';
import { BattlePto } from '../../../../core/proto/CommonProto';
import { BattleTableMgr } from '../battle/BattleTableMgr';

export class PrepareTable {
    matchType: MatchTypeEnum;

    userId1: string;

    logicNode1: string;

    userId2: string;

    logicNode2: string;

    expireTime: number;

    battleToken: string;

    isDestroy = false;

    private _readySessions: BattleSession[] = [];

    constructor(
        matchType: MatchTypeEnum,
        userId1: string, logicNode1: string, serverId1: number,
        userId2: string, logicNode2: string, serverId2: number,
    ) {
        this.matchType = matchType;
        this.userId1 = userId1;
        this.logicNode1 = logicNode1;
        this.userId2 = userId2;
        this.logicNode2 = logicNode2;
        this.expireTime = Date.now() + 10000;
        this.battleToken = Buffer.from(`${matchType}-${userId1}-${userId2}-${Date.now()}`).toString('base64');
        this.notify(serverId1, serverId2);
    }

    notify(serverId1: number, serverId2: number) {
        logger.debug('通知对战位置信息');
        rpc.logic.matchRemote.sendMatchSuccess(
            { type: RpcRouteType.Target, nodeId: this.logicNode1 },
            this.battleToken,
            GlobalVar.battleServer.address,
            this.userId1,
            serverId1,
            this.expireTime,
        );
        rpc.logic.matchRemote.sendMatchSuccess(
            { type: RpcRouteType.Target, nodeId: this.logicNode2 },
            this.battleToken,
            GlobalVar.battleServer.address,
            this.userId2,
            serverId2,
            this.expireTime,
        );
    }

    onExpire() {
        this._readySessions.forEach((session) => {
            session.sendMessage(new BattlePto.S_BATTLE_EXPIRE());
        });
        this.isDestroy = true;
    }

    onPlayerConnect(session: BattleSession) {
        this._readySessions.push(session);
        this.checkStart();
    }

    onPlayerDisConnect(session: BattleSession) {
        this._readySessions.splice(this._readySessions.indexOf(session), 1);
    }

    private checkStart() {
        let u1Find = false;
        let u2Find = false;
        this._readySessions.forEach((session) => {
            if (session.userId === this.userId1) {
                u1Find = true;
            }
            if (session.userId === this.userId2) {
                u2Find = true;
            }
        });

        if (u1Find && u2Find) {
            this.isDestroy = true;
            BattleTableMgr.ins().startBattle(this._readySessions);
            this._readySessions = null;
        }
    }
}
