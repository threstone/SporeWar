import * as path from 'path';
import * as fs from 'fs';
import * as allProto from './CommonProto';
import { ProtoBufEncoder } from './core/ProtoBufEncoder';

import { SessionMgr } from './core/session/sessionMgr';
import { ServerMgr } from './core/server/ServerMgr';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../core/redis/RedisMgr';
import { SequelizeMgr } from '../../../core/sequelize/SequelizeMgr';
import { ChannelMgr } from './core/channel/ChannelMgr';
import { HotUpdateMgr } from './core/HotUpdateMgr';
import { ConfigMgr } from '../../../core/config/ConfigMgr';

export class GlobalVar {
    static SessionMgr: SessionMgr;

    static channelMgr: ChannelMgr;

    static serverMgr: ServerMgr;

    static redisMgr: RedisMgr;

    static sequelizeMgr: SequelizeMgr;

    static async init() {
        logger.debug(process.pid, process.env.FAKETIME);
        process.on('uncaughtException', (err) => {
            logger.error('Caught exception: err:', err);
        });

        // 收集火焰图
        // this.genProfiler();

        global.serviceConfig = service[env];

        // 初始化db相关 : mysql & redis
        logger.debug('初始化db相关');
        this.initDb();

        // 初始化配置相关逻辑
        ConfigMgr.init(this.redisMgr, 'server');

        logger.debug('初始化区服管理器');
        // 初始化区服管理器
        this.serverMgr = await new ServerMgr().init();

        logger.debug('初始化session管理器');
        this.SessionMgr = new SessionMgr();
        logger.debug('初始化频道管理器');
        this.channelMgr = new ChannelMgr();

        logger.debug('初始化消息handler');
        // 初始化消息handler
        this.initMsgHandler();

        // 热更
        HotUpdateMgr.init();

        this.showMomoryUsage();
    }

    /** 初始化db相关 : mysql & redis */
    private static initDb() {
        this.redisMgr = new RedisMgr();
        // sequelize相关
        this.sequelizeMgr = new SequelizeMgr(serviceConfig.mysql);
    }

    /** 初始化protobuf协议映射 */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(allProto, handlerPath);
    }

    private static async genProfiler() {
        // eslint-disable-next-line global-require
        const profiler = require('v8-profiler-node8');
        logger.info('开始收集');
        // Start Profiling
        profiler.startProfiling('CPU profile');
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 15000);
        });
        const profile = profiler.stopProfiling();
        profile.export()
            .pipe(fs.createWriteStream(`cpuprofile-${Date.now()}.cpuprofile`))
            .on('finish', () => profile.delete());
        logger.info('导出');
    }

    private static showMomoryUsage() {
        // setInterval(() => {
        //     const format = function (bytes: number) {
        //         return (bytes / 1024 / 1024).toFixed(2) + ' MB';
        //     };

        //     const info = process.memoryUsage();
        //     console.log({
        //         ['rss: (Resident Set Size)操作系统分配给进程的总的内存大小']: format(info.rss),
        //         ['heapTotal: 堆的总大小']: format(info.heapTotal),
        //         ['heapUsed: 已分配的内存，即堆中所有对象的总大小,是heapTotal的子集']: format(info.heapUsed),
        //         ['进程使用到的系统链接库所占用的内存']: format(info.external),
        //         arrayBuffers: format(info.arrayBuffers),
        //     })
        // }, 10000)
    }
}
