import { TConfig } from "./TConfig";


export interface BaseCfg extends IConfig {id:number;baseBg:string;createSpeed:number;startCount:number;maxCount:number;baseRadius:number;}



export class BaseCfgReader extends TConfig<BaseCfg> {
    protected _name : string = "Base";


}