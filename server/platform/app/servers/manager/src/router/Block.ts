/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { RpcRouteType } from 'stone-framework';
import { GlobalVar } from '../GlobalVar';

type BlockReqBody = {
    blockTime: number
    userIdsOrIps: string[]
}

GlobalVar.commandServer.getRouter().post('/blockUsers', blockUsers);

/** 封禁玩家 */
async function blockUsers(ctx: Koa.Context, next: Koa.Next) {
    try {
        const body = ctx.request.body as BlockReqBody;
        if (Number.isNaN(body.blockTime) || Array.isArray(body.userIdsOrIps) === false) {
            ctx.response.status = 400;
            ctx.response.body = 'bad request';
            return;
        }

        rpc.login.loginRemote.sendBlockUsers({ type: RpcRouteType.All }, body.userIdsOrIps, body.blockTime);
    } catch (error) {
        ctx.response.status = 500;
        logger.error('blockUsers error', error);
    }
    ctx.response.status = 200;
    await next();
}
