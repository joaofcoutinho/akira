'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/cn';

type SplitTextProps = {
  children: string;
  className?: string;
  /** Per-word stagger delay, seconds. Default 0.06s. */
  stagger?: number;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
};

/**
 * Splits a string into words and stagger-reveals each (y + opacity).
 * Avoids relying on the paid GSAP SplitText plugin.
 */
export function SplitText({
  children,
  className,
  stagger = 0.06,
  delay = 0,
  as: As = 'h2',
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = useMemo(() => children.split(/(\s+)/), [children]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wordEls = el.querySelectorAll<HTMLElement>('[data-word]');
    if (!wordEls.length) return;

    if (prefersReducedMotion()) {
      gsap.set(wordEls, { y: 0, autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(wordEls, { y: 40, autoAlpha: 0 });
      gsap.to(wordEls, {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, children]);

  return (
    <As ref={ref as React.RefObject<never>} className={cn(className)}>
      {words.map((w, i) =>
        /\s+/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <span
            key={i}
            data-word
            className="inline-block"
            style={{ willChange: 'transform, opacity' }}
          >
            {w}
          </span>
        )
      )}
    </As>
  );
}
