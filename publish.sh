#!/usr/bin/env bash
npm config get registry #检查仓库镜像库
npm config set registry https://registry.npmjs.org/ #设置仓库镜像库地址为官方镜像
echo "请进行登录相关操作："
npm login #登录
echo "--------publish---------"
npm publish --access public #发布
npm config set registry https://registry.npmmirror.com/
echo "发布完成"
exit