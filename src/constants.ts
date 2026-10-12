/**
 * 站点级常量配置。
 *
 * ⚠️ GISCUS 为占位配置：待 GitHub 公开仓库创建、并开启 Discussions 后，
 *    前往 https://giscus.app 生成真实配置，替换下方带 「TODO」 的字段即可。
 *    未替换前，文章页评论区会显示"评论尚未启用"的提示，不会报错。
 */
export const GISCUS = {
  // TODO(待替换): 形如 "用户名/仓库名"
  repo: "happyfenglife/happyfenglife-blog",
  // TODO(待替换): giscus.app 生成的 repo-id
  repoId: "R_kgDOxxxxxxx",
  // TODO(待替换): Discussions 分类名（建议 Announcements）
  category: "Announcements",
  // TODO(待替换): giscus.app 生成的 category-id
  categoryId: "DIC_kwDOxxxxxxxx",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  // 评论组件界面语言（独立于站点主题界面）
  lang: "zh-CN",
  loading: "lazy",
} as const;
