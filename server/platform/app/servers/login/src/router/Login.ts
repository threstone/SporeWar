/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import * as uuid from 'uuid';
import { GlobalVar } from '../GlobalVal';
import { UserModel } from '../../../../core/sequelize/model/platform/UserModel';
import { AlgoEncrypt } from '../../../../core/algo/AlgoEncrypt';

type LoginReqBody = {
    content: string;
    account?: string;
    openId?: string;
    // eslint-disable-next-line camelcase
    access_token?: string
    platformId: number // 4微信  5抖音
}

let index = 0;
let urls: string[];
let urlLength: number;
async function initLoginHandler() {
    (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe(`${startupParam.env}_gateInfo_update`, initGateInfo.bind(this));
    const redis = await GlobalVar.redisMgr.getClient();
    initGateInfo(await redis.getData(`${startupParam.env}_gateInfo`));
    GlobalVar.loginServer.getRouter().post('/login', login);
}

function initGateInfo(jsonStr: string) {
    logger.debug('initGateInfo', jsonStr);
    try {
        urls = JSON.parse(jsonStr) || [];
    } catch (error) {
        logger.error('错误的gate信息');
        urls = [];
    }
    urlLength = urls.length;
}

async function login(ctx: Koa.Context, next: Koa.Next) {
    // 没有连接对象
    if (urlLength === 0) {
        ctx.response.status = 500;
        ctx.response.body = '服务未开启';
        await next();
        return;
    }

    if (GlobalVar.blockMgr.isBlock(ctx.request.ip.replace('::ffff:', ''))) {
        ctx.response.status = 400;
        ctx.response.body = '您已被封禁';
        await next();
        return;
    }

    let body = ctx.request.body as LoginReqBody;
    if (!body.content) {
        ctx.response.status = 400;
        ctx.response.body = '验证失败';
        return;
    }
    body = JSON.parse(AlgoEncrypt.decrypt(body.content, serviceConfig.loginKey, 128));
    index += 1;
    // 通过不同参数判断不同平台
    if (body.account) {
        ctx.response.body = await testLogin(body, ctx);
    } else if (body.platformId === 5) { // 抖音
        ctx.response.body = await dyLogin(body, ctx);
    }

    await next();
}

async function testLogin(body: LoginReqBody, ctx: Koa.Context) {
    const Model = GlobalVar.platformSeq.getModel(UserModel);
    let user = await Model.findOne({ where: { uuid: body.account } });
    if (!user) {
        user = await createUser(body.account);
    }
    const token = uuid.v4();
    await (await GlobalVar.redisMgr.getClient()).setData(token, {
        uuid: user.uuid,
        ip: ctx.request.ip.replace('::ffff:', ''),
    }, 7200);
    return {
        url: urls[index % urlLength],
        token,
        serverId: user.serverId,
        serverInfo: await (await GlobalVar.redisMgr.getClient()).getData(`${startupParam.env}_serverInfo`),
    };
}

async function dyLogin(body: LoginReqBody, ctx: Koa.Context) {
    const Model = GlobalVar.platformSeq.getModel(UserModel);
    let user = await Model.findOne({ where: { uuid: body.openId } });
    if (!user) {
        user = await createUser(body.openId);
    }
    const token = uuid.v4();
    await (await GlobalVar.redisMgr.getClient()).setData(token, {
        uuid: user.uuid,
        ip: ctx.request.ip.replace('::ffff:', ''),
    }, 7200);
    return {
        url: urls[index % urlLength],
        token,
        serverId: user.serverId,
        serverInfo: await (await GlobalVar.redisMgr.getClient()).getData(`${startupParam.env}_serverInfo`),
    };
}

/** 创建用户 */
function createUser(uniqueId: string) {
    return GlobalVar.platformSeq.getModel(UserModel).create({ uuid: uniqueId });
}

initLoginHandler();
