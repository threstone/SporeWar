import { TConfig } from "./TConfig";


export interface MapCfg extends IConfig {id:number;bgPath:string;selfBase:number[][];enemyBase:number[][];mapBuilding:number[][];}



export class MapCfgReader extends TConfig<MapCfg> {
    protected _name : string = "Map";


}