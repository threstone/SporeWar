import { RpcRouteType } from 'stone-framework';
import { MatchTypeEnum } from '../../../Enum';
import { MatchUser } from './MatchUser';

export abstract class BaseMatch {
    protected _users: MatchUser[] = [];

    protected _userSet = new Set<string>();

    private _matchType: MatchTypeEnum;

    abstract logicRun(): void;

    constructor(matchType: MatchTypeEnum) {
        this._matchType = matchType;
    }

    startMatch(logicNode: string, uuid: string, rank?: number): boolean {
        if (!this._userSet.has(uuid)) {
            this._userSet.add(uuid);
            this._users.push({
                uuid, logicNode, rank, startTime: Date.now(),
            });
        }
        return true;
    }

    stopMatch(uuid: string): boolean {
        if (this._userSet.has(uuid)) {
            this._userSet.delete(uuid);
            for (let index = 0; index < this._users.length; index++) {
                if (this._users[index].uuid === uuid) {
                    this._users.splice(index, 1);
                    break;
                }
            }
        }
        return true;
    }

    matchSuccess(user1: MatchUser, user2: MatchUser) {
        logger.debug('匹配成功', this._matchType, user1, user2);
        rpc.battle.battleRemote.sendCreateTable(
            { type: RpcRouteType.Random },
            this._matchType,
            user1.uuid,
            user1.logicNode,
            user2.uuid,
            user2.logicNode,
        );
    }
}
