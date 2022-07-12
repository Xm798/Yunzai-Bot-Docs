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

    在 `docker-compose.yaml` 文件中映射插件目录 `./yunzai/lib/example:/app/Yunzai-Bot/lib/example`。

    ```yaml {14}
        version: "3.9"

        services:
          yunzai-bot:
            image: sirly/yunzai-bot:latest
            container_name: yunzai-bot
            restart: always
            volumes:
              - ./yunzai/config.js:/app/Yunzai-Bot/config/config.js # 配置文件
              - ./yunzai/logs:/app/Yunzai-Bot/logs # 日志文件
              - ./yunzai/data:/app/Yunzai-Bot/data # 数据文件
              - ./yunzai/global_img:/app/Yunzai-Bot/resources/global_img         # 全局表情目录
              - ./yunzai/global_record:/app/Yunzai-Bot/resources/global_record   # 全局语音目录
              - ./yunzai/lib/example:/app/Yunzai-Bot/lib/example                 # 自定义js插件目录
              - ./yunzai/plugins:/app/Yunzai-Bot/plugins                         # 插件目录
          # 省略后续配置...
    ```

    创建本地文件夹 `./yunzai/lib/example`。

2. **安装插件**

    ::: tip

    建议您在该过程中用另一个命令行窗口，运行 `docker-compose logs -f --tail=50` 打开日志滚动，通过日志观察插件安装是否成功，并测试是否能够正常运行。

    :::

    将 js 插件置于本地目录 `./yunzai/lib/example` 中，即可完成安装，无需重启容器，此时容器日志能够看到提示 `插件 XXX 更新成功`。

## 大型扩展插件的安装

1. **映射目录并创建本地文件夹**

    ::: tip

    若您使用辅助部署脚本完成了 docker 配置，请忽略本条。

    :::

    在 `docker-compose.yaml` 文件中映射插件目录 `./yunzai/plugins:/app/Yunzai-Bot/plugins`。

    ```yaml {15}
        version: "3.9"

        services:
          yunzai-bot:
            image: sirly/yunzai-bot:latest
            container_name: yunzai-bot
            restart: always
            volumes:
              - ./yunzai/config.js:/app/Yunzai-Bot/config/config.js # 配置文件
              - ./yunzai/logs:/app/Yunzai-Bot/logs # 日志文件
              - ./yunzai/data:/app/Yunzai-Bot/data # 数据文件
              - ./yunzai/global_img:/app/Yunzai-Bot/resources/global_img         # 全局表情目录
              - ./yunzai/global_record:/app/Yunzai-Bot/resources/global_record   # 全局语音目录
              - ./yunzai/lib/example:/app/Yunzai-Bot/lib/example                 # 自定义js插件目录
              - ./yunzai/plugins:/app/Yunzai-Bot/plugins                         # 插件目录
          # 省略后续配置...
    ```

    创建本地文件夹 `./yunzai/plugins`。

2. **安装插件**

    ::: tip

    使用辅助部署脚本，可选择自动安装 Miao-Plugin 和 python-plugin，若安装了 python-plugin 会自动加载 xiaoyao-cvs-plugin。

    :::

    进入本地插件目录 `./yunzai/plugins`，使用 `git clone 插件仓库地址` 下载插件，并**重启容器**完成安装。

    详细安装方法和注意事项请参阅对应插件的说明文档，只需将说明文档中提到的 `plugins` 目录换成主机的 `plugins` 目录对应路径即可。
