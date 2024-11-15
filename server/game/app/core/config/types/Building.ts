import { TConfig } from '../TConfig';

export class Building extends TConfig<BuildingDefine> {
    constructor(configs: BuildingDefine[]) {
        super();
        this.initList(configs);
    }
}
