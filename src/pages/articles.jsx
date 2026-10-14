// Conteúdo das páginas de guia (SEO). Cada item vira um HTML estático em
// dist/<slug>.html no build (scripts/prerender.mjs), com title, description,
// canonical e JSON-LD próprios.

import { CantoBody, CoresBody, CoroaBody } from './ArticleBodies.jsx';
import { cantoSteps, coroaSteps } from './articleSteps.js';

const DATE = '2026-10-14';
const DATE_LABEL = '14 de outubro de 2026';

// --- Lista exportada -------------------------------------------------------------

export const articles = [
  {
    slug: 'canto-de-oracao',
    navLabel: 'Canto de oração em casa',
    eyebrow: 'Oração em família',
    title: 'Como montar um canto de oração em casa: 7 ideias | Santo Hábito',
    description:
      'Sete ideias simples para montar um canto de oração em casa: prateleira da sala, cabeceira, porta com água benta, mesa da família, canto das crianças e mais.',
    h1: 'Como montar um canto de oração em casa: 7 ideias',
    lead: 'Do apartamento pequeno à casa cheia de crianças, sete jeitos de dar à oração um lugar fixo dentro de casa.',
    datePublished: DATE,
    dateModified: DATE,
    dateLabel: DATE_LABEL,
    howTo: {
      name: 'Como montar um canto de oração em casa',
      supply: ['Crucifixo', 'Imagem de Nossa Senhora ou de um santo', 'Vela', 'Bíblia'],
      steps: cantoSteps,
    },
    body: <CantoBody />,
  },
  {
    slug: 'cores-liturgicas',
    navLabel: 'Cores litúrgicas',
    eyebrow: 'Ano litúrgico',
    title: 'Cores litúrgicas: o que significa cada cor da missa | Santo Hábito',
    description:
      'Verde, roxo, branco, vermelho e rosa: quando cada cor litúrgica é usada na missa, o que significa e como explicar às crianças.',
    h1: 'Cores litúrgicas: o que significa cada cor da missa',
    lead: 'Verde, roxo, branco, vermelho e rosa. Quando cada cor aparece, o que ela quer dizer e um jeito simples de explicar às crianças.',
    datePublished: DATE,
    dateModified: DATE,
    dateLabel: DATE_LABEL,
    body: <CoresBody />,
  },
  {
    slug: 'coroa-do-advento',
    navLabel: 'Coroa do Advento',
    eyebrow: 'Advento 2026',
    title: 'Coroa do Advento: significado e como montar em casa | Santo Hábito',
    description:
      'O significado da coroa do Advento, a ordem das velas (três roxas e uma rosa), como montar em casa e uma bênção para a família. Advento 2026 começa em 29/11.',
    h1: 'Coroa do Advento: significado e como montar em casa',
    lead: 'O que significa cada parte da coroa, a ordem das velas nos quatro domingos e uma bênção simples para rezar em família.',
    datePublished: DATE,
    dateModified: DATE,
    dateLabel: DATE_LABEL,
    howTo: {
      name: 'Como montar a coroa do Advento em casa',
      supply: ['Ramos verdes naturais ou artificiais', 'Três velas roxas', 'Uma vela rosa', 'Prato ou suporte resistente ao calor'],
      steps: coroaSteps,
    },
    body: <CoroaBody />,
  },
];
