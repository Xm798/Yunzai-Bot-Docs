import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "部署",
      icon: "install",
      prefix: "deploy/",
      collapsable: true,
      children: [
        { text: "部署说明", icon: "note", link: "README.md" },
        {
          text: "Linux 部署",
          icon: "linux",
          prefix: "linux/",
          children: "structure",
        },
        {
          text: "Windows 部署",
          icon: "windows",
          prefix: "windows/",
          children: "structure",
        },
        { text: "Android 部署", icon: "android", link: "android/README.md" },
      ],
    },
    { text: "配置", icon: "config", link: "/config/" },
    {
      text: "插件",
      icon: "plugin",
      prefix: "plugin/",
      collapsable: true,
      children: [
        { text: "插件说明", icon: "note", link: "README.md" },
        {
          text: "Docker部署插件安装",
          icon: "structure",
          link: "install-plugins-docker.md",
        },
        {
          text: "本地部署插件安装",
          icon: "module",
          link: "install-plugins-local.md",
        },
      ],
    },
    { text: "FAQ", icon: "question", link: "/faq/" },
    {
      text: "V2 版本",
      icon: "cycle",
      prefix: "v2/",
      collapsable: true,
      children: [
        {
          text: "部署",
          icon: "install",
          prefix: "deploy/",
          children: "structure",
        },
        {
          text: "插件",
          icon: "plugin",
          prefix: "plugin/",
          children: "structure",
        },
      ],
    },
    { text: "版权声明", icon: "copyright", link: "/copyright/" },
  ],
  "/deploy/": "structure",
});
