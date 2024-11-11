
const { ccclass, property } = cc._decorator;

@ccclass
export default class DispatchBarView extends cc.Component {

    @property(cc.Label)
    rateLabel: cc.Label = null;

    @property(cc.ProgressBar)
    barNode: cc.ProgressBar = null;

    private _startX: number;
    private _startProgress: number;
    private _touchId: number;

    protected onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    protected onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    private touchStart(event: cc.Event.EventTouch) {
        event.stopPropagation();
        this._startX = event.getLocationX();
        this._touchId = event.touch.getID();
        this._startProgress = this.barNode.progress;
    }

    private touchMove(event: cc.Event.EventTouch) {
        event.stopPropagation();
        if (event.touch.getID() !== this._touchId) { return; }
        this.barNode.progress = this._startProgress + (event.getLocationX() - this._startX) / this.node.width;
        this.barNode.progress = Math.min(Math.max(this.barNode.progress, 0), 1);
        this.rateLabel.string = `${Math.floor(this.barNode.progress * 100)}%`
    }

    private touchEnd(event: cc.Event.EventTouch){
        if ( this._touchId !== event.touch.getID()) return;
        this._touchId = null;
    }
}