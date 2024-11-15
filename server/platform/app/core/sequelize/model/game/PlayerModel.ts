/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    Column, DataType, Model, Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'player',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_uuid',
        using: 'HASH',
        fields: ['uuid'],
    }, {
        name: 'index_nickname',
        using: 'HASH',
        fields: ['nickname'],
    }]
})
export class PlayerModel extends Model {
    @Column({
        type: DataType.STRING(16),
        comment: '用户id',
        field: 'userId',
        primaryKey: true
    })
    userId: string;

    @Column({
        type: DataType.STRING(64),
        comment: '玩家唯一id',
        field: 'uuid',
        allowNull: false
    })
    uuid: string;

    @Column({
        type: DataType.STRING(32),
        comment: '昵称',
        field: 'nickname',
        allowNull: false
    })
    nickname: string;

    @Column({
        type: DataType.BIGINT,
        comment: '昵称上次修改时间',
        field: 'lastModifyNameTs',
        defaultValue: 0,
        allowNull: false
    })
    lastModifyNameTs: number;

    @Column({
        type: DataType.INTEGER(),
        comment: '头像',
        field: 'icon',
        defaultValue: 110001,
        allowNull: false
    })
    icon: number;

    @Column({
        type: DataType.INTEGER(),
        comment: '头像框',
        field: 'iconBg',
        defaultValue: 140001,
        allowNull: false
    })
    iconBg: number;

    @Column({
        type: DataType.INTEGER({ unsigned: true }),
        comment: '当前关卡',
        field: 'stageId',
        defaultValue: 1,
        allowNull: false
    })
    stageId: number;

    @Column({
        type: DataType.TEXT({ length: 'long' }),
        comment: '关卡信息',
        field: 'stageInfoList',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, []);
            }
            return this.getDataValue(key);
        }
    })
    stageInfoList: StageInfo[];

    @Column({
        type: DataType.TEXT({ length: 'tiny' }),
        comment: '战车信息',
        field: 'carInfo',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                return null;
            }
            return this.getDataValue(key);
        }
    })
    carInfo: CarInfo;

    @Column({
        type: DataType.TEXT({ length: 'tiny' }),
        comment: '装备信息',
        field: 'equipments',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, [
                    {
                        partId: 1,
                        level: 0,
                        itemId: 0
                    },
                    {
                        partId: 2,
                        level: 0,
                        itemId: 0
                    },
                    {
                        partId: 3,
                        level: 0,
                        itemId: 0
                    },
                    {
                        partId: 4,
                        level: 0,
                        itemId: 0
                    },
                    {
                        partId: 5,
                        level: 0,
                        itemId: 0
                    },
                    {
                        partId: 6,
                        level: 0,
                        itemId: 0
                    },
                ]);
            }
            return this.getDataValue(key);
        }
    })
    equipments: EquipmentInfo[];

    @Column({
        type: DataType.INTEGER({ unsigned: true }),
        comment: '观看广告次数',
        field: 'adTimes',
        defaultValue: 0,
        allowNull: false
    })
    adTimes: number;

    @Column({
        type: DataType.TEXT({ length: 'long' }),
        comment: '记录不需要生成报表、纯单机的一些信息',
        field: 'dictionary',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, {});
            }
            return this.getDataValue(key);
        }
    })
    private dictionary: { [key: number]: any };

    @Column({
        type: DataType.TEXT,
        field: 'shopInfo',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, { buyTimesInfo: {} });
            }
            return this.getDataValue(key);
        }
    })
    shopInfo: ShopInfo;

    @Column({
        type: DataType.TEXT({ length: 'tiny' }),
        comment: '玩家上阵的枪械',
        field: 'equipGuns',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, []);
            }
            return this.getDataValue(key);
        }
    })
    equipGuns: number[];

    @Column({
        type: DataType.TEXT({ length: 'long' }),
        comment: '枪械列表',
        field: 'gunList',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v));
            }
            if (v == null) {
                this.setDataValue(key, []);
            }
            return this.getDataValue(key);
        }
    })
    gunList: GunInfo[];
}

export interface StageInfo {
    stageId: number;
    roleMaxHpRatio: number;
    /** 可以优化成位操作,一个字节就能存完3个宝箱是否领取的信息 */
    isGetBoxReward: boolean[];
}

// 战车信息
export interface CarInfo {
    energyLv: number,
    towers: CarTower[],
    weapons: CarWeapon[]
}

// 武器信息
export interface CarWeapon {
    // id 1=针刺 2=喷火器 3=机枪
    id: number,
    // 层数
    layer: number,
    // 星级
    star: number
}

// 炮塔信息
export interface CarTower {
    // 层数 1-3
    layer: number,
    // 等级
    level: number,
    // 阶级
    step: number,
    // 武器Id
    weaponId: number
}

export interface EquipmentInfo {
    /** 部位id */
    partId: number;
    /** 部位强化等级 */
    level: number;
    /** 装备的道具id  0则是该部位没有装备 */
    itemId: number;
}

export interface GunInfo {
    // 枪械id，Weapon的id
    gunId: number,
    // 等级
    level: number
}

export interface ShopInfo {
    buyTimesInfo: { [key: number]: number }
}
