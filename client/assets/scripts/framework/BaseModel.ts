import { Manager } from "../manager/Manger";
import { MessageMgr } from "../manager/MessageMgr";
import { SingleClass } from "./SingleClass";

export class BaseModel extends SingleClass {
    constructor() {
        super();
        this.registerMessageHandler();
    }

    private registerMessageHandler() {
        for (const property of Object.getOwnPropertyNames((this as any).__proto__)) {
            if (property.startsWith('S_')) {
                MessageMgr.addHandlerByName(property, this[property].bind(this));
            }
        }
    }

    protected sendGameMessage(msg:IGameMessage){
        Manager.socketClientMgr.sendGameMessage(msg);
    }

    protected sendBattleMessage(msg:IGameMessage){
        Manager.socketClientMgr.sendBattleMessage(msg);
    }
}