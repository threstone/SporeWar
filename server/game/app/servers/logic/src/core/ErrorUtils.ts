import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from '../../../../core/proto/ProtoBufEncoder';
import { SystemPto } from '../../../../core/proto/CommonProto';

export class ErrorUtils {
    static sendErrorMessage(gateNodeId: string, sessionId: number, msg?: string, code: number = 500) {
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: gateNodeId },
            sessionId,
            ProtoBufEncoder.encode(new SystemPto.S_ERROR({ msg, code })),
        );
    }
}
