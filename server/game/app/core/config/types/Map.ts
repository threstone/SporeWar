import { TConfig } from '../TConfig';

export class Map extends TConfig<MapDefine> {
    constructor(configs: MapDefine[]) {
        super();
        this.initList(configs);
    }
}
