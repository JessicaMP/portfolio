// Toda la información del portafolio (versión en ESPAÑOL) vive aquí.
// Edita este archivo para actualizar textos sin tocar los componentes.
// La versión en inglés está en profile.en.ts (misma estructura).
// Tip: en los textos de "about" puedes marcar palabras en negrita con **así**.
//
// Posicionamiento: Full Stack Developer (Java + Spring Boot en el backend)
// con más de 6 años de experiencia senior en frontend como diferencial.

export type TechKey =
  | 'java' | 'spring' | 'mysql' | 'junit'
  | 'vue' | 'nuxt' | 'javascript' | 'typescript' | 'react' | 'tailwind' | 'sass'
  | 'figma' | 'gtm' | 'analytics' | 'aws' | 'nest' | 'graphql' | 'mongodb'
  | 'postgres' | 'rails' | 'git' | 'github' | 'gitlab' | 'jira' | 'notion'
  | 'vuetify' | 'element' | 'html' | 'css' | 'dotnet' | 'claude' | 'postcss'
  | 'confluence' | 'oracle';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tools: TechKey[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  location: string;
}

export interface Project {
  company: string; // etiqueta superior (empresa o tipo de proyecto)
  title: string;
  description: string;
  metric?: { value: string; label: string };
  tools: TechKey[];
  link?: { href: string; label: string }; // si no hay, enlaza a la trayectoria
}

export const profile = {
  name: 'Jessica Manturano',
  firstName: 'Jessica',
  role: 'Full Stack Developer',
  roleDetail: 'Frontend Senior · Java & Spring Boot',
  location: 'Lima, Perú',
  email: 'jessica.manturano.paucar@gmail.com',
  phone: '+51 936 584 793',
  phoneHref: 'tel:+51936584793',
  linkedin: 'https://www.linkedin.com/in/jmanturano/',
  github: 'https://github.com/JessicaMP/',
  // Coloca tu foto en public/images/jessica.png (o cambia la ruta).
  photo: '/images/photo-draw.webp',
  // Coloca tu CV en PDF en public/cv/Jessica-Manturano-CV.pdf
  cv: '/cv/Jessica-Manturano-CV.pdf',
  languages: 'Español (Nativo) - Inglés (B1)',
  mainStack: 'Java · Spring Boot · Vue.js · Nuxt.js',
  heroIntro:
    'Más de 6 años construyendo productos digitales con Vue.js, Nuxt.js y TypeScript, y hoy llevo esa experiencia al backend con Java y Spring Boot.',
  about: [
    '**Desarrolladora Full Stack** con **más de 6 años de experiencia** profesional en frontend (**Vue.js, Nuxt.js, JavaScript y TypeScript**) en entornos de alta exigencia: HR Tech, media, fintech y ed-tech. He **liderado funcionalidades end-to-end**, desde el análisis técnico y los componentes hasta la integración con servicios backend y los despliegues en **AWS Lambda y CloudFront**.',
    'Estoy consolidando mi perfil backend con **Java y Spring Boot** (POO, REST APIs, cloud en AWS), con foco en **código limpio y testeable**, y con base previa en NestJS, GraphQL y MongoDB. Me caracterizo por **anticipar escenarios** antes de que impacten al equipo, entregar interfaces con **fidelidad exacta al diseño** y asumir **ownership completo** de mis entregas. Busco **roles Full Stack** en equipos con alto estándar técnico y producto con impacto real.',
  ],
  stats: [
    { value: '6+', label: 'Años de experiencia' },
    { value: '6', label: 'Empresas' },
    { value: '40%', label: 'Menos tiempo en IN_GRID' },
  ],
};

// Títulos y subtítulos de cada sección
export const sections = {
  services: {
    tag: 'Servicios',
    title: '¿Cómo puedo ayudarte?',
    subtitle:
      'Del componente a la API: interfaces rápidas y fieles al diseño, servicios backend limpios y despliegues listos para producción.',
  },
  timeline: {
    tag: 'Trayectoria',
    title: 'Experiencia y Educación',
    subtitle:
      'Más de 6 años en frontend senior y una formación activa en Java y Spring Boot para el desarrollo full stack.',
  },
  projects: {
    tag: 'Trabajo destacado',
    title: 'Proyectos con impacto real',
    subtitle:
      'Productos en los que participé de principio a fin, del frontend a la integración con backend, con resultados medibles.',
  },
  skills: {
    tag: 'Skills y logros',
    title: 'Stack técnico y resultados',
    subtitle:
      'Frontend como especialidad, Java y Spring Boot en el backend, y algunos resultados de los que me siento orgullosa.',
  },
};

export const services = [
  {
    icon: 'code',
    title: 'Frontend de alto nivel',
    description:
      'Aplicaciones con Vue.js y Nuxt.js (SSR), TypeScript y React, con fidelidad exacta al diseño en Figma, accesibilidad (WCAG) y foco en rendimiento web.',
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description:
      'Servicios con Java y Spring Boot bajo POO y código testeable (JUnit), REST APIs y GraphQL, con experiencia previa en NestJS y bases SQL y NoSQL.',
  },
  {
    icon: 'cloud',
    title: 'Cloud, analítica & IA',
    description:
      'Despliegues en AWS Lambda, CloudFront y Amplify, medición con Google Tag Manager y Analytics, y desarrollo asistido con IA (Claude, Codex, MCP).',
  },
] as const;

export const experience: Experience[] = [
  {
    company: 'Luckywise',
    role: 'Sr. Frontend Developer',
    period: 'Mar. 2025 – Jun. 2026',
    location: 'Remoto · Lisboa, Portugal',
    description:
      'Startup de entretenimiento digital basada en datos, con despliegue en mercados internacionales.',
    highlights: [
      'Lideré el desarrollo end-to-end de funcionalidades con Vue.js y Nuxt.js: análisis técnico, componentes, integración con servicios backend y despliegues en AWS.',
      'Desarrollé el módulo OCR, automatizando la extracción de datos de documentos y eliminando la carga manual.',
      'Implementé una integración basada en IA para Dream Purchases, optimizando el renderizado de imágenes.',
      'Configuré Google Tag Manager y Google Analytics de punta a punta para medir el producto.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'aws', 'gtm', 'analytics', 'figma'],
  },
  {
    company: 'CSTI CORP',
    role: 'Sr. Frontend Developer',
    period: 'Nov. 2024 – Feb. 2025',
    location: 'Remoto · Lima, Perú',
    description:
      'Consultora TI regional (7 países, +500 consultores) especializada en outsourcing y soluciones de negocio.',
    highlights: [
      'Desarrollé componentes reutilizables con Vue.js y Nuxt.js (SSR) integrados con servicios backend para plataformas educativas.',
      'Coordiné técnicamente con backend y diseño, liderando Dailies durante ausencias del equipo.',
      'Validé entornos de desarrollo y producción, detectando inconsistencias antes del despliegue, con una práctica sistemática de auto-QA.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'css', 'git'],
  },
  {
    company: 'Talently',
    role: 'Mid-Senior Frontend Developer',
    period: 'Sept. 2021 – Feb. 2024',
    location: 'Remoto · Lima, Perú',
    description:
      'Plataforma HR Tech de conexión entre developers y empresas tech en LATAM.',
    highlights: [
      'Construí Talently Match desde sus primeras etapas: flujos de negocio e integraciones frontend-backend, del registro a la aplicación a vacantes.',
      'Participé en la evolución de B2C hacia un marketplace con solución B2B para empresas y recruiters.',
      'Lideré iniciativas de rediseño y rebranding, realicé Code Reviews y acompañé técnicamente a desarrolladores Full Stack.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'tailwind', 'figma', 'notion'],
  },
  {
    company: 'América Televisión',
    role: 'Frontend Developer',
    period: 'Feb. 2019 – Ago. 2021',
    location: 'Presencial · Lima, Perú',
    description:
      'Compañía de Radiodifusión Peruana S.A., canal de TV líder en Perú, con operaciones en medios digitales y publicidad.',
    highlights: [
      'Lideré el rediseño de FIRMCOM, plataforma centralizada de contratos publicitarios, sobre un stack Vue.js + NestJS + GraphQL.',
      'Optimicé la plataforma IN_GRID, reduciendo en 40% el tiempo de generación de programaciones semanales.',
      'Desarrollé una plataforma para seguimiento y registro de entrevistas, trabajando con MongoDB y Oracle.',
    ],
    tools: ['vue', 'vuetify', 'nest', 'graphql', 'mongodb', 'oracle', 'figma'],
  },
  {
    company: 'TiSmart',
    role: 'Full-stack Developer Trainee',
    period: 'May. 2018 – Ene. 2019',
    location: 'Presencial · Lima, Perú',
    description: 'Consultora TI especializada en soluciones de negocio.',
    highlights: [
      'Desarrollé funcionalidades para VISANET CMS, gestión de usuarios y afiliación a terminales POS de VISA en Perú.',
      'Implementé módulos frontend y backend (Vue.js, NestJS, .NET, MongoDB) en un equipo multidisciplinario.',
    ],
    tools: ['vue', 'vuetify', 'nest', 'dotnet', 'mongodb'],
  },
];

export const education: Education[] = [
  {
    institution: 'Generation Colombia',
    program: 'Fullstack Developer Java Junior',
    period: '2026',
    location: 'Bogotá, Colombia',
  },
  {
    institution: 'Le Wagon',
    program: 'Web Development with AI',
    period: '2024',
    location: 'Online',
  },
  {
    institution: 'Digital House',
    program: 'Certified Tech Developer',
    period: '2023 – 2024',
    location: 'Buenos Aires, Argentina (Online)',
  },
  {
    institution: 'Toulouse-Lautrec',
    program: 'UX/UI Design',
    period: '2019',
    location: 'Lima, Perú',
  },
  {
    institution: 'Laboratoria',
    program: 'Frontend Development Bootcamp',
    period: '2017 – 2018',
    location: 'Lima, Perú',
  },
];

// Píldoras con icono (máx. 12 para mantener la grilla 4×3)
export const skills: { key: TechKey; label: string }[] = [
  { key: 'java', label: 'Java' },
  { key: 'spring', label: 'Spring Boot' },
  { key: 'vue', label: 'Vue.js' },
  { key: 'nuxt', label: 'Nuxt.js' },
  { key: 'typescript', label: 'TypeScript' },
  { key: 'react', label: 'React' },
  { key: 'mysql', label: 'MySQL' },
  { key: 'graphql', label: 'GraphQL' },
  { key: 'nest', label: 'NestJS' },
  { key: 'aws', label: 'AWS' },
  { key: 'tailwind', label: 'Tailwind' },
  { key: 'figma', label: 'Figma' },
];

export const skillGroups = [
  { title: 'Backend', items: 'Java, Spring Boot, POO, REST APIs, GraphQL, NestJS, Ruby on Rails' },
  { title: 'Frontend', items: 'Vue.js, Nuxt.js (SSR), React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Sass, SPA, Gestión de Estado' },
  { title: 'Bases de datos', items: 'MySQL, PostgreSQL, MongoDB, SQL, Oracle' },
  { title: 'Calidad y testing', items: 'JUnit, Code Review, Accesibilidad (WCAG), Rendimiento Web, Diseño por Componentes' },
  { title: 'Cloud & Deployment', items: 'AWS Lambda, AWS CloudFront, AWS Amplify, Heroku' },
  { title: 'Analytics & IA', items: 'Google Tag Manager, Google Analytics, Claude, Codex, MCP Workflows, AI Code Review' },
  { title: 'Design & Product', items: 'Figma, UX/UI Design, Design Systems, Diseño Responsive, Wireframing' },
  { title: 'Metodologías y herramientas', items: 'Agile/Scrum, Git, GitHub, GitLab, Jira, Confluence, Notion' },
];

export const achievements = [
  { value: '40%', title: 'Menos tiempo', detail: 'en programaciones semanales de IN_GRID · América TV' },
  { value: '0→1', title: 'Talently Match', detail: 'Plataforma construida desde cero, de B2C a B2B' },
  { value: 'E2E', title: 'Ownership end-to-end', detail: 'Del análisis técnico al despliegue en AWS · Luckywise' },
];

export const projects: Project[] = [
  {
    company: 'Talently',
    title: 'Talently Match: de B2C a marketplace B2B',
    description:
      'Flujos de negocio e integraciones frontend-backend para developers, del registro a la aplicación a vacantes, que evolucionaron hacia un ecosistema para empresas y recruiters.',
    metric: { value: '0→1', label: 'Construido desde cero' },
    tools: ['vue', 'nuxt', 'typescript', 'tailwind'],
  },
  {
    company: 'Proyecto Java',
    title: 'Libreta de contactos (Address Book)',
    description:
      'Aplicación de escritorio en Java con POO para registrar, buscar, editar y eliminar contactos, con lógica de negocio organizada en clases y pruebas con JUnit.',
    metric: { value: 'CRUD', label: 'Java · MySQL · JUnit' },
    tools: ['java', 'mysql', 'junit'],
    // Reemplaza por la URL exacta del repositorio
    link: { href: 'https://github.com/JessicaMP/', label: 'Ver en GitHub' },
  },
  {
    company: 'Luckywise',
    title: 'Módulo OCR e integración con IA',
    description:
      'Funcionalidad end-to-end: extracción automática de datos de documentos, integración con servicios backend e IA, y despliegue en AWS.',
    metric: { value: 'OCR', label: 'Sin carga manual' },
    tools: ['vue', 'nuxt', 'typescript', 'aws'],
  },
  {
    company: 'América Televisión',
    title: 'IN_GRID: programación semanal 40% más rápida',
    description:
      'Optimización de la plataforma de programación, con funcionalidades presupuestales y de planificación anual sobre Vue.js, GraphQL y MongoDB.',
    metric: { value: '-40%', label: 'Tiempo de generación' },
    tools: ['vue', 'vuetify', 'graphql', 'mongodb'],
  },
  {
    company: 'América Televisión',
    title: 'FIRMCOM: contratos publicitarios centralizados',
    description:
      'Rediseño de la plataforma de contratos publicitarios con Vue.js, NestJS y GraphQL, reemplazando procesos manuales por una solución digital integrada.',
    metric: { value: '1', label: 'Plataforma integrada' },
    tools: ['vue', 'nest', 'graphql', 'figma'],
  },
];

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
];
// Textos de interfaz (botones, etiquetas, accesibilidad) y metadatos SEO
export const ui = {
  meta: {
    title: 'Jessica Manturano · Full Stack Developer (Java, Spring Boot, Vue.js)',
    description:
      'Full Stack Developer en Lima, Perú, con más de 6 años en frontend (Vue.js, Nuxt.js, TypeScript) y backend con Java y Spring Boot. Disponible para roles remotos.',
    locale: 'es_PE',
    jobTitle: 'Full Stack Developer',
  },
  langSwitch: { label: 'English', short: 'EN', current: 'ES' },
  skip: 'Saltar al contenido',
  nav: { aria: 'Principal', cta: 'Hablemos', open: 'Abrir menú', close: 'Cerrar menú', language: 'Cambiar idioma' },
  hero: {
    hello: '¡Hola! Soy',
    hire: 'Contrátame',
    downloadCv: 'Descargar CV',
    viewProfile: 'Ver perfil completo',
    portraitAlt: 'Ilustración de',
    available: 'Disponible',
    quality: "'alta'",
  },
  about: {
    tag: 'Sobre mí',
    greeting: '¡Hola! Soy',
    contact: 'Contacto',
    phone: 'Teléfono',
    location: 'Ubicación',
    languages: 'Idiomas',
    stack: 'Stack principal',
  },
  timeline: { work: 'Experiencia', edu: 'Educación y certificaciones', tools: 'Herramientas' },
  projects: {
    viewTimeline: 'Ver en mi trayectoria',
    region: 'Proyectos destacados',
    carousel: 'carrusel',
    slide: 'diapositiva',
    of: 'de',
    choose: 'Elegir proyecto',
    goTo: 'Ir a',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    tech: 'Tecnologías',
  },
  footer: {
    title: '¿Tienes un proyecto en mente? Trabajemos juntos.',
    cta: 'Escríbeme',
    call: 'Llámame o escríbeme',
    mail: 'Envíame un correo',
    remote: 'Trabajo remoto desde:',
    rights: 'Todos los derechos reservados.',
  },
};
