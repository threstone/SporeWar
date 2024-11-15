/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'bolck',
    createdAt: false,
    updatedAt: false,
})
export class BlockModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(64), comment: '玩家userId或者ip地址', field: 'userInfo', allowNull: false })
    userInfo: string

    @Column({ type: DataType.BIGINT, comment: '封禁结束时间, 0为永封', field: 'blockTime', allowNull: true })
    blockTime: number
}
