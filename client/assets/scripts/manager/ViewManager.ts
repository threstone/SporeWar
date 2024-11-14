import BaseView from "../framework/BaseView";

export class ViewManager {
    private static _ins: ViewManager;
    static ins() {
        return this._ins || (this._ins = new this());
    }

    private _canvas: cc.Node;

    private _viewMap: Map<string, cc.Node> = new Map();

    constructor() {
        this._canvas = cc.director.getScene().getChildByName("Canvas");
        this._viewMap = new Map();
        this.openView('/prefab/hall/HallView');
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
                        node.getComponent(BaseView).onOpen(...args);
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
            view.active = false;
            view.parent = null;
        }
    }
}