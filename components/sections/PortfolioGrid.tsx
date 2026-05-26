'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ProjectModal } from '@/components/ui/ProjectModal';
import type { Project } from '@/lib/projects';
import { cn } from '@/lib/cn';

type PortfolioGridProps = {
  projects: Project[];
  title?: string;
  eyebrow?: string;
  showFooterLink?: boolean;
  className?: string;
};

/**
 * 3-column grid. The list of projects must always be a multiple of 3 to
 * avoid orphan columns — caller's responsibility. Click opens ProjectModal.
 */
export function PortfolioGrid({
  projects,
  title = 'Trabalhos selecionados.',
  eyebrow = 'Portfólio',
  showFooterLink = true,
  className,
}: PortfolioGridProps) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      className={cn(
        'relative py-24 md:py-32 lg:py-40',
        className
      )}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight md:text-6xl">
              {title}
            </h2>
          </div>
          {showFooterLink && (
            <Button href="/portfolio" variant="ghost" size="md">
              Ver todos →
            </Button>
          )}
        </FadeIn>

        <FadeIn
          as="ul"
          stagger={0.08}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((project) => (
            <li key={project.id} data-stagger>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-forest-900 text-left transition-colors hover:border-white/[0.16]"
                aria-label={`Abrir projeto ${project.title}`}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                  <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-gradient-to-br from-forest-900/70 via-forest-900/50 to-forest-800/40 px-5 py-4 backdrop-blur-xl md:px-6 md:py-5">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      aria-hidden
                    />
                    <div className="relative flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-mist">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-lg font-light tracking-tight text-bone md:text-xl">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.16] text-bone transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:border-bone"
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </FadeIn>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
