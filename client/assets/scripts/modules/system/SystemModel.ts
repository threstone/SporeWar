import { BaseModel } from "../../framework/BaseModel";
import { SystemPto } from "../../framework/proto/CommonProto";

export class SystemModel extends BaseModel {
    S_ERROR(msg: SystemPto.S_ERROR) {
        cc.error(`S_ERROR : [${msg.code}] ${msg.msg}`);
    }
}

SystemModel.ins();