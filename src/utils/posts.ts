import type { CollectionEntry } from 'astro:content';

export const SUPPORTED_LANGUAGES = ['en', 'zh'] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export interface BlogPost {
  slug: string;
  url: string;
  lang: SupportedLanguage;
  publishDate: Date;
  updatedDate?: Date;
  formattedDate: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  draft?: boolean;
}

const DATE_SLUG_REGEX = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
});

function parseDateFromSlug(slug: string) {
  const match = slug.match(DATE_SLUG_REGEX);
  if (!match) {
    return new Date();
  }
  const [, year, month, day] = match;
  return new Date(`${year}-${month}-${day}`);
}

function deriveTitle(entry: CollectionEntry<'en' | 'zh'>) {
  if (entry.data.title) return entry.data.title;
  const headingMatch = entry.body.match(/^#\s+(.+)/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }
  const slugMatch = entry.slug.match(DATE_SLUG_REGEX);
  return slugMatch ? slugMatch[4].replace(/-/g, ' ') : entry.slug;
}

function deriveDescription(entry: CollectionEntry<'en' | 'zh'>) {
  if (entry.data.description) return entry.data.description;
  const paragraphs = entry.body
    .split(/\n\s*\n/)
    .map((block) => block.replace(/[#>*`*_]/g, '').trim())
    .filter(Boolean);
  return paragraphs[1] ?? paragraphs[0] ?? '';
}

export function mapEntryToPost(entry: CollectionEntry<'en' | 'zh'>): BlogPost {
  const lang = entry.collection as SupportedLanguage;
  const publishDate = entry.data.publishDate
    ? new Date(entry.data.publishDate)
    : parseDateFromSlug(entry.slug);
  const updatedDate = entry.data.updatedDate ? new Date(entry.data.updatedDate) : undefined;
  const heroImage = entry.data.ogImage ?? entry.data.heroImage;

  return {
    slug: entry.slug,
    url: `/${lang}/${entry.slug}/`,
    lang,
    publishDate,
    updatedDate,
    formattedDate: DATE_FORMATTER.format(publishDate),
    title: deriveTitle(entry),
    description: deriveDescription(entry),
    tags: Array.isArray(entry.data.tags) ? entry.data.tags : [],
    image: heroImage,
    draft: entry.data.draft ?? false,
  };
}

export async function getPostsByLocale(locale: SupportedLanguage) {
  const { getCollection } = await import('astro:content');
  const entries = await getCollection(locale, (entry) => entry.data.draft !== true);
  return entries.map(mapEntryToPost).sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export async function getAllPosts() {
  const posts = await Promise.all(SUPPORTED_LANGUAGES.map((locale) => getPostsByLocale(locale)));
  return posts.flat().sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export async function getTranslation(slug: string, currentLang: SupportedLanguage) {
  const target = currentLang === 'en' ? 'zh' : 'en';
  const { getCollection } = await import('astro:content');
  const match = await getCollection(target, (entry) => entry.slug === slug);
  if (!match.length) return undefined;
  return mapEntryToPost(match[0]);
}

export async function getAdjacentPosts(slug: string, lang: SupportedLanguage) {
  const posts = await getPostsByLocale(lang);
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
