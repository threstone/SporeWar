import BaseView from "../../framework/BaseView";
import { StorageMgr } from "../../manager/StorageMgr";
import { LoginModel, LoginUrls } from "./LoginModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleView extends BaseView {

    @property(cc.EditBox)
    accountInput: cc.EditBox = null;

    @property(cc.ToggleContainer)
    toggleContainer: cc.ToggleContainer = null;

    onOpen(): void {
        this.accountInput.string = StorageMgr.ins().getString('loginAccount');
        this.initTogglerContainer();
    }

    private initTogglerContainer() {
        const urlKeys = Object.keys(LoginUrls);

        const cacheSelect = StorageMgr.ins().getString('selectServer');
        const toggleWidth = 100;
        let x = toggleWidth / 2 - urlKeys.length * toggleWidth / 2;
        for (let index = 0; index < urlKeys.length; index++) {
            const key = urlKeys[index];
            let toggleNode = this.toggleContainer.node.children[index];
            if (toggleNode == null) {
                toggleNode = cc.instantiate(this.toggleContainer.node.children[0]);
                toggleNode.parent = this.toggleContainer.node;
            }
            toggleNode.x = x;
            toggleNode.y = 0;
            x += toggleWidth;
            toggleNode.getChildByName('label').getComponent(cc.Label).string = key;
            const toggleComp = toggleNode.getComponent(cc.Toggle);
            toggleComp.checkEvents[0].customEventData = key;
            if (cacheSelect === key) {
                setTimeout(() => {
                    toggleComp.check();
                }, 0);
            }
        }
    }

    onLonginBtnClick() {
        if (this.accountInput.string.length === 0) {
            return;
        }

        let selectServer: string;
        this.toggleContainer.toggleItems.forEach((toggle) => {
            if (toggle.isChecked) {
                selectServer = toggle.node.getChildByName('label').getComponent(cc.Label).string;
            }
        });
        console.log('connect to', selectServer);
        LoginModel.ins().login(this.accountInput.string, LoginUrls[selectServer]);
    }

    onToggleClick(event: cc.Event, customEventData: string) {
        StorageMgr.ins().setString('selectServer', customEventData);
        console.log(customEventData);
    }
}