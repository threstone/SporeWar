/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { GlobalVar } from '../GlobalVar';

GlobalVar.commandServer.getRouter().post('/configUpdate', configUpdate);

/** 配置更新 */
async function configUpdate(ctx: Koa.Context, next: Koa.Next) {
    const redis = await GlobalVar.redisMgr.getClient();
    redis.publish(`${startupParam.env}_config_update`, 'all');
    ctx.response.status = 200;
    await next();
}
