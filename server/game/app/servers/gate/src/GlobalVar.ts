import { GateServer } from './GateServer';
import * as service from '../../../../config/service.json';

export class GlobalVar {
    static gateServer: GateServer;

    static init() {
        global.serviceConfig = service[env];
        GlobalVar.gateServer = new GateServer(startupParam.port);
    }
}
