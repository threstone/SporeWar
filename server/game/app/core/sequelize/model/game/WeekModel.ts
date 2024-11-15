/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'week',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'unique_userId_week',
        unique: true,
        fields: ['userId', 'week'],
    }]
})
export class WeekModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.INTEGER, comment: '时间信息,格式:202401(2024年第一周)', field: 'week', allowNull: false })
    week: number

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
    data: WeekInfo
}

interface WeekInfo {

}
