import { Cfg } from "../../../../config/Cfg";
import { MapCfg } from "../../../../config/MapCfg";
import { Notifier } from "../../../../framework/notify/Notifier";
import { NotifyID } from "../../../../framework/notify/NotifyID";
import Random from "../../../../util/Random";
import { Building } from "./entity/Building";
import { Entity } from "./entity/Entity";
import { Robot } from "../robot/Robot";
import { InputHandler } from "./inputHandler/InputHandler";

export class Simulator {
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

    frameRate: number;
    frameInterval: number;

    tk = 0;
    constructor(frameRate: number) {
        this.frameRate = frameRate;
        this.frameInterval = 1 / frameRate;
        setInterval(() => {
            console.log(`过去1s tk = `, this.tk);
            this.tk = 0;
        }, 1000);
    }

    startBattle(mapId: number, p1UserId: string, p2UserId: string, seed: number = 0) {
        const mapConfig = Cfg.Map.get(mapId);
        if (!mapConfig) return false;

        this.mapConfig = mapConfig;
        this.random.seed = seed;
        this._incrId = 0;

        mapConfig.selfBase.forEach(info => {
            const id = this.entityId;
            const building = new Building(p1UserId, id, info, this);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        mapConfig.enemyBase.forEach(info => {
            const id = this.entityId;
            const building = new Building(p2UserId, id, info, this);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        mapConfig.mapBuilding.forEach(info => {
            const id = this.entityId;
            const building = new Building(null, id, info, this);
            this.entityMap.set(id, building);
            this.buildingMap.set(id, building)
        });
        return true;
    }

    update() {
        this.tk++;
        this.entityMap.forEach(entity => {
            if (entity.isDestroy) {
                this.entityMap.delete(entity.id);
                return;
            }
            entity.update(this.frameInterval);
        });

        // 机器人逻辑
        this.robot?.update();

        // 检查游戏是否结束
        this.checkGameOver();
    }

    private checkGameOver() {
        let userId1: string;
        for (const [key, entity] of this.entityMap) {
            if (entity.userId == null) {
                continue;
            }

            if (!userId1) {
                userId1 = entity.userId;
                continue;
            }

            if (entity.userId != userId1) {
                return
            }
        }

        this.onGameOver(userId1);
    }

    protected onGameOver(winUserId: string) {
        console.log('game over win userId:', winUserId);
        Notifier.send(NotifyID.EndBattle, winUserId);
    }

    endGame() {
        this.entityMap.clear();
        this.buildingMap.clear();

        this.robot = null;
    }

    getBuildingListByUserId(userId: string) {
        const result: Building[] = [];
        this.buildingMap.forEach((building) => {
            if (building.userId === userId) {
                result.push(building);
            }
        });
        return result;
    }

    /** 排除指定userId的基地列表 */
    getBuildingListExcludeUserId(userId: string) {
        const result: Building[] = [];
        this.buildingMap.forEach((building) => {
            if (building.userId !== userId) {
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