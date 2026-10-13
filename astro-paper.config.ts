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
    // QQ：官方「分享给好友」网页组件，可用。组件会把当前文章 URL 拼到 url 后面。
    {
      name: "qq",
      url: "https://connect.qq.com/widget/shareqq/index.html?url=",
      linkTitle: "分享到 QQ",
    },
    // 微信：没有对外的网页分享接口（JS-SDK 只能用在微信内置浏览器里），
    // 因此改为展开当前文章的二维码，扫码打开后再从微信内部转发。
    { name: "wechat", type: "qrcode", linkTitle: "微信扫码分享" },
    // B 站：同样没有「分享站外链接」的网页接口（站内分享接口需要登录态 + CSRF）。
    // 点击后复制文章链接，并打开 B 站动态发布页，粘贴即可。
    {
      name: "bilibili",
      type: "copy",
      url: "https://t.bilibili.com/",
      linkTitle: "复制链接并打开 B 站动态",
    },
  ],
});
