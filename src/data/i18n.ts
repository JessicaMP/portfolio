// Utilidades de idioma: elige el contenido según el idioma de la página.
import * as es from './profile';
import * as en from './profile.en';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const langPath: Record<Lang, string> = { es: '/', en: '/en/' };

export function getData(lang: Lang = 'es') {
  return lang === 'en' ? en : es;
}

// Convierte **texto** en <strong> escapando el resto del HTML.
export function rich(text: string): string {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-ink">$1</strong>');
}
