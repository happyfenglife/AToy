---
author: happyfenglife
pubDatetime: 2026-10-08T21:00:00+08:00
title: "我为什么用 Astro 搭这个博客（以及完整技术栈）"
featured: false
draft: false
tags:
  - 技术
  - Astro
  - 博客
description: "记录搭建这个博客的技术选型：Astro + AstroPaper + Vercel + Cloudflare + Giscus + Vercel Analytics。"
---

> ⚠️ **占位内容（待替换）**：这是一篇用于填充站点的示例文章，请替换为你的真实内容。

搭建个人博客的方案很多，为什么我最终选择了这一套？记录一下我的思考。

## 选型思路

我希望博客满足几个条件：

- **写作简单**：用 Markdown 写，专注内容本身
- **打开够快**：静态站点，免去服务器维护
- **成本低**：最好只花域名的钱
- **可扩展**：以后想加功能不用推倒重来

## 技术栈一览

| 环节 | 选型 |
| --- | --- |
| 静态框架 | Astro |
| 主题 | AstroPaper |
| 托管 | Vercel |
| 域名 / DNS | Cloudflare |
| 评论 | Giscus |
| 统计 | Vercel Analytics |

## 为什么是 Astro

Astro 默认输出零 JavaScript 的静态页面，性能极好；同时支持"岛屿架构"，需要交互时再按需加载组件。对于以内容为主的博客来说，几乎是最优解。

## 小结

这套组合的核心理念是：**内容优先、零维护、低成本**。写下这些，既是对自己的记录，也希望给同样想搭博客的人一点参考。

*如果你也在搭博客，欢迎留言聊聊你的方案。*
