import * as crypto from 'crypto';

export class Utils {
    static getSign(v: any, key: string) {
        const args = JSON.parse(JSON.stringify(v));
        delete args.sign;
        let keys = Object.keys(args);
        if (keys.length <= 0) {
            return null;
        }
        keys = keys.sort();
        let str = '';
        keys.forEach((k) => {
            str += `&${keys[k]}=${args[keys[k]]}`;
        });
        str = str.substring(1);
        str += key;
        const sign = crypto.createHash('md5').update(str, 'utf8').digest('hex');
        return sign.toLowerCase();
    }
}
