/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { GlobalVar } from '../GlobalVar';

type BlockReqBody = {
    userIds: string[]
}

GlobalVar.commandServer.getRouter().post('/kickUsers', kickUsers);

/** 将玩家踢下线 */
async function kickUsers(ctx: Koa.Context, next: Koa.Next) {
    try {
        const body = ctx.request.body as BlockReqBody;
        const client = await GlobalVar.redisMgr.getClient();
        body.userIds?.forEach((userId) => {
            client.publish(`${startupParam.env}_kick`, JSON.stringify({ userIdOrIp: userId, reason: '管理员踢出' }));
        });
    } catch (error) {
        ctx.response.status = 500;
        logger.error('BlockUsers error', error);
    }
    ctx.response.status = 200;
    await next();
}
