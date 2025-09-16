import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getAllPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const site = context.site ?? new globalThis.URL('https://blog.chatollama.com');
  const posts = await getAllPosts();

  return rss({
    title: 'Chat Ollama Blog',
    description: 'Engineering updates from the Chat Ollama team in English and Chinese.',
    site: site.toString(),
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: new globalThis.URL(post.url, site).toString(),
      pubDate: post.publishDate,
      customData: `<language>${post.lang}</language>`
    })),
  });
}
