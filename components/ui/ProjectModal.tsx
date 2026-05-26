'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import type { Project } from '@/lib/projects';
import { Eyebrow } from './Eyebrow';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Full-screen project modal.
 * - Animates in with a slight scale + fade (GSAP), or instantly under reduced motion.
 * - Locks body scroll while open.
 * - Closes on ESC, overlay click, and X button.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Enter animation + body scroll lock
  useEffect(() => {
    if (!project) return;
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (prefersReducedMotion()) {
      gsap.set(overlay, { autoAlpha: 1 });
      gsap.set(panel, { autoAlpha: 1, scale: 1 });
    } else {
      const tl = gsap.timeline();
      tl.fromTo(
        overlay,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }
      );
      tl.fromTo(
        panel,
        { autoAlpha: 0, scale: 0.96, y: 24 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.2'
      );
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  // ESC to close
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl opacity-0"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Projeto ${project.title}`}
    >
      <div
        ref={panelRef}
        className="relative h-[92vh] w-full max-w-[1280px] overflow-y-auto rounded-2xl border border-line bg-forest-900/60"
        data-lenis-prevent
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="sticky top-6 z-10 ml-auto mr-6 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink/70 text-bone backdrop-blur transition-colors hover:bg-bone hover:text-ink"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
            <path
              d="M4 4L20 20M20 4L4 20"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>

        <div className="px-6 pt-6 pb-20 md:px-12 md:pt-8 lg:px-20">
          <header className="grid gap-8 border-b border-line pb-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Eyebrow>{project.category}</Eyebrow>
              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-mist md:text-lg">
                {project.description}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 md:col-span-5 md:grid-cols-1 md:gap-8 md:justify-self-end">
              <Meta label="Cliente" value={project.client} />
              <Meta label="Ano" value={project.year} />
              <Meta
                label="Serviços"
                value={project.services.join(' · ')}
                wide
              />
            </dl>
          </header>

          <div className="mt-12 space-y-6">
            {project.gallery.map((src, i) => (
              <div
                key={src + i}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-forest-900"
              >
                <Image
                  src={src}
                  alt={`${project.title} — imagem ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? 'col-span-2 md:col-span-1' : ''}>
      <dt className="text-xs uppercase tracking-[0.2em] text-mist">{label}</dt>
      <dd className="mt-2 text-sm font-light text-bone">{value}</dd>
    </div>
  );
}
