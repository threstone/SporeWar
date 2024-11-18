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

    startMatch(logicNode: string, userId: string, serverId: number, rank?: number): boolean {
        if (!this._userSet.has(userId)) {
            this._userSet.add(userId);
            this._users.push({
                userId, serverId, logicNode, rank, startTime: Date.now(),
            });
        }
        return true;
    }

    stopMatch(userId: string): boolean {
        if (this._userSet.has(userId)) {
            this._userSet.delete(userId);
            for (let index = 0; index < this._users.length; index++) {
                if (this._users[index].userId === userId) {
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
            user1.userId,
            user1.logicNode,
            user1.serverId,
            user2.userId,
            user2.logicNode,
            user2.serverId,
        );
    }
}
