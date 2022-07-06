# Yunzai-Bot 文档中心

## 📑 文档地址

[https://docs.yunzai.org/](https://docs.yunzai.org/)

## 💻 参与编辑

### 开始编辑

本文档基于 [VuePress](https://vuepress.vuejs.org/zh/) 构建，使用 [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/) 主题，因此编辑本文档需要准备 Node.js 环境。

1. Fork 本仓库，并 clone 到本地。
2. 进入项目路径，使用 `npm install` 安装依赖。
3. 使用 `npm run docs:dev` 启动实时预览。

## 注意事项

### 语法扩展

得益于 vuepress-theme-hope 提供的 Markdown 扩展，可以在 Markdown 的语法基础上扩展更多新功能，帮助编写出更美观的文档。

目前已启用 [选项卡 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tabs.html)、[代码块分组 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html)、[自定义容器 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html)支持，请善用以上语法，使文档可读性更好。

如有更多需要，可在 `themes.ts` 中加载对应支持，具体可参见文档。

### 图标扩展

每页文档使用的 icon 来自于 [iconfont-精选图标 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87)。

### 图片

图片应当上传到图床或对象存储服务，或者上传到与文档同级目录的 `assets` 文件夹下。为保证国内用户的体验，推荐使用国内图床，例如[即刻图床 - 大厂全球CDN加速,支持外链,不限流量,支持粘贴上传、拖放上传 jiketuchuang.com。](https://jiketuchuang.com/)等。

### 代码格式

- 请使用 Markdown 语法检查器，确保代码规范。如果你使用 VS Code 作为编辑器，可安装 [markdownlint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 进行语法检查；也可使用命令行版本 [DavidAnson/markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)。

- 中英文之间请使用半角空格留白，如果你使用 VS Code 作为编辑器，可安装 [AutoCorrect - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=huacnlee.auto-correct) 进行自动修正，也可使用命令行版本 [huacnlee/autocorrect](https://github.com/huacnlee/autocorrect#using-cli)。
