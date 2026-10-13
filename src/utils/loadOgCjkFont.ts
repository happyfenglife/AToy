import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * OG 图渲染用的中文字体在仓库中的相对路径（相对项目根目录）。
 *
 * 该文件由 subset-font 从 Noto Sans SC 可变字体裁剪生成，覆盖：
 * ASCII、Latin-1 补充、常用标点、CJK 标点与符号、全部 20992 个通用规范汉字
 * （U+4E00–U+9FFF）以及全角字符，约 4.3MB。
 */
const CJK_FONT_PATH = "src/assets/fonts/NotoSansSC-Regular.woff";

let cachedFont: Promise<Buffer> | undefined;

/**
 * 读取用于 OG 图渲染的中文字体。
 *
 * 为什么不复用 Astro 的字体管线（`fontData[...]` + `experimental_getFontFileURL`）：
 *
 * 1. satori 在缺失字形时**不会**回退到系统字体，只会画出豆腐块（□）。站点的拉丁
 *    字体 Cascadia Code 不含汉字，因此必须显式再喂一个中文字体进去。
 * 2. 这份字体有 4.3MB，且只在构建期生成 OG 图时用到。若把它声明为 Astro Font，
 *    Astro 会将其作为站点资源输出、并可能被浏览器预加载，白白消耗访问者流量。
 *    直接读盘可把它完全限制在构建期，`dist/` 里不会多出这个文件。
 *
 * 路径以 `process.cwd()` 为基准：`astro dev`、`astro build` 与 Vercel CI 的工作目录
 * 都是项目根目录，因此解析结果稳定。这里刻意不用 `import.meta.url`——该模块构建后
 * 会被打包进服务端产物，相对路径会指向 dist 而不是源码目录。
 *
 * 返回值做进程内缓存：动态 OG 图路由每篇文章都会调用一次，避免重复读 4.3MB。
 */
export function loadOgCjkFont(): Promise<Buffer> {
  cachedFont ??= readFile(path.join(process.cwd(), CJK_FONT_PATH));
  return cachedFont;
}
