export type Locale = 'en' | 'zh';

export const languages = {
  en: 'English',
  zh: '中文'
};

export const defaultLang: Locale = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.project': 'ChatOllama',
    'blog.readMore': 'Read more',
    'blog.allPosts': 'All Posts',
    'blog.latestPosts': 'Latest Posts',
    'blog.publishedOn': 'Published on',
    'meta.description': 'Official blog of ChatOllama - Open source chatbot platform with AI agents, knowledge bases, and multi-modal chat',
    'lang.switch': 'Switch to Chinese',
    'site.title': 'ChatOllama Blog',
    'site.subtitle': 'Updates, features, and insights from the ChatOllama team',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.about': '关于',
    'nav.project': 'ChatOllama',
    'blog.readMore': '阅读更多',
    'blog.allPosts': '所有文章',
    'blog.latestPosts': '最新文章',
    'blog.publishedOn': '发布于',
    'meta.description': 'ChatOllama 官方博客 - 开源聊天机器人平台，支持AI代理、知识库和多模态聊天',
    'lang.switch': 'Switch to English',
    'site.title': 'ChatOllama 博客',
    'site.subtitle': 'ChatOllama 团队的更新、功能和见解',
  }
} as const;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function formatDate(date: Date, locale: Locale = 'en'): string {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}