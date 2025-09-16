import { getCollection } from 'astro:content';

export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    date: Date;
    feature?: string;
    timeToShip?: string;
    [key: string]: any;
  };
}

export async function getBlogPosts(locale: 'en' | 'zh' = 'en'): Promise<BlogPost[]> {
  try {
    const collection = locale === 'zh' ? 'blog-zh' : 'blog';
    const posts = await getCollection(collection);

    return posts
      .map(post => ({
        ...post,
        data: {
          ...post.data,
          date: new Date(post.data.date || extractDateFromFilename(post.id))
        }
      }))
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  } catch (error) {
    console.warn(`No posts found for locale: ${locale}`);
    return [];
  }
}

export function extractDateFromFilename(filename: string): string {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : new Date().toISOString().split('T')[0];
}

