import { Cfg } from "../../config/Cfg";
import { MapCfg } from "../../config/MapCfg";
import Random from "../../util/Random";
import { Base } from "./entity/Base";
import { Entity } from "./entity/Entity";

export class BattleModel {

    private static _ins: BattleModel;
    static ins() {
        return this._ins || (this._ins = new this());
    }

    mapConfig: MapCfg;

    private _isBattle = false;

    private _incrId: number = 0;
    get entityId() {
        return this._incrId++;
    }

    entityMap: Map<number, Entity>;

    random = new Random();

    startBattle(mapId: number, p1Uid: string, p2Uid: string, seed: number = 0) {
        const mapConfig = Cfg.Map.get(mapId);
        if (!mapConfig) return;

        this.random.seed = seed;

        this.mapConfig = mapConfig;

        this._isBattle = true;
        this.entityMap = new Map();

        mapConfig.selfBase.forEach(info => {
            const id = this.entityId;
            this.entityMap.set(id, new Base(p1Uid, id, info))
        });
        mapConfig.enemyBase.forEach(info => {
            const id = this.entityId;
            this.entityMap.set(id, new Base(p2Uid, id, info))
        });
        mapConfig.mapBase.forEach(info => {
            const id = this.entityId;
            this.entityMap.set(id, new Base(null, id, info))
        });
    }

    update(dt: number) {
        if (!this._isBattle) {
            return;
        }

        this.entityMap.forEach(entity => {
            if (entity.isDestroy) {
                this.entityMap.delete(entity.id);
                return;
            }
            entity.update(dt);
        });
    }
}