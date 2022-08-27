---
title: 本地手动部署
icon: stack
order: 2
---

::: info

本教程基于 [Linux 环境搭建 · Le-niao/Yunzai-Bot](https://github.com/Le-niao/Yunzai-Bot/issues/3)

:::

::: info

可使用[Linux-Centos/Ubuntu一键安装Yunzai-BotV2&V3图形化系统](https://gitee.com/ningmengchongshui/Yunzai-Bot-Help)

:::

::: warning

本教程基于 CentOS，使用前请确保拥有一定的 Linux 基础，遇到问题请善用 Google/Bing/百度。

若对 Linux 了解程度不够，请尽量使用一个干净的系统部署。

如果您的系统中还有其他服务运行，我们推荐 docker 部署。

:::

切换 root 权限

```bash
sudo -i
```

安装 nodejs

```bash
yum install -y dnf
dnf module install nodejs:16 -y
```

安装 git

```bash
yum -y install git
```

安装并运行 redis

```bash
yum -y install redis && redis-server --daemonize yes
```

克隆项目

::: code-tabs#shell

@tab 国内机器

```bash
git clone --depth=1 -b main https://gitee.com/Le-niao/Yunzai-Bot.git

```

@tab 海外机器

```bash
git clone --depth=1 -b main https://github.com/Le-niao/Yunzai-Bot.git
```

:::

安装模块

```bash
cd Yunzai-Bot
```

安装 pnpm

```bash
npm install pnpm -g
```

安装依赖

```bash
pnpm install -P
```

安装 chrome 依赖库

```bash
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y && yum install libdrm libgbm libxshmfence -y && yum install nss -y && yum update nss -y
```

安装中文字体

```bash
yum groupinstall fonts -y
```

运行

```bash
node app
```

后台运行 or 停止

```bash
npm start / npm stop
```
