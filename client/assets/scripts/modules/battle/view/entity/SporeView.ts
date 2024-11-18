import { UserVo } from "../../../vo/UserVo";
import { Spore } from "../../model/simulator/entity/Spore";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SporeView extends cc.Component {

    @property(cc.Sprite)
    sporeSprite: cc.Sprite = null;

    init(sporeInfo: Spore) {
        const imgPath = sporeInfo.userId === UserVo.ins().userId ? sporeInfo.cfg.selfImg : sporeInfo.cfg.enemyImg;
        cc.resources.load(imgPath, cc.SpriteFrame, (err, spriteFrame) => {
            this.sporeSprite.spriteFrame = spriteFrame;
        });
    }

    updateEntity(sporeInfo: Spore) {
        this.node.setPosition(sporeInfo.position);
    }
}