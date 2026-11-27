import {
  siVuedotjs, siNuxt, siJavascript, siTypescript, siReact, siTailwindcss, siSass,
  siFigma, siGoogletagmanager, siGoogleanalytics, siNestjs, siGraphql, siMongodb,
  siPostgresql, siRubyonrails, siGit, siGithub, siGitlab, siJira, siNotion,
  siVuetify, siElement, siHtml5, siCss, siDotnet, siClaude, siPostcss, siConfluence,
  siSpringboot, siMysql, siJunit5,
  type SimpleIcon,
} from 'simple-icons';
import { Coffee } from 'lucide-react';
import type { TechKey } from '@/data/profile';

const icons: Partial<Record<TechKey, SimpleIcon>> = {
  vue: siVuedotjs, nuxt: siNuxt, javascript: siJavascript, typescript: siTypescript,
  react: siReact, tailwind: siTailwindcss, sass: siSass, figma: siFigma,
  gtm: siGoogletagmanager, analytics: siGoogleanalytics, nest: siNestjs,
  graphql: siGraphql, mongodb: siMongodb, postgres: siPostgresql, rails: siRubyonrails,
  git: siGit, github: siGithub, gitlab: siGitlab, jira: siJira, notion: siNotion,
  vuetify: siVuetify, element: siElement, html: siHtml5, css: siCss, dotnet: siDotnet,
  claude: siClaude, postcss: siPostcss, confluence: siConfluence,
  spring: siSpringboot, mysql: siMysql, junit: siJunit5,
};

// Marcas sin icono en simple-icons: se muestran como monograma con su color.
const monograms: Partial<Record<TechKey, { text: string; color: string; title: string }>> = {
  aws: { text: 'AWS', color: '#FF9900', title: 'Amazon Web Services' },
  oracle: { text: 'ORA', color: '#F80000', title: 'Oracle' },
};

interface Props {
  name: TechKey;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 24, className = '' }: Props) {
  // Java no está en simple-icons (marca de Oracle): taza de café con su naranja oficial.
  if (name === 'java') {
    return (
      <span role="img" aria-label="Java" title="Java" className={`inline-flex ${className}`} style={{ color: '#E76F00' }}>
        <Coffee size={size} strokeWidth={2} aria-hidden="true" />
      </span>
    );
  }
  const icon = icons[name];
  if (icon) {
    return (
      <svg
        role="img"
        aria-label={icon.title}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={`#${icon.hex}`}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    );
  }
  const mono = monograms[name];
  if (!mono) return null;
  return (
    <span
      role="img"
      aria-label={mono.title}
      title={mono.title}
      className={`inline-flex items-center justify-center font-extrabold leading-none ${className}`}
      style={{ color: mono.color, fontSize: size * 0.42, width: size, height: size }}
    >
      {mono.text}
    </span>
  );
}
