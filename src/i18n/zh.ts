export const zh = {
  nav: {
    home: '主页',
    posts: '文章',
  },
  theme: {
    light: '浅色',
    dark: '深色',
  },
  language: {
    label: '语言',
    zh: '中文',
    en: 'English',
    ja: '日本語',
  },
  home: {
    title: '主页',
    githubDescription: '查看我的项目与代码',
    recentPosts: '文章列表',
    tags: '标签',
    readingTime: '阅读时间',
    publishedAt: '发布于',
    noPosts: '还没有文章',
  },
  post: {
    backToHome: '返回主页',
    tableOfContents: '目录',
    tags: '标签',
  },
  footer: {
    builtWith: '使用 Astro 构建',
  },
} as const;

export type LocaleKey = typeof zh;
