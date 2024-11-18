import { RpcRouteType } from 'stone-framework';
import { MatchTypeEnum } from '../../../../Enum';
import { GlobalVar } from '../GlobalVar';

export class PrepareTable {
    matchType: MatchTypeEnum;

    uuid1: string;

    logicNode1: string;

    uuid2: string;

    logicNode2: string;

    expireTime: number;

    battleToken: string;

    constructor(matchType: MatchTypeEnum, uuid1: string, logicNode1: string, uuid2: string, logicNode2: string) {
        this.matchType = matchType;
        this.uuid1 = uuid1;
        this.logicNode1 = logicNode1;
        this.uuid2 = uuid2;
        this.logicNode2 = logicNode2;
        this.expireTime = Date.now() + 10000;
        this.battleToken = Buffer.from(`${matchType}-${uuid1}-${uuid2}-${Date.now()}`).toString('base64');
        this.notify();
    }

    notify() {
        logger.debug('通知对战位置信息');
        rpc.logic.matchRemote.sendMatchSuccess(
            { type: RpcRouteType.Target, nodeId: this.logicNode1 },
            this.battleToken,
            GlobalVar.battleServer.address,
            this.uuid1,
            this.expireTime,
        );
        rpc.logic.matchRemote.sendMatchSuccess(
            { type: RpcRouteType.Target, nodeId: this.logicNode2 },
            this.battleToken,
            GlobalVar.battleServer.address,
            this.uuid2,
            this.expireTime,
        );
    }

    onExpire() {

    }

    onPlayerConnect() {
        this.checkStart();
    }

    onPlayerDisConnect() {

    }

    private checkStart() {

    }
}
