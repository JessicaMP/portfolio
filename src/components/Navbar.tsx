import { useEffect, useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
  ctaHref: string;
  labels: { aria: string; cta: string; open: string; close: string; language: string };
  langSwitch: { href: string; hreflang: string; label: string; short: string; current: string };
  children?: React.ReactNode; // logo
}

export default function Navbar({ links, ctaHref, labels, langSwitch, children }: Props) {
  // Selector de idioma: muestra el idioma actual y enlaza a la otra versión
  const LangLink = ({ className = '' }: { className?: string }) => (
    <a
      href={langSwitch.href}
      hrefLang={langSwitch.hreflang}
      lang={langSwitch.hreflang}
      aria-label={`${labels.language}: ${langSwitch.label}`}
      title={langSwitch.label}
      className={`group inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-2 text-sm font-semibold text-white transition duration-300 ease-out-soft hover:border-sky hover:text-sky ${className}`}
    >
      <Languages size={16} aria-hidden="true" />
      <span className="text-white/50 transition-colors group-hover:text-sky/60">{langSwitch.current}</span>
      <span aria-hidden="true" className="text-white/30">/</span>
      <span>{langSwitch.short}</span>
    </a>
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0]?.href ?? '');

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-white/10 bg-ink py-7">
      <nav className="container-page flex h-[42px] items-center justify-between" aria-label={labels.aria}>
        {children}

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                className={`text-base leading-6 font-semibold transition-colors hover:text-primary ${
                  active === l.href ? 'text-primary' : 'text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <LangLink />
          </li>
          <li>
            <a
              href={ctaHref}
              className="block rounded-full border border-white bg-white px-6 py-3 text-base leading-4 font-semibold text-ink transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-accent/30"
            >
              {labels.cta}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 lg:hidden">
          <LangLink />
        <button
          type="button"
          className="text-white"
          aria-label={open ? labels.close : labels.open}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-100px)] bg-ink lg:hidden">
          <ul className="container-page flex flex-col gap-2 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg font-semibold ${active === l.href ? 'text-primary' : 'text-white'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-ink"
              >
                {labels.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
