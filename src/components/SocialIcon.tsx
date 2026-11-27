import { siGithub } from 'simple-icons';

type Social = 'github' | 'linkedin' | 'email' | 'phone';

const paths: Record<Social, string> = {
  github: siGithub.path,
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  email:
    'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.51l10 6.25 10-6.25V6H2Zm20 2.87-9.47 5.92a1 1 0 0 1-1.06 0L2 8.87V18h20V8.87Z',
  phone:
    'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z',
};

const titles: Record<Social, string> = {
  github: 'GitHub', linkedin: 'LinkedIn', email: 'Email', phone: 'Teléfono',
};

interface Props {
  name: Social;
  size?: number;
  className?: string;
}

export default function SocialIcon({ name, size = 24, className = '' }: Props) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <title>{titles[name]}</title>
      <path d={paths[name]} />
    </svg>
  );
}
