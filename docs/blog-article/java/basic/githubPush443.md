---
title: github推送代码时报错port 443
tags: [ github, push ]
---

# github推送代码时报错port 443 after 21041 ms: Couldn‘t connect to server

github推送代码时报错port 443 after 21041 ms: Couldn't connect to server：
Git: fatal: unable to access 'https://github.com/a/frontend.git/:
Failed to connect to github.com port 443 after 21041 ms: Couldn't connect to server

如果不需要代理，可以清除代理配置：

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

前端布署参考：https://blog.csdn.net/webnoties/article/details/146359442

## 1 下载仓库

git clone https://github.com/a/frontend.git

## 2 依赖安装

pnpm install

## 3 结束。

修改代码，提交代码试下

<Vssue :title="$title" />