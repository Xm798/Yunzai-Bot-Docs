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
      ],
    },
    { text: "配置", icon: "config", link: "/config/" },
    { text: "插件", icon: "plugin", link: "/plugin/" },
    { text: "FAQ", icon: "question", link: "/faq/" },
    { text: "版权声明", icon: "copyright", link: "/copyright/" },
  ],
  "/deploy/": "structure",
});
