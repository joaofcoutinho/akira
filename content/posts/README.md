# Posts (MDX placeholder)

Esta pasta está reservada para os posts em MDX. Por enquanto, o blog roda com
mock estático em [`lib/posts.ts`](../../lib/posts.ts).

## Como migrar para MDX (quando o cliente pedir)

1. `npm install next-mdx-remote gray-matter` (ou similar).
2. Criar arquivos `.mdx` aqui (`branding-high-ticket-o-que-muda.mdx`, etc.) com
   frontmatter:

   ```mdx
   ---
   title: "Branding high ticket: o que muda em projetos premium"
   excerpt: "..."
   category: "Estratégia"
   date: "2025-11-12"
   readingTime: "6 min"
   cover: "/images/posts/cover-01.jpg"
   ---

   Conteúdo do post em **MDX**.
   ```

3. Substituir `lib/posts.ts` por leitura via `fs.readdirSync('content/posts')`
   + `matter()` para parsear o frontmatter.
4. Em [`app/blog/[slug]/page.tsx`](../../app/blog/[slug]/page.tsx), trocar o
   `dangerouslySetInnerHTML` por `<MDXRemote source={...} />`.

O shape do tipo `Post` em `lib/posts.ts` já está alinhado ao formato MDX —
não precisa mudar nada nos componentes.
