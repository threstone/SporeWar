import { TConfig } from '../TConfig';

export class Spore extends TConfig<SporeDefine> {
    constructor(configs: SporeDefine[]) {
        super();
        this.initList(configs);
    }
}
