# Akira Brand Studio

Site institucional do estúdio de branding high ticket do Akira Matsuzaki.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS (tema dark customizado)
- GSAP + ScrollTrigger
- Lenis (smooth scroll)

## Setup

```bash
npm install
cp .env.example .env.local   # ajustar variáveis
npm run dev
```

Site sobe em `http://localhost:3000`.

## Variáveis de ambiente

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número de WhatsApp do Akira (formato `55DDDXXXXXXXXX`, sem `+` ou espaços).
- `NEXT_PUBLIC_SITE_URL` — domínio canônico, usado para SEO/OG.

## Build

```bash
npm run build
npm run start
```

## Estrutura

```
app/               Rotas (App Router)
components/        layout/ · sections/ · ui/ · animations/
lib/               gsap.ts (plugins) · projects.ts (mock data)
content/posts/     Placeholder MDX (blog ainda estático)
public/images/     placeholders/ · textures/
```

## Blog

Listagem e posts estão estáticos por enquanto. A pasta `content/posts/` está reservada para MDX — quando for plugar, ler frontmatter ali e renderizar dentro de `app/blog/[slug]/page.tsx`.
# akira
