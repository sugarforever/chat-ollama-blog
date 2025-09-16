# Repository Guidelines

## Project Structure & Module Organization
All published content lives under `src/content/`. Drafts and published posts share the same folder, so start filenames with the publication date (`YYYY-MM-DD-slug.md`) to keep the chronological order consistent; the current mix of styles should migrate toward this dashed format. Use `src/content/zh/` for Chinese localizations that mirror English posts, and keep supporting diagrams or screenshots in the same directory as the article that references them. Static assets that should be served directly (Open Graph images, robots.txt overrides) belong in `public/`.

## Build, Test, and Development Commands
This repository renders posts with Astro and Tailwind. Before opening a pull request, run a quick lint and formatting pass locally:

```bash
pnpm lint
pnpm format:check
```

These tasks rely on the checked-in toolchain, so install dependencies with `pnpm install` before running them. Use `pnpm dev` to preview the site locally at `http://localhost:4321` and confirm headings, code fences, and callouts render correctly.

## Coding Style & Naming Conventions
Every post must start with YAML frontmatter defining `title`, `description`, `publishDate`, optional `tags`, and optional `heroImage`/`ogImage`. Write in Markdown with a single `#` title followed by concise `##` section headings. Use fenced code blocks with an explicit language tag (` ```typescript `) so downstream highlighters work. Favor sentence-case headings, short paragraphs, and bullet lists for scannability. For filenames, keep lowercase slugs separated by hyphens. Within articles, bold key terms sparingly and use blockquotes for callouts or summaries.

## Testing Guidelines
There is no automated test suite, so treat linting and manual verification as the quality gate. Ensure every link is valid, code snippets compile or run where possible, and bilingual articles remain synchronized between `src/content/en/` and `src/content/zh/`. Capture expected screenshots in the same commit if the text references UI changes.

## Commit & Pull Request Guidelines
The current branch has no prior history, so establish a clean standard going forward: write imperative, 50-character-or-shorter commit subjects (e.g., `Add streaming agent blog post`) with concise body bullets when useful. Pull requests should summarize the narrative focus, list notable sections or diagrams, and link to any associated project tracking issues. Add before/after screenshots when UI changes are discussed, and call out any TODOs the reviewer needs to confirm.

## Localization Notes
When adding or updating Chinese content, include translator attribution in the opening paragraph if applicable, and keep terminology aligned with the English version. If a post is intentionally single-language, add a brief note at the top (e.g., `> English-only update`) to make its scope clear to maintainers.
