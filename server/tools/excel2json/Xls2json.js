/*************
 * xls 转 json
 * *********/
const XlsxPopulate = require('xlsx-populate');
const parseXls = require("./ParseXls");
const cellOneNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let cellNames = [];
for (let i = 0; i < cellOneNames.length; i++) {
    cellNames.push(cellOneNames[i]);
}
for (let i = 0; i < cellOneNames.length; i++) {
    cellNames.push("A" + cellOneNames[i]);
}
for (let i = 0; i < cellOneNames.length; i++) {
    cellNames.push("B" + cellOneNames[i]);
}
for (let i = 0; i < cellOneNames.length; i++) {
    cellNames.push("C" + cellOneNames[i]);
}
module.exports = class Xls2json {
    constructor(url, varRow = 0, descRow = 1, csRow = 2, typeRow = 3, dataRow = 4) {
        this.url = url;
        this._varRow = varRow;
        this._descRow = descRow;
        this._csRow = csRow;
        this._typeRow = typeRow;
        this._dataRow = dataRow;
        this.defaultValueFlg = true; //默认值为null
    }

    isMap(sheetId) {
        return this.workbook.sheet(sheetId).cell('B1').value() === 'map';
    }

    async fromFileAsync() {
        this.workbook = await XlsxPopulate.fromFileAsync(this.url);
        let sheetId = 0;
        let configs = {};
        while (true) {
            let sheet = this.workbook.sheet(sheetId);
            if (!sheet) break;
            let configName = sheet.name(); //表名称
            if (configName.charAt(0) == '_') {
                sheetId++;
                continue;
            }
            configName = configName.split("-")[0];
            configs[configName] = {};
            const isMap = this.isMap(sheetId);
            this.varList = this.getVarList(sheetId, this._varRow); //变量名列表

            this.cellNames = [];
            for (let i = 0; i < this.varList.length; i++) {
                this.cellNames.push(cellNames[i]);
            }

            this.descList = this.getStringList(sheetId, this._descRow); //描述列表
            this.typeList = this.getStringList(sheetId, this._typeRow); //类型列表
            if (this._csRow > 0) {
                this.csList = this.getStringList(sheetId, this._csRow); //列表
            } else {
                this.csList = [];
            }
            this.dataList = this.getDataList(sheetId, this._dataRow, configName);
            if (this.dataList && this.dataList.length) {
                const sheetConf = configs[configName] = {};
                sheetConf.csList = this.csList;
                sheetConf.varList = this.varList;
                sheetConf.typeList = this.typeList;
                sheetConf.isMap = isMap;
                if (isMap) {
                    sheetConf.dataList = {};
                    for (let o of this.dataList) {
                        if (o.ignore) continue;
                        let mapValue = null;
                        let tempId = 0;
                        while (tempId < 100) {
                            mapValue = o['value' + tempId];
                            if (mapValue != null) {
                                break;
                            }
                            tempId++;
                        }
                        sheetConf.dataList[o.key] = mapValue;
                    }
                } else {
                    sheetConf.dataList = [];
                    for (let o of this.dataList) {
                        if (o.ignore) continue;
                        delete o["ignore"];
                        sheetConf.dataList.push(o);
                    }
                }
            }
            sheetId++;
        }
        return configs;
    }

    //数据列表
    getDataList(sheetId, index, configName) {
        let list = [];
        while (true) {
            let isNext = this.hasNext(sheetId, index);
            if (!isNext) break;
            let arr = this.getSignDataList(sheetId, index);
            let cell = {};
            for (let i = 0; i < this.varList.length; i++) {
                let varName = this.varList[i];
                let type = this.typeList[i]; //类型
                let cs = this.csList[i]; //类型
                let data = parseXls.parse(this.defaultValueFlg, arr[i], type, this.varList[i], configName);
                if (data && data.value != null && cs != 'e') {
                    cell[varName] = data.value;
                }
            }
            list.push(cell);
            index++;
        }
        return list;
    }

    //是否存在
    hasNext(sheetId, index) {
        let cell = this.workbook.sheet(sheetId).cell(this.cellNames[0] + index);
        if (cell && cell.value() != undefined) {
            return true;
        }
        return false;
    }

    getSignDataList(sheetId, index) {
        let list = [];
        for (let i = 0; i < this.cellNames.length; i++) {
            let cell = this.workbook.sheet(sheetId).cell(this.cellNames[i] + index);
            if (cell && cell.value() != undefined) {
                let v = cell.value();
                try {
                    if (typeof v == 'object') {
                        v = v.text();
                    }
                    list.push(v);
                } catch (e) {
                    list.push(null);
                }
            } else {
                list.push(null);
            }
        }
        return list;
    }

    getStringList(sheetId, index) {
        let list = [];
        for (let i = 0; i < this.cellNames.length; i++) {
            let cell = this.workbook.sheet(sheetId).cell(this.cellNames[i] + index);
            if (cell && cell.value() != undefined) {
                let v = cell.value();
                try {
                    if (typeof v == 'object') {
                        v = v.text();
                    } else if (typeof v == 'number') {
                        v = v + "";
                    }
                    list.push(v);
                } catch (e) {
                    list.push(null);
                }
            } else {
                list.push(null);
            }
        }
        return list;
    }

    getVarList(sheetId, index) {
        let i = 0;
        let list = [];
        while (true) {
            try {
                let cell = this.workbook.sheet(sheetId).cell(cellNames[i] + index);
                if (cell && cell.value() != undefined && cell.value().trim().length > 0) {
                    let v = cell.value();
                    if (typeof v == 'object') {
                        v = v.text();
                    } else if (typeof v == 'number') {
                        v = v + "";
                    }
                    list.push(v);
                }
                i++;
            } catch (e) {
                break;
            }
        }
        return list;
    }
};
