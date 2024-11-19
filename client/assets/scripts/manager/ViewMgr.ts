import BaseView from "../framework/BaseView";
import { SingleClass } from "../framework/SingleClass";

export class ViewMgr extends SingleClass {

    private _canvas: cc.Node;

    private _viewMap: Map<string, cc.Node> = new Map();

    constructor() {
        super();
        this._canvas = cc.director.getScene().getChildByName("Canvas");
        this._viewMap = new Map();
        this.openView('/prefab/login/LoginView');
    }

    async openView(path: string, ...args: any[]) {
        const view = this._viewMap.get(path);
        if (view) {
            view.parent = null;
            view.parent = this._canvas;
            view.active = true;
            view.getComponent(BaseView).onOpen(...args);
            return view;
        } else {
            return new Promise<cc.Node>((resolve, reject) => {
                cc.resources.load(path, cc.Prefab, (err, prefab) => {
                    if (err) {
                        reject(err);
                    } else {
                        const node = cc.instantiate(prefab);
                        const baseView = node.getComponent(BaseView);
                        baseView.prefabPath = path;
                        baseView.onOpen(...args);
                        baseView.changeListener(true);
                        this._viewMap.set(path, node);
                        this._canvas.addChild(node);
                        resolve(node);
                    }
                });
            });
        }
    }

    closeView(path: string) {
        const view = this._viewMap.get(path);
        if (view) {
            const baseView = view.getComponent(BaseView);
            baseView.onClose();
            baseView.changeListener(false);
            view.active = false;
            view.parent = null;
        }
    }
}