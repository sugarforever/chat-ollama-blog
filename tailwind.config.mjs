import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

const sharedColors = {
  primary: 'var(--color-primary)',
  accent: 'var(--color-accent)',
  highlight: 'var(--color-highlight)',
  surface: 'var(--color-surface)',
  muted: 'var(--color-muted)',
  text: 'var(--color-text)',
  overlay: 'var(--color-overlay)',
  border: 'var(--color-border)',
  success: 'var(--color-success)',
  danger: 'var(--color-danger)',
};

export default {
  darkMode: ['class', '[data-color-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ...sharedColors,
        background: 'var(--color-background)',
        card: 'var(--color-card)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Clash Display"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        card: '0 24px 48px -24px rgba(15, 23, 42, 0.45)',
        inset: 'inset 0 -2px 0 0 var(--color-accent)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-code': theme('colors.highlight'),
            '--tw-prose-invert-body': theme('colors.muted'),
            '--tw-prose-invert-headings': theme('colors.surface'),
            '--tw-prose-invert-links': theme('colors.accent'),
            '--tw-prose-invert-bold': theme('colors.surface'),
            '--tw-prose-invert-hr': theme('colors.overlay'),
            '--tw-prose-invert-quotes': theme('colors.surface'),
            '--tw-prose-invert-quote-borders': theme('colors.accent'),
            '--tw-prose-invert-code': theme('colors.highlight'),
            color: theme('colors.text'),
            maxWidth: '70ch',
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: `1px solid ${theme('colors.accent')}`,
              transition: 'color 150ms ease, border-color 150ms ease',
              '&:hover': {
                color: theme('colors.highlight'),
                borderColor: 'transparent',
              },
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(','),
              letterSpacing: '0.02em',
              textTransform: 'none',
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(','),
              letterSpacing: '0.02em',
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(','),
            },
            code: {
              backgroundColor: 'var(--color-code-bg)',
              color: 'var(--color-highlight)',
              paddingInline: '0.35rem',
              paddingBlock: '0.15rem',
              borderRadius: '0.35rem',
              border: `1px solid ${theme('colors.overlay')}`,
            },
            'pre code': {
              padding: '0',
              borderWidth: 0,
              background: 'transparent',
            },
            pre: {
              backgroundColor: 'var(--color-pre-bg)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              border: `1px solid ${theme('colors.overlay')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
