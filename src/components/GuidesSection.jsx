import { ArrowRight } from 'lucide-react';

// Bloco da home com links para as páginas de conteúdo (ajuda o Google a achar e
// entender as páginas, e leva o visitante para leituras úteis).
const guides = [
  {
    href: '/canto-de-oracao',
    eyebrow: 'Oração em família',
    title: 'Como montar um canto de oração em casa',
    text: 'Sete ideias simples, da prateleira da sala ao oratório que cabe na mala.',
  },
  {
    href: '/cores-liturgicas',
    eyebrow: 'Ano litúrgico',
    title: 'Cores litúrgicas: o que significa cada cor da missa',
    text: 'Verde, roxo, branco, vermelho e rosa, com um jeito fácil de explicar às crianças.',
  },
  {
    href: '/coroa-do-advento',
    eyebrow: 'Advento 2026',
    title: 'Coroa do Advento: significado e como montar',
    text: 'O que cada parte representa, a ordem das velas e uma bênção para rezar em casa.',
  },
];

const GuidesSection = () => (
  <section id="guias" className="py-24 md:py-32 bg-[#FAFAF9] border-t border-[#EAE6DF]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#B59E75]/40"></div>
          <span className="text-[#B59E75] uppercase tracking-widest text-xs font-semibold">Para ler com calma</span>
          <div className="h-[1px] w-12 bg-[#B59E75]/40"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A4542]">A fé dentro de casa</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {guides.map((guide) => (
          <a
            key={guide.href}
            href={guide.href}
            className="group block bg-white border border-[#D6D3CD] p-8 rounded-sm hover:border-[#B59E75] hover:-translate-y-px transition-all shadow-[0_18px_40px_-30px_rgba(74,69,66,0.5)]"
          >
            <span className="text-xs font-bold text-[#8A9A8A] uppercase tracking-widest block mb-4">{guide.eyebrow}</span>
            <h3 className="text-2xl font-serif text-[#4A4542] leading-snug mb-4">{guide.title}</h3>
            <p className="text-[#78716C] font-light leading-relaxed mb-6">{guide.text}</p>
            <span className="inline-flex items-center gap-2 text-sm text-[#4A4542] group-hover:text-[#B59E75] transition">
              Ler o guia <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default GuidesSection;
