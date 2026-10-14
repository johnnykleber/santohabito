// Pré-renderização (roda depois do `vite build`).
// 1. Coloca o HTML real da home dentro de dist/index.html (o React hidrata depois).
// 2. Adiciona o JSON-LD de produtos (ItemList de Product) na home.
// 3. Gera dist/<slug>.html para cada página de guia, com head próprio e JSON-LD.
// Assim o Google lê o conteúdo sem precisar executar JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, '.ssr')
const SITE = 'https://santohabito.com.br'
const ORG = { '@type': 'Organization', name: 'Santo Hábito', url: `${SITE}/` }

const { renderHome, renderArticle, articles, editorialSections } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = readFileSync(path.join(dist, 'index.html'), 'utf8')

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
const absolute = (url) => (url.startsWith('http') ? url : `${SITE}${url}`)

// --- Home ----------------------------------------------------------------------

const products = []
for (const section of editorialSections) {
  for (const p of section.products) {
    if (p.comingSoon || p.ordersClosed) continue
    const madeToOrder = /sob encomenda/i.test(p.details || '')
    products.push({
      '@type': 'Product',
      name: p.name,
      description: p.description,
      category: p.category,
      ...(p.image ? { image: absolute(p.image) } : {}),
      brand: { '@type': 'Brand', name: 'Santo Hábito' },
      offers: {
        '@type': 'Offer',
        url: `${SITE}/#${section.id}`,
        price: p.price.toFixed(2),
        priceCurrency: 'BRL',
        availability: madeToOrder ? 'https://schema.org/MadeToOrder' : 'https://schema.org/InStock',
        seller: ORG,
      },
    })
  }
}

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catálogo Santo Hábito',
  itemListElement: products.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
}

let home = template.replace('<div id="root"></div>', `<div id="root">${renderHome()}</div>`)
if (home === template) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html')
home = home.replace('</head>', `    ${jsonLd(itemList)}\n  </head>`)
writeFileSync(path.join(dist, 'index.html'), home)
console.log(`prerender: index.html (${products.length} produtos no JSON-LD)`)

// --- Páginas de guia -------------------------------------------------------------

const cssLinks = [...template.matchAll(/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/g)].map((m) => m[0])
const fontLinks = [...template.matchAll(/<link rel="preconnect"[^>]*>|<link\s+href="https:\/\/fonts\.googleapis\.com[^>]*>/g)].map((m) => m[0])
const verification = template.match(/<meta name="google-site-verification"[^>]*>/)?.[0] ?? ''
if (!cssLinks.length) throw new Error('prerender: CSS do build não encontrado')

for (const article of articles) {
  const url = `${SITE}/${article.slug}`
  const graph = [
    {
      '@type': 'Article',
      headline: article.h1,
      description: article.description,
      inLanguage: 'pt-BR',
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      image: `${SITE}/og-image.png`,
      author: ORG,
      publisher: { ...ORG, logo: { '@type': 'ImageObject', url: `${SITE}/og-image.png` } },
      mainEntityOfPage: url,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: article.navLabel, item: url },
      ],
    },
  ]
  if (article.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: article.howTo.name,
      description: article.description,
      inLanguage: 'pt-BR',
      supply: article.howTo.supply.map((name) => ({ '@type': 'HowToSupply', name })),
      step: article.howTo.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${url}`,
      })),
    })
  }

  const title = escapeHtml(article.title)
  const description = escapeHtml(article.description)
  const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#FAFAF9" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Santo Hábito" />
    <meta property="og:title" content="${escapeHtml(article.h1)}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${SITE}/og-image.png" />
    <meta property="article:published_time" content="${article.datePublished}" />
    <meta property="article:modified_time" content="${article.dateModified}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(article.h1)}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${SITE}/og-image.png" />
    ${verification}
    ${fontLinks.join('\n    ')}
    ${cssLinks.join('\n    ')}
    ${jsonLd({ '@context': 'https://schema.org', '@graph': graph })}
  </head>
  <body>
    ${renderArticle(article.slug)}
    <script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };</script>
    <script defer src="/_vercel/insights/script.js"></script>
  </body>
</html>
`
  writeFileSync(path.join(dist, `${article.slug}.html`), html)
  console.log(`prerender: ${article.slug}.html`)
}

rmSync(ssrDir, { recursive: true, force: true })
