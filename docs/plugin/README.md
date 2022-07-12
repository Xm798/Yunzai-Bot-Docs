---
title: 插件说明
icon: plugin
order: 1
---

## 插件简介

插件旨在为云崽提供更多扩展功能，插件由第三方开发者开发。

::: warning

云崽不对插件内容做任何验证，使用插件前请自行对插件内容进行验证。使用存在问题的第三方插件可能会造成云崽崩溃、数据丢失等问题。请您知晓可能存在的风险。

:::

## 插件安装

目前插件主要有两种，一种是单个 js 文件的插件，提供某种较为专一的功能；另一种插件功能繁多，一般以 git 存储库的形式安装在 plugins 目录下。

**按照部署方式，请分别参阅以下文档：**

- [使用 Docker 部署时安装插件](install-plugins-docker.md)
- [本地部署时安装插件](install-plugins-local.md)

## 插件索引

::: info

请参阅仓库 [云崽QQ机器人插件索引](https://github.com/HiArcadia/Yunzai-Bot-plugins-index)。

:::

### 常用插件

以下插件均由第三方开发者提供。

#### Miao-Plugin

Miao-Plugin 是一个 Yunzai-Bot 的升级插件，提供包括角色查询等升级功能。

::: tip

目前该插件作者为云崽主要维护者。

:::

>　一些实验性的新功能因功能可能不稳定，或者Yunzai-Bot存在类似功能，会在Miao-Plugin以插件形式提供，可按需选用。
>
>　部分非重复功能会在逐步稳定之后会合并入Yunzai-Bot。
>
>　具体功能可在安装插件后 通过 #喵喵帮助 进行查看。如需进行设置可通过 #喵喵设置 命令进行管理。

**仓库地址：** [yoimiya-kokomi/miao-plugin: Miao-Plugin for Yunzai-Bot](https://github.com/yoimiya-kokomi/miao-plugin)

#### Python 插件 python-plugin

python-plugin 为云崽提供 Python 插件扩展，如黄历、签到、求签、塔罗牌、找资源等功能。

::: tip

使用 Python 插件需要自行安装 Python 环境，**建议使用 Docker 部署**，并使用已经封装好 Python 和 ffmpeg 的**扩展版镜像**。

:::

**仓库地址：** [lcwf/python-plugin: Yunzai-Bot插件](https://github.com/lcwf/python-plugin)

#### xiaoyao-cvs-plugin

原神图鉴插件。

::: tip

python-plugin 依赖于本插件，若安装 python-plugin，也需要安装本插件。

:::

**仓库地址：** [ctrlcvs/xiaoyao-cvs-plugin](https://github.com/ctrlcvs/xiaoyao-cvs-plugin)