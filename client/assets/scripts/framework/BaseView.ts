import { ViewMgr } from "../manager/ViewMgr";

export default abstract class BaseView extends cc.Component {
    prefabPath: string;

    close() {
        ViewMgr.ins().closeView(this.prefabPath);
    }

    abstract onOpen(...args: any[]): void;
}