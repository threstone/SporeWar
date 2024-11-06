import { UserVo } from "../../../vo/UserVo";
import { Spore } from "../../model/entity/Spore";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SporeView extends cc.Component {

    @property(cc.Sprite)
    sporeSprite: cc.Sprite = null;

    private _offsetPosition: cc.Vec2;

    init(sporeInfo: Spore) {
        const imgPath = sporeInfo.uid === UserVo.ins().uid ? sporeInfo.cfg.selfImg : sporeInfo.cfg.enemyImg;
        cc.resources.load(imgPath, cc.SpriteFrame, (err, spriteFrame) => {
            this.sporeSprite.spriteFrame = spriteFrame;
        });

        // y = i + 0.5 - n / 2
        // 以x轴方向为基准,将所有元素平放于y轴上,y轴的位置即斜边长
        // 再根据角度计算新的坐标
        const hypotenuseLen = (sporeInfo.indexOfColumn + 0.5 - sporeInfo.columnCount / 2) * sporeInfo.cfg.width;
        // 已知斜边长和角度,求x,y
        const anger = sporeInfo.anger - 90;
        const x = Math.cos(anger * Math.PI / 180) * hypotenuseLen;
        const y = Math.sin(anger * Math.PI / 180) * hypotenuseLen;
        this._offsetPosition = cc.v2(x, y);
    }

    updateEntity(sporeInfo: Spore) {
        const minDistance = Math.min(sporeInfo.position.sub(sporeInfo.from.position).len(), sporeInfo.position.sub(sporeInfo.targetBase.position).len());
        const offsetScaler = Math.min(1, minDistance / 30);
        this.node.setPosition(sporeInfo.position.add(this._offsetPosition.mul(offsetScaler)));
    }
}