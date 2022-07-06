import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "部署", icon: "install", link: "/deploy/" },
  { text: "配置", icon: "config", link: "/config/" },
  { text: "插件", icon: "plugin", link: "/plugin/" },
  { text: "FAQ", icon: "question", link: "/faq/" },
  { text: "版权声明", icon: "copyright", link: "/copyright/" },
]);
