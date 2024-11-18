
declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
    nodeId?: string;
}
        
declare class rpc {
    static battle: typeof Battle;
    static gate: typeof Gate;
    static logic: typeof Logic;
    static match: typeof Match;
}

declare class Battle {
    static battleRemote: typeof Battle_BattleRemote;
}

declare class Gate {
    static gateRemote: typeof Gate_GateRemote;
}

declare class Logic {
    static channelRemote: typeof Logic_ChannelRemote;
    static matchRemote: typeof Logic_MatchRemote;
    static playerRemote: typeof Logic_PlayerRemote;
    static transferRemote: typeof Logic_TransferRemote;
}

declare class Match {
    static matchReomte: typeof Match_MatchReomte;
}

declare class Battle_BattleRemote {
    static callCreateTable(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, uuid1: string, logicNode1: string, uuid2: string, logicNode2: string): Promise<void>;
    static sendCreateTable(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, uuid1: string, logicNode1: string, uuid2: string, logicNode2: string): void;
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

declare class Logic_MatchRemote {
    static callMatchSuccess(routeOption: RpcRouterOptions, battleToken: string, address: string, uuid: string, expireTime: number): Promise<void>;
    static sendMatchSuccess(routeOption: RpcRouterOptions, battleToken: string, address: string, uuid: string, expireTime: number): void;
}

declare class Logic_PlayerRemote {
    static callOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): Promise<void>;
    static sendOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): void;
}

declare class Logic_TransferRemote {
    static callHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, buff: Buffer): Promise<void>;
    static sendHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, buff: Buffer): void;
}

declare class Match_MatchReomte {
    static callStartMatch(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, logicNode: string, uuid: string, rank?: number): Promise<boolean>;
    static sendStartMatch(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, logicNode: string, uuid: string, rank?: number): void;
    static callStopMatch(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, uuid: string): Promise<boolean>;
    static sendStopMatch(routeOption: RpcRouterOptions, matchType: MatchTypeEnum, uuid: string): void;
}
