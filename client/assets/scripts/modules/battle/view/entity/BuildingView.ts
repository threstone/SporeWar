import { UserVo } from "../../../vo/UserVo";
import { Building } from "../../model/simulator/entity/Building";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuildingView extends cc.Component {

    @property(cc.Label)
    countLable: cc.Label = null;

    @property(cc.Sprite)
    buildingSprite: cc.Sprite = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    init(buildingInfo: Building) {
        cc.resources.load(buildingInfo.buildingConfig.buildingBg, cc.SpriteFrame, (err, spriteFrame) => {
            this.buildingSprite.spriteFrame = spriteFrame;
        });
    }

    updateEntity(buildingInfo: Building) {
        this.node.setPosition(buildingInfo.position);
        this.countLable.string = `${buildingInfo.sporeCount}`;
        this.progressBar.node.active = false;
        this.countLable.node.color = cc.Color.WHITE;
        if (buildingInfo.userId) {
            const selfUserId = UserVo.ins().userId;
            this.countLable.node.color = buildingInfo.userId === selfUserId ? cc.Color.GREEN : cc.Color.RED;
            // 仅己方的显示进度条
            if (buildingInfo.userId === selfUserId) {
                this.progressBar.node.active = buildingInfo.sporeCount < buildingInfo.maxSporeCount;
                this.progressBar.progress = buildingInfo.createDt / buildingInfo.createSpeed;
            }
        }
    }
}