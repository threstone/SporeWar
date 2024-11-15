export class Utils {
    static isBaseType(typeName: string) {
        switch (typeName) {
            case 'double':
            case 'float':
            case 'int32':
            case 'sint32':
            case 'uint32':
            case 'int64':
            case 'sint64':
            case 'uint64':
            case 'fixed32':
            case 'fixed64':
            case 'sfixed32':
            case 'sfixed64':
            case 'bool':
            case 'string':
            case 'bytes':
                return true;
        }
        return false;
    }
}