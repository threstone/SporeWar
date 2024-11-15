// class PerformanceTest {

import { Client } from "../Client";
import { CarPro, CollectionPto, TaskPto, TestPto } from "../CommonProto";
import { StagePto } from "../CommonProto";
import { ItemPto } from "../CommonProto";
import { ShopPto, SystemPto } from "../CommonProto";

let loginCount = 0;
let msgCount = 0;
setInterval(() => {
    if (msgCount === 0) {
        return;
    }
    console.log(`在线客户端:${loginCount},过去1s收发消息${msgCount}条`);
    msgCount = 0;
}, 1000);
class PerformanceClient extends Client {

    constructor(account: string) {
        super()
        this.startTest(account);
    }

    private async startTest(account: string) {
        this.messageHandler = (msg: IGameMessage) => {
            msgCount++;
            // console.log(`\nonMessage:`, msg, JSON.stringify(msg));
        }

        await this.doLogin('http://192.168.20.61:1234/login', { account });
        // await this.doLogin('https://riot-party.zuiqiangyingyu.net:9500/login', { account });
        loginCount++;
        setInterval(() => {
            // 定时心跳
            this.sendMessage(new SystemPto.C_HEART_BEAT());
        }, 10000);

        this.logic();
    }
    logic() {
        // 道具基础信息
        this.sendMessage(new ItemPto.C_GET_ITEMS_INFO());
        // 任务基础信息
        this.sendMessage(new TaskPto.C_GET_TASK_INFO());
        // 商店基础信息
        this.sendMessage(new ShopPto.C_GET_SHOP_INFO());
        // 关卡基础信息
        this.sendMessage(new StagePto.C_STAGE_INFO());
        // 藏品基础信息
        this.sendMessage(new CollectionPto.C_GET_COLLECTION_INFO());
        // 战车信息
        this.sendMessage(new CarPro.C_GET_CAR_INFO());

        // 战斗结束
        this.sendMessage(new StagePto.C_BATTLE_END({ stageId: 1, enemyKillCount: 1, adTimes: 1, isPassStage: true, goldForKill: 1 }));


        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 1, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 2, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 3, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 1, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 2, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 3, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 1, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 2, count: 1 }));
        // this.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 3, count: 1 }));

        setTimeout(() => {
            this.logic();
        }, Math.random() * 10000);
    }

    sendMessage(msg: IGameMessage) {
        msgCount++;
        super.sendMessage(msg);
    }
}

const clientCount = 100;
for (let index = 0; index < clientCount; index++) {
    setTimeout(() => {
        new PerformanceClient(`performance${index}`);
    }, 100 * index);
}