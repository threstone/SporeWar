import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from '../core/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';
import { ServerPto } from '../CommonProto';
import { ErrorUtils } from '../core/ErrorUtils';
import { Session } from '../core/session/session';

export class TransferRemote {
    async handleMessage(gateNodeId: string, sessionId: number, buff: Buffer): Promise<void> {
        let session: Session;
        try {
            const msg = ProtoBufEncoder.decode(buff, 0);
            if (!msg) {
                ErrorUtils.sendErrorMessage(gateNodeId, sessionId, '无法解析的数据');
                return;
            }

            session = GlobalVar.SessionMgr.getSession(gateNodeId, sessionId);
            // 玩家不存在 初始化玩家
            if (!session && msg instanceof ServerPto.C_CONNECT) {
                session = await GlobalVar.SessionMgr.initSession(gateNodeId, sessionId, msg);
                // 初始化session失败可能是token过期
                if (!session) {
                    logger.error('初始化session失败,可能是token过期');
                    rpc.gate.gateRemote.sendSendMessage(
                        { type: RpcRouteType.Target, nodeId: gateNodeId },
                        sessionId,
                        ProtoBufEncoder.encode(new ServerPto.S_CONNECT({ loginInfo: { code: 4 } })),
                    );
                    return;
                }
                // 记录玩家session信息,踢掉同账号其他在线的链接
                session.onNewSession();
                logger.debug(`[${session.uuid}] 玩家会话创建 gateNodeId:${gateNodeId} sessionId:${sessionId}`);
            }
            if (!session) {
                logger.error('获取session失败:', gateNodeId, sessionId, msg);
                // 获取不到session直接踢下线
                rpc.gate.gateRemote.sendKick({ type: RpcRouteType.Target, nodeId: gateNodeId }, sessionId);
                return;
            }

            const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
            if (!fun) {
                logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
                ErrorUtils.sendErrorMessage(gateNodeId, sessionId, '未知的协议');
                return;
            }

            if (msg.constructor.name !== 'C_HEART_BEAT') {
                logger.debug(
                    `[${session.uuid}][${session.player?.userId}][${gateNodeId}-${sessionId}] 收到消息: ${msg.constructor.name}`,
                    JSON.stringify(msg),
                );
            }
            fun(session, session.player, msg);
        } catch (error) {
            logger.error(`[${session?.uuid}]消息处理出错:`, error);
            ErrorUtils.sendErrorMessage(gateNodeId, sessionId);
        }
    }
}
