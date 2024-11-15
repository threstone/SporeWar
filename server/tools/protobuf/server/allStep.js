let process = require('child_process');
let fs = require('fs');

try {
    console.log('准备执行编译命令...');
   // process.execSync('tsc');
} catch (error) {
    console.error('请检查是否安装tsc模块,如未安装请执行: npm install -g typescript');
    return;
}
console.log('开始生成任务...');
process.execSync('node ./dist/src/main.js');
