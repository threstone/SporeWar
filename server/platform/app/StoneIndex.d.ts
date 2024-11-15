declare var nodeId: string;
declare var env: string;
declare var startupParam: ILauncherOption

/** 服务器配置map */
declare var serversConfigMap: Map<string, ServerConfig>;
/** 当前服务器配置 */
declare var serverConfig: ServerConfig;
/** 全局事件对象 */
declare var eventEmitter: NodeJS.EventEmitter;
/** 全局logger */
declare var logger: ILog;

//启动参数
declare interface ILauncherOption {
    port: number
    nodeId: string
    env: string,
    serverType: string
    /** 异常重启,默认false */
    autuResume?: boolean
    /** 是否输出堆栈信息,默认false */
    logTrace?: boolean
    /** 输出级别,默认All */
    logLevel?: string
    /** rpc最大缓存消息条数,默认100条 */
    rpcBulkSize?: number
    /** rpc最大缓存时间,默认10毫秒 */
    rpcBulkTime?: number
}

declare interface ServerConfig {
    nodeId?: string
    ip?: string
    port?: number
    env?: string
    /** 异常重启,默认false */
    autuResume?: boolean
    serverType?: string
    /**  master配置 是否生成rpc描述文件 */
    isCreateRpcDeclare?: boolean
    rpcPorts?: number[]
    /** rpc最大缓存消息条数,默认100条 */
    rpcBulkSize?: number
    /** rpc最大缓存时间,默认10毫秒 */
    rpcBulkTime?: number
    /** 是否输出堆栈信息,默认false */
    logTrace?: boolean
    /** 输出级别,默认All */
    logLevel?: string
    /** 调试端口,配置后会打开对应的端口以方便远程调试 */
    inspectPort?: number
}

//日志记录对象
declare interface ILog {
    trace(...args: any[]): void
    debug(...args: any[]): void
    info(...args: any[]): void
    warn(...args: any[]): void
    error(...args: any[]): void
    fatal(...args: any[]): void
    log(...args: any[]): void
}