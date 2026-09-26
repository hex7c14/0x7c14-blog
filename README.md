本人自用博客

## 技术栈

- [Astro 5](https://astro.build/) — 静态站点生成
- [Tailwind CSS](https://tailwindcss.com/) — 样式
- [MDX](https://mdxjs.com/) — 文章内容

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 <http://localhost:4321>。

### 构建

```bash
pnpm build
```

产物在 `dist/` 目录。

### 预览构建产物

```bash
pnpm preview
```

## 项目结构

```
.
├── public/
│   ├── fonts/              # 内嵌字体（Maple Mono NF CN）
│   ├── bg.jpg              # 壁纸背景图
│   └── avatar.jpg          # 头像
├── src/
│   ├── components/         # 组件
│   │   ├── layout/         # 布局组件（Sidebar）
│   │   └── ui/             # UI 组件
│   ├── content/
│   │   ├── config.ts       # 文章集合 schema
│   │   └── posts/          # 文章（.mdx）
│   ├── i18n/               # 多语言文案
│   ├── layouts/            # 页面布局
│   ├── pages/              # 路由页面
│   ├── styles/             # 全局样式
│   └── config.ts           # 站点 / 个人信息配置
└── astro.config.mjs
```

## 站点配置

编辑 `src/config.ts` 自定义站点信息：

```ts
export const siteConfig: SiteConfig = {
  title: 'Win11 Blog',
  subtitle: 'A Windows 11 Settings-style blog',
  lang: 'zh',          // 默认语言: zh / en / ja
};

export const profileConfig: ProfileConfig = {
  avatar: '/avatar.jpg',
  name: '0x7c14',
  email: 'hex7c14@outlook.com',
  bio: 'ACG & Tech',
  links: [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/xxx' },
  ],
};
```

## 如何写文章

文章放在 `src/content/posts/` 目录下，每个文件是一篇文章，支持 `.md` 和 `.mdx`。

### 1. 创建文章文件

在 `src/content/posts/` 下新建文件，例如 `my-first-post.mdx`。

### 2. 文章头部 Frontmatter

每篇文章开头需要一段 YAML frontmatter：

```yaml
---
title: "文章标题"
description: "文章简介（可选，显示在首页卡片上）"
date: 2026-09-26
tags: [标签1, 标签2]
lang: zh          # zh / en / ja，默认 zh
draft: false      # true 则不发布，默认 false
cover: "/images/cover.jpg"  # 可选封面图
---
```

**字段说明：**

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | ✅ | 文章标题 |
| `description` | 可选 | 文章简介，显示在首页卡片上 |
| `date` | ✅ | 发布日期，格式 `YYYY-MM-DD` |
| `tags` | 可选 | 标签数组，默认为空 |
| `lang` | 可选 | 语言：`zh` / `en` / `ja`，默认 `zh` |
| `draft` | 可选 | 是否草稿，`true` 不发布，默认 `false` |
| `cover` | 可选 | 封面图路径 |

### 3. 正文内容

Frontmatter 之后就是正文，支持标准 Markdown 和 MDX（可嵌入组件）。

```mdx
# 正文标题

正文内容，支持 **粗体**、*斜体*、`代码`。

## 代码块

```ts
function hello() {
  console.log('Hello World');
}
```

## 引用

> 一段引用文字。

## 列表

- 项目一
- 项目二

1. 有序项一
2. 有序项二

## 表格

| 列1 | 列2 |
| --- | --- |
| A   | B   |
```

### 4. 图片

把图片放到 `public/` 目录（如 `public/images/xxx.png`），在文章中用 `/images/xxx.png` 引用。

### 5. 文章 URL

文章 URL 由文件名决定。例如：

- `src/content/posts/hello-world.mdx` → `/posts/hello-world/`

## 部署

### Cloudflare Pages

1. 连接 GitHub 仓库
2. 构建命令：`pnpm build`
3. 输出目录：`dist`

## License

MIT
