import { SensitiveWordTool } from 'sensitive-word-tool';
import * as sensitiveWord from '../../config/sensitiveWord.json';

export class SensitiveTool {
    private static _ins: SensitiveTool;

    static ins() {
        if (!SensitiveTool._ins) {
            SensitiveTool._ins = new SensitiveTool();
        }
        return SensitiveTool._ins;
    }

    private _sensitiveWordTool: SensitiveWordTool;

    constructor() {
        this._sensitiveWordTool = new SensitiveWordTool({ useDefaultWords: true, noiseWords: ' ' });
        this._sensitiveWordTool.addWords(sensitiveWord);
    }

    /**
    * @description: 检测文本中是否包含敏感词
    * @param  content 待匹配文本内容
    */
    verify(str: string) {
        return this._sensitiveWordTool.verify(str);
    }

    /**
    * @description: 对文本中的敏感词进行过滤替代
    * @param  content 待匹配文本内容
    * @param  filterChar 敏感词替代符，默认为'*'
    */
    filter(str: string, filterChar?: string) {
        return this._sensitiveWordTool.filter(str, filterChar);
    }
}
