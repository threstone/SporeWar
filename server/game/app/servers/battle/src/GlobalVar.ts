import { BattleServer } from './BattleServer';
import * as service from '../../../../config/service.json';

export class GlobalVar {
    static battleServer: BattleServer;

    static init() {
        global.serviceConfig = service[env];
        this.battleServer = new BattleServer();
    }
}
