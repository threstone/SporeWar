const path = require('path')
const childProcess = require('child_process')
const fs = require('fs')

// 分支
const branch = process.argv[2] || 'master';
console.log(`当前发布分支: ${branch}\n`);

const publishList = ['platform', 'game']

// 更新代码
const tempAppPath = path.join(__dirname, `../../${publishList[0]}/`, 'tsconfig_dist.json');
const outPath = path.join(tempAppPath, '../', require(tempAppPath).compilerOptions.outDir, '../');
console.log('git pull\n', childProcess.execSync(`git pull`, { cwd: outPath }).toString());
console.log(`git checkout ${branch}\n`, childProcess.execSync(`git checkout ${branch}`, { cwd: outPath }).toString());
console.log('git pull\n', childProcess.execSync(`git pull`, { cwd: outPath }).toString());

let packageInfo;
for (let index = 0; index < publishList.length; index++) {
    publish(publishList[index])
}

packageInfo.name = 'all';
fs.writeFileSync(path.join(outPath, 'package.json'), JSON.stringify(packageInfo))
console.log('合并写入package.json完成');

// 提交发布内容
console.log('git add -all\n', childProcess.execSync(`git add --all`, { cwd: outPath }).toString());
const status = childProcess.execSync(`git status`, { cwd: outPath }).toString();
console.log('git status"\n', status);
if (status.indexOf("nothing to commit") !== -1) {
    return;
}
console.log('git commit -m "publish"\n', childProcess.execSync(`git commit -m "publish"`, { cwd: outPath }).toString());
console.log('git push\n', childProcess.execSync(`git push`, { cwd: outPath }).toString());

function publish(appName) {
    console.log(`开始发布:`, appName);

    const tsconfigPath = path.join(__dirname, `../../${appName}/`, 'tsconfig_dist.json');
    const jsOutPath = path.join(tsconfigPath, '../', require(tsconfigPath).compilerOptions.outDir);
    // 删除输出目录
    fs.existsSync(jsOutPath) && fs.rmSync(jsOutPath, { recursive: true });

    const appPath = path.join(__dirname, `../../${appName}/`);
    childProcess.execSync(`tsc -p tsconfig_dist.json`, { cwd: appPath });
    const package = require(path.join(appPath, 'package.json'));
    delete package.devDependencies;
    if (!packageInfo) {
        packageInfo = package;
    } else {
        const libKeys = Object.keys(package.dependencies);
        libKeys.forEach((libName) => {
            if (!packageInfo.dependencies[libName]) {
                packageInfo.dependencies[libName] = package.dependencies[libName];
            }
        })
    }

    // copy cmd.sh
    try {
        fs.copyFileSync(path.join(appPath, 'cmd.sh'), path.join(jsOutPath, 'cmd.sh'))
    } catch (error) {
        console.error(`复制${appName}下的cmd.sh失败,检查是否存在`, error);
    }

    if (fs.existsSync(path.join(appPath, 'ssl/'))) {
        fs.cpSync(path.join(appPath, 'ssl/'), path.join(jsOutPath, 'ssl/'), { recursive: true });
    }

    console.log('发布完成:', appName);
}