import * as Redis from 'redis';
// 默认redis请求超时时间，单位：毫秒
const DEFAULT_REDIS_TIMEOUT = 5 * 1000;
export class RedisClientSelf {
    private redisClient: Redis.RedisClient

    private subscribeFun: Map<string, Function>

    public onConect: Function

    public onReady: Function

    constructor(conf: IRedisOption, db: number) {
        this.connectRedis(conf, db);
    }

    connectRedis(conf: IRedisOption, db: number) {
        const redisConfig: any = {
            host: conf.host,
            port: conf.port,
            db,
            enable_offline_queue: (conf.enableOfflineQueue === true),
        };
        if (conf.password && conf.password !== '') {
            redisConfig.password = conf.password;
        }
        if (conf.user && conf.user !== '') {
            redisConfig.user = conf.user;
        }
        this.redisClient = Redis.createClient(redisConfig);

        this.redisClient.on('error', (err: Error) => {
            logger.error(`redis${db} error: `, err);
        });

        this.redisClient.on('ready', () => {
            if (this.onReady) {
                this.onReady();
            }
        });

        this.redisClient.on('connect', async () => {
            logger.debug(`connect to redis${db} success!!`);
            if (this.onConect) {
                this.onConect();
            }
        });

        this.redisClient.on('close', () => {
            logger.debug(`connection to redis${db} closed!`);
        });

        this.redisClient.on('end', () => {
            logger.debug(`connection to redis${db} end!`);
        });

        this.redisClient.on('message', this.onSubscribeMessage.bind(this));
    }

    /**
     * 获取列表指定范围内的元素
     * @stop 如果stop index的值为-1那么将返回所有值
     */
    lRange(key: string | number, start: number, stop: number, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<string[]> {
        return this.sendCommand('lrange', [key, start, stop], timeOut);
    }

    /**
     * 在列表尾部插入一个或多个元素
     */
    rPush(key: string | number, value: number[] | string[] | string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        const elements = [key];
        if (Array.isArray(value)) {
            elements.push(...value);
        } else {
            elements.push(value);
        }
        return this.sendCommand('rpush', elements, timeOut);
    }

    /**
     * 获取list长度
     */
    lLen(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        return this.sendCommand('llen', [key], timeOut);
    }

    /**
     * 向Set中添加一个或多个元素
     */
    sadd(key: string | number, value: string | number | string[] | number[], timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        const arr = [key];
        if (Array.isArray(value)) {
            arr.push(...value);
        } else {
            arr.push(value);
        }
        return this.sendCommand('sadd', arr, timeOut);
    }

    /**
     * 获取Set中的所有元素
     */
    smembers(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        return this.sendCommand('smembers', [key], timeOut);
    }

    /**
     * 判断元素是否在Set中
     */
    sismember(key: string | number, value: number | string, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<boolean> {
        return new Promise((resolve) => {
            this.sendCommand('sismember', [key, value], timeOut).then((v) => {
                resolve(v === 1);
            });
        });
    }

    /**
     * 订阅消息
     */
    subscribe(channel: string, callBack: Function) {
        if (!this.subscribeFun) {
            this.subscribeFun = new Map<string, Function>();
        }
        this.subscribeFun.set(channel, callBack);
        this.redisClient.subscribe(channel);
    }

    /**
     * 取消订阅消息
     */
    unsubscribe(channel: string) {
        if (this.subscribeFun) {
            this.subscribeFun.delete(channel);
        }
        this.redisClient.unsubscribe(channel);
    }

    onSubscribeMessage(channel: string, message: string) {
        const fun = this.subscribeFun.get(channel);
        if (fun) {
            fun(message);
        }
    }

    // 发布消息
    publish(channel: string, value: string, callBack?: Function) {
        this.redisClient.publish(channel, value, callBack);
    }

    incr(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        return this.sendCommand('incr', [key], timeOut);
    }

    /**
     * @param key 要上锁的key
     * @param expire 锁持续时间  单位秒
     */
    lock(key: string | number, expire: number, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<boolean> {
        return new Promise((resolve) => {
            this.incr(key, timeOut).then((incrNum) => {
                resolve(incrNum === 1);
            });
            this.setExpire(key, expire);
        });
    }

    /** 解锁 */
    unlock(key: string | number) {
        this.delete(key);
    }

    /**
     * 设置Redis数据
     * @param key
     * @param value
     * @param sec  设置存在时间   如果sec为-1则有效时间为永久
     * @param timeOut 请求超时时间
     */
    setData(key: string | number, value: any, sec: number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        if (sec === -1) {
            return this.sendCommand('set', [key, value], timeOut);
        }
        return this.sendCommand('setex', [key, sec, value], timeOut);
    }

    /**
     * 将对象以hash的方式储存到redis
     * @param sec  设置存在时间
     * 如果sec为-1则如果是新key则永久,如果是已有的key则按原有的销毁时间
     */
    hmset(redisKey: string | number, obj: {}, sec: number = -1, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        const keys = Object.keys(obj);
        const data = [redisKey];
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const value = obj[key];
            data.push(key);
            data.push(value);
        }
        this.sendCommand('hmset', data, timeOut);
        if (sec !== -1) {
            this.setExpire(redisKey, sec);
        }
    }

    /**
     * 获取Redis数据
     * @param db
     * @param key
     * @param timeOut 请求超时时间
     */
    getData(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        return this.sendCommand('get', [key], timeOut);
    }

    /**
     * 返回哈希表中，所有的字段和值
     * @param key
     * @param timeOut 请求超时时间
     */
    hgetall(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        return this.sendCommand('hgetall', [key], timeOut);
    }

    /**
     * 返回哈希表中，一个或多个给定字段的值
     * @param key
     * @param field  一个或多个给定字段
     * @param timeOut 请求超时时间
     */
    hmget(key: string | number, field: any[], timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<string[]> {
        return this.sendCommand('hmget', [key, ...field], timeOut);
    }

    /**
    * 返回哈希表中给定字段的值
    * @param key
    * @param field 给定字段
    * @param timeOut 请求超时时间
    */
    hget(key: string | number, field: string, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        return this.sendCommand('hget', [key, field], timeOut);
    }

    /**
     * 为哈希表中的字段赋值
     * @param key
     * @param field  给定字段
     * @param value
     * @param timeOut 请求超时时间
     */
    hset(key: string | number, field: string, value: any, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        return this.sendCommand('hset', [key, field, value], timeOut);
    }

    /**
     * 删除哈希表中的指定字段
     * @param key
     * @param field  指定字段
     * @param timeOut 请求超时时间
     */
    hdel(key: string | number, field: string, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        return this.sendCommand('hdel', [key, field], timeOut);
    }

    /**
     * 删除redis数据
     * @param key
     * @param timeOut
     */
    delete(key: string | number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        return this.sendCommand('del', [key], timeOut);
    }

    /**
     * 设置key的有效时间
     * @param db
     * @param key
     * @param expireTime 锁持续时间  单位秒
     * @param timeOut 请求超时时间
     */
    setExpire(key: string | number, expireTime: number, timeOut: number = DEFAULT_REDIS_TIMEOUT) {
        return this.sendCommand('expire', [key, expireTime], timeOut);
    }

    /** 清空指定数据库 */
    flushDB() {
        return this.sendCommand('FLUSHDB', [], DEFAULT_REDIS_TIMEOUT);
    }

    /**
     * 直接发送命令
     * @param command
     * @param args
     * @param timeOut 请求超时时间
     */
    async sendCommand(command: string | number, args?: Array<any>, timeOut: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        const self = this;
        return new Promise((resolve, reject) => {
            const timerId = setTimeout(reject, timeOut);

            self.redisClient.send_command(command, args, (err, res) => {
                clearTimeout(timerId);
                if (err) {
                    logger.error('redis send command failed! ', err);
                    reject(err);
                    return;
                }
                resolve(res);
            });
        }).catch((err) => {
            logger.error('redis timeout!', command, args, err);
        });
    }
}
