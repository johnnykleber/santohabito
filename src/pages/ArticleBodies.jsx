// Texto das páginas de guia. Os dados de cada página (title, description etc.) ficam em articles.jsx.
import { coroaSteps } from './articleSteps.js';

const Tip = ({ label = 'Hábito', children }) => (
  <p className="tip">
    <span>{label}</span> {children}
  </p>
);

const Prayer = ({ children }) => <blockquote className="prayer">{children}</blockquote>;

// --- 1. Canto de oração --------------------------------------------------------

export const CantoBody = () => (
  <>
    <p>
      A gente reza em qualquer lugar. Mas quando a oração tem um endereço dentro de casa, fica mais fácil voltar a ela
      todo dia. Um canto de oração não precisa de reforma nem de muito dinheiro. Precisa de um lugar fixo e de uma
      família que passe por ali.
    </p>

    <h2>O básico de todo canto de oração</h2>
    <ul>
      <li><strong>Crucifixo</strong>, que lembra o centro de tudo.</li>
      <li><strong>Uma imagem</strong> de Nossa Senhora ou do santo da família.</li>
      <li><strong>Uma vela</strong> para acender na hora da oração.</li>
      <li><strong>A Bíblia</strong> aberta no Evangelho do dia.</li>
    </ul>
    <p>Com isso em mãos, escolha um dos sete jeitos abaixo para começar. Dá para juntar outros depois.</p>

    <h2>1. A prateleira da sala</h2>
    <p>
      É o canto que todo mundo vê, inclusive as visitas. Escolha uma prateleira ou um aparador na altura dos olhos e
      deixe ali só o que é de oração, sem porta-retrato ou controle remoto misturado. Uma prateleira livre de 40 a 60 cm
      dá conta.
    </p>
    <p>
      Na sala, o canto vira ponto de encontro: a família se reúne na frente dele para o terço, para a oração da noite ou
      para rezar por alguém que pediu. Uma peça como a <a href="/#altar-domestico">Sagrada Família</a> funciona bem
      aqui, porque lembra a casa de Nazaré.
    </p>
    <Tip>Toda noite, antes da TV, um Pai-Nosso em pé na frente do canto. Leva um minuto.</Tip>

    <h2>2. A mesa de cabeceira</h2>
    <p>
      Para quem mora em lugar pequeno ou divide a casa, o quarto é o canto mais íntimo. Uma imagem pequena, de até 15 cm,
      um terço e um caderno para anotar pedidos e graças já bastam.
    </p>
    <p>
      Deixe o celular longe daqui. Se ele dorme do outro lado do quarto, o primeiro olhar do dia vai para a imagem, e não
      para a tela.
    </p>
    <Tip>Ao deitar, pense em três coisas: onde vi Deus hoje, onde falhei e o que quero fazer melhor amanhã.</Tip>

    <h2>3. A porta de entrada com água benta</h2>
    <p>
      Ao lado da porta, coloque uma pequena pia de água benta. A água você pede na sua paróquia. Acima dela, uma imagem ou
      um crucifixo.
    </p>
    <p>
      Quem sai faz o sinal da cruz. Quem chega também. É um gesto de três segundos, e as crianças aprendem rápido e
      passam a lembrar os adultos.
    </p>
    <Tip label="Dica">
      A chave de casa também pode levar um santo. Os <a href="/#pequenos-guardioes">chaveiros de santos</a> servem para
      isso: cada vez que você pega a chave, lembra de quem te protege.
    </Tip>

    <h2>4. A mesa da família</h2>
    <p>
      A mesa de jantar é o lugar onde todo mundo para ao mesmo tempo. Um crucifixo na parede e uma vela no centro mudam o
      clima da refeição.
    </p>
    <p>
      Comece com a oração antes de comer. No domingo, leia o Evangelho do dia antes do almoço e faça uma pergunta sobre
      ele para cada um.
    </p>
    <h3>Oração antes da refeição</h3>
    <Prayer>
      Abençoai, Senhor, nós e estes alimentos que vamos tomar da vossa generosidade. Por Cristo, nosso Senhor. Amém.
    </Prayer>
    <Tip>Quem esquecer a oração recomeça na próxima refeição. Sem bronca.</Tip>

    <h2>5. O canto das crianças</h2>
    <p>
      Criança aprende com as mãos. Um canto baixo, no quarto ou na sala, com imagens resistentes e um livro de histórias
      dos santos, convida a rezar sem precisar mandar.
    </p>
    <p>
      Deixe que elas cuidem do canto: trocar as flores, arrumar a imagem, escolher o santo da semana. Quem cuida do canto
      passa a usar o canto. Para a segurança dos pequenos, prefira vela de LED e imagens que não quebram quando caem.
    </p>

    <h2>6. O oratório de caixa</h2>
    <p>
      Uma caixa de madeira de uns 20 cm, com tampa, vira oratório portátil. Aberta, é um altar. Fechada, cabe na estante,
      na mala ou na gaveta. Cole uma imagem pequena no fundo e guarde um terço e um santinho dentro.
    </p>
    <p>
      Funciona bem para apartamento pequeno, para quem mora com pessoas de outra fé, para estudantes longe de casa e para
      levar nas férias.
    </p>

    <h2>7. O canto que muda com o tempo litúrgico</h2>
    <p>
      A Igreja tem cores, e o seu canto pode acompanhar. Troque a toalha conforme o tempo do ano: verde no Tempo Comum,
      roxo no Advento e na Quaresma, branco no Natal e na Páscoa, vermelho em Pentecostes e nas festas dos mártires. As
      crianças percebem a mudança e perguntam, e a pergunta abre a conversa.
    </p>
    <p>
      Quer entender cada cor? Leia o guia das <a href="/cores-liturgicas">cores litúrgicas</a>. E, a partir de 29 de
      novembro, o canto pode ganhar uma <a href="/coroa-do-advento">coroa do Advento</a>.
    </p>
  </>
);

// --- 2. Cores litúrgicas -------------------------------------------------------

const colors = [
  {
    name: 'Verde',
    hex: '#5E7D5A',
    when: 'Tempo Comum, o período mais longo do ano litúrgico, entre o Natal e a Quaresma e depois de Pentecostes até o Advento.',
    meaning: 'Esperança e vida que cresce. É o tempo de acompanhar, domingo a domingo, a vida pública de Jesus.',
  },
  {
    name: 'Roxo',
    hex: '#6B4E7A',
    when: 'Advento e Quaresma. Também pode ser usado em Finados e nas missas pelos falecidos.',
    meaning: 'Preparação, penitência e conversão. É a cor de quem espera e se arruma por dentro.',
  },
  {
    name: 'Branco',
    hex: '#F4F1EA',
    when: 'Tempo do Natal e da Páscoa, festas do Senhor (menos as da Paixão), festas de Nossa Senhora, dos anjos e dos santos que não foram mártires, além de Todos os Santos.',
    meaning: 'Alegria, pureza e a glória da Ressurreição.',
  },
  {
    name: 'Vermelho',
    hex: '#A63A32',
    when: 'Domingo de Ramos, Sexta-feira Santa, Pentecostes, festas da Cruz, festas dos apóstolos e evangelistas e dos santos mártires.',
    meaning: 'O fogo do Espírito Santo e o sangue dos que deram a vida por Cristo.',
  },
  {
    name: 'Rosa',
    hex: '#D9A5A8',
    when: 'Pode ser usado em dois domingos: o 3º do Advento (Gaudete) e o 4º da Quaresma (Laetare).',
    meaning: 'Alegria no meio da espera. Gaudete e Laetare querem dizer "alegrai-vos": a festa está perto.',
  },
];

export const CoresBody = () => (
  <>
    <p>
      Quem vai à missa com frequência repara que a roupa do padre muda de cor ao longo do ano. Não é enfeite. Cada cor
      mostra em que tempo a Igreja está e ajuda a rezar aquele momento. As regras estão na Instrução Geral do Missal
      Romano (n. 346).
    </p>

    <h2>As cores da missa e o que cada uma significa</h2>
    <div className="color-list">
      {colors.map((c) => (
        <section key={c.name} className="color-item">
          <span className="swatch" style={{ background: c.hex }} aria-hidden="true"></span>
          <div>
            <h3>{c.name}</h3>
            <p><strong>Quando:</strong> {c.when}</p>
            <p><strong>Significado:</strong> {c.meaning}</p>
          </div>
        </section>
      ))}
    </div>
    <p>
      Em dias mais solenes, a paróquia pode usar paramentos mais nobres, mesmo que não sejam da cor do dia. Por isso às
      vezes aparecem paramentos dourados em grandes festas.
    </p>

    <h2>Como as cores acompanham o ano litúrgico</h2>
    <p>
      O ano da Igreja começa no 1º domingo do Advento, em roxo. Vem o Natal, em branco, e depois o Tempo Comum, em verde.
      A Quaresma volta ao roxo, a Semana Santa passa pelo vermelho e a Páscoa explode em branco por cinquenta dias, até o
      vermelho de Pentecostes. Daí o verde do Tempo Comum segue até o próximo Advento.
    </p>

    <h2>Para explicar às crianças</h2>
    <p>Uma frase para cada cor costuma bastar:</p>
    <ul>
      <li><strong>Verde</strong> é a cor das plantas: é tempo de crescer com Jesus.</li>
      <li><strong>Roxo</strong> é tempo de arrumar o coração, como a gente arruma a casa antes de uma visita importante.</li>
      <li><strong>Branco</strong> é festa grande: Jesus nasceu, Jesus ressuscitou.</li>
      <li><strong>Vermelho</strong> lembra o fogo do Espírito Santo e as pessoas que amaram Jesus até o fim.</li>
      <li><strong>Rosa</strong> aparece quando a festa está chegando, no meio da espera.</li>
    </ul>
    <p>
      Uma brincadeira que funciona: antes de entrar na igreja, cada um chuta qual vai ser a cor. Na volta para casa,
      conversem sobre o porquê. Em casa, troquem juntos a toalha do <a href="/canto-de-oracao">canto de oração</a> para
      a cor do tempo.
    </p>
  </>
);

// --- 3. Coroa do Advento -------------------------------------------------------

export const CoroaBody = () => (
  <>
    <p>
      A coroa do Advento é um dos costumes mais bonitos para viver em família as quatro semanas antes do Natal. Ela marca
      o tempo da espera: a cada domingo uma vela a mais, a cada domingo mais luz, até chegar a noite em que celebramos o
      nascimento de Jesus.
    </p>

    <h2>Quando começa o Advento em 2026</h2>
    <p>
      O Advento de 2026 começa no domingo, <strong>29 de novembro de 2026</strong>. Os quatro domingos são:
    </p>
    <ul>
      <li><strong>29 de novembro</strong>: 1º domingo do Advento, primeira vela roxa.</li>
      <li><strong>6 de dezembro</strong>: 2º domingo, segunda vela roxa.</li>
      <li><strong>13 de dezembro</strong>: 3º domingo (Gaudete), a vela rosa.</li>
      <li><strong>20 de dezembro</strong>: 4º domingo, a última vela roxa.</li>
    </ul>

    <h2>O significado da coroa do Advento</h2>
    <h3>O círculo</h3>
    <p>O círculo não tem começo nem fim. Lembra o amor de Deus, que não acaba.</p>
    <h3>Os ramos verdes</h3>
    <p>O verde é a cor da esperança e da vida. Mesmo no inverno do hemisfério norte, onde o costume nasceu, esses ramos continuam verdes.</p>
    <h3>As quatro velas</h3>
    <p>
      As velas são a luz de Cristo que se aproxima. O roxo é a cor do Advento, tempo de preparação. A vela rosa é acesa
      no 3º domingo, chamado Gaudete (&quot;alegrai-vos&quot;), porque o Natal já está perto. Para entender melhor o roxo e
      o rosa, veja o guia das <a href="/cores-liturgicas">cores litúrgicas</a>.
    </p>

    <h2>Como montar a coroa do Advento em casa</h2>
    <ol>
      {coroaSteps.map((s) => (
        <li key={s.name}><strong>{s.name}.</strong> {s.text}</li>
      ))}
    </ol>
    <p>
      Não precisa ser grande nem cara. Uma coroa pequena no centro da mesa de jantar faz a família parar junto, e esse é
      o ponto. Se vocês já têm um <a href="/canto-de-oracao">canto de oração</a>, ela pode morar ali durante o Advento.
    </p>
    <Tip label="Cuidado">
      Ramos naturais secam rápido e pegam fogo fácil. Mantenha as folhas longe das chamas, nunca deixe as velas acesas
      sem ninguém por perto e deixe as crianças acenderem só com ajuda de um adulto.
    </Tip>

    <h2>Bênção da coroa do Advento em família</h2>
    <p>
      No 1º domingo do Advento, reúna a família em volta da coroa. Quem conduz faz o sinal da cruz, alguém lê um trecho
      do Evangelho do dia e, em seguida, todos rezam:
    </p>
    <Prayer>
      Ó Deus, pela vossa Palavra todas as coisas são santificadas. Derramai a vossa bênção sobre esta coroa e concedei
      que nós, que a usamos, preparemos o nosso coração para a vinda de Cristo e recebamos de vós graças abundantes. Por
      Cristo, nosso Senhor. Amém.
    </Prayer>
    <p>
      Depois, acende-se a primeira vela. Nos domingos seguintes, acenda as velas da semana, leia o Evangelho do dia e
      termine com um Pai-Nosso e uma Ave-Maria. Se a família quiser, dá para repetir a oração todas as noites, no jantar.
    </p>
    <p>
      Se quiser, leve a coroa para a missa: muitas paróquias abençoam as coroas das famílias no 1º domingo do Advento.
    </p>
  </>
);

