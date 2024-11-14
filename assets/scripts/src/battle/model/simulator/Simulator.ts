import { Cfg } from "../../../../config/Cfg";
import { MapCfg } from "../../../../config/MapCfg";
import { Notifier } from "../../../../framework/notify/Notifier";
import { NotifyID } from "../../../../framework/notify/NotifyID";
import Random from "../../../../util/Random";
import { Building } from "../entity/Building";
import { Entity } from "../entity/Entity";
import { Robot } from "../robot/Robot";
import { InputHandler } from "./inputHandler/InputHandler";

export class Simulator {

    public static frameRate = 120;
    public static frameInterval = 1 / Simulator.frameRate;

    private _incrId: number;
    get entityId() {
        return this._incrId++;
    }

    mapConfig: MapCfg;

    entityMap = new Map<number, Entity>();
    buildingMap = new Map<number, Building>();

    random = new Random();

    protected robot: Robot;

    inputHandler: InputHandler;

    startBattle(mapId: number, p1Uid: string, p2Uid: string, seed: number = 0) {
        const mapConfig = Cfg.Map.get(mapId);
        if (!mapConfig) return false;

        this.mapConfig = mapConfig;
        this.random.seed = seed;
        this._incrId = 0;

        mapConfig.selfBase.forEach(info => {
            const id = this.entityId;
            const building = new Building(p1Uid, id, info);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        mapConfig.enemyBase.forEach(info => {
            const id = this.entityId;
            const building = new Building(p2Uid, id, info);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        mapConfig.mapBuilding.forEach(info => {
            const id = this.entityId;
            const building = new Building(null, id, info);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        return true;
    }

    update() {
        this.entityMap.forEach(entity => {
            if (entity.isDestroy) {
                this.entityMap.delete(entity.id);
                return;
            }
            entity.update(Simulator.frameInterval);
        });

        // 机器人逻辑
        this.robot?.update();

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
        console.log('game over win uid:', winUid);
        Notifier.send(NotifyID.EndBattle, winUid);
    }

    endGame() {
        this.entityMap.clear();
        this.buildingMap.clear();

        this.robot = null;
    }

    getBuildingListByUid(uid: string) {
        const result: Building[] = [];
        this.buildingMap.forEach((building) => {
            if (building.uid === uid) {
                result.push(building);
            }
        });
        return result;
    }

    /** 排除指定uid的基地列表 */
    getBuildingListExcludeUid(uid: string) {
        const result: Building[] = [];
        this.buildingMap.forEach((building) => {
            if (building.uid !== uid) {
                result.push(building);
            }
        });
        return result;
    }
}

export enum SimulatorTypeEnum {
    Local,
    Online
}