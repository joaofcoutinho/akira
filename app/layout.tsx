import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akirabrandstudio.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Akira Brand Studio — Identidade Visual Premium',
    template: '%s · Akira Brand Studio',
  },
  description:
    'Estúdio de branding. Identidade visual premium e estratégia de marca para empresas exigentes, com atuação internacional.',
  keywords: [
    'identidade visual premium',
    'designer de marcas',
    'estúdio de branding',
    'naming',
    'design de marca',
    'Akira Matsuzaki',
  ],
  authors: [{ name: 'Akira Matsuzaki' }],
  creator: 'Akira Brand Studio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Akira Brand Studio',
    title: 'Akira Brand Studio — Identidade Visual Premium',
    description:
      'Identidade visual premium e estratégia de marca para empresas exigentes.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akira Brand Studio',
    description: 'Identidade visual premium. Estratégia de marca.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0F0D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-ink text-bone font-sans antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
