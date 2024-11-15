/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import {
    Column, DataType, Model, Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'day',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'unique_userId_day',
        unique: true,
        fields: ['userId', 'day'],
    }]
})
export class DayModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.INTEGER, comment: '时间信息,格式:20241024(2024年10月24日)', field: 'day', allowNull: false })
    day: number

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
    data: DayInfo
}

interface DayInfo {

}
