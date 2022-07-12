---
title: Docker 部署
icon: structure
order: 1
---

## 镜像版本

目前，docker 镜像有两个版本，分别是 **仅有云崽的精简版** 与 **附带 Python 和 ffmpeg 的扩展版**。

::: tip

若需要运行 python 插件或语音相关插件，请使用扩展版镜像。

国内机器请选择位于华为云的镜像，海外机器可选位于 DockerHub 的镜像。

:::

::: tabs

@tab 扩展版

- **华为云**: `swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:plus`
- **DockerHub**: `sirly/yunzai-bot:plus`

@tab 精简版

- **华为云**: `swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:latest`
- **DockerHub**: `sirly/yunzai-bot:latest`

:::

## 安装 Docker

### 使用一键脚本安装（荐）

```bash
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

## 准备项目

### 辅助脚本（荐）

Linux 可使用一键辅助脚本创建所需文件夹并下载所需文件，并可选择是否安装喵喵插件和 Python 插件。

::: code-tabs#shell

@tab 国内机器

```bash
bash <(curl -sSL http://mtw.so/5zOC9x)
```

@tab 海外机器

```bash
bash <(curl -sSL http://mtw.so/638Klr)
```

:::

### 手动准备

::: details 操作步骤

1. 新建一个工作目录，例如 `yunzai-bot`，用于存放运行项目的相关文件。

2. 进入 `yunzai-bot`，下载 `docker-compose.yaml` 到文件夹中，根据需要更换镜像。

3. 在工作目录 `yunzai-bot` 中新建文件夹 `yunzai`，下载 `config_default.js` 放于其中，重命名为 `config.js`，并修改配置文件的内容为你自己的配置。配置文件中的 `redis` 的 `host` 填写 `redis`，**不是** `127.0.0.1`。

    ```js
    redis: {
        host: "redis", //redis 地址
        port: 6379,        //redis 端口
        password: "",      //redis 密码，没有密码可以为空
        db: 0,             //redis 数据库 
      },
    ```

4. 如果需要映射插件、全局语音、全局表情等，在 `docker-compose.yaml` 文件中的 `volumes` 部分取消对应项的注释，并在 `工作目录/yunzai` 中新建对应的文件夹用于存放文件，本地的路径需要跟 `docker-compose.yaml` 中冒号前面的路径一致。

:::

## 运行项目

使用 `cd yunzai-bot` 进入工作目录。

### 首次运行

首次运行如果 QQ 登录需要验证或者扫码登录，请按以下步骤进行操作。

1. **启动容器**

    在工作目录内运行命令，拉起容器。

    ```bash
    docker-compose up -d
    ```

2. **进入容器**

    启动完成后进入 yunzai 的容器，默认容器名为 yunzai-bot，若修改后需要修改为对应的容器名。

    ```bash
    docker exec -it yunzai-bot /bin/sh
    ```

3. **在容器内部进行登录验证或扫码登录**

    ```bash
    node app
    ```

4. **完成验证，重启容器**

    验证完成后，按快捷键 Ctrl+D 退出容器，然后重启容器

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
