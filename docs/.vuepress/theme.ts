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
  docsDir: "docs",
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,
  displayFooter: false,
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
