import { BlockModel } from '../../../../core/sequelize/model/platform/BlockModel';
import { GlobalVar } from '../GlobalVal';

export class LoginRemote {
    /** 封禁玩家 */
    blockUsers(userIdsOrIps: string[], blockTime: number): void {
        userIdsOrIps.forEach((userInfo) => {
            GlobalVar.blockMgr.updateBlockInfo({
                userInfo,
                blockTime,
            } as BlockModel);
        });
    }
}
