import type { SupportedLanguage } from '../utils/posts';

export interface LanguageLink {
  lang: SupportedLanguage;
  href: string;
  label?: string;
  active?: boolean;
}
