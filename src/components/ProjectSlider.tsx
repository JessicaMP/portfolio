import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import TechIcon from './TechIcon';
import type { Project } from '@/data/profile';
import type { ui } from '@/data/profile';

interface Props {
  projects: Project[];
  labels: typeof ui.projects;
}

export default function ProjectSlider({ projects, labels: t }: Props) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = projects.length;

  const go = useCallback((i: number) => setIndex((i + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (!el?.closest('[data-project-slider]')) return;
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index]);

  return (
    <div
      data-project-slider
      role="region"
      aria-roledescription={t.carousel}
      aria-label={t.region}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="overflow-hidden rounded-[2rem] border border-line-strong shadow-[0_20px_60px_-30px_rgb(3_4_94/0.35)]">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="flex w-full shrink-0 flex-col lg:flex-row"
              aria-roledescription={t.slide}
              aria-label={`${i + 1} ${t.of} ${total}`}
              aria-hidden={i !== index}
            >
              <div className="flex flex-col p-8 sm:p-12 lg:w-[46%]">
                <p className="text-[22px] leading-6 font-bold text-primary">{p.company}</p>
                <h3 className="pt-5 text-[28px] leading-[1.4] font-bold text-ink sm:text-[40px] sm:leading-[60px]">
                  {p.title}
                </h3>
                <p className="max-w-[420px] pt-5 text-base leading-6 text-muted">{p.description}</p>
                <ul className="flex flex-wrap gap-4 pt-8" aria-label={t.tech}>
                  {p.tools.map((t) => (
                    <li key={t} className="flex size-14 items-center justify-center rounded-full border-2 border-muted/15">
                      <TechIcon name={t} size={24} />
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <a
                    href={p.link?.href ?? '#experiencia'}
                    target={p.link ? '_blank' : undefined}
                    rel={p.link ? 'noopener' : undefined}
                    tabIndex={i === index ? 0 : -1}
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink px-6 py-3.5 text-sm leading-5 font-semibold text-ink transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                  >
                    {p.link?.label ?? t.viewTimeline}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Panel visual del proyecto */}
              <div className="bg-brand-radial relative flex min-h-[320px] items-center justify-center p-8 lg:min-h-[560px] lg:flex-1">
                <div className="w-full max-w-[440px] overflow-hidden rounded-3xl bg-white shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-accent" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 h-5 flex-1 rounded-full bg-soft" />
                  </div>
                  <div className="p-8 text-center">
                    <p className="text-6xl font-extrabold text-primary sm:text-7xl">{p.metric?.value}</p>
                    <p className="pt-3 text-sm font-semibold tracking-wide text-muted uppercase">{p.metric?.label}</p>
                    <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                      <span className="h-16 bg-primary/15" />
                      <span className="h-16 bg-accent/30" />
                      <span className="h-16 bg-primary/15" />
                    </div>
                    <div className="mt-3 space-y-2" aria-hidden="true">
                      <span className="block h-2.5 w-full rounded-full bg-soft" />
                      <span className="block h-2.5 w-2/3 rounded-full bg-soft" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-8">
        <div className="flex gap-2" role="tablist" aria-label={t.choose}>
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${t.goTo} ${p.title}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-10 bg-primary' : 'w-2.5 bg-muted/30 hover:bg-muted/60'}`}
            />
          ))}
        </div>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={t.prev}
            className="flex size-[46px] items-center justify-center rounded-full border-2 border-line-strong text-ink transition duration-300 ease-out-soft hover:scale-105 hover:border-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={t.next}
            className="flex size-[46px] items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30 transition duration-300 ease-out-soft hover:scale-105 hover:bg-ink"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
