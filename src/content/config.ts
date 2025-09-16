import { defineCollection, z } from 'astro:content';

const basePost = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  ogImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  translatedSlug: z.string().optional(),
  translatedFrom: z.string().optional(),
  translatedTo: z.string().optional(),
  draft: z.boolean().optional(),
});

export const collections = {
  en: defineCollection({
    type: 'content',
    schema: basePost.extend({
      lang: z.literal('en').default('en'),
    }),
  }),
  zh: defineCollection({
    type: 'content',
    schema: basePost.extend({
      lang: z.literal('zh').default('zh'),
    }),
  }),
};
