import path = require('path');
import { GlobalVar } from '../GlobalVar';

export class HotUpdateMgr {
    static async init() {
        (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe(`${startupParam.env}_hot_update`, this.hotUpdateHandler.bind(this));
    }

    /** 热更handler */
    private static hotUpdateHandler() {
        logger.info('开始Handler热更');
        const handlerPath = path.join(__dirname, '../handler');
        Object.keys(require.cache).forEach((filePath) => {
            if (filePath.indexOf(handlerPath) !== -1) {
                delete require.cache[filePath];
            }
        });
        GlobalVar.initMsgHandler();
        logger.info('Handler热更完成');
    }
}
