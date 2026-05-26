import Link from 'next/link';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-40">
      <WaveTexture intensity="subtle" />
      <div className="relative mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 text-5xl font-light tracking-tightest md:text-7xl lg:text-8xl">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base font-light text-mist md:text-lg">
          O link parece estar quebrado ou a página foi movida.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Voltar para a home →
        </Link>
      </div>
    </section>
  );
}
