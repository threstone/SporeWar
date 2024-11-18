import { BaseModel } from "../../framework/BaseModel";
import { HttpClient } from "../../framework/net/HttpClient";
import { ServerPto } from "../../framework/proto/CommonProto";
import { Manager } from "../../manager/Manger";
import { StorageMgr } from "../../manager/StorageMgr";
import { ViewMgr } from "../../manager/ViewMgr";
import Encrypt from "../../util/Encrypt";
import { UserVo } from "../vo/UserVo";

export class LoginModel extends BaseModel {
    private _account: string;
    async login(account: string, url: string) {
        try {
            this._account = account;
            const data = { account };
            const result = await HttpClient.httpPost(url, { content: Encrypt.encrypt(JSON.stringify(data), "abcdef") });
            Manager.socketClientMgr.connect(result.url);
            this.sendGameMessage(new ServerPto.C_CONNECT({ serverId: result.serverId, token: result.token }));
        } catch (error) {
            cc.error('登录失败', error);
        }
    }

    S_CONNECT(message: ServerPto.S_CONNECT) {
        StorageMgr.ins().setString('loginAccount', this._account);
        ViewMgr.ins().closeView('/prefab/login/LoginView');
        ViewMgr.ins().openView('/prefab/hall/HallView');

        const vo = UserVo.ins();
        vo.userId = message.loginInfo.userId;
        vo.serverId = message.loginInfo.serverId;
        vo.stageId = message.loginInfo.stageId;
    }
}

export const LoginUrls = {
    ['积木服']: "http://192.168.20.61:1234/login",
    ['测试服']: "http://192.168.20.61:1234/login",
    ['积木222']: "http://192.168.20.61:1234/login",
}