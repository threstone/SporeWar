
// class PerformanceTest {
import { Client } from "../Client";
import { BossPro, BuffPotionPto, ChariotSkillPto } from "../CommonProto";
import { SystemPto } from "../CommonProto";
import { CollectionPto, ServerPto, TaskPto } from "../CommonProto";
import { ItemPto, ShopPto, StagePto, } from "../CommonProto";
import { TestPto } from "../CommonProto";



clientTest();

function testHandler(client: Client) {
    // client.sendMessage(new TestPto.C_TEST_CLEAR_ACCOUNT_DATA());
    // client.sendMessage(new TestPto.C_TEST_PASS_BOSS());
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 1, count: 900 }));
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 6, count: 13 }));
    // client.sendMessage(new TestPto.C_TEST_SET_STAGE({ stageId: 3 }));
    // client.sendMessage(new TestPto.C_TEST_SERVER_TIME_INFO());
    // client.sendMessage(new TestPto.C_TEST_UPDATE_CODE());
    // client.sendMessage(new TestPto.C_TEST_MODIFY_SERVER_TIME({ time: Date.now() }));
    // setTimeout(() => {
    //     client.sendMessage(new TestPto.C_TEST_RESTART_SERVER());
    // }, 1111);
    // client.sendMessage(new TestPto.C_TEST_RESTART_SERVER());
}


async function clientTest() {
    let client = new Client();
    client.messageHandler = (msg: IGameMessage) => {
        console.log(`\nonMessage:`, msg, JSON.stringify(msg));
    }
    console.log('开始登录');
    // await client.doLogin('http://192.168.20.61:1234/login', { account: `buffPotion1` })
    // await client.doLogin('http://120.79.23.102:8100/login', { account: `1` })  // 测试服
    // await client.doLogin('https://riot-party.zuiqiangyingyu.net:9450/login', { account: `1` })  // h5
    // await client.doLogin('http://120.79.23.102:8200/login', { account: `1` }) // 时间
    // await client.doLogin('https://riot-party.zuiqiangyingyu.net:9500/login', { account: `1` }) // prod dy
    // await client.doLogin('https://riot-party.zuiqiangyingyu.net:9400/login', { account: `1` }) //  dy ts
    await client.doLogin('https://riot-party.zuiqiangyingyu.net:9505/login', { account: `1` }) // prod dy hd
    testHandler(client);

    // client.sendMessage(new BuffPotionPto.C_GET_BUFF_POTION());
    // client.sendMessage(new BuffPotionPto.C_SET_BUFF_DURATION({ buffId: 1, duration: 100 }));


    // client.sendMessage(new ChariotSkillPto.C_GET_CHARIOT_SKILL());
    // client.sendMessage(new ChariotSkillPto.C_CHARIOT_SKILL_SLOT_UPDATE({ slots: [2003,2002] }));
    // client.sendMessage(new ChariotSkillPto.C_DRAW_CHARIOT_SKILL({ useFree: true }));
    // client.sendMessage(new ChariotSkillPto.C_CHARIOT_SKILL_UPGRADE({ id: 2002 }));

    // client.sendMessage(new TechTreePto.C_GET_TECH_TREE());
    // client.sendMessage(new TechTreePto.C_TECH_TREE_UPGRADE({ id: 201 }))
    // client.sendMessage(new TechTreePto.C_RESET_TECH_TREE())

    // client.sendMessage(new BossPro.C_GET_BOSS_INFO());
    // client.sendMessage(new BossPro.C_BOSS_BATTLE_END({ bossType: 2, bossId: 1 }));
    // client.sendMessage(new BossPro.C_DOUBLE_BOSS_REWARDS({ bossType: 2, bossId: 1 }));
    // client.sendMessage(new BossPro.C_GET_BOSS_CHALLENGE_TIMES({ bossType: 2}));

    // client.sendMessage(new TaskPto.C_GET_TASK_INFO());
    // let taskId = 16
    // client.sendMessage(new TaskPto.C_TASK_PROGRESS_UPDATE({ taskId, curValue: 99999 }));
    // client.sendMessage(new TaskPto.C_COMPLETE_TASK({ taskId }));

    // client.sendMessage(new CollectionPto.C_GET_COLLECTION_INFO());
    // client.sendMessage(new CollectionPto.C_DRAW_COLLECTION({ isAd: true, times: 10 }));
    // client.sendMessage(new CollectionPto.C_COLLECTION_LV_UP({ itemId: 1009 }));



    // client.sendMessage(new StagePto.C_STAGE_INFO());
    client.sendMessage(new StagePto.C_SPEED_UP_STAGE());
    
    // client.sendMessage(new StagePto.C_GET_ERA_AD_GOLD());
    // client.sendMessage(new StagePto.C_BATTLE_END({ stageId: 1, enemyKillCount: 9999, adTimes: 1, isPassStage: true, goldForKill: 1 }));
    // client.sendMessage(new StagePto.C_GET_DOUBLE_BATTLE_REWARD({ goldForKill: 1 }));
    // client.sendMessage(new StagePto.C_GET_BOX_REWARDS({ stageId: 2, boxIdx: 0 }));
    // client.sendMessage(new StagePto.C_GO_NEXT_ERA());
    // client.sendMessage(new StagePto.C_GO_NEXT_UNIVERSE());




    // client.sendMessage(new ShopPto.C_GET_SHOP_INFO());
    // client.sendMessage(new ShopPto.C_BUY_SHOP_ITEM({ shopId: 301, buyTimes: 1 }));

    // client.sendMessage(new ServerPto.C_SWITCH_SERVER({ token: 'ef55e20f-727f-4935-84b0-8783b9ce1c24', serverId: 2 }));


    // 道具基础信息
    // client.sendMessage(new ItemPto.C_GET_ITEMS_INFO());
    // // 能量基础信息
    // client.sendMessage(new ItemPto.C_GET_ENERGY_INFO());
    // // 装备基础信息
    // client.sendMessage(new EquipmentPto.C_GET_EQUIPMENT_INFO());
    // // 商店基础信息
    // client.sendMessage(new ShopPto.C_GET_SHOP_INFO());
    // // 关卡基础信息
    // client.sendMessage(new StagePto.C_STAGE_INFO());
    // // 战车信息请求
    // client.sendMessage(new WeaponPro.C_GET_CAR_INFO());
    // // 枪械
    // client.sendMessage(new GunPto.C_GUNS());

}


//performanceTest();
async function performanceTest() {
    const tasks = [];
    const count = 100;
    console.time('sum')
    let sum = 0;
    for (let index = 0; index < count; index++) {
        let client = new Client();
        client.messageHandler = (message: string) => {
            // console.log(message);
        };
        let startTime = Date.now()
        tasks.push(client.doLogin('http://192.168.20.61:1234/login', { account: `100${index}` }).then(() => {
            sum += Date.now() - startTime;
        }));
    }

    await Promise.all(tasks)
    console.log(`登录平均耗时:${sum / count}ms`);
    console.timeEnd('sum')
}