export class Utils {
    static isNullOrEmpty(str: string | number) {
        if (str == null) {
            return true;
        }
        let type = typeof (str);
        if (type == "string" && str == "") {
            return true;
        }

        if (type != "string" && type != "number") {
            cc.error("isNullOrEmpty error type", str)
        }
        return false;
    }
}