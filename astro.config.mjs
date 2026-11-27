// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://porfolio.jessica95-mp.workers.dev', // cambia esto si compras un dominio
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
