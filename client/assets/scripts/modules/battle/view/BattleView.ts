import { UserVo } from "../../vo/UserVo";
import { BattleModel } from "../model/BattleModel";
import { Building } from "../model/simulator/entity/Building";
import { Spore } from "../model/simulator/entity/Spore";
import { Entity } from "../model/simulator/entity/Entity";
import BuildingView from "./entity/BuildingView";
import BattleUIView from "./entity/BattleUIView";
import SporeView from "./entity/SporeView";
import BaseView from "../../../framework/BaseView";

export type EntityNode = cc.Node & { id: number, from: cc.NodePool, view: { updateEntity: (buildingInfo: Entity) => void } };
const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleView extends BaseView {
    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Node)
    sporeNode: cc.Node = null;

    @property(cc.Node)
    buildingNode: cc.Node = null;

    @property(cc.Prefab)
    buildingPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    spore: cc.Prefab = null;

    private _uiView: BattleUIView;
    private _entityNodeMap: Map<number, EntityNode>;

    private _buildingPool: cc.NodePool = null;
    private _sporePool: cc.NodePool = null;

    private _arrow: cc.Node;

    protected onLoad(): void {
        this._buildingPool = new cc.NodePool();
        this._sporePool = new cc.NodePool();
        this._entityNodeMap = new Map();
        this._arrow = this.node.getChildByName('gameNode').getChildByName('arrow');
        this._uiView = this.node.getChildByName('uiNode').getComponent(BattleUIView);
    }

    onOpen(...args: any[]): void {

    }

    startBattle() {
        cc.resources.load(BattleModel.ins().simulator.mapConfig.bgPath, cc.SpriteFrame, (err, spriteFrame) => {
            this.bg.spriteFrame = spriteFrame;
        });
        this.addEvents();
    }

    endBattle() {
        this.removeEvents();
        this.clearEntitys();
    }

    private addEvents() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    private removeEvents() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    protected update(): void {
        if (!BattleModel.ins().simulator) { return; }
        this.updateEntitys();
    }

    private _touchId: number;
    private _selectBuilding: EntityNode;
    private touchStart(event: cc.Event.EventTouch) {
        const simulator = BattleModel.ins().simulator;
        if (!simulator) { return; }

        if (this._touchId != null) { return; }

        const pos = this.sporeNode.convertToNodeSpaceAR(event.getLocation());
        const buildingNodes = this.getTargetBuildingNode(pos, 50);
        const selectBuilding = buildingNodes[0];
        if (selectBuilding && simulator.entityMap.get(selectBuilding.id).userId === UserVo.ins().userId) {
            this._touchId = event.touch.getID();
            this._selectBuilding = selectBuilding;
            this._arrow.active = true;
            this._arrow.setPosition(selectBuilding.getPosition());
            this.touchMove(event);
        }
    }

    private touchMove(event: cc.Event.EventTouch) {
        if (this._arrow.active === false || this._touchId !== event.touch.getID()) return;

        let position = this.buildingNode.convertToNodeSpaceAR(event.getLocation());
        const buildingNodes = this.getTargetBuildingNode(position, 100);
        const targetNode = buildingNodes[0];
        if (targetNode) {
            position = targetNode.getPosition()
        }
        const subPos = position.sub(this._arrow.getPosition())
        this._arrow.angle = (360 * Math.atan2(subPos.y, subPos.x) / (2 * Math.PI)) - 92;
        this._arrow.setScale(subPos.len() / this._arrow.height);
    }

    private touchEnd(event: cc.Event.EventTouch) {
        if (this._touchId !== event.touch.getID() || this._selectBuilding == null) return;
        const pos = this.sporeNode.convertToNodeSpaceAR(event.getLocation());
        const targetBuilding = this.getTargetBuildingNode(pos, 100)[0];
        const selectBuilding = this._selectBuilding;
        this._arrow.active = false;
        this._touchId = null;
        this._selectBuilding = null;
        if (!targetBuilding || targetBuilding === selectBuilding) {
            return;
        }
        const { dispatchRate } = this._uiView;
        BattleModel.ins().simulator.inputHandler.dispatchSpore(selectBuilding.id, targetBuilding.id, dispatchRate);
    }

    private clearEntitys() {
        for (let index = this.sporeNode.childrenCount - 1; index >= 0; index--) {
            this._sporePool.put(this.sporeNode.children[index]);
        }
        for (let index = this.buildingNode.childrenCount - 1; index >= 0; index--) {
            this._buildingPool.put(this.buildingNode.children[index]);
        }
        this._entityNodeMap.clear();
    }

    private getBuildingEntity(): EntityNode {
        return (this._buildingPool.get() || cc.instantiate(this.buildingPrefab)) as EntityNode;
    }

    private getSporeEntity(): EntityNode {
        return (this._sporePool.get() || cc.instantiate(this.spore)) as EntityNode;
    }


    private updateEntitys() {
        const simulator = BattleModel.ins().simulator;
        this._entityNodeMap.forEach((entityNode, id) => {
            const entityInfo = simulator.entityMap.get(id);
            if (!entityInfo) {
                entityNode.from.put(entityNode);
                this._entityNodeMap.delete(id);
            } else {
                entityNode.view.updateEntity(entityInfo);
            }
        });
        simulator.entityMap.forEach((entityInfo) => {
            if (this._entityNodeMap.has(entityInfo.id)) {
                return;
            }

            if (entityInfo instanceof Building) {
                const buildingNode = this.getBuildingEntity();
                this._entityNodeMap.set(entityInfo.id, buildingNode);
                const view = buildingNode.getComponent(BuildingView);
                view.init(entityInfo);
                buildingNode.id = entityInfo.id;
                buildingNode.view = view;
                buildingNode.view.updateEntity(entityInfo);
                buildingNode.from = this._buildingPool;
                buildingNode.parent = this.buildingNode;
            } else if (entityInfo instanceof Spore) {
                const spore = this.getSporeEntity();
                this._entityNodeMap.set(entityInfo.id, spore);
                const view = spore.getComponent(SporeView);
                view.init(entityInfo);
                spore.id = entityInfo.id;
                spore.view = view;
                spore.view.updateEntity(entityInfo);
                spore.from = this._sporePool;
                spore.parent = this.sporeNode;
            }
        })
    }

    private getTargetBuildingNode(position: cc.Vec2, maxDistance: number): EntityNode[] {
        const result = [];
        for (let index = 0; index < this.buildingNode.childrenCount; index++) {
            const building = this.buildingNode.children[index];
            const distance = cc.Vec2.squaredDistance(building.getPosition(), position)
            if (distance < maxDistance ** 2) {
                result.push(building);
                (building as any).__distance = distance;
            }
        }

        result.sort((a, b) => { return a.__distance - b.__distance })
        return result;
    }
}
