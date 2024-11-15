import * as childProcess from 'child_process';
import * as path from 'path';
import { ItemComponent } from '../core/component/ItemComponent';
import { Player } from '../core/player/Player';
import { Session } from '../core/session/session';
import { PlayerModel } from '../../../../core/sequelize/model/game/PlayerModel';
import { GlobalVar } from '../GlobalVar';
import { TestPto } from '../CommonProto';

export class TestHandler {
    private static FAKETIME: string;

    // 获取装备信息请求
    static C_TEST_ADD_ITEMS(session: Session, player: Player, msg: TestPto.C_TEST_ADD_ITEMS) {
        if (serviceConfig.isTest !== true) {
            session.sendErrorMessage('错误');
            return;
        }

        logger.debug('添加道具');
        player.getComponent(ItemComponent).updateItems([{ itemId: msg.itemId, count: msg.count }]);
    }

    // 代码更新
    static C_TEST_UPDATE_CODE(session: Session) {
        try {
            if (serviceConfig.isTest !== true) {
                session.sendErrorMessage('错误');
                return;
            }

            logger.debug('git pull\n', childProcess.execSync('git pull', { cwd: process.cwd() }).toString());
            session.sendErrorMessage('更新成功');
        } catch (error) {
            logger.error('代码更新 接口出错', error);
        }
    }

    // 服务器时间修改
    static C_TEST_MODIFY_SERVER_TIME(session: Session, player: Player, msg: TestPto.C_TEST_MODIFY_SERVER_TIME) {
        try {
            if (serviceConfig.isTest !== true) {
                session.sendErrorMessage('错误');
                return;
            }
            const time = msg.time || Date.now();
            const fakeTime = process.env.FAKETIME || '+0s';
            let nowOffsetSec = parseInt(fakeTime.substring(0, fakeTime.length - 1), 10) * 1000;
            if (Number.isNaN(nowOffsetSec)) {
                session.sendErrorMessage('修改失败');
                return;
            }

            const offset = time - Date.now();
            nowOffsetSec += offset;
            this.FAKETIME = `${nowOffsetSec > 0 ? '+' : ''}${Math.floor(nowOffsetSec / 1000)}s`;
            session.sendErrorMessage(`success to set : process.env.FAKETIME:${this.FAKETIME}`);
        } catch (error) {
            logger.error('服务器时间修改 接口出错', error);
        }
    }

    // 服务器重启
    static C_TEST_RESTART_SERVER(session: Session) {
        try {
            if (serviceConfig.isTest !== true) {
                session.sendErrorMessage('错误');
                return;
            }
            const serverConfigPath = path.join(__dirname, '../../../../core/Restart.js');
            this.FAKETIME = this.FAKETIME || process.env.FAKETIME || '+0s';
            if (this.FAKETIME !== process.env.FAKETIME) {
                process.env.FAKETIME = this.FAKETIME;
            }
            childProcess.exec(`node ${serverConfigPath} ${startupParam.env} ${this.FAKETIME}`);
            session.sendErrorMessage('重启成功');
        } catch (error) {
            logger.error('服务器重启 接口出错', error);
        }
    }

    // 获取服务器时间信息
    static C_TEST_SERVER_TIME_INFO(session: Session, player: Player) {
        try {
            if (serviceConfig.isTest !== true) {
                session.sendErrorMessage('错误');
                return;
            }

            session.sendMessage(new TestPto.S_TEST_SERVER_TIME_INFO({
                serverTime: Date.now(),
                openServerDay: player.server.getOpenDay(),
                openServerWeek: player.server.getOpenWeek(),
            }));
        } catch (error) {
            logger.error('获取服务器时间信息 接口出错', error);
        }
    }

    // 清空账号数据
    static async C_TEST_CLEAR_ACCOUNT_DATA(session: Session, player: Player) {
        if (serviceConfig.isTest !== true) {
            session.sendErrorMessage('错误');
            return;
        }
        const pModel = await player.getModel(PlayerModel);
        await pModel.destroy({ where: { userId: player.userId } });
        logger.info(`${session.uuid} 清空账号数据`);
        player.server.playerDispose(player);
        GlobalVar.SessionMgr.deleteSession(session);
        session.kick('清空账号');
    }
}
