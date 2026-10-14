// --- DADOS EDITORIAIS (Storytelling) ---
// Fonte única do catálogo: usada pela home (App.jsx) e pelo JSON-LD de produtos (scripts/prerender.mjs).
export const editorialSections = [
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
        imageAlt: "Kit litúrgico infantil Pequeno Celebrante com cálice, cibório e castiçais em miniatura",
        imageWidth: 1024,
        imageHeight: 764,
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
        imageAlt: "Chaveiro low poly de São José com o Menino Jesus, pintado à mão",
        imageWidth: 644,
        imageHeight: 1024,
        description: "Guardião silencioso. Ideal para chaves de casa. Traz o lírio da pureza e o Menino Jesus. Uma lembrança constante da proteção paterna.",
        details: "Sob Encomenda • Pintado à Mão • Marrom, Branco, Verde"
      },
      {
        id: 102,
        name: "Santo Antônio",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/santo-antonio-real.jpg",
        imageAlt: "Chaveiro low poly de Santo Antônio pintado à mão",
        imageWidth: 718,
        imageHeight: 1024,
        description: "Para quem busca bênçãos diárias. Representado com o Menino Jesus, símbolo de proximidade com Deus. O Santo dos milagres no seu bolso.",
        details: "Sob Encomenda • Pintado à Mão • Marrom Franciscano, Pele, Branco"
      },
      {
        id: 103,
        name: "Santa Teresinha",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/santa-teresinha-real.jpg",
        imageAlt: "Chaveiro low poly de Santa Teresinha com rosas e crucifixo, pintado à mão",
        imageWidth: 718,
        imageHeight: 1024,
        description: "Simplicidade e amor nos pequenos gestos. Carrega as rosas e o crucifixo. Uma chuva de rosas para o seu dia a dia.",
        details: "Sob Encomenda • Pintado à Mão • Marrom Carmelita, Creme, Vermelho"
      },
      {
        id: 104,
        name: "Nossa Senhora",
        category: "Coleção Low Poly",
        price: 35.90,
        image: "/products/low-poly/nossa-senhora-real.jpg",
        imageAlt: "Chaveiro low poly de Nossa Senhora de manto azul e coroa dourada, pintado à mão",
        imageWidth: 636,
        imageHeight: 1024,
        description: "Proteção materna em todos os caminhos. Manto azul e coroa dourada. A Mãe Soberana, sempre por perto.",
        details: "Sob Encomenda • Pintado à Mão • Azul Celeste/Royal, Branco, Dourado"
      },
      {
        id: 105,
        name: "Kit Trindade de Proteção",
        category: "Coleção Completa",
        price: 99.90,
        image: "/products/low-poly/kit-tres-santos.jpg",
        imageAlt: "Kit com três chaveiros low poly de santos católicos pintados à mão",
        imageWidth: 718,
        imageHeight: 1024,
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
        imageAlt: "Escultura minimalista da Sagrada Família com textura de pedra",
        imageWidth: 1024,
        imageHeight: 824,
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
        imageAlt: "Vela de cera de abelha acesa para oração em casa",
        imageWidth: 800,
        imageHeight: 1200,
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
