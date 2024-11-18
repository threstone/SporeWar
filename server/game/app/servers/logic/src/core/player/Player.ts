import { Model } from 'sequelize-typescript';
import { EventEmitter } from '../../../../../core/event/EventEmitter';
import { PlayerModel } from '../../../../../core/sequelize/model/game/PlayerModel';
import { GlobalVar } from '../../GlobalVar';
import { BaseComponent } from '../component/BaseComponent';
import { Session } from '../session/session';
import { ItemPto } from '../../../../../core/proto/CommonProto';
import { ItemComponent } from '../component/ItemComponent';
import { Server } from '../server/Server';

export class Player extends EventEmitter {
    /** 没有session的player将被server清理 */
    session: Session;

    nextClearFlag: boolean;

    get serverId() {
        return this.server.serverId;
    }

    server: Server;

    gateNodeId: string;

    sessionId: number;

    playerInfo: PlayerModel;

    private _componentMap: Map<string, BaseComponent<any>>;

    get userId() {
        return this.playerInfo?.userId;
    }

    get uuid() {
        return this.playerInfo?.uuid;
    }

    init(session: Session, playerInfo: PlayerModel, server: Server) {
        this.session = session;
        this.gateNodeId = session.gateNodeId;
        this.sessionId = session.sessionId;

        this.server = server;

        this.playerInfo = playerInfo;
        return this.initComponents();
    }

    handleItemsChange(items: ItemPto.Item[]) {
        return this.getComponent(ItemComponent).updateItems(items);
    }

    getItem(itemId: number) {
        return this.getComponent(ItemComponent).getItem(itemId);
    }

    getModel<T extends typeof Model>(template: T): Promise<T> {
        return GlobalVar.sequelizeMgr.getGameModel(this.serverId, template);
    }

    // eslint-disable-next-line no-unused-vars
    getComponent<T extends BaseComponent<any>>(componentClass: new (...args: any[]) => T): T {
        const result = this._componentMap?.get(componentClass.name) as T;
        if (!result) {
            logger.error(
                `[${componentClass.name}]组件不存在 [componentMap is null:${this._componentMap == null}]  [uuid:${this.session?.uuid}] playerInfo:`,
                this.playerInfo?.toJSON(),
            );
        }
        return result;
    }

    private async initComponents() {
        this._componentMap = new Map();
        const necessaryComponents: Promise<void>[] = [];
        const nornalComponents: BaseComponent<any>[] = [];
        BaseComponent.getAllComponents().forEach((ComponentClass) => {
            if (this._componentMap.has(ComponentClass.name) === false) {
                const comp = new ComponentClass(this);
                this._componentMap.set(ComponentClass.name, comp);
                if (comp.isNecessary) {
                    necessaryComponents.push(comp.initComponent(this));
                } else {
                    nornalComponents.push(comp);
                }
            }
        });
        await Promise.all(necessaryComponents);

        const nomalComponents: Promise<void>[] = [];
        nornalComponents.forEach((c) => {
            nomalComponents.push(c.initComponent(this));
        });
        await Promise.all(nomalComponents);
        this._componentMap.forEach((comp: any) => {
            comp.onPlayerInitEnd();
        });
        return this;
    }

    destroy() {
        this._componentMap.forEach((c) => {
            c.destroy();
        });
        this._componentMap.clear();
        this._componentMap = null;
        this.playerInfo = null;
        this.removeAllListeners();
    }

    sendMessage(msg: IGameMessage) {
        this.session?.sendMessage(msg);
    }

    sendBuffer(buff: Buffer) {
        this.session?.sendBuffer(buff);
    }

    sendErrorMessage(msg: string, code: number = 500) {
        this.session?.sendErrorMessage(msg, code);
    }

    kick(reason?: string) {
        this.session?.kick(reason);
    }

    kickWithBuffer(buffer: Buffer) {
        this.session?.kickWithBuffer(buffer);
    }

    savePlayerInfo(fields?: (keyof PlayerModel)[] | keyof PlayerModel) {
        if (typeof fields === 'string') {
            fields = [fields];
        }
        return this.playerInfo.save({ fields, validate: false });
    }

    getLoginInfo(): import('../../../../../core/proto/CommonProto').PlayerPto.ILoginInfo {
        return {
            code: 0,
            serverId: this.serverId,
            userId: this.userId,
            stageId: this.playerInfo.stageId,
        };
    }
}
