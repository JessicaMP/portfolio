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