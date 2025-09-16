import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  theme: {
    light: 'github-light-default',
    dark: 'github-dark-default',
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
};

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://blog.chatollama.com',
  output: 'static',
  srcDir: 'src',
  trailingSlash: 'never',
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  prefetch: {
    defaultStrategy: 'viewport',
  },
});
