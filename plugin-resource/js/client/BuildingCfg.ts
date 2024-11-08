import { TConfig } from "./TConfig";


export interface BuildingCfg extends IConfig {id:number;buildingBg:string;createSpeed:number;startCount:number;maxCount:number;buildingRadius:number;}



export class BuildingCfgReader extends TConfig<BuildingCfg> {
    protected _name : string = "Building";


}