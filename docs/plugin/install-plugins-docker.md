---
title: 使用 Docker 部署时安装插件
icon: structure
order: 1
---

## 单 js 文件插件的安装

1. **映射目录并创建本地文件夹**

    ::: tip

    若您使用辅助部署脚本完成了 docker 配置，请忽略本条。

    :::

    在 `docker-compose.yaml` 文件中映射插件目录 `./yunzai/plugins/example:/app/Yunzai-Bot/example`。

    ```yaml {12}
    version: "3.9"
    services:
      yunzai-bot:
        container_name: yunzai-bot
        image: sirly/yunzai-bot:v3
        restart: always
        volumes:
          - ./yunzai/config:/app/Yunzai-Bot/config/config/ # 配置文件
          - ./yunzai/genshin_config:/app/Yunzai-Bot/plugins/genshin/config    # 配置文件
          - ./yunzai/logs:/app/Yunzai-Bot/logs # 日志文件
          - ./yunzai/data:/app/Yunzai-Bot/data # 数据文件
          - ./yunzai/plugins/example:/app/Yunzai-Bot/example # js 插件
    ```

    创建本地文件夹 `./yunzai/plugins/example`。

2. **安装插件**

    ::: tip

    建议您在该过程中用另一个命令行窗口，运行 `docker-compose logs -f --tail=50` 打开日志滚动，通过日志观察插件安装是否成功，并测试是否能够正常运行。

    :::

    将 js 插件置于本地目录 `./yunzai/plugins/example` 中，即可完成安装，无需重启容器，此时容器日志能够看到提示 `插件 XXX 更新成功`。

## 大型扩展插件的安装

1. **安装插件**

    ::: tip

    使用辅助部署脚本，可选择自动安装 Miao-Plugin、xiaoyao-cvs-plugin 和 py-plugin。如果还需要其他插件，请遵循以下指南进行安装。

    :::

    进入本地插件目录 `./yunzai/plugins`，使用 `git clone 插件仓库地址` 下载插件。

    详细安装方法和注意事项请参阅对应插件的说明文档，只需将说明文档中提到的 `plugins` 目录换成主机的 `plugins` 目录对应路径即可。

2. **映射目录**

    在 `docker-compose.yaml` 文件中映射插件目录 `./yunzai/plugins/xxxx:/app/Yunzai-Bot/plugins/xxxx`，每个插件都要映射，例如：

    ```yaml {14-16}
    version: "3.9"
    services:
      yunzai-bot:
        container_name: yunzai-bot
        image: sirly/yunzai-bot:v3
        restart: always
        volumes:
          - ./yunzai/config:/app/Yunzai-Bot/config/config/ # 配置文件
          - ./yunzai/genshin_config:/app/Yunzai-Bot/plugins/genshin/config    # 配置文件
          - ./yunzai/logs:/app/Yunzai-Bot/logs # 日志文件
          - ./yunzai/data:/app/Yunzai-Bot/data # 数据文件
          - ./yunzai/plugins/example:/app/Yunzai-Bot/example # js 插件
          # 以下目录是插件目录，安装完插件后需要手动添加映射
          - ./yunzai/plugins/miao-plugin:/app/Yunzai-Bot/plugins/miao-plugin                  # 喵喵插件
          - ./yunzai/plugins/py-plugin:/app/Yunzai-Bot/plugins/py-plugin                      # 新py插件
          - ./yunzai/plugins/xiaoyao-cvs-plugin:/app/Yunzai-Bot/plugins/xiaoyao-cvs-plugin    # 图鉴插件
              # 省略后续配置...
    ```
3.**使用脚本重新加载配置**

    如果你的Docker已经运行，并且在创建容器后更改了如 `docker-compose.yaml`的配置,需要用以下代码重新部署容器

    ```bash
    docker-compose up -d
    ```
