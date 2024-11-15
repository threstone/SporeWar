declare var serviceConfig: {
    loginKey:string
    signKey: string
    ssl: { key: string, cert: string }
    mysql: IMysqlOption
    redis: IRedisOption
    loginServerPort: number
    manageServerPort: number
    orderServerPort: number
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