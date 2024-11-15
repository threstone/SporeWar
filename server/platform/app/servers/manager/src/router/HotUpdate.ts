/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { GlobalVar } from '../GlobalVar';

GlobalVar.commandServer.getRouter().post('/hotUpdate', hotUpdate);

/** 获取服务器信息 */
async function hotUpdate(ctx: Koa.Context, next: Koa.Next) {
    const redis = await GlobalVar.redisMgr.getClient();
    redis.publish(`${startupParam.env}_hot_update`, 'handler');
    ctx.response.status = 200;
    await next();
}
