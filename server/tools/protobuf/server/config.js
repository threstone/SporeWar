const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [
    {
        noCreate: true,
        noConvert: true,
        targetPath: '../../../game/app/servers/logic/src/',
        targetName: 'Common',
        isJsMin: true,
        generateType: GenerateType.ProtoBuf,
        isIncludeAllFiles: true,
        protoPath: '../../../proto/',
        commonFiles: []
    }
];

module.exports = configs;