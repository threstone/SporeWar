import { TConfig } from "./TConfig";


export interface DropPoolCfg extends IConfig {id:number;}



export class DropPoolCfgReader extends TConfig<DropPoolCfg> {
    protected _name : string = "DropPool";


}