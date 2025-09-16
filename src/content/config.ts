import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  date: z.string().or(z.date()).optional(),
  feature: z.string().optional(),
  timeToShip: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  'blog': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  'blog-zh': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
};