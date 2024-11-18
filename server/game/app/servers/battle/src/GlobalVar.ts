import * as path from 'path';
import { BattleServer } from './BattleServer';
import * as service from '../../../../config/service.json';
import { ProtoBufEncoder } from '../../../core/proto/ProtoBufEncoder';
import * as allProto from '../../../core/proto/CommonProto';

export class GlobalVar {
    static battleServer: BattleServer;

    static init() {
        global.serviceConfig = service[env];
        this.battleServer = new BattleServer();

        this.initMsgHandler();
    }

    /** 初始化protobuf协议映射 */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(allProto, handlerPath);
    }
}
