import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, ShieldAlert, ArrowRight, Instagram, Mail, Check, Star } from 'lucide-react';

// --- PALETA DE CORES (Tailwind Classes & Hex References) ---
// Areia (Bege): bg-[#EAE6DF]
// Off-White: bg-[#FAFAF9]
// Verde Salvia (Oliva): bg-[#8A9A8A] / text-[#8A9A8A]
// Dourado Envelhecido: text-[#B59E75]
// Azul Mariano (Pálido): bg-[#EBF2F5]
// Texto Escuro (Terra): text-[#4A4542]

// --- DADOS EDITORIAIS (Storytelling) ---
const editorialSections = [
  {
    id: "missa-serena",
    title: "Silêncio na Missa",
    subtitle: "Para mãos pequenas e inquietas",
    bgColor: "bg-[#EBF2F5]", // Azul Mariano Pálido
    products: [
      {
        id: 1,
        name: "Decenário 'Silêncio'",
        category: "Educação na Fé",
        price: 45.90,
        image: "https://images.unsplash.com/photo-1628151016024-bbd7e0081079?q=80&w=800&auto=format&fit=crop",
        description: "Não é apenas um brinquedo, é uma introdução tátil à oração. Feito de silicone macio em tons pastéis, ele cai no chão da igreja sem fazer barulho. Perfeito para manter as mãos ocupadas e o coração calmo.",
        details: "Silicone BPA Free • Toque macio • Lavável"
      },
      {
        id: 5,
        name: "Guia Visual da Missa",
        category: "Educação",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        description: "Transforme o 'quanto falta para acabar?' em 'olha o que vem agora!'. Cartões ilustrados em aquarela que explicam a liturgia de forma visual.",
        details: "Papel Couché Fosco • Anel de metal dourado"
      }
    ]
  },
  {
    id: "altar-domestico",
    title: "O Sagrado em Casa",
    subtitle: "A beleza da oração no cotidiano",
    bgColor: "bg-[#FAFAF9]", // Off-White
    products: [
      {
        id: 2,
        name: "Altar 'Vigília'",
        category: "Decoração Litúrgica",
        price: 189.90,
        image: "https://images.unsplash.com/photo-1512626120412-faf41adb4874?q=80&w=800&auto=format&fit=crop",
        description: "Seu lar é uma igreja doméstica. Este altar foi desenhado em madeira clara para integrar-se à decoração sem perder a sacralidade. Linhas limpas, foco no essencial.",
        details: "Madeira Clara Maciça • Acabamento em Cera Natural"
      },
      {
        id: 4,
        name: "Vela Pura Cera",
        category: "Oração",
        price: 62.00,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
        description: "O cheiro suave do mel e a queima limpa. Uma luz dourada que recorda a presença constante de Deus. Sem parafinas, apenas natureza.",
        details: "100% Cera de Abelha • Pavio de Algodão • Duração 30h"
      }
    ]
  },
  {
    id: "sazonal",
    title: "Tradições Vivas",
    subtitle: "Edição Limitada de Novembro",
    bgColor: "bg-[#EAE6DF]", // Areia / Linho
    isHighlight: true,
    products: [
      {
        id: 3,
        name: "Kit São Nicolau",
        category: "Sazonal",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1590059390234-927a7c588e40?q=80&w=800&auto=format&fit=crop",
        description: "Resgate a verdadeira história por trás do Natal. Cortadores para biscoitos ou massinha que ensinam sobre o bispo generoso de Mira.",
        warning: "Material PLA: Use com massinha ou proteja com filme para alimentos.",
        details: "Design Exclusivo • Biodegradável • Acompanha Receita"
      }
    ]
  }
];

// --- COMPONENTES ---

const Navigation = ({ cartCount, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#EAE6DF]/90 backdrop-blur-md z-50 border-b border-[#D6D3CD] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">

          {/* Menu Mobile */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#4A4542]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo Centralizado */}
          <div className="flex-1 flex justify-center md:justify-start">
            <a href="#" className="font-serif text-3xl text-[#4A4542] tracking-tight hover:opacity-80 transition">
              Santo Hábito<span className="text-[#B59E75] text-4xl leading-none">.</span>
            </a>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#missa-serena" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Crianças</a>
            <a href="#altar-domestico" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Casa</a>
            <a href="#sazonal" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Sazonal</a>
          </div>

          {/* Cart Actions */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-[#4A4542] hover:text-[#B59E75] transition group"
            >
              <span className="hidden md:inline text-sm font-medium tracking-wide">Sacola</span>
              <div className="relative">
                <ShoppingBag size={20} className="group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8A9A8A] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EAE6DF] border-b border-[#D6D3CD] absolute w-full left-0">
          <div className="px-6 py-6 space-y-4">
            <a href="#missa-serena" onClick={() => setIsMenuOpen(false)} className="block text-lg font-serif text-[#4A4542]">Missa com Crianças</a>
            <a href="#altar-domestico" onClick={() => setIsMenuOpen(false)} className="block text-lg font-serif text-[#4A4542]">Altar Doméstico</a>
            <a href="#sazonal" onClick={() => setIsMenuOpen(false)} className="block text-lg font-serif text-[#4A4542]">Coleção Sazonal</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAFAF9] pt-20">
    {/* Textura de papel sutil */}
    <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>

    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <span className="block text-[#B59E75] uppercase tracking-[0.25em] text-xs md:text-sm mb-6 animate-fade-in-up font-medium">
        Arte Sacra & Cotidiano
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#4A4542] leading-[1.1] mb-8 animate-fade-in-up delay-100">
        A fé cabe na<br />
        <i className="font-serif italic text-[#8A9A8A]">vida real.</i>
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl text-[#78716C] font-light leading-relaxed mb-12 animate-fade-in-up delay-200">
        Objetos de linho, cerâmica e madeira desenhados para unir a tradição católica com a leveza do seu lar.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
        <a href="#missa-serena" className="group flex items-center justify-center gap-3 px-10 py-4 bg-[#8A9A8A] text-[#FAFAF9] hover:bg-[#768576] transition rounded-sm shadow-sm hover:shadow-md">
          <span className="tracking-wide">Explorar Coleção</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-80" />
        </a>
      </div>
    </div>
  </header>
);

const EditorialSection = ({ section, addToCart }) => (
  <section id={section.id} className={`${section.bgColor} py-24 md:py-32`}>
    <div className="max-w-7xl mx-auto px-6">

      {/* Cabeçalho da Seção */}
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#B59E75]/40"></div>
          <span className="text-[#B59E75] uppercase tracking-widest text-xs font-semibold">{section.subtitle}</span>
          <div className="h-[1px] w-12 bg-[#B59E75]/40"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A4542]">{section.title}</h2>
      </div>

      {/* Produtos da Seção */}
      <div className="space-y-32">
        {section.products.map((product, idx) => {
          // Alternar layout: Ímpar (Imagem E, Texto D) | Par (Texto E, Imagem D)
          const isReversed = idx % 2 !== 0;

          return (
            <div key={product.id} className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} gap-12 md:gap-24 items-center`}>

              {/* Imagem Editorial */}
              <div className="w-full md:w-1/2 relative group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-[#EAE6DF] relative shadow-sm">
                  <div className="absolute inset-0 bg-[#4A4542]/0 group-hover:bg-[#4A4542]/5 transition-colors duration-500 z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[10%] group-hover:grayscale-0"
                  />
                </div>
                {/* Legenda Flutuante */}
                <div className={`absolute -bottom-6 ${isReversed ? '-left-6' : '-right-6'} bg-[#FAFAF9] p-6 shadow-xl max-w-xs hidden md:block z-20 border border-[#EAE6DF]`}>
                  <p className="font-serif italic text-[#78716C] text-sm leading-relaxed">"{product.description.slice(0, 60)}..."</p>
                </div>
              </div>

              {/* Conteúdo Texto */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <span className="text-xs font-bold text-[#8A9A8A] uppercase tracking-widest mb-3 block">{product.category}</span>
                  <h3 className="text-4xl font-serif text-[#4A4542] leading-tight mb-6">{product.name}</h3>
                  <p className="text-lg text-[#78716C] leading-relaxed font-light">{product.description}</p>
                </div>

                <div className="border-t border-[#D6D3CD] pt-8">
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Star size={12} className="text-[#B59E75]" fill="#B59E75" /> {product.details}
                  </p>

                  {product.warning && (
                    <div className="mb-8 flex gap-3 items-start bg-[#EAE6DF]/50 p-4 border border-[#D6D3CD] rounded-sm">
                      <ShieldAlert className="w-5 h-5 text-[#B59E75] shrink-0" />
                      <p className="text-sm text-[#78716C] leading-relaxed">{product.warning}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    <span className="text-3xl font-serif text-[#4A4542]">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full sm:w-auto bg-[#8A9A8A] hover:bg-[#768576] text-[#FAFAF9] px-10 py-4 rounded-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3 group"
                    >
                      <span className="tracking-wide font-medium">Adicionar</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-80" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Manifesto = () => (
  <section className="py-32 bg-[#8A9A8A] text-[#FAFAF9] relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <Star className="w-8 h-8 text-[#FAFAF9] mx-auto mb-8 opacity-60" />
      <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
        "Santo Hábito nasce do desejo de que a sua casa conte a história da sua fé, sem precisar parecer um museu."
      </h2>
      <div className="h-[1px] w-24 bg-[#FAFAF9]/30 mx-auto my-8"></div>
      <p className="text-lg font-light max-w-2xl mx-auto opacity-90">
        Acreditamos na beleza que catequiza. No design que serve à liturgia. Na rotina que vira oração.
      </p>
    </div>
    {/* Background Texture */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/linen.png')" }}></div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 bg-[#FAFAF9] border-t border-[#EAE6DF]">
    <div className="max-w-xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-serif text-[#4A4542] mb-4">Guia Gratuito de Oração</h3>
      <p className="text-[#78716C] mb-8 font-light">
        Receba nosso PDF "7 Formas de Criar um Canto de Oração" e inspire-se.
      </p>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Seu e-mail principal"
          className="flex-1 bg-white border border-[#D6D3CD] px-4 py-3 text-[#4A4542] focus:outline-none focus:border-[#8A9A8A] rounded-sm placeholder-[#9CA3AF]"
        />
        <button className="bg-[#4A4542] text-[#FAFAF9] px-6 py-3 font-medium hover:bg-[#383432] transition rounded-sm">
          Enviar
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#EAE6DF] border-t border-[#D6D3CD] py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="font-serif text-xl text-[#4A4542] block mb-2">Santo Hábito.</span>
        <p className="text-[#78716C] text-sm">São Paulo, Brasil • Desde 2024</p>
      </div>

      <div className="flex gap-6 text-sm text-[#78716C]">
        <a href="#" className="hover:text-[#4A4542] transition">Instagram</a>
        <a href="#" className="hover:text-[#4A4542] transition">Pinterest</a>
        <a href="#" className="hover:text-[#4A4542] transition">Contato</a>
      </div>

      <div className="text-[#9CA3AF] text-xs text-center md:text-right max-w-xs">
        <p>Avisos legais: Produtos artesanais podem apresentar variações naturais. Cortadores PLA não devem ser expostos ao calor.</p>
      </div>
    </div>
  </footer>
);

// --- APP PRINCIPAL ---

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="font-sans antialiased text-[#4A4542] bg-[#FAFAF9] selection:bg-[#EAE6DF] selection:text-[#4A4542]">
      <Navigation cartCount={cart.length} setIsCartOpen={setIsCartOpen} />

      <main>
        <Hero />

        {editorialSections.map((section) => (
          <EditorialSection key={section.id} section={section} addToCart={addToCart} />
        ))}

        <Manifesto />
        <Newsletter />
      </main>

      <Footer />

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          <div className="absolute inset-0 bg-[#4A4542]/20 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>

          <div className="absolute inset-y-0 right-0 max-w-md w-full flex animate-slide-in">
            <div className="w-full h-full flex flex-col bg-[#FAFAF9] shadow-2xl">
              <div className="flex items-center justify-between px-8 py-8 border-b border-[#EAE6DF]">
                <h2 className="text-2xl font-serif text-[#4A4542]">Sua Sacola</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-[#9CA3AF] hover:text-[#4A4542] transition">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 py-8 px-8 overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[#9CA3AF]">
                    <ShoppingBag size={48} className="mb-4 opacity-20" />
                    <p className="font-light">Sua sacola está vazia.</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[#4A4542] border-b border-[#4A4542] pb-0.5 hover:text-[#B59E75] hover:border-[#B59E75] transition">
                      Voltar à loja
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-8">
                    {cart.map((item, idx) => (
                      <li key={idx} className="flex py-2">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-[#EAE6DF] rounded-sm">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover mix-blend-multiply" />
                        </div>
                        <div className="ml-6 flex flex-1 flex-col justify-between py-1">
                          <div>
                            <div className="flex justify-between text-lg font-serif text-[#4A4542]">
                              <h3>{item.name}</h3>
                              <p>R$ {item.price.toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-[#78716C]">{item.category}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(idx)}
                            className="text-sm text-[#9CA3AF] hover:text-red-400 text-left transition"
                          >
                            Remover
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-[#EAE6DF] px-8 py-8 bg-[#FAFAF9]">
                  <div className="flex justify-between text-xl font-serif text-[#4A4542] mb-6">
                    <p>Total</p>
                    <p>R$ {cartTotal.toFixed(2).replace('.', ',')}</p>
                  </div>
                  <button className="w-full bg-[#8A9A8A] text-[#FAFAF9] py-4 rounded-sm font-medium hover:bg-[#768576] transition shadow-sm">
                    Finalizar Pedido
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
