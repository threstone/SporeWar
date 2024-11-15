
declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
    nodeId?: string;
}
        
declare class rpc {
    static login: typeof Login;
}

declare class Login {
    static loginRemote: typeof Login_LoginRemote;
}

declare class Login_LoginRemote {
    static callBlockUsers(routeOption: RpcRouterOptions, userIdsOrIps: string[], blockTime: number): Promise<void>;
    static sendBlockUsers(routeOption: RpcRouterOptions, userIdsOrIps: string[], blockTime: number): void;
}
