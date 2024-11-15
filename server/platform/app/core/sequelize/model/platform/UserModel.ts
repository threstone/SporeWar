/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

/** 玩家模型，每个玩家仅有一行数据 */
@Table({
    tableName: 'user',
    createdAt: false,
    updatedAt: false
})
export class UserModel extends Model {
    @Column({ type: DataType.STRING(64), comment: '唯一id', field: 'uuid', primaryKey: true })
    uuid: string

    @Column({ type: DataType.INTEGER, comment: '选择的服务器id', field: 'serverId', allowNull: true, defaultValue: 0 })
    serverId: number
}
