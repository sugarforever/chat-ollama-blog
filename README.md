# Chat Ollama Blog

Markdown-first Astro site for publishing Chat Ollama engineering updates in English and Chinese.

## Tech Stack
- [Astro](https://astro.build/) with content collections for locale-aware routing
- Tailwind CSS + `@tailwindcss/typography` for styling
- MDX support for interactive snippets
- Remark/Rehype plugins for linting, syntax highlighting, and localization helpers
- `@astrojs/rss` + `@astrojs/sitemap` for feeds and discoverability

## Prerequisites
- Node.js 20+
- pnpm 9 (preferred) or npm 10
- Git

```bash
corepack enable pnpm
```

## Getting Started
1. Clone the repo and install dependencies.
   ```bash
git clone https://github.com/<org>/chat-ollama-blog.git
cd chat-ollama-blog
pnpm install
   ```
2. Copy environment defaults and adjust if a downstream deployment pipeline requires extra keys.
   ```bash
cp .env.example .env
   ```
3. Run the development server with Markdown watch mode.
   ```bash
pnpm dev
   ```
   The site will be available at `http://localhost:4321`.

## Development Workflow
- `pnpm lint`: Runs `astro check`, ESLint, markdownlint, and remark-lint.
- `pnpm format`: Applies Prettier to Markdown, MDX, and Astro documents.
- `pnpm format:check`: Verifies formatting without writing changes.
- `pnpm test`: Placeholder for future component tests (Vitest). Update when tests are added.
- `pnpm build`: Generates the production site in `dist/`.
- `pnpm preview`: Serves the built site locally for final smoke checks.

During development, draft posts live under `src/content/en` or `src/content/zh` with filenames in `YYYY-MM-DD-slug.md` format. Every Markdown file must include frontmatter with at least `title`, `description`, `publishDate`, and optional `tags`, `heroImage`, or `ogImage`. Place assets next to the article that references them (e.g., `src/content/en/<slug>/hero.png`).

## SEO & Sharing
- Set `SITE_URL` and, if needed, `ENABLE_DRAFTS` in `.env` before building so canonical links and the sitemap resolve correctly.
- RSS lives at `/rss.xml`; XML sitemaps are generated automatically via `/sitemap-index.xml`.
- Update `public/robots.txt` and the default Open Graph image in `public/og-default.png` (2400×1260 recommended) if your deployment uses a custom domain or bespoke artwork.
- Base layouts emit Open Graph and Twitter cards automatically. Provide `heroImage` or `ogImage` in frontmatter for per-post artwork.

## Localization Guide
- Always create or update English (`src/content/en/...`) first, then mirror in Chinese (`src/content/zh/...`).
- Use the same slug per locale; include a `translatedFrom`/`translatedTo` key in frontmatter for automated linking.
- Add translator notes or attribution in the introductory paragraph when relevant.

## Deployment
- Ensure `.env` mirrors production values, including `SITE_URL`.
- `pnpm build && pnpm astro check` should pass in CI before deploy.
- Publish the static `dist/` output to your host (e.g., Vercel, Netlify, Cloudflare Pages). Configure locales in the hosting platform to respect `/en` and `/zh` paths, and confirm `/rss.xml` and `/sitemap-index.xml` return 200.
