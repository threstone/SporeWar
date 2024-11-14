import { TConfig } from "./TConfig";


export interface StageCfg extends IConfig {id:number;mapId:number;}



export class StageCfgReader extends TConfig<StageCfg> {
    protected _name : string = "Stage";


}