import { DictEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';

/** 作为玩家字典使用,存储字典信息 */
export class DictionaryComponent extends BaseComponent<any> {
    private _dictionaryInfo: { [key: number]: any }

    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected init(player: Player) {
        this._dictionaryInfo = (player.playerInfo as any).dictionary;
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
    }

    getValue(key: DictEnum, defaultValue?: any) {
        if (this._dictionaryInfo[key] == null && defaultValue != null) {
            this._dictionaryInfo[key] = defaultValue;
        }
        return this._dictionaryInfo[key];
    }

    setValue(key: DictEnum, value: any) {
        this._dictionaryInfo[key] = value;
    }

    saveModel() {
        return this.player.savePlayerInfo('dictionary' as any);
    }
}
