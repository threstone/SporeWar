module.exports = {
    _handObjArray(value, varName, configName) {
        if (!value) {
            // console.log(varName, configName)
            return {value: null, isArray: true, type: "any[]"};
        }
        let realvalue = value.replace(/[ \[\]]+/g, '');
        let star = 0;
        let count = 0;
        let arr = [];
        for (let i = 0; i < realvalue.length; i++) {
            let char = realvalue.charAt(i);
            if (char == "{") {//处理嵌套
                if (count == 0) {
                    star = i;
                }
                count++;
            } else if (char == "}") {
                count--;
                if (count == 0) {
                    let objstr = realvalue.substring(star, i + 1);
                    arr.push(this._handleObj(objstr).value);
                }
            }
        }
        return {value: arr, isArray: true, type: "any[]"};
    },
    _handleSingleObjValue(realvalue) {
        let star = 0;
        let count = 0;
        for (let i = 0; i < realvalue.length; i++) {
            let char = realvalue.charAt(i);
            if (char == "{") {//处理嵌套
                if (count == 0) {
                    star = i;
                }
                count++;
            } else if (char == "}") {
                count--;
                if (count == 0) {
                    let objstr = realvalue.substring(star, i + 1);
                    return this._handleObj(objstr).value;
                }
            }
        }
        return null;
    },
    _handleObj(objstr) {
        objstr = objstr.replace(/^\{\s*|\s*\}$/g, "").replace(/[\:]/g, "=");
        let splitstr = [];
        let countObj = 0;
        let start = 0;
        for (let i = 0; i < objstr.length; i++) {
            let key = objstr.charAt(i);
            if (key == "{") countObj++;
            if (key == "}") countObj--;
            if (key == "," && countObj == 0) {
                splitstr.push(objstr.substring(start, i));
                start = i + 1;
            }
        }
        if (start < objstr.length) {
            splitstr.push(objstr.substring(start, objstr.length));
        }
        let obj = {};
        for (let i = 0; i < splitstr.length; i++) {
            let index = splitstr[i].indexOf('=');
            let splitobj = [splitstr[i].substring(0, index), splitstr[i].substring(index + 1, splitstr[i].length)];
            let v = splitobj[1];
            if (v.startsWith("{")) {
                obj[splitobj[0]] = this._handleSingleObjValue(v);
            } else {
                if (v.indexOf(".") >= 0) {
                    obj[splitobj[0]] = parseFloat(v);
                } else {
                    obj[splitobj[0]] = parseInt(v);
                }
            }
        }
        return {value: obj, isArray: false, type: "any"};
    },
    parse: function (defaultValueFlg, value, type, varName, configName) {
        if (!type) {
            return {value: value, isArray: false, type: "any"};
        }
        let isMust = type.indexOf("?") < 0; //是否必选
        let isArray = type.indexOf("[]") >= 0; //是否是数组
        let isObject = false;
        let isFloat = false;
        let isInt = false;
        let isNull = false;
        if (value == null || value == undefined) {
            isNull = true;
        }
        if (type.indexOf("I") >= 0 || type.indexOf("Object") >= 0) {
            // console.log(type)
            if (isArray) {
                return this._handObjArray(value, varName, configName);
            } else {
                return this._handleObj(value, varName, configName);
            }
        }
        if (isArray && !isNull) {
            if (value == null || value == undefined) value = '[]';
            value = value + "";
            if (value.indexOf("[") != 0) {
                value = "[" + value;
            }
            if (value.lastIndexOf("]") != (value.length - 1)) {
                value = value + "]";
            }
        }
        type = type.replace(/[ \#]+/g, '');
        type = type.replace(/[ \?]+/g, '');
        type = type.replace(/[\[\]]+/g, '')
        switch (type) {
            case 'define':
                type = "string";
                if (isArray) {
                    value = this.checkStringArray(value);
                    type = "string[]";
                } else if (!isNull && typeof value != "string") {
                    value = value + '';
                }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = ''
                    }
                    isNull = false;
                }
                break;
            case 'string': //字符串类型
                type = "string";
                if (isArray) {
                    value = this.checkStringArray(value);
                    type = "string[]";
                } else {
                    if (!defaultValueFlg)
                        isMust = true;
                    if (!isNull && typeof value != "string") {
                        value = value + '';
                    }
                }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = ''
                    }
                    isNull = false;
                }
                break;
            case "float":
            case "double":
                isFloat = true;
                type = "number";
                if (isArray) {
                    type = "number[]";
                } else {
                    if (!defaultValueFlg)
                        isMust = true;
                }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = 0
                    }
                    isNull = false;
                }
                break;
            case "int":
            case "int32":
            case "sint32":
            case "uint32":
            case "int64":
            case "sint64":
            case "uint64":
            case "number":
                isInt = true;
                type = "number";
                if (isArray) {
                    type = "number[]";
                } else {
                    if (!defaultValueFlg)
                        isMust = true;
                }
                if (typeof value == 'string') {
                    value = value.trim();
                    if (!value.length) {
                        value = null;
                        isNull = true;
                    }
                }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = 0
                    }
                    isNull = false;
                }
                break;
            case "any":
            case "json":
            case "object":
                isObject = true;
                type = "any";
                if (isArray) {
                    type = "any[]";
                }
                // if (value) {
                //     if (value.indexOf("{") != 0) {
                //         value = "{" + value;
                //     }
                //     if (value.lastIndexOf("}") != (value.length - 1) && !isNull) {
                //         value = value + "}";
                //     }
                // }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = '{}'
                    }
                    isNull = false;
                }
                break;
            default:
                if (isArray) {
                    type = `${type}[]`;
                }
                if (isMust && isNull) {
                    if (isArray) {
                        value = '[]'
                    } else {
                        value = ''
                    }
                    isNull = false;
                }
                break;
        }
        if (!isNull) {
            try {
                if (isArray || isObject) {
                    value = JSON.parse(value);
                } else if (isInt) {
                    value = parseInt(value);
                } else if (isFloat) {
                    value = parseFloat(value);
                }
            } catch (e) {
                console.log(configName, value, typeof value, varName)
            }
        }
        return {value: value, isArray: isArray, type: type};
    },
    //检测string 数组的对象格式
    checkStringArray(value) {
        if (!value) return null;
        try {
            let realvalue = value.replace(/[ \[\]]+/g, '').replace(/[ \"]+/g, '').replace(/[ \']+/g, '').replace(/[ \，]+/g, ',');
            let arr = realvalue.split(',');
            return JSON.stringify(arr);
        } catch (e) {
            console.log(value, typeof value)
        }
        return null;
    },
    //获取接口定义
    getProtosString(varName, type) {
        let isMust = type.indexOf("?") < 0; //是否必选
        let isArray = type.indexOf("[]") >= 0; //是否是数组
        type = type.replace(/[ \#]+/g, '');
        type = type.replace(/[ \?]+/g, '');
        type = type.replace(/[\[\]]+/g, '')
        switch (type) {
            case "float":
            case "double":
            case "int32":
            case "sint32":
            case "uint32":
            case "int64":
            case "sint64":
            case "uint64":
                type = type;
                break;
            case "int":
            case "number":
                type = 'int32';
                break;
            default :
                type = 'string';
                break
        }
        if (isArray) {
            type = 'string';
        }
        let qu = "required";
        if (isArray) {
            qu = "optional";
        } else if (!isMust) {
            qu = "optional";
        }
        return {
            type: type,
            qu: qu,
            name: varName,
            index: 0
        };
    }
};