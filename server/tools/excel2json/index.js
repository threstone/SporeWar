const fs = require('fs').promises;
const crypto = require('crypto')
const path = require('path');
const Xls2json = require('./Xls2json');

// 只需要关注这个,excel所在目录的路径
const excelPath = path.join(process.argv[2]);




console.time('全部完成');
const configPath = path.join(__dirname, '../../game/app/core/config/');
const serverConfigOutputPath = path.join(configPath, './server/');
const clientConfigOutputPath = path.join(configPath, './client/');
const typesOutputPath = path.join(configPath, './types/');
const defineOutputPath = path.join(configPath, './ConfigsDefine.ts');

const sheets = [];
start();

async function start() {
    await mkdirIfNotExist(serverConfigOutputPath);
    await mkdirIfNotExist(clientConfigOutputPath);
    await mkdirIfNotExist(typesOutputPath);
    await clearDir(serverConfigOutputPath);
    await clearDir(clientConfigOutputPath);
    if (await isFileExist(defineOutputPath)) {
        await fs.unlink(defineOutputPath);
    }

    const files = await fs.readdir(excelPath)
    const tasks = [];
    for (let index = 0; index < files.length; index++) {
        const filename = files[index];
        if (filename.startsWith('~') || filename.endsWith('.xlsx') === false) {
            continue
        }

        tasks.push(writeExcel(excelPath + filename));
    }
    await Promise.all(tasks);

    sheets.sort((a, b) => {
        return a.sort - b.sort;
    });
    await Promise.all([writeCfg(), writeTypeDefine()]);
    console.timeEnd('全部完成');
}

async function writeExcel(xlsxPath) {
    const data = new Xls2json(xlsxPath, 1, 2, 3, 4, 5);
    const sheetConfigs = await data.fromFileAsync()
    const tasks = [];
    const sheetKeys = Object.keys(sheetConfigs);
    for (let index = 0; index < sheetKeys.length; index++) {
        const sheetName = sheetKeys[index];
        tasks.push(writeSheet(sheetName, sheetConfigs[sheetName]));
    }
    await Promise.all(tasks);
    console.log('完成', xlsxPath);
}

async function writeSheet(sheetName, config) {
    let c, s;
    if (config.isMap) {
        c = config.dataList;
        s = config.dataList;
    } else {
        c = [];
        s = [];
        config.csMap = {};
        for (let index = 0; index < config.varList?.length; index++) {
            const key = config.varList[index];
            config.csMap[key] = {
                isC: config.csList[index].indexOf('c') !== -1,
                isS: config.csList[index].indexOf('s') !== -1
            }
        }
        for (const key in config.dataList) {
            const value = config.dataList[key];
            const tempC = {};
            let hasC = false;
            const tempS = {};
            let hasS = false;

            for (let index = 0; index < config.varList.length; index++) {
                const keyOfObj = config.varList[index];
                const csData = config.csMap[keyOfObj];
                if (csData.isC) {
                    tempC[keyOfObj] = value[keyOfObj];
                    hasC = true;
                }
                if (csData.isS) {
                    tempS[keyOfObj] = value[keyOfObj];
                    hasS = true;
                }
            }

            if (hasC) {
                c[key] = tempC;
            }
            if (hasS) {
                s[key] = tempS;
            }
        }
    }
    sheets.push({ sheetName, config, sort: getIntHash(sheetName) });
    await fs.writeFile(path.join(serverConfigOutputPath, sheetName + '.json'), stringify(s, { indent: 2, maxLength: 260 }));
    await fs.writeFile(path.join(clientConfigOutputPath, sheetName + '.json'), stringify(c, { indent: 2, maxLength: 260 }));
    await writeTypes(sheetName);
}

async function writeCfg() {
    let importStr = `/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
import * as fs from 'fs';
import path = require('path');\n`;
    let cfg = `\nexport class Cfg {\n`;
    let entity = '';
    sheets.forEach((sheet) => {
        const { sheetName } = sheet;
        importStr += `import { ${sheetName} as ${sheetName}Table } from './types/${sheetName}';\n`
        cfg += `    static ${sheetName}: ${sheetName}Table;\n\n`
        entity += `\n        Cfg.${sheetName} = new ${sheetName}Table(this.configRequire(\`\${serverType}/${sheetName}.json\`, cloudConfigPath));`
    });
    cfg += `    static init(serverType: 'server' | 'client', cloudConfigPath: string = null) {
        // eslint-disable-next-line no-console
        console.info('Cfg init...');
${entity}
    }

    private static configRequire(fileName: string, cloudConfigPath: string) {
        if (!cloudConfigPath) {
            return require(\`./\${fileName}\`);
        }

        const cloudPath = path.join(cloudConfigPath, fileName);
        const isExit = fs.existsSync(cloudPath);
        if (!isExit) {
            return require(\`./\${fileName}\`);
        }
        return JSON.parse(fs.readFileSync(cloudPath, 'utf8'));
    }
}
`
    cfg = importStr + cfg;

    const outputPath = path.join(configPath, './Cfg.ts');
    await fs.writeFile(outputPath, cfg);
}

async function writeTypeDefine() {
    let typesDefine = '/* eslint-disable no-unused-vars */\ndeclare type define = string;\n';
    sheets.forEach((sheet) => {
        typesDefine += getDefine(sheet.sheetName, sheet.config);
    })
    await fs.writeFile(defineOutputPath, typesDefine);
}

async function writeTypes(sheetName) {
    const filePath = path.join(typesOutputPath, sheetName + '.ts');
    if (await isFileExist(filePath)) {
        return;
    }

    const t = `import { TConfig } from '../TConfig';

export class ${sheetName} extends TConfig<${sheetName}Define> {
    constructor(configs: ${sheetName}Define[]) {
        super();
        this.initList(configs);
    }
}
`
    await fs.writeFile(filePath, t);
}

function getDefine(sheetName, config) {
    let define = `declare interface ${sheetName}Define {\n`
    for (let index = 0; index < config.varList?.length; index++) {
        const name = config.varList[index];
        if (config.csMap[name].isC === false && config.csMap[name].isS === false) {
            continue
        }
        let type = config.typeList[index];
        // const allowNull = type.indexOf('?') !== -1;
        type = type.replace('?', '').replace('#', '');
        if (type.startsWith('I')) {
            type = 'any'
        }
        define += `   readonly ${name}?: ${type};\n`
    }
    define += '}\n'
    return define;
}

async function mkdirIfNotExist(dirPath) {
    try {
        await fs.stat(dirPath);
    } catch (error) {
        await fs.mkdir(dirPath);
    }
}

async function clearDir(dir) {
    try {
        const files = await fs.readdir(dir);
        const tasks = [];
        for (const file of files) {
            const filePath = path.join(dir, file);
            tasks.push(fs.unlink(filePath));
        }
        await Promise.all(tasks);
    } catch (err) {
        console.error('Error occurred:', err);
    }
}

async function isFileExist(filePath) {
    try {
        await fs.stat(filePath);
        return true;
    } catch (error) {
        return false;
    }
}

function stringify(passedObj, options) {
    var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;
    var arrayAndObject = /\[\{/g;
    var indent, maxLength, replacer;
    options = options || {};
    indent = JSON.stringify([1], undefined, options.indent === undefined ? 2 : options.indent).slice(2, -3);
    maxLength = indent === "" ? Infinity : options.maxLength === undefined ? 150 : options.maxLength;
    replacer = options.replacer;
    return (function _stringify(obj, currentIndent, reserved) {
        var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;
        if (obj && typeof obj.toJSON === "function") {
            obj = obj.toJSON();
        }
        string = JSON.stringify(obj, replacer);
        if (string === undefined) {
            return string;
        }
        length = maxLength - currentIndent.length - reserved;
        if (string.length <= length && string.search(arrayAndObject)) {
            prettified = string.replace(stringOrChar, function (match, stringLiteral) {
                return stringLiteral || match + " ";
            });
            if (prettified.length <= length) {
                prettified = prettified.replace(/: /g, ":");
                prettified = prettified.replace(/, /g, ",");
                return prettified;
            }
        }
        if (replacer != null) {
            obj = JSON.parse(string);
            replacer = undefined;
        }
        if (typeof obj === "object" && obj !== null) {
            nextIndent = currentIndent + indent;
            items = [];
            index = 0;
            if (Array.isArray(obj)) {
                start = "[";
                end = "]";
                length = obj.length;
                for (; index < length; index++) {
                    items.push(_stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) || "null");
                }
            } else {
                start = "{";
                end = "}";
                keys = Object.keys(obj);
                length = keys.length;
                for (; index < length; index++) {
                    key = keys[index];
                    keyPart = JSON.stringify(key) + ":";
                    value = _stringify(obj[key], nextIndent, keyPart.length + (index === length - 1 ? 0 : 1));
                    if (value !== undefined) {
                        items.push(keyPart + value);
                    }
                }
            }
            if (items.length > 0) {
                return [start, indent + items.join(",\n" + nextIndent), end].join("\n" + currentIndent);
            }
        }
        return string;
    })(passedObj, "", 0);
};
function getIntHash(name) {
    // 创建一个哈希实例，这里使用'md5'
    const hash = crypto.createHash('md5');
    // 更新哈希实例的数据，这里是要哈希的字符串
    hash.update(name);
    // 计算哈希值，返回一个十六进制的字符串
    const hexHash = hash.digest('hex');
    return parseInt(hexHash.substring(0, 8), 16);
}
