import React, { useState, useEffect } from 'react';
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
    id: "aprender-brincando",
    title: "Aprender Brincando",
    subtitle: "Lançamento Exclusivo",
    bgColor: "bg-[#EBF2F5]", // Azul Mariano Pálido
    products: [
      {
        id: 201,
        name: "Kit Litúrgico 'Pequeno Celebrante'",
        category: "Brinquedo Educativo",
        price: 159.90,
        mlLink: "https://lista.mercadolivre.com.br/_CustId_260840432",
        image: "/products/kit-liturgico-real.jpg",
        description: "A criança aprende amando e imitando. Este conjunto completo (14 peças) permite que os pequenos compreendam a sacralidade da Missa através do toque. Do Cálice às Galhetas, cada item foi desenhado para mãos curiosas que buscam o céu.",
        details: "Sob Encomenda • 14 Peças (Cálice, Cibório, Castiçais...) • Bioplástico PLA"
      }
    ]
  },
  {
    id: "pequenos-guardioes",
    title: "Pequenos Guardiões",
    subtitle: "Chaveiros Low Poly Pintados à Mão",
    bgColor: "bg-[#F3F4F6]", // Cinza Suave
    products: [
      {
        id: 101,
        name: "São José",
        category: "Coleção Low Poly",
        price: 35.90,
        mlLink: "https://lista.mercadolivre.com.br/_CustId_260840432",
        image: "/products/low-poly/sao-jose-real.jpg",
        description: "Guardião silencioso. Ideal para chaves de casa. Traz o lírio da pureza e o Menino Jesus. Uma lembrança constante da proteção paterna.",
        details: "Sob Encomenda • Pintado à Mão • Marrom, Branco, Verde"
      },
      {
        id: 102,
        name: "Santo Antônio",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/santo-antonio-real.jpg",
        description: "Para quem busca bênçãos diárias. Representado com o Menino Jesus, símbolo de proximidade com Deus. O Santo dos milagres no seu bolso.",
        details: "Sob Encomenda • Pintado à Mão • Marrom Franciscano, Pele, Branco"
      },
      {
        id: 103,
        name: "Santa Teresinha",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/santa-teresinha-real.jpg",
        description: "Simplicidade e amor nos pequenos gestos. Carrega as rosas e o crucifixo. Uma chuva de rosas para o seu dia a dia.",
        details: "Sob Encomenda • Pintado à Mão • Marrom Carmelita, Creme, Vermelho"
      },
      {
        id: 104,
        name: "Nossa Senhora",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/nossa-senhora-real.jpg",
        description: "Proteção materna em todos os caminhos. Manto azul e coroa dourada. A Mãe Soberana, sempre por perto.",
        details: "Sob Encomenda • Pintado à Mão • Azul Celeste/Royal, Branco, Dourado"
      },
      {
        id: 105,
        name: "Kit Trindade de Proteção",
        category: "Coleção Completa",
        price: 99.90,
        image: "/products/low-poly/kit-tres-santos.jpg",
        description: "A união perfeita de proteção e fé. Leve para casa ou presenteie com o conjunto que reúne a família sagrada e os amigos do céu.",
        details: "Sob Encomenda • Escolha 3 santos do catálogo"
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
        id: 202,
        name: "Sagrada Família 'Pedra Viva'",
        category: "Escultura Contemporânea",
        price: 129.90,
        tag: "ECO-DESIGN",
        image: "/products/sagrada-familia-real.jpg",
        description: "A solidez da fé esculpida com tecnologia moderna. Uma peça minimalista com textura de granito natural, leve e resistente. O design sem faces foca na linguagem corporal do acolhimento e proteção.",
        warning: "Peça leve: recomendamos o uso de fita dupla face em locais com vento.",
        details: "Sob Encomenda • Eco-Mármore (PLA com fibra de pedra) • Acabamento Fosco"
      },

      {
        id: 4,
        name: "Vela Pura Cera",
        category: "Oração",
        price: 62.00,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
        description: "O cheiro suave do mel e a queima limpa. Uma luz dourada que recorda a presença constante de Deus. Sem parafinas, apenas natureza.",
        details: "Sob Encomenda • 100% Cera de Abelha • Duração 30h"
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
        ordersClosed: true,
        // image removed
        description: "Resgate a verdadeira história por trás do Natal. Cortadores para biscoitos ou massinha que ensinam sobre o bispo generoso de Mira.",
        warning: "Material PLA: Use com massinha ou proteja com filme para alimentos.",
        details: "Sob Encomenda • Design Exclusivo • Biodegradável"
      }
    ]
  },
  {
    id: "laboratorio-criativo",
    title: "Laboratório Criativo",
    subtitle: "O que vem por aí",
    bgColor: "bg-[#FAFAF9]", // Off-White
    products: [
      {
        id: 2,
        name: "Altar 'Vigília'",
        category: "Decoração Litúrgica",
        price: 189.90,
        comingSoon: true,
        description: "Seu lar é uma igreja doméstica. Este altar foi desenhado em madeira clara para integrar-se à decoração sem perder a sacralidade. Linhas limpas, foco no essencial.",
        details: "Em Breve • Madeira Clara Maciça • Cera Natural"
      },
      {
        id: 5,
        name: "Guia Visual da Missa",
        category: "Educação",
        price: 29.90,
        comingSoon: true,
        // image removed
        description: "Transforme o 'quanto falta para acabar?' em 'olha o que vem agora!'. Cartões ilustrados em aquarela que explicam a liturgia de forma visual.",
        details: "Em Breve • Papel Couché Fosco • Anel de metal dourado"
      },
      {
        id: 1,
        name: "Decenário 'Silêncio'",
        category: "Educação na Fé",
        price: 45.90,
        comingSoon: true,
        // image removed
        description: "Não é apenas um brinquedo, é uma introdução tátil à oração. Feito de silicone macio em tons pastéis, ele cai no chão da igreja sem fazer barulho. Perfeito para manter as mãos ocupadas e o coração calmo.",
        details: "Em Desenvolvimento • Silicone BPA Free • Toque macio"
      }
    ]
  }
];

// --- COMPONENTES ---

const Navigation = () => {
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
            <a href="#aprender-brincando" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Crianças</a>
            <a href="#pequenos-guardioes" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Chaveiros</a>
            <a href="#altar-domestico" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Casa</a>
            <a href="#sazonal" className="text-sm uppercase tracking-widest text-[#78716C] hover:text-[#B59E75] transition">Sazonal</a>
          </div>

          {/* Cart Actions Removed - Landing Page Mode */}
          <div className="flex-1 flex justify-end">
            <a href="#newsletter" className="hidden md:flex items-center gap-2 text-[#4A4542] hover:text-[#B59E75] transition group">
              <span className="text-sm font-medium tracking-wide">Fique por dentro</span>
              <Mail size={20} className="group-hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EAE6DF] border-b border-[#D6D3CD] absolute w-full left-0">
          <div className="px-6 py-6 space-y-4">
            <a href="#aprender-brincando" onClick={() => setIsMenuOpen(false)} className="block text-lg font-serif text-[#4A4542]">Missa com Crianças</a>
            <a href="#pequenos-guardioes" onClick={() => setIsMenuOpen(false)} className="block text-lg font-serif text-[#4A4542]">Chaveiros</a>
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
        <a href="#aprender-brincando" className="group flex items-center justify-center gap-3 px-10 py-4 bg-[#8A9A8A] text-[#FAFAF9] hover:bg-[#768576] transition rounded-sm shadow-sm hover:shadow-md">
          <span className="tracking-wide">Explorar Coleção</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-80" />
        </a>
      </div>
    </div>
  </header>
);

const EditorialSection = ({ section }) => (
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
              {/* Imagem Editorial ou Placeholder */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`aspect-[3/4] overflow-hidden rounded-sm relative shadow-sm ${product.image ? 'bg-[#EAE6DF]' : 'bg-[#E5E5E5] flex items-center justify-center'}`}>

                  {product.image ? (
                    <>
                      <div className="absolute inset-0 bg-[#4A4542]/0 group-hover:bg-[#4A4542]/5 transition-colors duration-500 z-10"></div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[10%] group-hover:grayscale-0"
                      />

                      {/* Tag Personalizada (ex: ECO-DESIGN) */}
                      {product.tag && (
                        <div className="absolute top-6 left-6 z-20 bg-[#FAFAF9] px-4 py-2 shadow-sm border border-[#D6D3CD]/50">
                          <span className="text-[#8A9A8A] uppercase tracking-widest text-xs font-serif font-medium">{product.tag}</span>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Card Simples para "Em Breve" ou "Encerrado" */
                    <div className="bg-[#FAFAF9] p-8 w-64 text-center shadow-lg border border-[#D6D3CD] relative z-20">
                      <div className="h-[1px] w-8 bg-[#B59E75] mx-auto mb-4"></div>
                      <span className="block text-[#B59E75] text-xs uppercase tracking-widest mb-2 font-medium">
                        {product.ordersClosed ? "Encerrado" : "Em Breve"}
                      </span>
                      <h4 className="font-serif text-[#4A4542] text-xl leading-snug">{product.name}</h4>
                    </div>
                  )}

                  {/* Overlay Encerrado (Apenas se tiver imagem) */}
                  {product.ordersClosed && product.image && (
                    <div className="absolute inset-0 bg-[#4A4542]/60 z-30 flex items-center justify-center backdrop-blur-[1px]">
                      <div className="bg-[#FAFAF9] px-6 py-3 shadow-lg transform rotate-[-3deg] border border-[#B59E75]">
                        <span className="text-[#4A4542] font-serif text-lg tracking-wider uppercase">Encerrado os Pedidos</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Legenda Flutuante (Apenas se tiver imagem) */}
                {product.image && (
                  <div className={`absolute -bottom-6 ${isReversed ? '-left-6' : '-right-6'} bg-[#FAFAF9] p-6 shadow-xl max-w-xs hidden md:block z-20 border border-[#EAE6DF]`}>
                    <p className="font-serif italic text-[#78716C] text-sm leading-relaxed">"{product.description.slice(0, 60)}..."</p>
                  </div>
                )}
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
                    {!product.comingSoon && (
                      <span className="text-3xl font-serif text-[#4A4542]">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    )}

                    {product.ordersClosed ? (
                      <button
                        disabled
                        className="w-full sm:w-auto bg-[#D6D3CD] text-[#FAFAF9] px-8 py-4 rounded-sm cursor-not-allowed flex items-center justify-center gap-3 opacity-80"
                      >
                        <span className="tracking-wide font-medium">Indisponível</span>
                      </button>
                    ) : product.comingSoon ? (
                      <a
                        href="#newsletter"
                        className="w-full sm:w-auto bg-[#4A4542] text-[#FAFAF9] hover:bg-[#383432] px-8 py-4 rounded-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3 group"
                      >
                        <span className="tracking-wide font-medium">Estou Interessado</span>
                        <Mail size={18} className="group-hover:translate-x-1 transition-transform opacity-80" />
                      </a>
                    ) : (
                      <a
                        href={product.mlLink || "https://lista.mercadolivre.com.br/_CustId_260840432"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-[#FFE600] text-[#2D3277] hover:bg-[#F3D900] px-8 py-4 rounded-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3 group"
                      >
                        <span className="tracking-wide font-bold">Comprar no Mercado Livre</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
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

const Newsletter = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.sheetmonkey.io/form/qNQsBWZcCapi83JP1g4XyY", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        if (onSuccess) onSuccess();
      } else {
        alert("Erro ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#FAFAF9] border-t border-[#EAE6DF]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif text-[#4A4542] mb-4">Guia Gratuito de Oração</h3>
        <p className="text-[#78716C] mb-8 font-light">
          Receba nosso PDF "7 Formas de Criar um Canto de Oração" e inspire-se.
        </p>

        <form className="flex flex-col gap-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            required
            placeholder="Seu nome"
            className="w-full bg-white border border-[#D6D3CD] px-4 py-3 text-[#4A4542] focus:outline-none focus:border-[#8A9A8A] rounded-sm placeholder-[#9CA3AF]"
          />

          <input
            type="email"
            name="Email"
            required
            placeholder="Seu e-mail principal"
            className="w-full bg-white border border-[#D6D3CD] px-4 py-3 text-[#4A4542] focus:outline-none focus:border-[#8A9A8A] rounded-sm placeholder-[#9CA3AF]"
          />

          <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />

          <button
            disabled={isSubmitting}
            className="w-full bg-[#4A4542] text-[#FAFAF9] px-6 py-3 font-medium hover:bg-[#383432] transition rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Receber Guia"}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#EAE6DF] border-t border-[#D6D3CD] py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="font-serif text-xl text-[#4A4542] block mb-2">Santo Hábito.</span>
        <p className="text-[#78716C] text-sm">São Paulo, Brasil • Desde 2024</p>
      </div>

      <div className="flex gap-6 text-sm text-[#78716C]">
        <a
          href="https://instagram.com/osantohabito"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4A4542] transition flex items-center gap-2"
        >
          <Instagram size={18} />
          <span>@osantohabito</span>
        </a>
      </div>

      <div className="text-[#9CA3AF] text-xs text-center md:text-right max-w-xs">
        <p>Avisos legais: Produtos artesanais podem apresentar variações naturais. Cortadores PLA não devem ser expostos ao calor.</p>
      </div>
    </div>
  </footer>
);

// --- APP PRINCIPAL ---

const SuccessView = ({ onBack }) => {
  useEffect(() => {
    // Tenta iniciar o download automático
    const downloadUrl = "/guia-santo-habito.pdf"; // Certifique-se de que este arquivo existe na pasta public

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'Guia-Santo-Habito.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      <div className="w-20 h-20 bg-[#EBF2F5] rounded-full flex items-center justify-center mb-8 shadow-sm">
        <Mail className="w-10 h-10 text-[#8A9A8A]" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif text-[#4A4542] mb-6">Inscrição Confirmada!</h2>
      <div className="h-[1px] w-24 bg-[#B59E75]/40 mx-auto mb-8"></div>
      <p className="text-lg text-[#78716C] max-w-lg mb-8 leading-relaxed">
        Bem-vindo à comunidade Santo Hábito. <br />
        O download do <strong>Guia de Oração</strong> deve iniciar automaticamente.
      </p>
      <p className="text-sm text-[#9CA3AF] mb-12">
        (Caso não inicie, verifique seus pop-ups ou clique <a href="/guia-santo-habito.pdf" download className="underline hover:text-[#B59E75]">aqui</a>)
      </p>
      <button
        onClick={onBack}
        className="bg-[#8A9A8A] text-[#FAFAF9] px-10 py-4 rounded-sm hover:bg-[#768576] transition shadow-sm flex items-center gap-3"
      >
        <ArrowRight className="rotate-180" size={18} />
        <span>Voltar para o site</span>
      </button>
    </div>
  );
};

// --- APP PRINCIPAL ---

const App = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return <SuccessView onBack={() => setShowSuccess(false)} />;
  }

  return (
    <div className="font-sans antialiased text-[#4A4542] bg-[#FAFAF9] selection:bg-[#EAE6DF] selection:text-[#4A4542]">
      <Navigation />

      <main>
        <Hero />

        {editorialSections.map((section) => (
          <EditorialSection key={section.id} section={section} />
        ))}

        <Manifesto />
        <div id="newsletter">
          <Newsletter onSuccess={() => setShowSuccess(true)} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
