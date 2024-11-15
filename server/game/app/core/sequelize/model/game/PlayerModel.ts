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
    }]
})
export class PlayerModel extends Model {
    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', primaryKey: true })
    userId: string;

    @Column({ type: DataType.STRING(64), comment: '玩家唯一id', field: 'uuid', allowNull: false })
    uuid: string;

    @Column({ type: DataType.BOOLEAN, comment: '是否在线', field: 'online', defaultValue: false })
    online: boolean;

    @Column({
        type: DataType.TEXT({ length: 'long' }), comment: '记录不需要生成报表、纯单机的一些信息', field: 'dictionary',
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

    @Column({ type: DataType.INTEGER({ unsigned: true }), comment: '当前关卡', field: 'stageId', defaultValue: 1 })
    stageId: number;
}
