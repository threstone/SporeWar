
declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
    nodeId?: string;
}
        
declare class rpc {
    static gate: typeof Gate;
    static logic: typeof Logic;
}

declare class Gate {
    static gateRemote: typeof Gate_GateRemote;
}

declare class Logic {
    static channelRemote: typeof Logic_ChannelRemote;
    static playerRemote: typeof Logic_PlayerRemote;
    static transferRemote: typeof Logic_TransferRemote;
}

declare class Gate_GateRemote {
    static callSendMessage(routeOption: RpcRouterOptions, sessionId: number, buff: Buffer): Promise<void>;
    static sendSendMessage(routeOption: RpcRouterOptions, sessionId: number, buff: Buffer): void;
    static callKick(routeOption: RpcRouterOptions, sessionId: number, buffer?: Buffer): Promise<void>;
    static sendKick(routeOption: RpcRouterOptions, sessionId: number, buffer?: Buffer): void;
}

declare class Logic_ChannelRemote {
    static callBroadCastChannelMsg(routeOption: RpcRouterOptions, channelName: string, buffer: Buffer): Promise<void>;
    static sendBroadCastChannelMsg(routeOption: RpcRouterOptions, channelName: string, buffer: Buffer): void;
}

declare class Logic_PlayerRemote {
    static callOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): Promise<void>;
    static sendOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): void;
}

declare class Logic_TransferRemote {
    static callHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, buff: Buffer): Promise<void>;
    static sendHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, buff: Buffer): void;
}
