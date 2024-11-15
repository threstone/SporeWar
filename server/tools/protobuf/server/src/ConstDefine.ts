export interface ToolsConfig {
    /**protobuf 生成可选 */
    noCreate: boolean,
    /**protobuf 生成可选 */
    noConvert: boolean,
    /**生成文件的路径 */
    targetPath: string
    /**生成文件的名称 */
    targetName: string
    /**protobuf 生成可选 */
    isJsMin: boolean,
    /**proto目录 */
    protoPath:string,
    /**是否包含目录下所有文件 */
    isIncludeAllFiles: boolean
    /**选择生成的proto文件数组,填写文件相对路径或者绝对路径 */
    commonFiles: string[],
    /**生成类型 */
    generateType: GenerateType
}

export enum GenerateType {
    All,
    ProtoBuf,
    NormalBuf
}