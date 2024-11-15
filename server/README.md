### 接口定义
所有接口都定义在./proto/目录下。

双端通信的接口以C_或S_开头,C为客户端发送到服务端的协议,S为服务端发送到客户端的。

定义好协议需要使用生成脚本生成相关依赖，依赖生成后需要将对应的更改提交到SVN给前端使用。

#### 接口逻辑
例如定义好了如下接口后(0-system.proto:):
```
syntax = "proto3";
package SystemPto;

// 心跳
message C_HEART_BEAT{
	int32 cmd = 1[default = 0]; 
	int32 scmd = 2[default = 2];
}

// 心跳
message S_HEART_BEAT{
	int32 cmd = 1[default = 0]; 
	int32 scmd = 2[default = 3];
	int64 serverTime = 3;
}
```

需要在game/app/servers/logic/src/handler/目录创建SystemHandler.ts来处理对应的协议，如下代码:
``` typescript
import { SystemPto } from '../CommonProto';
import { Session } from '../core/session/session';

export class SystemHandler {
    // 心跳
    static C_HEART_BEAT(session: Session) {
        session.sendMsg(new SystemPto.S_HEART_BEAT({ serverTime: Date.now() }));
    }
}
```
以上代码在收到玩家C_HEART_BEAT请求后,发送了一个包含服务器当前时间的S_HEART_BEAT协议给玩家。

<b color='0x000000'>主要的业务逻辑写在handler中，方便后续热更和错误修复<b>

### 配置生成

脚本位置：./tools/excel2json/index.js 
生成命令参考:
```
node ./tools/excel2json/index.js  {配置表所在位置}
node ./tools/excel2json/index.js D:/Project/dinosaur02/svn/Design/dev/
```

在./game/.vscode/launch.json已有相关启动命令,如果使用vscode可直接使用
``` json
{
    "type": "node",
    "request": "launch",
    "name": "生成配置",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "program": "../tools/excel2json/index.js",
    "args": [
        "D:/Project/dinosaur02/svn/Design/dev/"
    ]
}
```

### 代码发布
脚本位置：./tools/publishTool/index.js 
生成命令参考:
```
node ./tools/publishTool/index.js
```

在./game/.vscode/launch.json已有相关启动命令,如果使用vscode可直接使用
``` json
{
    "type": "node",
    "request": "launch",
    "name": "发布",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "program": "../tools/publishTool/index.js"
}
```

脚本会将platform和game的代码通过各自目录下的tsconfig_dist.json发布到与dinosaur02同级的dinosaur02-publish中,将发布后的代码提交并且到对应服务器拉取。

todo 自动化

### 测试脚本
./game_script/test.ts

### 代码规范
按照已经配置的ESLint规则编写代码，vscode需安装ESLint插件。
