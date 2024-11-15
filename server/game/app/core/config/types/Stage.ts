import { TConfig } from '../TConfig';

export class Stage extends TConfig<StageDefine> {
    constructor(configs: StageDefine[]) {
        super();
        this.initList(configs);
    }
}
