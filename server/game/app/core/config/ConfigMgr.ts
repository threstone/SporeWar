import path = require('path');
import fs = require('fs');
import { RedisMgr } from '../redis/RedisMgr';
import { Cfg } from './Cfg';

export class ConfigMgr {
    static async init(redisMgr: RedisMgr, configType: 'server' | 'client') {
        Cfg.init(configType, serviceConfig.cloudConfigPath);
        if (!serviceConfig.cloudConfigPath) {
            return;
        }
        (await redisMgr.getClientForSubscribe()).subscribe(`${startupParam.env}_config_update`, this.onConfigsUpdate.bind(this));
    }

    private static onConfigsUpdate() {
        try {
            const cwd = path.join(serviceConfig.cloudConfigPath);
            if (fs.existsSync(cwd) === false) {
                return;
            }
            Cfg.init('server', serviceConfig.cloudConfigPath);
            logger.info('热更配置完成');
        } catch (error) {
            logger.error('热更配置失败', error);
        }
    }
}
