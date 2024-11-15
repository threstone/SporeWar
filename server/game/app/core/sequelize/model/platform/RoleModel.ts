/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

/** 角色模型,每个玩家每个服的角色信息 */
@Table({
    tableName: 'role',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_uuid',
        using: 'HASH',
        fields: ['uuid'],
    }]
})
export class RoleModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '用户id', field: 'userId', primaryKey: true, autoIncrement: true })
    userId: number

    @Column({ type: DataType.STRING(64), comment: '玩家唯一id', field: 'uuid', allowNull: false })
    uuid: string

    @Column({ type: DataType.INTEGER, comment: '选择的服务器id', field: 'serverId', allowNull: true })
    serverId: number
}
