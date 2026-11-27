// All portfolio content (ENGLISH version) lives here.
// Same structure as profile.ts (Spanish). Edit text here without touching components.
// Tip: in the "about" paragraphs you can mark words in bold with **like this**.

import type { Experience, Education, Project, TechKey } from './profile';
import { profile as es } from './profile';

export const profile = {
  ...es, // name, email, phone, links, photo, cv… are shared with the Spanish version
  role: 'Full Stack Developer',
  roleDetail: 'Senior Frontend · Java & Spring Boot',
  location: 'Lima, Peru',
  languages: 'Spanish (Native) · English (B1)',
  mainStack: 'Java · Spring Boot · Vue.js · Nuxt.js',
  heroIntro:
    '6+ years building digital products with Vue.js, Nuxt.js and TypeScript, now bringing that experience to the backend with Java and Spring Boot.',
  about: [
    '**Full Stack Developer** with **6+ years of professional experience** in frontend (**Vue.js, Nuxt.js, JavaScript and TypeScript**) in demanding environments: HR Tech, media, fintech and ed-tech. I have **led features end-to-end**, from technical analysis and components to backend integration and deployments on **AWS Lambda and CloudFront**.',
    'I am strengthening my backend profile with **Java and Spring Boot** (OOP, REST APIs, AWS cloud), focused on **clean, testable code**, with previous experience in NestJS, GraphQL and MongoDB. I am known for **anticipating scenarios** before they affect the team, delivering interfaces with **pixel-perfect fidelity to the design** and taking **full ownership** of my work. I am looking for **Full Stack roles** in teams with high technical standards and products with real impact.',
  ],
  stats: [
    { value: '6+', label: 'Years of experience' },
    { value: '6', label: 'Companies' },
    { value: '40%', label: 'Less time on IN_GRID' },
  ],
};

export const sections = {
  services: {
    tag: 'Services',
    title: 'How can I help you?',
    subtitle:
      'From component to API: fast, design-faithful interfaces, clean backend services and production-ready deployments.',
  },
  timeline: {
    tag: 'Journey',
    title: 'Experience and Education',
    subtitle:
      '6+ years in senior frontend and ongoing training in Java and Spring Boot for full stack development.',
  },
  projects: {
    tag: 'Featured work',
    title: 'Projects with real impact',
    subtitle:
      'Products I worked on from start to finish, from frontend to backend integration, with measurable results.',
  },
  skills: {
    tag: 'Skills and achievements',
    title: 'Tech stack and results',
    subtitle:
      'Frontend as my specialty, Java and Spring Boot on the backend, and some results I am proud of.',
  },
};

export const services = [
  {
    icon: 'code',
    title: 'High-end frontend',
    description:
      'Applications with Vue.js and Nuxt.js (SSR), TypeScript and React, with pixel-perfect fidelity to Figma designs, accessibility (WCAG) and a focus on web performance.',
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description:
      'Services with Java and Spring Boot using OOP and testable code (JUnit), REST APIs and GraphQL, with previous experience in NestJS and SQL and NoSQL databases.',
  },
  {
    icon: 'cloud',
    title: 'Cloud, analytics & AI',
    description:
      'Deployments on AWS Lambda, CloudFront and Amplify, measurement with Google Tag Manager and Analytics, and AI-assisted development (Claude, Codex, MCP).',
  },
] as const;

export const experience: Experience[] = [
  {
    company: 'Luckywise',
    role: 'Sr. Frontend Developer',
    period: 'Mar. 2025 – Jun. 2026',
    location: 'Remote · Lisbon, Portugal',
    description: 'Data-driven digital entertainment startup operating in international markets.',
    highlights: [
      'Led end-to-end feature development with Vue.js and Nuxt.js: technical analysis, components, backend integration and AWS deployments.',
      'Built the OCR module, automating data extraction from documents and removing manual work.',
      'Implemented an AI-based integration for Dream Purchases, optimizing image rendering.',
      'Set up Google Tag Manager and Google Analytics end to end to measure the product.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'aws', 'gtm', 'analytics', 'figma'],
  },
  {
    company: 'CSTI CORP',
    role: 'Sr. Frontend Developer',
    period: 'Nov. 2024 – Feb. 2025',
    location: 'Remote · Lima, Peru',
    description:
      'Regional IT consultancy (7 countries, 500+ consultants) specialized in outsourcing and business solutions.',
    highlights: [
      'Built reusable components with Vue.js and Nuxt.js (SSR) integrated with backend services for educational platforms.',
      'Coordinated technically with backend and design, leading Dailies when the team lead was away.',
      'Validated development and production environments, catching inconsistencies before deployment through a systematic self-QA practice.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'css', 'git'],
  },
  {
    company: 'Talently',
    role: 'Mid-Senior Frontend Developer',
    period: 'Sep. 2021 – Feb. 2024',
    location: 'Remote · Lima, Peru',
    description: 'HR Tech platform connecting developers with tech companies across LATAM.',
    highlights: [
      'Built Talently Match from its early stages: business flows and frontend-backend integrations, from sign-up to job applications.',
      'Took part in the evolution from B2C to a marketplace with a B2B solution for companies and recruiters.',
      'Led redesign and rebranding initiatives, ran Code Reviews and mentored Full Stack developers.',
    ],
    tools: ['vue', 'nuxt', 'typescript', 'tailwind', 'figma', 'notion'],
  },
  {
    company: 'América Televisión',
    role: 'Frontend Developer',
    period: 'Feb. 2019 – Aug. 2021',
    location: 'On-site · Lima, Peru',
    description:
      'Compañía de Radiodifusión Peruana S.A., a leading TV network in Peru with operations in digital media and advertising.',
    highlights: [
      'Led the redesign of FIRMCOM, a centralized advertising contracts platform, on a Vue.js + NestJS + GraphQL stack.',
      'Optimized the IN_GRID platform, cutting weekly schedule generation time by 40%.',
      'Built a platform to track and record interviews, working with MongoDB and Oracle.',
    ],
    tools: ['vue', 'vuetify', 'nest', 'graphql', 'mongodb', 'oracle', 'figma'],
  },
  {
    company: 'TiSmart',
    role: 'Full-stack Developer Trainee',
    period: 'May 2018 – Jan. 2019',
    location: 'On-site · Lima, Peru',
    description: 'IT consultancy specialized in business solutions.',
    highlights: [
      'Built features for VISANET CMS, user management and VISA POS terminal enrollment in Peru.',
      'Implemented frontend and backend modules (Vue.js, NestJS, .NET, MongoDB) in a multidisciplinary team.',
    ],
    tools: ['vue', 'vuetify', 'nest', 'dotnet', 'mongodb'],
  },
];

export const education: Education[] = [
  { institution: 'Generation Colombia', program: 'Fullstack Developer Java Junior', period: '2026', location: 'Bogotá, Colombia' },
  { institution: 'Le Wagon', program: 'Web Development with AI', period: '2024', location: 'Online' },
  { institution: 'Digital House', program: 'Certified Tech Developer', period: '2023 – 2024', location: 'Buenos Aires, Argentina (Online)' },
  { institution: 'Toulouse-Lautrec', program: 'UX/UI Design', period: '2019', location: 'Lima, Peru' },
  { institution: 'Laboratoria', program: 'Frontend Development Bootcamp', period: '2017 – 2018', location: 'Lima, Peru' },
];

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
  { title: 'Backend', items: 'Java, Spring Boot, OOP, REST APIs, GraphQL, NestJS, Ruby on Rails' },
  { title: 'Frontend', items: 'Vue.js, Nuxt.js (SSR), React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Sass, SPA, State Management' },
  { title: 'Databases', items: 'MySQL, PostgreSQL, MongoDB, SQL, Oracle' },
  { title: 'Quality and testing', items: 'JUnit, Code Review, Accessibility (WCAG), Web Performance, Component-Driven Design' },
  { title: 'Cloud & Deployment', items: 'AWS Lambda, AWS CloudFront, AWS Amplify, Heroku' },
  { title: 'Analytics & AI', items: 'Google Tag Manager, Google Analytics, Claude, Codex, MCP Workflows, AI Code Review' },
  { title: 'Design & Product', items: 'Figma, UX/UI Design, Design Systems, Responsive Design, Wireframing' },
  { title: 'Methodologies and tools', items: 'Agile/Scrum, Git, GitHub, GitLab, Jira, Confluence, Notion' },
];

export const achievements = [
  { value: '40%', title: 'Less time', detail: 'on IN_GRID weekly schedules · América TV' },
  { value: '0→1', title: 'Talently Match', detail: 'Platform built from scratch, from B2C to B2B' },
  { value: 'E2E', title: 'End-to-end ownership', detail: 'From technical analysis to AWS deployment · Luckywise' },
];

export const projects: Project[] = [
  {
    company: 'Talently',
    title: 'Talently Match: from B2C to a B2B marketplace',
    description:
      'Business flows and frontend-backend integrations for developers, from sign-up to job applications, that evolved into an ecosystem for companies and recruiters.',
    metric: { value: '0→1', label: 'Built from scratch' },
    tools: ['vue', 'nuxt', 'typescript', 'tailwind'],
  },
  {
    company: 'Java project',
    title: 'Address Book',
    description:
      'Java desktop application using OOP to add, search, edit and delete contacts, with business logic organized in classes and tests with JUnit.',
    metric: { value: 'CRUD', label: 'Java · MySQL · JUnit' },
    tools: ['java', 'mysql', 'junit'],
    link: { href: 'https://github.com/JessicaMP/', label: 'View on GitHub' },
  },
  {
    company: 'Luckywise',
    title: 'OCR module and AI integration',
    description:
      'End-to-end feature: automatic data extraction from documents, integration with backend and AI services, and deployment on AWS.',
    metric: { value: 'OCR', label: 'No manual work' },
    tools: ['vue', 'nuxt', 'typescript', 'aws'],
  },
  {
    company: 'América Televisión',
    title: 'IN_GRID: weekly scheduling 40% faster',
    description:
      'Optimization of the scheduling platform, with budgeting and annual planning features built on Vue.js, GraphQL and MongoDB.',
    metric: { value: '-40%', label: 'Generation time' },
    tools: ['vue', 'vuetify', 'graphql', 'mongodb'],
  },
  {
    company: 'América Televisión',
    title: 'FIRMCOM: centralized advertising contracts',
    description:
      'Redesign of the advertising contracts platform with Vue.js, NestJS and GraphQL, replacing manual processes with an integrated digital solution.',
    metric: { value: '1', label: 'Integrated platform' },
    tools: ['vue', 'nest', 'graphql', 'figma'],
  },
];

export const navLinks = [
  { href: '#inicio', label: 'Home' },
  { href: '#sobre-mi', label: 'About' },
  { href: '#servicios', label: 'Services' },
  { href: '#experiencia', label: 'Experience' },
  { href: '#proyectos', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

// Interface text (buttons, labels, accessibility) and SEO metadata
export const ui = {
  meta: {
    title: 'Jessica Manturano · Full Stack Developer (Java, Spring Boot, Vue.js)',
    description:
      'Full Stack Developer based in Lima, Peru, with 6+ years in frontend (Vue.js, Nuxt.js, TypeScript) and backend with Java and Spring Boot. Open to remote roles.',
    locale: 'en_US',
    jobTitle: 'Full Stack Developer',
  },
  langSwitch: { label: 'Español', short: 'ES', current: 'EN' },
  skip: 'Skip to content',
  nav: { aria: 'Main', cta: "Let's talk", open: 'Open menu', close: 'Close menu', language: 'Change language' },
  hero: {
    hello: "Hi! I'm",
    hire: 'Hire me',
    downloadCv: 'Download CV',
    viewProfile: 'View full profile',
    portraitAlt: 'Illustration of',
    available: 'Available',
    quality: "'high'",
  },
  about: {
    tag: 'About me',
    greeting: "Hi! I'm",
    contact: 'Contact',
    phone: 'Phone',
    location: 'Location',
    languages: 'Languages',
    stack: 'Main stack',
  },
  timeline: { work: 'Experience', edu: 'Education and certifications', tools: 'Tools' },
  projects: {
    viewTimeline: 'See it in my journey',
    region: 'Featured projects',
    carousel: 'carousel',
    slide: 'slide',
    of: 'of',
    choose: 'Choose project',
    goTo: 'Go to',
    prev: 'Previous project',
    next: 'Next project',
    tech: 'Technologies',
  },
  footer: {
    title: 'Have a project in mind? Let’s work together.',
    cta: 'Email me',
    call: 'Call or text me',
    mail: 'Send me an email',
    remote: 'Working remotely from:',
    rights: 'All rights reserved',
  },
};
