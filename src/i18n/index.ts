import { zh } from './zh';
import { en } from './en';
import { ja } from './ja';
import type { LocaleKey } from './zh';

export const locales: Record<'zh' | 'en' | 'ja', LocaleKey> = {
  zh,
  en,
  ja,
};

export type Lang = 'zh' | 'en' | 'ja';

export function getLocale(lang: Lang): LocaleKey {
  return locales[lang] ?? zh;
}
