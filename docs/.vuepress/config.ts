import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "文档中心",
  description: "云崽（Yunzai-Bot），基于 nodejs 的原神 QQ 群机器人。",

  base: "/",

  theme,
});
