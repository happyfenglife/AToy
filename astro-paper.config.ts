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
    // 首页 / 关于 / 归档等没有自带封面的页面，统一用构建期生成的 /og.png
    // （即 src/pages/og.png.ts 渲染的「站名 + 简介」卡片）。
    // resolveDefaultOgImagePath 的逻辑是：public/ 下存在同名文件就用它，否则回退到
    // 生成的 /og.png。这里填 "og.png" 而 public/ 下并没有这个文件，因此会稳定命中
    // 动态图——同时避免了主题自带的宣传图（原 default-og.jpg，已删除）被当成封面。
    ogImage: "og.png",
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
    // 微博：官方构造式分享页，真·一键分享。
    // 微博的旧版 JS SDK / WBML 已全面下线，官方文档现仅支持这种拼 URL 的方式。
    {
      name: "weibo",
      url: "https://service.weibo.com/share/share.php?url=",
      linkTitle: "分享到微博",
    },
    // QQ 空间：官方分享页，真·一键分享。
    {
      name: "qzone",
      url: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=",
      linkTitle: "分享到 QQ 空间",
    },
    // 知乎：没有对外分享接口（实测 /share 返回 404，开放平台也无写入接口），
    // 只能退化为「复制链接 + 打开知乎」，用户自己粘贴。
    {
      name: "zhihu",
      type: "copy",
      url: "https://www.zhihu.com/",
      linkTitle: "复制链接并打开知乎",
    },
  ],
});
