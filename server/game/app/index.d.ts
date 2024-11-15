declare var serviceConfig: {
    ssl: { key: string, cert: string }
    mysql: IMysqlOption
    redis: IRedisOption
    isTest: boolean
    isChargeTest: boolean
    cloudConfigPath: string
}
declare interface IGameMessage {
    cmd: number
    scmd: number
    toJSON(): { [k: string]: any };
}

declare interface IMysqlOption {
    host: string
    port: number
    user: string
    password: string
    timezone: string
}

declare interface IRedisOption {
    host: string
    port: number
    user: string
    password: string
    enableOfflineQueue: boolean
}