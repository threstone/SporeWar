import { GenerateType, ToolsConfig } from "../ConstDefine";
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'child_process';
import { AttrInfo, NamespaceInfo, EnumInfo } from "./ProtoDefine";
import { Relationship } from "./Relationship";
import { Utils } from "./Utils";

export class NormalBufferGenerator {

    namespaceMap: Map<string, NamespaceInfo>;
    common: NamespaceInfo;
    relationshipMap: Map<string, Relationship>;

    startGen(configs: ToolsConfig[]) {
        for (let index = 0; index < configs.length; index++) {
            const config = configs[index];
            if (config.generateType === GenerateType.All || GenerateType.NormalBuf) {
                this.genByConfig(config);
            }
        }
    }

    private genByConfig(config: ToolsConfig) {
        this.namespaceMap = new Map<string, any>();
        this.relationshipMap = new Map<string, Relationship>();
        this.common = new NamespaceInfo('');
        //检查对应文件夹是否存在   不在则创建
        if (!fs.existsSync(config.targetPath)) {
            fs.mkdirSync(config.targetPath)
        }

        //根据proto文件拼接命令以及整理proto依赖关系 
        let command = 'pbjs -t json -o ./dist/proto.json ';
        for (let i = 0; i < config.commonFiles.length; i++) {
            let filePath = config.commonFiles[i];
            if (path.extname(filePath) != ".proto") {
                continue;
            }
            //拼接命令
            command += ` ${filePath}`;

            //获取绝对路径
            let realPath = path.resolve(filePath);
            this.initRelationship(realPath);

            path.join(realPath,);
        }

        //生成描述proto的json文件
        process.execSync(command);

        let protoJson = require('../../proto.json');
        //利用生成的json整理出数据方便写流
        this.handlerProtoJson(protoJson);

        this.writeNormalProto(config);
    }

    private writeNormalProto(config: ToolsConfig) {
        let classText = '';
        this.namespaceMap.forEach((info, name) => {
            //start
            classText += `export namespace ${name} {\n`
            //write enum
            classText += this.getEnumText(info.enumMap);
            //write message
            classText += this.getMessageText(info);
            //end
            classText += '}'
        });

        //写common
    }

    private getEnumText(enumMap: Map<string, EnumInfo[]>) {
        let enumText = '';
        enumMap.forEach((kvInfos, enumName) => {
            enumText += `    enum ${enumName} {\n`
            for (let index = 0; index < kvInfos.length; index++) {
                const kvInfo = kvInfos[index];
                enumText += `        ${kvInfo.key} = ${kvInfo.value};\n`
            }
            enumText += `    }\n`
        });
        return enumText;
    }

    // TODO message的write工作还没有完成
    private getMessageText(info: NamespaceInfo) {
        let messageMap: Map<string, AttrInfo[]> = info.messageMap;
        let msgText = '';
        messageMap.forEach((attrs, msgName) => {
            msgText += `    class ${msgName} {\n`
            for (let index = 0; index < attrs.length; index++) {
                const attr = attrs[index];
                const isArray = attr.rule === 'repeated';
                const typeName = this.getTypeName(attr.type, info);
                // msgText += `        public ${attr.attrName}: ${this.getTypeName(attr.type, info)}`
                //     + `${isArray ? '[]' : ''}`
                //设置初始值
                if (attr.options) {
                    if (typeof (attr.options.default) === 'number') {
                        msgText += ` = ${attr.options.default}\n`
                    } else {
                        const isBaseType = Utils.isBaseType(attr.type);
                        if (isBaseType) {
                            msgText += ` = ${attr.options.default}\n`
                        }
                    }
                } else {
                    msgText += '\n';
                }
            }
            msgText += `    }\n`
        });
        return msgText;
    }

    private getTypeName(type: string, info: NamespaceInfo) {
        switch (type) {
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
                return 'number';
            case 'bool':
                return 'boolean';
            case 'string':
                return 'string'
            case 'bytes':
                return 'Uint8Array';
            //message type
            default:
                let result = this.findAttrTypeInNamespace(type, info, new Set<string>());
                return result || type;
        }
    }

    private findAttrTypeInNamespace(typeName: string, info: NamespaceInfo, findedSet: Set<string>) {
        findedSet.add(info.name);
        //自己有
        if (info.enumMap.has(typeName) || info.messageMap.has(typeName)) {
            return `${info.name}.${typeName}`;
        }

        for (let index = 0; index < info.relationship.importArr.length; index++) {
            const realPath = info.relationship.importArr[index];
            let namespace = this.relationshipMap.get(realPath).namespace;
            //如果此引用没有namespace，那么此引用的定义都在common
            if (!namespace || findedSet.has(namespace)) {
                continue;
            }
            return this.findAttrTypeInNamespace(typeName, this.namespaceMap.get(namespace), findedSet);
        }
    }

    //初始化proto文件的关系网
    private initRelationship(realPath: string) {
        let relationship = this.relationshipMap.get(realPath);
        if (!relationship) {
            relationship = new Relationship(realPath);
            relationship.init();
            this.relationshipMap.set(realPath, relationship);

            for (let index = 0; index < relationship.importArr.length; index++) {
                //引入proto的绝对路径
                const importFileRealPath = relationship.importArr[index];
                //根据绝对路径判断此文件是否初始化了关系网,如果没有则初始化
                this.initRelationship(importFileRealPath);
            }
        }
    }

    private handlerProtoJson(protoJson: any) {
        protoJson = protoJson.nested;
        for (const key in protoJson) {
            let cur = protoJson[key];
            //存在的话说明 此key是namespace
            if (cur.nested) {
                let info = this.namespaceMap.get(key);
                if (!info) {
                    info = new NamespaceInfo(key);
                    //找到自己的关系网数据存入NamespaceInfo中
                    const mapKeys = this.relationshipMap.keys();
                    let temp = mapKeys.next();
                    while (!temp.done) {
                        let realPath = temp.value;
                        let relationship = this.relationshipMap.get(realPath);
                        if (relationship.namespace === key) {
                            info.relationship = relationship;
                        }
                        temp = mapKeys.next()
                    }
                    this.namespaceMap.set(key, info);
                }
                this.handlerNamespace(cur.nested, info)
            }//如果没有nested则说明此proto没有定义package,放到公共里面去
            else {
                this.handlerDefine(cur, key, this.common);
            }
        }
    }

    //整理出namespace下的定义(message、enum)
    private handlerNamespace(protoObj: any, namespaceInfo: NamespaceInfo) {
        for (const key in protoObj) {
            let sm = protoObj[key];
            this.handlerDefine(sm, key, namespaceInfo);
        }
    }

    private handlerDefine(sm: any, key: string, namespaceInfo: NamespaceInfo) {
        //message
        if (sm.fields) {
            this.handlerMessage(key, sm.fields, namespaceInfo);
            // message 中可能也有 meesage、enum的定义
            if (sm.nested) {
                this.handlerNamespace(sm.nested, namespaceInfo)
            }
        }
        //enum 
        else if (sm.values) {
            this.handlerEnum(key, sm.values, namespaceInfo);
        } else {
            console.error(`未知的定义${key}:${JSON.stringify(sm)}`);
        }
    }

    private handlerMessage(messageName: string, messageObj: any, namespaceInfo: NamespaceInfo) {
        let arr: AttrInfo[] = [];
        for (const key in messageObj) {
            let source: AttrInfo = messageObj[key];
            source.attrName = key;
            arr.push(source);
        }
        namespaceInfo.messageMap.set(messageName, arr);
    }

    private handlerEnum(enumName: string, enumObj: any, namespaceInfo: NamespaceInfo) {
        let info: EnumInfo[] = [];
        for (const key in enumObj) {
            info.push({ key, value: enumObj[key] })
        }
        namespaceInfo.enumMap.set(enumName, info);
    }


}
