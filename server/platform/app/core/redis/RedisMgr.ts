import { RedisClientSelf } from './RedisClientSelf';

export class RedisMgr {
    private _clientMap: Map<number | string, RedisClientSelf | Promise<RedisClientSelf>>;

    getClient(db: number = 0) {
        return this.getClientIns(db, db);
    }

    getClientForSubscribe() {
        return this.getClientIns('subscribe', 1);
    }

    private async getClientIns(key: number | string, selectDb: number) {
        if (!this._clientMap) {
            this._clientMap = new Map();
        }

        const client = this._clientMap.get(key);
        if (!client) {
            const tempClient = new RedisClientSelf(serviceConfig.redis, selectDb);
            const promise = new Promise<RedisClientSelf>((resolve) => {
                tempClient.onReady = () => {
                    this._clientMap.set(key, tempClient);
                    resolve(tempClient);
                };
            });
            this._clientMap.set(key, promise);
            return promise;
        }

        if (client instanceof Promise) {
            return client;
        }
        return client;
    }
}
