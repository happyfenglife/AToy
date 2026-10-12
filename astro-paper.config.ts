import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://happyfenglife.club",
    title: "happyfenglife",
    description:
      "记录技术、生活与游戏的点滴 —— 一个技术 + 生活混合的中文个人博客。",
    author: "happyfenglife",
    // TODO(待替换): 替换为你的真实主页（如 GitHub / 个人站）
    profile: "https://github.com/happyfenglife",
    ogImage: "default-og.jpg",
    // 语言保持 en（v1 采用"中文内容 + 英文界面"，中文化为后续小改）
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      // TODO(待替换): GitHub 仓库创建后，改为
      //   { enabled: true, url: "https://github.com/<用户名>/<仓库>/edit/main/" }
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    // TODO(待替换): 替换为你的真实社交链接（可用：github / mail / x / linkedin / telegram / whatsapp / facebook / pinterest）
    { name: "github", url: "https://github.com/happyfenglife" },
    { name: "mail", url: "mailto:hello@happyfenglife.club" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
