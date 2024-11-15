import * as Koa from 'koa';
import * as fs from 'fs';
import * as https from 'https';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';
import { Utils } from '../../../core/Utils';

export class CommandServer {
    private _router: Router;

    constructor(port: number) {
        logger.info(`初始化命令服务器, port:${port}`);
        const app = new Koa();
        app.use(this.addCrossOrigin.bind(this));
        app.use(BodyParser());
        app.use(this.vaildCheck.bind(this));

        const router = new Router();
        app.use(router.routes());
        this._router = router;

        if (serviceConfig.ssl) {
            const cert = fs.readFileSync(serviceConfig.ssl.cert);
            const key = fs.readFileSync(serviceConfig.ssl.key);
            const server = https.createServer({ cert, key }, app.callback());
            server.listen(port, () => {
                logger.info(`https 命令服务器启动完成, port:${port}`);
            });
        } else {
            app.listen(port, () => {
                logger.info(`http 命令服务器启动完成, port:${port}`);
            });
        }
    }

    public getRouter() {
        return this._router;
    }

    private async vaildCheck(ctx: Koa.Context, next: Koa.Next) {
        const body = ctx.request.body as { sign: string };
        let sign: string;
        // eslint-disable-next-line no-cond-assign
        if (body.sign && body.sign === (sign = Utils.getSign(body, serviceConfig.signKey))) {
            await next();
        } else {
            logger.debug(`错误的签名: ${body.sign} !== ${sign}`);
            ctx.response.body = 'Access Denied';
            ctx.response.status = 403;
        }
    }

    private async addCrossOrigin(ctx: Koa.Context, next: Function) {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', '*');
        await next();
    }
}
