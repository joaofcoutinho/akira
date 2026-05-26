'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/cn';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Vertical translation range in px (positive = move down). Default 60. */
  intensity?: number;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
};

/**
 * Subtle parallax: the image translates up while its container scrolls through
 * the viewport. We over-size the image (110%) so edges never expose the bg.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  intensity = 60,
  sizes = '100vw',
  priority,
  rounded = true,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        'relative overflow-hidden bg-forest-900',
        rounded && 'rounded-xl',
        className
      )}
    >
      <div ref={imgRef} className="absolute inset-0 scale-[1.12]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
