'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/cn';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Stagger children with a [data-stagger] attribute. */
  stagger?: number;
  /** As element. Defaults to div. */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'ul' | 'li' | 'p';
};

/**
 * Scroll-triggered fade + slight upward motion.
 * Children may receive `data-stagger` to be animated in sequence.
 * Reduced-motion users see content instantly (no transform).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1,
  y = 24,
  stagger,
  as: As = 'div',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
      const targets = el.querySelectorAll('[data-stagger]');
      if (targets.length) gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    const targets = stagger
      ? el.querySelectorAll<HTMLElement>('[data-stagger]')
      : null;

    const ctx = gsap.context(() => {
      if (targets && targets.length) {
        gsap.set(targets, { autoAlpha: 0, y });
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        });
      } else {
        gsap.set(el, { autoAlpha: 0, y });
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      }
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [delay, duration, y, stagger]);

  return (
    <As ref={ref as React.RefObject<never>} className={cn(className)}>
      {children}
    </As>
  );
}
