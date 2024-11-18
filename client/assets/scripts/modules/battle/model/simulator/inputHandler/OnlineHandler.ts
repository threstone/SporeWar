import { BattlePto } from "../../../../../framework/proto/CommonProto";
import { BattleModel } from "../../BattleModel";
import { InputHandler } from "./InputHandler";

export class OnlineHandler extends InputHandler {
    dispatchSpore(fromId: number, targetId: number, dispatchRate: number) {
        BattleModel.ins().sendDispatch(new BattlePto.C_BATTLE_DISPATCH({
            dispatchInfo: {
                fromId,
                targetId,
                dispatchRate,
            }
        }));
    }
}