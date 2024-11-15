/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { GlobalVar } from '../GlobalVar';

GlobalVar.commandServer.getRouter().post('/getServerInfo', getServerInfo);
GlobalVar.commandServer.getRouter().post('/addServer', addServer);
GlobalVar.commandServer.getRouter().post('/updateServer', updateServer);

/** 获取服务器信息 */
async function getServerInfo(ctx: Koa.Context, next: Koa.Next) {
    ctx.response.body = GlobalVar.serverMgr.getAllServer();
    await next();
}

/** 新增区服 */
async function addServer(ctx: Koa.Context, next: Koa.Next) {
    ctx.response.status = await GlobalVar.serverMgr.addServer(ctx.request.body as any) ? 200 : 500;
    await next();
}

/** 修改区服 */
async function updateServer(ctx: Koa.Context, next: Koa.Next) {
    ctx.response.status = await GlobalVar.serverMgr.updateServer(ctx.request.body as any) ? 200 : 500;
    await next();
}
