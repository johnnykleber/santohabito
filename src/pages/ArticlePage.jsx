import { ArrowRight, Instagram, Mail } from 'lucide-react';
import { articles } from './articles.jsx';

// Layout das páginas de conteúdo. Renderizado como HTML estático no build
// (sem JavaScript no navegador), com a mesma identidade visual da home.

const ArticleNav = () => (
  <nav className="w-full bg-[#EAE6DF]/90 border-b border-[#D6D3CD]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center h-20 gap-6">
        <a href="/" className="font-serif text-2xl md:text-3xl text-[#4A4542] tracking-tight hover:opacity-80 transition">
          Santo Hábito<span className="text-[#B59E75] text-3xl md:text-4xl leading-none">.</span>
        </a>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="/#pequenos-guardioes" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Chaveiros</a>
          <a href="/#altar-domestico" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Casa</a>
          <a href="/#guias" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Guias</a>
        </div>
        <a href="/" className="text-sm text-[#4A4542] hover:text-[#B59E75] transition flex items-center gap-2">
          <ArrowRight size={16} className="rotate-180" />
          <span>Voltar à loja</span>
        </a>
      </div>
    </div>
  </nav>
);

const ArticleFooter = () => (
  <footer className="bg-[#EAE6DF] border-t border-[#D6D3CD] py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <a href="/" className="font-serif text-xl text-[#4A4542] block mb-2">Santo Hábito.</a>
        <p className="text-[#78716C] text-sm">São Paulo, Brasil • Desde 2024</p>
      </div>
      <nav aria-label="Guias" className="flex flex-col gap-2 text-sm text-[#78716C] text-center md:text-left">
        {articles.map((a) => (
          <a key={a.slug} href={`/${a.slug}`} className="hover:text-[#4A4542] transition">{a.navLabel}</a>
        ))}
      </nav>
      <a
        href="https://instagram.com/osantohabito"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#78716C] hover:text-[#4A4542] transition flex items-center gap-2"
      >
        <Instagram size={18} />
        <span>@osantohabito</span>
      </a>
    </div>
  </footer>
);

const GuideCta = () => (
  <aside className="mt-16 bg-[#8A9A8A] text-[#FAFAF9] p-8 md:p-12 rounded-sm text-center">
    <span className="block uppercase tracking-[0.25em] text-xs opacity-80 mb-4">Guia gratuito em PDF</span>
    <p className="font-serif text-2xl md:text-3xl leading-snug mb-4">7 formas de criar um canto de oração</p>
    <p className="font-light opacity-90 max-w-lg mx-auto mb-8">
      Ideias simples, com lista do que usar e um pequeno hábito para cada canto. Deixe seu nome e e-mail e receba o guia.
    </p>
    <a
      href="/#newsletter"
      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAFAF9] text-[#4A4542] hover:bg-white transition rounded-sm"
    >
      <Mail size={18} />
      <span className="tracking-wide font-medium">Quero receber o guia</span>
    </a>
  </aside>
);

const RelatedArticles = ({ current }) => {
  const others = articles.filter((a) => a.slug !== current);
  return (
    <section className="mt-16 border-t border-[#D6D3CD] pt-12">
      <h2 className="font-serif text-2xl text-[#4A4542] mb-6">Leia também</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {others.map((a) => (
          <li key={a.slug}>
            <a href={`/${a.slug}`} className="group block bg-white border border-[#D6D3CD] p-6 rounded-sm hover:border-[#B59E75] transition">
              <span className="font-serif text-lg text-[#4A4542] group-hover:text-[#B59E75] transition">{a.h1}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ArticlePage = ({ article }) => (
  <div className="font-sans antialiased text-[#4A4542] bg-[#FAFAF9] min-h-screen">
    <ArticleNav />

    <main>
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <nav aria-label="Você está em" className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-10">
          <a href="/" className="hover:text-[#B59E75] transition">Início</a>
          <span className="mx-2">/</span>
          <a href="/#guias" className="hover:text-[#B59E75] transition">Guias</a>
          <span className="mx-2">/</span>
          <span className="text-[#78716C]">{article.navLabel}</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#B59E75]/50"></span>
            <span className="text-[#B59E75] uppercase tracking-[0.25em] text-xs font-medium">{article.eyebrow}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#4A4542] leading-[1.1] tracking-[-0.01em] mb-8">{article.h1}</h1>
          <p className="text-lg md:text-xl text-[#78716C] font-light leading-relaxed">{article.lead}</p>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-8">
            Santo Hábito • Atualizado em <time dateTime={article.dateModified}>{article.dateLabel}</time>
          </p>
        </header>

        <div className="article-body">{article.body}</div>

        <GuideCta />
        <RelatedArticles current={article.slug} />
      </article>
    </main>

    <ArticleFooter />
  </div>
);

export default ArticlePage;
