import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="mx-auto max-w-content px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
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
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm font-light text-mist leading-relaxed">
              Estúdio de branding. Identidade visual premium para
              marcas exigentes.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://www.instagram.com/akira.brands/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-mist transition-colors hover:text-bone"
            >
              @akira.brands
            </a>
            <a
              href="mailto:contato@akirabrandstudio.com"
              className="text-sm font-light text-mist transition-colors hover:text-bone"
            >
              contato@akirabrandstudio.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs uppercase tracking-[0.18em] text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Akira Brand Studio. Todos os direitos reservados.</p>
          <p>Espírito Santo · Atendimento internacional</p>
        </div>
      </div>
    </footer>
  );
}
