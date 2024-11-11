import { UserVo } from "../../vo/UserVo";
import { BattleModel } from "../model/BattleModel";
import { Building } from "../model/entity/Building";
import { Spore } from "../model/entity/Spore";
import { Entity } from "../model/entity/Entity";
import BuildingView from "./entity/BuildingView";
import BattleUIView from "./entity/BattleUIView";
import SporeView from "./entity/SporeView";
import BaseView from "../../../framework/BaseView";

export type EntityNode = cc.Node & { id: number, from: cc.NodePool, view: { updateEntity: (baseInfo: Entity) => void } };
const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleView extends BaseView {
    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Node)
    sporeNode: cc.Node = null;

    @property(cc.Node)
    baseNode: cc.Node = null;

    @property(cc.Prefab)
    base: cc.Prefab = null;

    @property(cc.Prefab)
    spore: cc.Prefab = null;

    private _uiView: BattleUIView;
    private _entityNodeMap: Map<number, EntityNode>;

    private _basePool: cc.NodePool = null;
    private _sporePool: cc.NodePool = null;

    private _arrow: cc.Node;

    protected onLoad(): void {
        this._basePool = new cc.NodePool();
        this._sporePool = new cc.NodePool();
        this._entityNodeMap = new Map();
        this._arrow = this.node.getChildByName('gameNode').getChildByName('arrow');
        this._uiView = this.node.getChildByName('uiNode').getComponent(BattleUIView);
    }

    onOpen(...args: any[]): void {
       
    }

    startBattle() {
        cc.resources.load(BattleModel.ins().mapConfig.bgPath, cc.SpriteFrame, (err, spriteFrame) => {
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
        if (BattleModel.ins().isBattle !== true) { return; }
        this.updateEntitys();
    }

    private _touchId: number;
    private _selectBase: EntityNode;
    private touchStart(event: cc.Event.EventTouch) {
        const model = BattleModel.ins();
        if (model.isBattle !== true) { return; }

        if (this._touchId != null) { return; }

        const pos = this.sporeNode.convertToNodeSpaceAR(event.getLocation());
        const baseNodes = this.getTargetBaseNode(pos, 50);
        const selectBase = baseNodes[0];
        if (selectBase && model.entityMap.get(selectBase.id).uid === UserVo.ins().uid) {
            this._touchId = event.touch.getID();
            this._selectBase = selectBase;
            this._arrow.active = true;
            this._arrow.setPosition(selectBase.getPosition());
            this.touchMove(event);
        }
    }

    private touchMove(event: cc.Event.EventTouch) {
        if (this._arrow.active === false || this._touchId !== event.touch.getID()) return;

        let position = this.baseNode.convertToNodeSpaceAR(event.getLocation());
        const baseNodes = this.getTargetBaseNode(position, 100);
        const targetNode = baseNodes[0];
        if (targetNode) {
            position = targetNode.getPosition()
        }
        const subPos = position.sub(this._arrow.getPosition())
        this._arrow.angle = (360 * Math.atan2(subPos.y, subPos.x) / (2 * Math.PI)) - 92;
        this._arrow.setScale(subPos.len() / this._arrow.height);
    }

    private touchEnd(event: cc.Event.EventTouch) {
        if (this._touchId !== event.touch.getID() || this._selectBase == null) return;
        const pos = this.sporeNode.convertToNodeSpaceAR(event.getLocation());
        const targetBase = this.getTargetBaseNode(pos, 100)[0];
        const selectBase = this._selectBase;
        this._arrow.active = false;
        this._touchId = null;
        this._selectBase = null;
        if (!targetBase || targetBase === selectBase) {
            return;
        }
        const { dispatchRate } = this._uiView;
        const base = BattleModel.ins().entityMap.get(selectBase.id) as Building;
        base.dispatchSpore(dispatchRate, BattleModel.ins().entityMap.get(targetBase.id) as Building);
    }

    private clearEntitys() {
        this.sporeNode.children.forEach((node) => {
            this._sporePool.put(node);
        });
        this.baseNode.children.forEach((node) => {
            this._basePool.put(node);
        });
        this._entityNodeMap.clear();
    }

    private getBaseEntity(): EntityNode {
        return (this._basePool.get() || cc.instantiate(this.base)) as EntityNode;
    }

    private getSporeEntity(): EntityNode {
        return (this._sporePool.get() || cc.instantiate(this.spore)) as EntityNode;
    }


    private updateEntitys() {
        const model = BattleModel.ins();
        this._entityNodeMap.forEach((entityNode, id) => {
            const entityInfo = model.entityMap.get(id);
            if (!entityInfo) {
                entityNode.from.put(entityNode);
                this._entityNodeMap.delete(id);
            } else {
                entityNode.view.updateEntity(entityInfo);
            }
        });
        model.entityMap.forEach((entityInfo) => {
            if (this._entityNodeMap.has(entityInfo.id)) {
                return;
            }

            if (entityInfo instanceof Building) {
                const baseNode = this.getBaseEntity();
                this._entityNodeMap.set(entityInfo.id, baseNode);
                const view = baseNode.getComponent(BuildingView);
                view.init(entityInfo);
                baseNode.id = entityInfo.id;
                baseNode.view = view;
                baseNode.view.updateEntity(entityInfo);
                baseNode.from = this._basePool;
                baseNode.parent = this.baseNode;
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

    private getTargetBaseNode(position: cc.Vec2, maxDistance: number): EntityNode[] {
        const result = [];
        for (let index = 0; index < this.baseNode.childrenCount; index++) {
            const base = this.baseNode.children[index];
            const distance = cc.Vec2.squaredDistance(base.getPosition(), position)
            if (distance < maxDistance ** 2) {
                result.push(base);
                (base as any).__distance = distance;
            }
        }

        result.sort((a, b) => { return a.__distance - b.__distance })
        return result;
    }
}
