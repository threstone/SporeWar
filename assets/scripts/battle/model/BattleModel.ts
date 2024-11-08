import { Cfg } from "../../config/Cfg";
import { MapCfg } from "../../config/MapCfg";
import Random from "../../util/Random";
import { Building } from "./entity/Building";
import { Entity } from "./entity/Entity";
import { Robot } from "./robot/Robot";

export class BattleModel {
    private static _ins: BattleModel;
    static ins() {
        return this._ins || (this._ins = new this());
    }

    mapConfig: MapCfg;

    private _isBattle = false;
    get isBattle() { return this._isBattle; }

    private _incrId: number = 0;
    get entityId() {
        return this._incrId++;
    }

    entityMap = new Map<number, Entity>();
    baseMap = new Map<number, Building>();

    random = new Random();

    private _robot: Robot;

    setRobot(robot: Robot) {
        this._robot = robot;
    }

    startBattle(mapId: number, p1Uid: string, p2Uid: string, seed: number = 0) {
        const mapConfig = Cfg.Map.get(mapId);
        if (!mapConfig) return;

        this.random.seed = seed;
        this.mapConfig = mapConfig;

        this._isBattle = true;

        mapConfig.selfBase.forEach(info => {
            const id = this.entityId;
            const base = new Building(p1Uid, id, info);
            this.entityMap.set(id, base);
            this.baseMap.set(id, base)
        });
        mapConfig.enemyBase.forEach(info => {
            const id = this.entityId;
            const base = new Building(p2Uid, id, info);
            this.entityMap.set(id, base);
            this.baseMap.set(id, base)
        });
        mapConfig.mapBuilding.forEach(info => {
            const id = this.entityId;
            const base = new Building(null, id, info);
            this.entityMap.set(id, base);
            this.baseMap.set(id, base)
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

        // 机器人逻辑
        this._robot?.update();

        // 检查游戏是否结束
        this.checkGameOver();
    }

    private checkGameOver() {
        let uid1: string;
        for (const [key, entity] of this.entityMap) {
            if (entity.uid == null) {
                continue;
            }

            if (!uid1) {
                uid1 = entity.uid;
                continue;
            }

            if (entity.uid != uid1) {
                return
            }
        }

        this.onGameOver(uid1);
    }

    private onGameOver(winUid: string) {
        this.entityMap.clear();
        this.baseMap.clear();

        this._robot = null;
        console.log('game over win uid:', winUid);
        this._isBattle = false;
        this.mapConfig = null;
    }

    getBaseListByUid(uid: string) {
        const result: Building[] = [];
        this.baseMap.forEach((base) => {
            if (base.uid === uid) {
                result.push(base);
            }
        });
        return result;
    }

    /** 排除指定uid的基地列表 */
    getBaseListExcludeUid(uid: string) {
        const result: Building[] = [];
        this.baseMap.forEach((base) => {
            if (base.uid !== uid) {
                result.push(base);
            }
        });
        return result;
    }
}