import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from './ProtoBufEncoder';
import { SystemPto } from '../CommonProto';

export class ErrorUtils {
    static sendErrorMessage(gateNodeId: string, sessionId: number, msg?: string, code: number = 500) {
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: gateNodeId },
            sessionId,
            ProtoBufEncoder.encode(new SystemPto.S_ERROR({ msg, code })),
        );
    }
}
