import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akirabrandstudio.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/quem-somos',
    '/portfolio',
    '/blog',
    '/contato',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
