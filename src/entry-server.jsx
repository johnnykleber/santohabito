// Entrada de servidor usada só no build (scripts/prerender.mjs).
// Gera o HTML estático da home e das páginas de conteúdo.
import { StrictMode } from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'
import { articles } from './pages/articles.jsx'
import ArticlePage from './pages/ArticlePage.jsx'

export { editorialSections } from './data/catalog.js'
export { articles }

export function renderHome() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export function renderArticle(slug) {
  const article = articles.find((a) => a.slug === slug)
  return renderToStaticMarkup(<ArticlePage article={article} />)
}
