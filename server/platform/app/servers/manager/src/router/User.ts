/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { Op } from 'sequelize';
import { GlobalVar } from '../GlobalVar';
import { RoleModel } from '../../../../core/sequelize/model/platform/RoleModel';
import { PlayerModel } from '../../../../core/sequelize/model/game/PlayerModel';

type UserReqBody = {
    userIds: string[]
}

GlobalVar.commandServer.getRouter().post('/getUsersNickname', getUsersNickname);

/** 获取玩家信息 */
async function getUsersNickname(ctx: Koa.Context, next: Koa.Next) {
    try {
        const body = ctx.request.body as UserReqBody;
        if (Array.isArray(body.userIds) === false) {
            ctx.response.status = 400;
            ctx.response.body = 'bad request';
            return;
        }
        const roleModel = GlobalVar.platformSeq.getModel(RoleModel);
        const roleInfos = await roleModel.findAll({ attributes: ['userId', 'serverId'], where: { userId: { [Op.in]: body.userIds } } });

        const results = [];
        const tasks = [];
        roleInfos.forEach((role) => {
            tasks.push(new Promise<void>(async (resolve) => {
                const playerModel = await GlobalVar.sequelizeMgr.getGameModel(role.serverId, PlayerModel);
                const playerInfo = await playerModel.findOne({ attributes: ['nickname'], where: { userId: `${role.userId}` } });
                if (playerInfo) {
                    results.push({ userId: `${role.userId}`, serverId: role.serverId, nickname: playerInfo.nickname });
                }
                resolve();
            }));
        });
        await Promise.all(tasks);
        ctx.response.body = results;
    } catch (error) {
        ctx.response.status = 500;
        logger.error('GetUsersInfo error', error);
    }
    await next();
}
