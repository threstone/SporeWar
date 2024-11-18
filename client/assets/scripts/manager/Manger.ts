import { SocketClientMgr } from "./SocketMgr";
import { StorageMgr } from "./StorageMgr";
import { ViewMgr } from "./ViewMgr";

class _Manager {
    public get storage(): StorageMgr {
        return StorageMgr.ins();
    }

    public get viewMgr(): ViewMgr {
        return ViewMgr.ins();
    }

    public get socketClientMgr(): SocketClientMgr {
        return SocketClientMgr.ins();
    }
}

export const Manager = new _Manager();