/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#000',
            a: {
              color: '#000',
              textDecorationLine: 'underline',
              textDecorationColor: '#666',
              '&:hover': {
                textDecorationColor: '#000',
              },
            },
            'h1,h2,h3,h4': {
              color: '#000',
            },
            code: {
              color: '#000',
              backgroundColor: '#f5f5f5',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            pre: {
              backgroundColor: '#f8f8f8',
              border: '1px solid #e5e5e5',
            },
            blockquote: {
              borderLeftColor: '#000',
              color: '#666',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}