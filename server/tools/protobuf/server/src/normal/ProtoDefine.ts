import { Relationship } from "./Relationship";

export class NamespaceInfo {
    name: string;
    messageMap = new Map<string, AttrInfo[]>();
    enumMap = new Map<string, EnumInfo[]>();
    constructor(name: string) {
        this.name = name;
    }
    relationship: Relationship;
}

export interface EnumInfo {
    key: string;
    value: number;
}

export interface AttrInfo {
    attrName: string;
    type: string;
    id: number;
    options: Options;
    rule: string;
}

export interface Options {
    default: any;
}
