import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://docs.yunzai.org",
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "yoimiya-kokomi/Yunzai-Bot",
  docsRepo: "https://github.com/Xm798/Yunzai-Bot-Docs",
  docsDir: "docs",
  docsBranch: "master",
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,
  footer: 'MIT Licensed | Copyright © 2021-present Yunzai-Bot | <a href="https://github.com/Xm798/Yunzai-Bot-Docs" target="_blank">文档地址</a>',
  displayFooter: true,
  pageInfo: ["Date", "Word", "PageView"],
  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      emoji: [
        "//unpkg.com/@waline/emojis@1.0.1/alus",
        "//unpkg.com/@waline/emojis@1.0.1/bilibili",
        "//unpkg.com/@waline/emojis@1.0.1/weibo",
        "//unpkg.com/@waline/emojis@1.0.1/tw-emoji",
        "//unpkg.com/@waline/emojis@1.0.1/tieba",
      ],
      meta: ['nick', 'mail'],
      requiredMeta: ['nick', 'mail'],
      login: 'enable',
      copyright: false,
    },
    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      gfm: true,
      container: true,
      tabs: true,
      codetabs: true,
    },
    copyCode: {
      showInMobile: true,
    },
  },
});
