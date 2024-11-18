import { MatchTypeEnum } from '../../../Enum';
import { BaseMatch } from './BaseMatch';
import { NormalMatch } from './NormalMatch';
import { RankMatch } from './RankMatch';

export class MatchMgr {
    private static _insMap: Map<MatchTypeEnum, BaseMatch>;

    static init() {
        this._insMap = new Map();
        this._insMap.set(MatchTypeEnum.Nomal, new NormalMatch(MatchTypeEnum.Nomal));
        this._insMap.set(MatchTypeEnum.Rank, new RankMatch(MatchTypeEnum.Rank, 100));
        setInterval(this.logicRun.bind(MatchMgr), 1000);
    }

    private static logicRun() {
        this._insMap.forEach((m) => { m.logicRun(); });
    }

    static getMgr(matchType: MatchTypeEnum) {
        return this._insMap.get(matchType);
    }
}
