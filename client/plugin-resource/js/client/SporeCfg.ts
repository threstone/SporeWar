import { TConfig } from "./TConfig";


export interface SporeCfg extends IConfig {id:number;speed:number;selfImg:string;enemyImg:string;height:number;width:number;maxColumnCount:number;}



export class SporeCfgReader extends TConfig<SporeCfg> {
    protected _name : string = "Spore";


}