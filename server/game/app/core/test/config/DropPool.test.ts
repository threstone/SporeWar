import { ItemPto } from '../../../servers/logic/src/CommonProto';
import { Cfg } from '../../config/Cfg';

if (Cfg.DropPool == null) {
    Cfg.init('server');
}

describe('DropPool.test', () => {
    it("掉落库耗时测试", async function () {
        for (let poolId = 1; poolId <= 3; poolId++) {
            const times = 10000;
            console.time(`poolId:${poolId} ${times}次耗时`)
            const obj: { [key: number]: ItemPto.IItem } = {};
            for (let index = 0; index < times; index++) {
                const items = Cfg.DropPool.getItems(poolId, null);
                items.forEach((item) => {
                    if (obj[item.itemId] == null) {
                        obj[item.itemId] = item;
                    } else {
                        obj[item.itemId].count += item.count;
                    }
                });
            }
            console.timeEnd(`poolId:${poolId} ${times}次耗时`)
            // console.log(obj);
        }
    });
});
