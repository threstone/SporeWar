/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'energy',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_userId',
        using: 'HASH',
        fields: ['userId'],
    }]
})

/** 体力、能量类的可恢复物品 */
export class EnergyModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.INTEGER, comment: '道具id', field: 'itemId', allowNull: false })
    itemId: number

    @Column({ type: DataType.BIGINT, comment: '数量', field: 'count', allowNull: false })
    count: number

    @Column({ type: DataType.BIGINT, comment: '下次恢复时间', field: 'nextRecoverTime', allowNull: false, defaultValue: 0 })
    nextRecoverTime: number
}
