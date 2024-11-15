import * as fs from 'fs';
import path = require('path');
export class Relationship {
    realPath: string;
    dirRealPath: string;
    namespace: string;
    /**Real path array */
    importArr: string[];

    constructor(realPath: string) {
        this.realPath = realPath;
    }

    init() {
        let fileText = this.getFileText();
        this.dirRealPath = this.realPath.substring(0, this.realPath.lastIndexOf('\\'));
        this.initPackageName(fileText);
        this.initImportArr(fileText);
    }

    getFileText() {
        let fileText = fs.readFileSync(this.realPath, 'utf-8');
        //delete all common
        let index = -1;
        while ((index = fileText.indexOf('//')) !== -1) {
            //find line end
            let maxLen = fileText.length;
            let endIndex = index + 1;
            while (fileText.charAt(endIndex) !== '\n' && endIndex < maxLen) {
                endIndex++;
            }
            fileText = fileText.slice(0, index) + fileText.slice(endIndex);
        }
        return fileText;
    }

    initPackageName(fileText: string) {
        let index = fileText.indexOf('package');
        if (index === -1) {
            return;
        }
        fileText = fileText.substring(index + 7);
        fileText = fileText.substring(0, fileText.indexOf(';'))
        fileText = fileText.replace(/ /g, '');
        fileText = fileText.replace('\r', '');
        fileText = fileText.replace('\n', '');
        this.namespace = fileText;
    }

    initImportArr(fileText: string) {
        this.importArr = [];
        let index = -1;
        while ((index = fileText.indexOf('import')) !== -1) {
            fileText = fileText.substring(index + 6);
            let endIndex = fileText.indexOf(';');
            let relativePath = fileText.substring(0, endIndex);
            fileText = fileText.substring(endIndex);
            relativePath = relativePath.replace(/ /g, '');
            relativePath = relativePath.replace('\r', '');
            relativePath = relativePath.replace('\n', '');
            relativePath = relativePath.replace(/'/g, '');
            relativePath = relativePath.replace(/"/g, '');
            this.importArr.push(path.join(this.dirRealPath, relativePath))
        }
    }
}