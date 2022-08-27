#!/bin/bash

set -e
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
blue='\033[0;36m'
plain='\033[0m'

echo -e "${yellow}
===========================================================
    Description: Yunzai-bot v3 Docker 部署辅助脚本
    Author: @Xm798
    Github: https://github.com/Xm798/Yunzai-Bot-Docs
===========================================================${plain}
"

function install_plugin() {
    # $1 插件名称 $2 插件目录名 $3 插件仓库地址
    echo -e ${blue}
    read -e -r -p "是否安装 $1 ($2)? [Y/n] " input
    echo -e ${plain}
    case $input in
    [yY][eE][sS] | [yY])
        echo -e "安装位置：./yunzai/plugins/$2"
        sed -i -r "/plugins\/$2/s/^(\s+)(# )/\1/" docker-compose.yaml

        if [ ! -d ./yunzai/plugins/$2 ]; then
            set +e
            git clone $3 ./yunzai/plugins/$2
            if [ "$?" -ne "0" ]; then
                echo -e "${red}$1 安装失败！\n"
            else
                echo -e "${green}$1 安装成功！\n"
            fi
            set -e
        else
            echo -e "${red}$1 文件夹已存在！\n"
        fi
        ;;
    [nN][oO] | [nN])
        echo -e "${plain}跳过 $1 安装...\n"
        ;;
    *)
        echo -e "${plain}跳过 $1 安装...\n"
        ;;
    esac
}

echo -e "将在当前目录下创建 yunzai-bot 文件夹并在其中完成后续工作..."
echo -e ${blue}
read -e -r -p "是否继续? [Y/n]" input
echo -e ${plain}
case $input in
[yY][eE][sS] | [yY]) ;;

[nN][oO] | [nN])
    exit 0
    ;;
*)
    exit 0
    ;;
esac

echo -e ${blue}
read -e -r -p "是否使用国内镜像完成后续配置? [Y/n]" mirror
echo -e ${plain}
case $mirror in
[yY][eE][sS] | [yY])
    CN=true
    ;;
[nN][oO] | [nN]) ;;

*) ;;
esac

if [[ -z "${CN}" ]]; then
    GITHUB_RAW_URL="https://raw.githubusercontent.com/Xm798/Yunzai-Bot-Docs/master"
    YUNZAI_RAW_URL="https://raw.githubusercontent.com/Le-niao/Yunzai-Bot/main"
    MIAO_PLUGIN_REPO="https://github.com/yoimiya-kokomi/miao-plugin.git"
    CVS_PLUGIN_REPO="https://github.com/Ctrlcvs/xiaoyao-cvs-plugin.git"
    PYPLUGIN_REPO="https://github.com/realhuhu/py-plugin.git"
    DOCKER_IMG_BASE="sirly/yunzai-bot"
else
    GITHUB_RAW_URL="https://jihulab.com/Xm798/Yunzai-Bot-Docs/-/raw/master"
    YUNZAI_RAW_URL="https://gitee.com/Le-niao/Yunzai-Bot/raw/main"
    MIAO_PLUGIN_REPO="https://gitee.com/yoimiya-kokomi/miao-plugin.git"
    CVS_PLUGIN_REPO="https://github.com/Ctrlcvs/xiaoyao-cvs-plugin.git"
    PYPLUGIN_REPO="https://gitee.com/realhuhu/py-plugin.git"
    DOCKER_IMG_BASE="swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot"
fi

echo -e "${green}\n创建所需文件夹...${plain}"

[ -d yunzai-bot ] || mkdir yunzai-bot
cd yunzai-bot

folder_list="yunzai/logs yunzai/data yunzai/plugins/example yunzai/genshin_config
    yunzai/config redis/data redis/logs"

for folder in $folder_list; do
    if [ ! -d $folder ]; then
        echo -e "  - 创建 $folder"
        mkdir -p $folder
    else
        echo -e "${red}  - $folder already exists."
    fi
done

echo -e "${green}\n下载配置文件...${plain}"
curl -sL ${YUNZAI_RAW_URL}/config/default_config/redis.yaml -o ./yunzai/config/redis.yaml
curl -sL ${YUNZAI_RAW_URL}/config/default_config/qq.yaml -o ./yunzai/config/qq.yaml
curl -sL ${YUNZAI_RAW_URL}/config/default_config/group.yaml -o ./yunzai/config/group.yaml
curl -sL ${YUNZAI_RAW_URL}/config/default_config/other.yaml -o ./yunzai/config/other.yaml

curl -sL ${YUNZAI_RAW_URL}/config/plugins/example/%E4%B8%80%E8%A8%80.js -o ./yunzai/plugins/example/一言.js
curl -sL ${YUNZAI_RAW_URL}/config/default_config/%E4%B8%BB%E5%8A%A8%E5%A4%8D%E8%AF%BB.js -o ./yunzai/plugins/example/主动复读.js
curl -sL ${YUNZAI_RAW_URL}/config/default_config/%E8%BF%9B%E7%BE%A4%E9%80%80%E7%BE%A4%E9%80%9A%E7%9F%A5.js -o ./yunzai/plugins/example/进群退群通知.js

sed -i 's|127.0.0.1|redis|g' ./yunzai/config/redis.yaml

echo -e "${green}\n下载docker-compose文件...${plain}"
curl -sL ${GITHUB_RAW_URL}/scripts/docker-compose_v3.yaml -o ./docker-compose.yaml

echo -e "${blue}是否加载ffmpeg支持和Python环境？${plain}"

select num in "[是]" "[否]"; do
    case "${num}" in
    "[是]")
        PYTHON=true
        DOCKER_IMG=$DOCKER_IMG_BASE":v3plus"
        break
        ;;
    "[否]")
        DOCKER_IMG=$DOCKER_IMG_BASE":v3"
        break
        ;;
    *)
        echo -e "${red}请输入正确的选项 [1-2]${plain}"
        ;;
    esac
done

sed -i "s|sirly/yunzai-bot:v3|${DOCKER_IMG}|g" ./docker-compose.yaml

install_plugin "喵喵插件" "miao-plugin" $MIAO_PLUGIN_REPO
install_plugin "图鉴插件" "xiaoyao-cvs-plugin" $CVS_PLUGIN_REPO

if [[ ! -z "${PYTHON}" ]]; then
    install_plugin "Python插件" "py-plugin" $PYPLUGIN_REPO
fi

echo -e "${green}------------------------------
 已准备就绪，请使用 cd yunzai-bot 进入工作目录。
------------------------------${plain}
 请使用 ${yellow}docker-compose up -d${plain} 启动容器，
 使用 ${yellow}docker-compose logs -f --tail 100${plain} 查看日志。
 首次登录请使用 ${yellow}docker exec -it yunzai-bot node app 完成QQ登录和配置，详情参见帮助链接。
 若加载了 Python 插件，启动可能较慢，请耐心等待。
 如需修改配置，请手动修改 ${yellow}./yunzai-bot/yunzai/config/${plain} 目录中的文件。
------------------------------
${yellow} 更多帮助请参见： https://docs.yunzai.org/deploy/linux/Docker.html
"

echo -e "${green}------------------------------"
read -e -r -p "是否现在登录? [Y/n]" run
echo -e "\n确认登录会启动镜像并帮助完成首次配置，完成后登录请按 Ctrl-C 退出\n并执行 cd yunzai-bot && docker-compose restart 重启容器。"
echo -e ${plain}
case $run in
[yY][eE][sS] | [yY])
    docker-compose up -d
    seconds_left=15
    echo "\n等待 ${seconds_left} 秒……"
    while [ $seconds_left -gt 0 ]; do
        echo -n $seconds_left
        sleep 1
        seconds_left=$(($seconds_left - 1))
        echo -ne "\r     \r"
    done
    docker exec -it yunzai-bot node app
    ;;
[nN][oO] | [nN]) ;;

*) ;;
esac