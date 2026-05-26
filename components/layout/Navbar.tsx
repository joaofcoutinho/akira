'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { whatsappLink } from '@/lib/whatsapp';

const links = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      // Always reveal at the very top of the page.
      if (y < 24) {
        setHidden(false);
      } else if (delta > 6 && y > 100) {
        // Scrolling down past threshold — hide.
        setHidden(true);
      } else if (delta < -6) {
        // Scrolling up — reveal immediately.
        setHidden(false);
      }

      setScrolled(y > 24);
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out',
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div
        className={cn(
          'transition-colors duration-500',
          scrolled || open
            ? 'bg-ink/80 backdrop-blur-xl border-b border-line'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-content items-center px-6 py-5 md:px-12 lg:px-20">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Akira Brand Studio — Home"
            >
              <Image
                src="/images/Logo%20Akira%20BS_branco%20horizontal.png"
                alt="Akira Brand Studio"
                width={1111}
                height={354}
                priority
                className="h-8 w-auto origin-left scale-[1.3]"
              />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center justify-center gap-10">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-light transition-colors duration-300 hover:text-bone',
                      active ? 'text-bone' : 'text-mist'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-1 items-center justify-end">
            <div className="hidden lg:block">
              <a
                href={whatsappLink('Olá Akira, vim pelo site e quero conversar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Conversar
                <span aria-hidden>→</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-bone p-2 -mr-2"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <div className="relative w-6 h-4">
                <span
                  className={cn(
                    'absolute left-0 top-0 h-px w-6 bg-bone transition-transform duration-300',
                    open && 'translate-y-1.5 rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 bottom-0 h-px w-6 bg-bone transition-transform duration-300',
                    open && '-translate-y-1.5 -rotate-45'
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out',
            open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="flex flex-col gap-6 px-6 pb-10 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-2xl font-light text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-line">
              <a
                href={whatsappLink('Olá Akira, vim pelo site e quero conversar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs uppercase tracking-[0.18em] text-bone"
              >
                Conversar no WhatsApp <span aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
