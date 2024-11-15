/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'white',
    createdAt: false,
    updatedAt: false,
})
export class WhiteModel extends Model {
    @Column({ type: DataType.STRING(64), comment: '唯一id', field: 'uuid', primaryKey: true })
    uuid: string
}
