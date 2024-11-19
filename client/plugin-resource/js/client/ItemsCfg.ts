import { TConfig } from "./TConfig";


export interface ItemsCfg extends IConfig {id:number;define?:string;name:string;desc?:string;type:number;subType?:number;json?:number[][];iconPath:string;quality:number;isShow:number;isItem:number;tip?:string;}



export class ItemsCfgReader extends TConfig<ItemsCfg> {
    protected _name : string = "Items";


}