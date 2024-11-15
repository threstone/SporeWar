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
}