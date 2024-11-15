import { Op } from 'sequelize';
import { BlockModel } from '../../../core/sequelize/model/platform/BlockModel';
import { GlobalVar } from './GlobalVal';

export class BlockMgr {
    private _blockMap: Map<string, BlockModel>;

    private _BlockModel: typeof BlockModel;

    async init() {
        this._BlockModel = GlobalVar.platformSeq.getModel(BlockModel);
        // 删除过期信息
        this._BlockModel.destroy({
            where: {
                blockTime: {
                    [Op.gt]: 0,
                    [Op.lt]: Date.now(),
                },
            },
        });
        const blocks = await this._BlockModel.findAll();
        this._blockMap = new Map<string, BlockModel>(blocks.map((block) => [block.userInfo, block]));
        return this;
    }

    /** 是否封禁 */
    isBlock(userInfoOrIP: string) {
        const block = this._blockMap.get(userInfoOrIP);
        if (!block) {
            return false;
        }

        return block.blockTime === 0 || Date.now() < block.blockTime;
    }

    /** 更新封禁信息 */
    updateBlockInfo(blockInfo: BlockModel) {
        let blockEntity = this._blockMap.get(blockInfo.userInfo);
        if (blockEntity) {
            blockEntity.update(blockInfo);
        } else {
            blockEntity = new this._BlockModel(blockInfo);
            blockEntity.save();
            this._blockMap.set(blockInfo.userInfo, blockEntity);
        }

        if (blockInfo.blockTime === 0 || blockInfo.blockTime > Date.now()) {
            this.kickPlayer(blockInfo.userInfo);
        }
    }

    private async kickPlayer(userIdOrIp: string) {
        const client = await GlobalVar.redisMgr.getClient();
        client.publish(`${startupParam.env}_kick`, JSON.stringify({ userIdOrIp, reason: '账号封禁' }));
    }
}
