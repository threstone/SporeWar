/* eslint-disable no-unused-vars */
import { SaveOptions, Promise } from 'sequelize';
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'item',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_userId',
        using: 'HASH',
        fields: ['userId'],
    }]
})
export class ItemModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.INTEGER, comment: '道具id', field: 'itemId', allowNull: false })
    itemId: number

    @Column({ type: DataType.BIGINT, comment: '数量', field: 'count', allowNull: false })
    count: number

    @Column({ type: DataType.BOOLEAN, comment: '新道具', field: 'isNew', defaultValue: true })
    isNew: boolean

    @Column({ type: DataType.BIGINT, comment: '过期时间戳', field: 'expireTime', defaultValue: 0, allowNull: false })
    expireTime: number

    isFirstSaving: boolean;
}
