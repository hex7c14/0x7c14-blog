import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/posts/${post.slug}/`,
      })),
  });
};