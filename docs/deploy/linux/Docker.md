---
title: Docker 部署
icon: structure
order: 1
---

## 镜像版本

目前，docker 镜像分为 **精简版** 和 **扩展版**，精简版仅有云崽本体（可选加载喵喵插件和图鉴插件），扩展版附带 ffmpeg 环境和 Python 环境（可选加载 Python 插件）。

若需要运行 python 插件或语音相关插件，请使用扩展版镜像。

国内机器请选择位于华为云的镜像，海外机器可选位于 DockerHub 的镜像。

:::

::: tabs

@tab 扩展版

- **华为云**: `swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:v3plus`
- **DockerHub**: `sirly/yunzai-bot:v3plus`

@tab 精简版

- **华为云**: `swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:v3`
- **DockerHub**: `sirly/yunzai-bot:v3`

:::

> 你可以在 [SirlyDreamer/Yunzai-Bot](https://github.com/SirlyDreamer/Yunzai-Bot/tree/DockerBuild_v3plus) 的不同分支中找到各对应版本的 Dockerfile。

## 安装 Docker

### 使用一键脚本安装（荐）

```bash
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

## 准备项目

### 辅助脚本（荐）

Linux 可使用一键辅助脚本创建所需文件夹并下载所需文件，并可选择是否安装喵喵插件、图鉴插件和 Python 插件。

```bash
bash <(curl -sSL http://yunzai.org/install_v3)
```

## 运行项目

使用 `cd yunzai-bot` 进入工作目录。

### 首次运行

首次运行如果 QQ 登录需要验证或者扫码登录，请按以下步骤进行操作。

1. **启动容器**

    在工作目录内运行命令，拉起容器，并运行初始化命令。

    ```bash
    docker-compose up -d
    docker exec -it yunzai-bot node app
    ```

2. **完成验证，重启容器**

    验证完成后，按快捷键 Ctrl+C 退出，然后重启容器

    ```bash
    docker-compose restart
    ```

## 常用命令

- **后台运行**

    ```bash
    docker-compose up -d
    ```

- **前台运行**

    ```bash
    docker-compose up
    ```

- **停止运行**

    ```bash
    docker-compose down
    ```

- **重启/更新**

    重启时会自动拉取最新项目并更新相关依赖

    ```bash
    docker-compose restart
    ```

- 查看日志

    查看最后的 100 行日志并持续输出日志

    ```bash
    docker-compose logs -f --tail=100
    ```
