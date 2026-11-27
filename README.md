# Portafolio · Jessica Manturano

Portafolio personal construido con **Astro 7 + React 19 + Tailwind CSS 4 + TypeScript**, basado en el diseño de Figma "Propuesta de portafolio".

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # verifica tipos (astro check) y genera /dist
npm run preview
```

## Estructura

```
src/
  data/profile.ts        ← TODO el contenido (CV). Edita aquí los textos.
  components/
    Navbar.tsx           React · menú móvil + enlace activo por scroll
    ProjectSlider.tsx    React · carrusel de proyectos (teclado, swipe, dots)
    TechIcon.tsx         Iconos de tecnologías (simple-icons)
    SocialIcon.tsx       LinkedIn / GitHub / email / teléfono
    Hero, About, Services, Timeline, Projects, Skills, Footer (.astro)
    SectionHeading.astro Píldora + título de sección
  layouts/Layout.astro   SEO / meta tags
  styles/global.css      Tokens de color y tipografía del diseño (Sora)
```

## Pendientes personales

- **Foto**: guarda tu foto como `public/images/jessica.png` (ideal ~830×1230, fondo transparente).
  Mientras no exista, el hero muestra una tarjeta de código como placeholder.
- **CV en PDF**: guarda `public/cv/Jessica-Manturano-CV.pdf`. Cuando exista, el botón
  cambia automáticamente a "Descargar CV" (si no, enlaza a LinkedIn).
- **Dominio**: cambia `site` en `astro.config.mjs` por tu URL real.

## Deploy

Sitio 100% estático (`dist/`): funciona en Vercel, Netlify, Cloudflare Pages, GitHub Pages
o AWS S3 + CloudFront.
