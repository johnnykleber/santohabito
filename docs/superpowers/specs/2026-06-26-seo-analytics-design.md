# Design — SEO + Vercel Analytics + Search Console

**Data:** 2026-06-26
**Projeto:** Santo Hábito (santohabito.com.br)
**Stack:** React + Vite + Tailwind, hospedado no Vercel

## Objetivo

Melhorar a visibilidade do site em motores de busca (SEO) e adicionar um painel
privado de métricas de visitantes (Vercel Analytics). Nenhuma das duas features
altera o layout visual já polido.

---

## Bloco A — SEO

### A1. Correções no `index.html`

| Item | Hoje | Depois |
|---|---|---|
| `lang` | `en` | `pt-BR` |
| `<title>` | `Santo Hábito` | `Santo Hábito — Arte Sacra e Objetos de Fé para o Cotidiano` |
| Meta description | inexistente | `Arte sacra contemporânea e objetos de fé que integram o sagrado à vida moderna. Peças minimalistas em impressão 3D — tradição católica com design atual.` |
| Open Graph | inexistente | `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image`, `og:locale=pt_BR` |
| Twitter Card | inexistente | `twitter:card=summary_large_image`, título, descrição, imagem |
| Canonical | inexistente | `https://santohabito.com.br/` |
| Theme color | inexistente | `#FAFAF9` (fundo do site) |
| Favicon | `vite.svg` (padrão Vite) | favicon próprio da marca (ver A4) |
| Google verification | inexistente | `<meta name="google-site-verification" content="JoyaUSz5aacHj8JFCqcighoVMfbI315CvNugi06TJPM">` |

**Imagem de OG card:** criada a partir de um SVG que reutiliza a paleta da marca
(areia `#FAFAF9`, sálvia `#8A9A8A`, grafite `#4A4542`, dourado `#B59E75`) com o
nome "Santo Hábito" em Playfair Display e a tagline "O sagrado, feito cotidiano."
Arquivo `public/og-image.png` (1200×630, formato recomendado pelas redes sociais).
Gerado a partir de `public/og-image.svg`.

### A2. Dados estruturados (JSON-LD)

Inserir no `index.html` um bloco `<script type="application/ld+json">` com
Schema.org `Organization`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Santo Hábito",
  "url": "https://santohabito.com.br/",
  "description": "Arte sacra contemporânea e objetos de fé para o cotidiano.",
  "slogan": "O sagrado, feito cotidiano.",
  "sameAs": ["https://www.instagram.com/santohabito"]
}
```

> Handle do Instagram confirmado: @santohabito.

### A3. Arquivos para crawlers

- **`public/robots.txt`**: permite indexação de tudo e aponta para o sitemap.
  ```
  User-agent: *
  Allow: /

  Sitemap: https://santohabito.com.br/sitemap.xml
  ```

- **`public/sitemap.xml`**: lista a URL principal (site de página única hoje).
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://santohabito.com.br/</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

### A4. Favicon próprio

O favicon atual é o `vite.svg` do template. Substituir por um favicon da marca.
Como não tenho acesso ao arquivo vetorial do logo neste momento, criarei um
favicon SVG simples e coerente com a identidade: um "S" estilizado em Playfair
sobre fundo areia, ou uma marca minimalista. Isso é provisório e facilmente
trocável quando você fornecer o logo vetorial (SVG/PDF).

---

## Bloco B — Vercel Analytics (painel privado)

### B1. Ativação no código

- Adicionar dependência `@vercel/analytics` ao `package.json`.
- Inserir o componente `<Analytics />` no `App.jsx` (renderizado uma vez, fora
  de qualquer rota/condição).
- Import: `import { Analytics } from '@vercel/analytics/react';`

### B2. Ativação no Vercel

- Após o deploy, ativar o toggle "Analytics" no painel do projeto `santohabito`
  no Vercel (via CLI: `vercel analytics enable` ou pelo dashboard).

### B3. O que o usuário passa a ver

No painel do Vercel → projeto `santohabito` → aba **Analytics**:
- Page views (total e por dia)
- Visitantes únicos
- Top pages
- Referrers (de onde vem o tráfego)
- Dispositivos e países

### B4. Privacidade e LGPD

- Vercel Analytics **não usa cookies** e coleta apenas dados agregados/anonimizados.
- **Não é necessário** banner de consentimento de cookies (diferente do Google
  Analytics, que exigiria). Conforme diretrizes de LGPD para dados não
  identificadores.

### B5. Custo

- Plano gratuito (Hobby) cobre o volume esperado para um site desse porte.
- Se exceder, o Vercel avisa; plano pago disponível.

---

## Bloco C — Verificação no Google Search Console

### C1. O que será feito no código

- Já coberto por A1: a meta tag `google-site-verification` estará no `index.html`
  após o deploy.
- Token confirmado: `JoyaUSz5aacHj8JFCqcighoVMfbI315CvNugi06TJPM`

### C2. O que o usuário fará (uma única vez)

1. Acessar search.google.com/search-console logado na conta Google dona do projeto.
2. Adicionar a propriedade `santohabito.com.br`.
3. Quando o Google pedir verificação, escolher o método "Tag HTML" e verificar.
   Como a tag já estará no ar, a verificação deve passar.
4. (Opcional) Submeter o sitemap (`/sitemap.xml`).

### C3. Autenticação

Nenhuma credencial Google é usada no fluxo. A verificação depende apenas da
presença da meta tag no site em produção.

---

## Fora de escopo

- **3 produtos "Em Breve"**: não serão tocados (Kit São Nicolau, Guia Visual da
  Missa, Decenário 'Silêncio').
- **Layout/visual**: nenhuma mudança no que foi polido.
- **Novo conteúdo/produto**: nada é criado (conforme disclaimer do projeto).

## Verificação / aceitação

- `npm run build` e `npm run lint` passam.
- `index.html` contém: lang=pt-BR, title, meta description, OG, Twitter, JSON-LD,
  canonical, theme-color, google-verification, novo favicon.
- `public/robots.txt` e `public/sitemap.xml` presentes e válidos.
- `public/og-image.png` e `public/og-image.svg` presentes.
- `<Analytics />` importado e renderizado no `App.jsx`.
- Deploy de produção no Vercel gera novo build "Ready".
- `santohabito.com.br` serve os novos metadados (verificado via curl no bundle/HTML).
- Search Console: usuário consegue verificar a propriedade após o deploy.
