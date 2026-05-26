'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { ProjectModal } from '@/components/ui/ProjectModal';
import {
  projects as allProjects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '@/lib/projects';
import { cn } from '@/lib/cn';

/**
 * /portfolio page — full grid with simple category filter.
 * Always renders in multiples of 3 by padding with placeholder filler tiles
 * when needed, per the brand rule against orphan columns at lg breakpoint.
 */
export function PortfolioBrowser() {
  const [filter, setFilter] = useState<ProjectCategory | 'Todos'>('Todos');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'Todos') return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <FadeIn className="flex flex-wrap items-center gap-3">
        {(['Todos', ...projectCategories] as const).map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors',
                active
                  ? 'border-bone bg-bone text-ink'
                  : 'border-line text-mist hover:border-bone/30 hover:text-bone'
              )}
            >
              {cat}
            </button>
          );
        })}
      </FadeIn>

      <FadeIn
        as="ul"
        stagger={0.06}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        {filtered.map((project) => (
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

      {filtered.length === 0 && (
        <p className="mt-12 text-sm font-light text-mist">
          Nenhum projeto nesta categoria.
        </p>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
