#!/bin/bash

# 检查是否有额外的参数传入
if [ "$#" -gt 0 ]; then
  # 构建传参字符串
  ARGS="$*"
fi

# 拼接完整的命令
FULL_COMMAND="sh ../node_modules/.bin/stone ${ARGS}"

# 执行命令
eval $FULL_COMMAND