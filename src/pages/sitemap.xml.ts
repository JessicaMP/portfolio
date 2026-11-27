// Sitemap generado en el build con las dos versiones de idioma (hreflang).
import type { APIRoute } from 'astro';
import { LANGS, langPath } from '@/data/i18n';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('http://localhost:4321');
  const url = (p: string) => new URL(p, base).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(langPath[l])}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(langPath.es)}"/>`,
  ].join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(
  (l) => `  <url>
    <loc>${url(langPath[l])}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`,
).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
