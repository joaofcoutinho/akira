'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  // Internal flag — ensures ScrollTrigger is registered exactly once per
  // client bundle, even with HMR / multiple module imports.
  // eslint-disable-next-line no-var
  var __akiraGsapRegistered: boolean | undefined;
}

if (typeof window !== 'undefined' && !globalThis.__akiraGsapRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  globalThis.__akiraGsapRegistered = true;
}

export { gsap, ScrollTrigger };

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
