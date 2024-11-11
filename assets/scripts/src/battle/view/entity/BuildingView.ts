import { UserVo } from "../../../vo/UserVo";
import { Building } from "../../model/entity/Building";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuildingView extends cc.Component {

    @property(cc.Label)
    countLable: cc.Label = null;

    @property(cc.Sprite)
    buildingSprite: cc.Sprite = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    init(baseInfo: Building) {
        cc.resources.load(baseInfo.baseConfig.buildingBg, cc.SpriteFrame, (err, spriteFrame) => {
            this.buildingSprite.spriteFrame = spriteFrame;
        });
    }

    updateEntity(baseInfo: Building) {
        this.node.setPosition(baseInfo.position);
        this.countLable.string = `${baseInfo.sporeCount}`;
        this.progressBar.node.active = false;
        if (baseInfo.uid) {
            const selfUid = UserVo.ins().uid;
            this.countLable.node.color = baseInfo.uid === selfUid ? cc.Color.GREEN : cc.Color.RED;
            // 仅己方的显示进度条
            if (baseInfo.uid === selfUid) {
                this.progressBar.node.active = baseInfo.sporeCount < baseInfo.maxSporeCount;
                this.progressBar.progress = baseInfo.createDt / baseInfo.createSpeed;
            }
        }
    }
}