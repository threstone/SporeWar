/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'month',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'unique_userId_month',
        unique: true,
        fields: ['userId', 'month'],
    }]
})
export class MonthModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.INTEGER, comment: '时间信息,格式:202410(2024年10月)', field: 'month', allowNull: false })
    month: number

    @Column({
        type: DataType.TEXT,
        field: 'data',
        get() {
            const key = arguments[0];
            const v = this.getDataValue(key);
            if (typeof (v) === 'string') {
                this.setDataValue(key, JSON.parse(v))
            }
            if (v == null) {
                this.setDataValue(key, {})
            }
            return this.getDataValue(key);
        }
    })
    data: MonthInfo
}

interface MonthInfo {

}
