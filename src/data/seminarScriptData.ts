export interface ScriptBlock {
  type: 'speech' | 'projection' | 'interaction';
  content: string;
}

export interface MemberScript {
  id: number;
  memberLabel: string;
  roleTitle: string;
  subtopic: string;
  timeEstimate: string;
  wordCount: string;
  sectionsCovered: string[];
  blocks: ScriptBlock[];
}

export const SEMINAR_SCRIPTS: MemberScript[] = [
  {
    id: 1,
    memberLabel: 'Membro 01',
    roleTitle: 'Abertura, Visão Geral e o Ponto de Não Retorno',
    subtopic: 'Da Importância da Bacia aos Modelos Ecológicos de Equilíbrio e Risco',
    timeEstimate: '~9 minutos',
    wordCount: '~1.250 palavras',
    sectionsCovered: ['Hero Principal', 'Abertura do Seminário', 'Conceito de Ponto de Não Retorno', 'Bacias de Atração'],
    blocks: [
      {
        type: 'projection',
        content: 'O website ocupa a tela inteira em projeção. O cabeçalho fixo exibe a marca editorial. O Hero destaca a fotografia da floresta sob névoa matinal e o título: "AMAZÔNIA E PONTO DE NÃO RETORNO".'
      },
      {
        type: 'speech',
        content: 'Boa tarde aos professores da banca avaliadora, aos colegas estudantes e a todos que nos acompanham neste seminário. O trabalho que apresentamos hoje tem como tema "Amazônia e Ponto de Não Retorno: Os limites de um ecossistema, os mecanismos do colapso climático e as pessoas que protegem a floresta". Para organizar e explicar esse tema tão sério e urgente, nosso grupo desenvolveu este site interativo. A ideia não foi criar uma página visual comum ou passageira, mas sim montar um espaço informativo completo, direto e confiável, baseado nos estudos científicos mais recentes das áreas de clima, ecologia, geografia e direitos constitucionais.'
      },
      {
        type: 'projection',
        content: 'Rolar suavemente pela área de texto do Hero, evidenciando o subtítulo e os dois cards de acesso para o Eixo 1 e o Eixo 2.'
      },
      {
        type: 'speech',
        content: 'Para começar nossa reflexão, precisamos desfazer um engano muito comum que aparece nos noticiários e no senso comum: a ideia de que a Amazônia é apenas um grande estoque verde parado de madeira, ou um imenso armazém de carbono que funcionaria como o "pulmão do mundo". Essa comparação com um pulmão não é correta cientificamente. Uma floresta madura e antiga consome, durante a noite pela respiração das plantas, quase todo o oxigênio que produz de dia pela fotossíntese. Mas o ponto principal é que essa ideia de "pulmão" esconde a verdadeira função da floresta. A Amazônia não é um depósito inerte de árvores. Ela é um motor vivo de água e calor em escala global, uma verdadeira bomba natural que equilibra a temperatura e comanda a circulação das chuvas e do ar em toda a América do Sul.'
      },
      {
        type: 'speech',
        content: 'Além disso, não existe como falar da natureza da Amazônia sem falar das pessoas que vivem nela. O equilíbrio biológico e físico da floresta está diretamente ligado à história, à sobrevivência e aos direitos das comunidades indígenas e povos tradicionais. É exatamente por isso que o nosso seminário foi dividido em dois grandes eixos inseparáveis: o Eixo 1 — Científico e Climático, onde vamos explicar como funciona a mecânica das chuvas, os rios voadores, o perigo de atingirmos um limite irreversível de desmatamento e a mudança no equilíbrio de carbono; e o Eixo 2 — Justiça Climática e Povos Tradicionais, que mostra a realidade da proteção no chão da floresta, provando como a demarcação das terras e os conhecimentos antigos desses povos são o escudo mais seguro e eficiente contra o desastre climático.'
      },
      {
        type: 'projection',
        content: 'Descer com rolagem suave até a seção #conceito: "O que é, afinal, um Ponto de Não Retorno ecológico?".'
      },
      {
        type: 'speech',
        content: 'Vamos entrar agora na base teórica da nossa pesquisa: o que significa, na prática da ciência atual, o termo Ponto de Não Retorno, muitas vezes chamado em inglês de Tipping Point? Na ecologia e no estudo de sistemas complexos, a destruição da natureza nem sempre acontece aos poucos, de forma lenta, reta e previsível. Quando um ecossistema sofre agressões contínuas por muito tempo, ele pode passar por uma virada brusca, que os cientistas chamam de transição crítica. O ponto de não retorno não é apenas derrubar mais uma árvore qualquer. Ele é o limite exato a partir do qual a própria floresta perde a capacidade natural de se recuperar. Nesse momento de ruptura, o ambiente sofre um salto rápido de um estado saudável para um cenário completamente degradado, sem conseguir voltar atrás sozinho.'
      },
      {
        type: 'interaction',
        content: 'No painel conceitual à direita da seção, clicar na sub-aba "Bacia de Atração". O gráfico esquemático ilustra os dois regimes alternativos.'
      },
      {
        type: 'speech',
        content: 'Para entender isso de forma bem simples e visual, a ecologia usa o modelo das Bacias de Atração. Peço que olhem o gráfico projetado na tela: imaginem a Amazônia como uma bola dentro de uma tigela funda e segura, que chamamos de Estado A: Floresta Densa e Úmida. Esse estado é muito forte e resistente. Centenas de bilhões de árvores transpiram sem parar, lançando vapor no céu; esse vapor forma nuvens pesadas, as nuvens viram chuvas abundantes e as chuvas recarregam a terra e alimentam as árvores. A floresta produz a sua própria água e mantém a tigela funda e estável. Porém, conforme o ser humano desmata grandes áreas, quebra a cobertura das copas e aquece a temperatura do planeta, as bordas dessa tigela vão ficando cada vez mais rasas. A capacidade de resistência do sistema vai enfraquecendo. Se a bola passar da borda da tigela, ela cai sem volta em outra tigela muito pior: o Estado B: Savana Degradada.'
      },
      {
        type: 'speech',
        content: 'E aqui vale um aviso muito importante para não haver confusão: o que nasce depois do colapso da Amazônia não é o nosso Cerrado natural, que é rico em vida, tem plantas adaptadas ao fogo há milhões de anos e raízes profundas. O que surge no lugar da floresta destruída é um pasto sujo empobrecido, cheio de capim invasor que pega fogo com facilidade, arbustos fracos, calor sufocante e seca constante. Um ambiente que não consegue guardar carbono nem mandar chuva para o restante do país.'
      },
      {
        type: 'interaction',
        content: 'Clicar na sub-aba "Incertezas & Modelos" e apontar para o box de alerta em destaque âmbar.'
      },
      {
        type: 'speech',
        content: 'Neste ponto, nosso grupo destaca um cuidado muito sério que colocamos no site: o ponto de não retorno não é uma profecia com dia e hora marcados em um relógio fixo. Não se trata de uma previsão mágica ou fatalista. A ciência trabalha com cálculos de probabilidade e margens de risco no mundo real. Além disso, os especialistas explicam que a Amazônia não vai desligar como uma lâmpada, do dia para a noite, nos seus mais de 6 milhões de quilômetros quadrados. O colapso começa em manchas de seca: as regiões sul e leste do bioma, onde o desmatamento é muito pesado, já mostram sinais claros de enfraquecimento, enquanto o lado oeste ainda continua saudável e protegido.'
      },
      {
        type: 'speech',
        content: 'Outro conceito central que precisamos guardar é o de Histerese Ecológica. Esse nome técnico quer dizer algo muito direto: depois que a floresta vira uma savana seca, recuperá-la exigiria um clima muito mais úmido e frio do que o necessário para ela se manter viva hoje. Na prática: mesmo que o desmatamento parasse totalmente depois de cruzar esse limite, o clima regional já estaria tão quente e seco que as mudas de grandes árvores simplesmente não conseguiriam crescer de novo. Entendida essa base, precisamos entender: como a floresta funciona no ar para manter o clima do Brasil e o que acontece quando quebramos essa máquina? Para explicar o caminho dos rios voadores e os números do desmatamento, passo a palavra ao Membro 2.'
      }
    ]
  },
  {
    id: 2,
    memberLabel: 'Membro 02',
    roleTitle: 'Eixo 1 (Parte A): A Mecânica das Chuvas e o Limiar de Risco',
    subtopic: 'A Bomba de Umidade, os Rios Voadores e o Alerta dos 20% a 25%',
    timeEstimate: '~9 minutos',
    wordCount: '~1.280 palavras',
    sectionsCovered: ['Abertura do Eixo 1', 'Diagrama dos Rios Voadores (4 Fases)', 'Limiar de 20% a 25%', 'Degradação Oculta (Science 2023)'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar até a seção #eixo-1: "A mecânica do colapso", destacando os três blocos métricos do topo (~20 bilhões t/dia, 5 a 6 vezes de reciclagem e o intervalo de 20%–25%). Em seguida, centralizar a tela no #rios-voadores.'
      },
      {
        type: 'speech',
        content: 'Obrigado ao Membro 1 pela introdução. Agora nós vamos abrir o Eixo 1 — Científico e Climático, analisando em detalhes o funcionamento prático que faz da Amazônia a maior reguladora de água de todo o continente sul-americano. Se nós pegarmos o mapa do mundo e olharmos a faixa entre 20 e 30 graus ao sul da linha do Equador, encontramos algo muito curioso: nessa mesma faixa de latitude estão vários dos desertos mais secos do planeta, como o deserto do Kalahari e da Namíbia na África, o deserto do Atacama no Chile e o interior seco da Austrália. Pela circulação natural dos ventos do planeta, essas áreas sofrem com ar seco descendo da atmosfera, o que cria regiões áridas. No entanto, o centro-sul da América do Sul — que pega o Centro-Oeste, Sudeste e Sul do Brasil, além de Paraguai, Uruguai e norte da Argentina — não é um deserto. Pelo contrário: é uma área verde, cheia de rios enormes e dona da maior agricultura do continente. Por que essa região não é seca? A resposta da ciência é direta: por causa da floresta amazônica em pé e do fenômeno dos Rios Voadores.'
      },
      {
        type: 'interaction',
        content: 'No painel do "Esquema Conceitual do Fluxo Atmosférico", clicar no botão "Fase 01: A Bomba Biótica e Evapotranspiração". O diagrama vetorial SVG ilumina a copa das árvores e as correntes ascendentes de vapor.'
      },
      {
        type: 'speech',
        content: 'Vejam conosco o diagrama em quatro passos simples: Na Fase 1, está o motor principal de tudo: a transpiração da floresta, também chamada de Bomba Biótica. Essa teoria, estudada por físicos russos e muito difundida no Brasil pelo cientista Antonio Donato Nobre, do INPE e do INPA, mostra que a floresta não é apenas uma consumidora de água, mas sim uma enorme bomba ativa de umidade. As grandes árvores da mata nativa têm raízes muito fundas, que chegam a 10, 15 ou até mais de 20 metros debaixo da terra, buscando água em lençóis subterrâneos que o capim de pasto não alcança. Uma única árvore de grande porte, com copa bem larga, consegue puxar da terra e lançar no ar em forma de vapor mais de 1.000 litros de água todos os dias. Quando a gente soma isso aos bilhões de árvores da floresta, o volume é impressionante: a Amazônia bombeia diariamente cerca de 20 bilhões de toneladas de vapor de água para o ar. Para vocês terem uma comparação clara: o Rio Amazonas inteiro, que é o maior rio do mundo em volume de água, despeja no Oceano Atlântico cerca de 17 bilhões de toneladas por dia. Ou seja: o rio de vapor invisível que corre no céu por cima das nossas cabeças carrega mais água do que o maior rio do mundo na terra.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 02: Advecção e Ventos Alísios". O diagrama projeta as flechas de fluxo cruzando o Oceano Atlântico em direção ao continente.'
      },
      {
        type: 'speech',
        content: 'Na Fase 2, entram os ventos do oceano. Conforme a floresta condensa esse vapor e faz chover, a pressão do ar diminui e funciona como um aspirador natural, puxando para dentro do continente a umidade dos Ventos Alísios que vêm do Oceano Atlântico. Quando essa umidade marítima entra na Amazônia, ela recebe o reforço do vapor das árvores, forma nuvens, chove na mata, as árvores bebem a água e transpiram tudo de novo. Esse processo de reciclagem da chuva se repete de 5 a 6 vezes seguidas enquanto a massa de ar viaja para o interior, garantindo que o ar continue úmido mesmo a milhares de quilômetros de distância do mar.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 03: Barreira Orográfica dos Andes". O diagrama destaca o paredão montanhoso e a curvatura acentuada dos jatos atmosféricos rumo ao sul.'
      },
      {
        type: 'speech',
        content: 'Na Fase 3, esse rio aéreo gigante encontra um paredão natural no caminho: a Cordilheira dos Andes, uma cadeia de montanhas de mais de 4.000 metros de altura. Como a umidade não consegue passar para o Oceano Pacífico, ela é desviada para o sul e sudeste, formando corredores rápidos de vento carregados de vapor, conhecidos na meteorologia como Jatos de Baixos Níveis.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 04: Distribuição Pluviométrica Continental". O diagrama ilumina a condensação sobre o Centro-Oeste, Sudeste e a Bacia do Prata.'
      },
      {
        type: 'speech',
        content: 'Finalmente, na Fase 4, esse vapor encontra as frentes frias que sobem do sul e vira chuva pesada sobre as nossas cidades e plantações. São essas chuvas trazidas pela Amazônia que enchem as represas que geram a nossa energia elétrica — como Furnas e o Sistema Cantareira em São Paulo —, sustentam as lavouras do Centro-Oeste e abastecem a bacia do Rio da Prata. Pesquisas do climatologista José Marengo mostram que até 70% das chuvas de verão no centro-sul da América do Sul dependem diretamente desse vapor que vem da Amazônia.'
      },
      {
        type: 'projection',
        content: 'Rolar suavemente para a seção #limiar: "O Limiar Científico de 20% a 25%". Enquadrar o grande bloco tipográfico do número e os cards comparativos.'
      },
      {
        type: 'speech',
        content: 'Depois de entender essa imensa engrenagem de água, vem a pergunta que todo cientista faz: o que acontece se continuarmos tirando árvores desse motor? Isso nos leva ao famoso estudo do Limiar de 20% a 25% de Desmatamento, proposto pelos cientistas Carlos Nobre, do Brasil, e Thomas Lovejoy, dos Estados Unidos, em artigos publicados nas revistas científicas mais importantes do mundo. Ao calcularem simulações em computador juntando desmatamento e clima, eles provaram que a floresta não aguenta cortes sem parar. Pelas contas deles, se o desmatamento total da Amazônia atingir entre 20% e 25% da área da bacia, a quantidade de vapor diminui tanto que o ciclo de reciclagem da chuva se quebra. Sem chuva suficiente, a floresta começa a secar por conta própria e se transforma em savana no sul, no leste e no centro do bioma.'
      },
      {
        type: 'speech',
        content: 'Quero chamar a atenção da banca para os números reais que colocamos na tela: Primeiro, segundo os dados oficiais do sistema PRODES, do INPE, o desmatamento acumulado na Amazônia brasileira já está em torno de 17% a 18%. Ou seja, nós estamos muito perto do início da faixa de perigo de 20%. Segundo, essa média esconde a situação dramática das bordas: na região chamada de "Arco do Desmatamento" — que vai do leste do Pará, corta o norte do Mato Grosso e chega até Rondônia —, a derrubada de floresta já passou de 30% a 35%. Nessas regiões, as chuvas já estão diminuindo de verdade. Terceiro, para piorar esse quadro, um grande estudo publicado na revista Science em 2023 pelo pesquisador David Lapola mostrou que além das árvores derrubadas até o chão, até 38% da floresta que ainda sobra em pé está sofrendo com degradação oculta: fogo rasteiro, roubo seletivo de madeira e secas extremas. Essa floresta machucada perde água e carbono quase no mesmo ritmo de uma área desmatada. Mas como esse ressecamento se transforma em incêndio e afeta o ar do planeta? Esse é o ponto que o Membro 3 vai apresentar.'
      }
    ]
  },
  {
    id: 3,
    memberLabel: 'Membro 03',
    roleTitle: 'Eixo 1 (Parte B): O Ciclo de Degradação e o Balanço de Carbono',
    subtopic: 'O Efeito Bola de Neve da Seca e a Descoberta do INPE sobre Emissões',
    timeEstimate: '~9 minutos',
    wordCount: '~1.270 palavras',
    sectionsCovered: ['Ciclo de Retroalimentação (7 Etapas)', 'Fogo de Sub-bosque e Ignição Antrópica', 'Amazônia como Emissora de Carbono', 'Perfis Verticais de CO2 (INPE)'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar para a seção #retroalimentacao: "O Ciclo de Retroalimentação Climática". A tela exibe o fluxo vertical de 7 etapas conectado ao painel inspetor à direita.'
      },
      {
        type: 'speech',
        content: 'Agradeço ao Membro 2 pela explicação clara sobre os rios voadores e a margem de risco. Eu dou continuidade ao Eixo 1 para mostrar como o estrago da floresta deixa de ser um problema isolado e passa a funcionar como um efeito bola de neve, o que a ciência chama de Ciclo de Retroalimentação Positiva. Vale lembrar: na linguagem da ciência, "retroalimentação positiva" não significa algo bom. Pelo contrário: significa um círculo vicioso em que um primeiro dano cria consequências que alimentam e aceleram a própria destruição.'
      },
      {
        type: 'interaction',
        content: 'Clicar na "Etapa 1: Supressão da Vegetação" e, logo após, na "Etapa 2: Queda Drástica na Evapotranspiração". O painel à direita detalha o mecanismo biofísico.'
      },
      {
        type: 'speech',
        content: 'Vejam no nosso painel as 7 etapas dessa corrente: Na Etapa 1 — Derrubada da Vegetação, tudo começa com a motosserra, o trator com correntão e o fogo para abrir espaço. Tirar a mata alta deixa o solo frágil e exposto direto ao sol forte do meio-dia, torrando a camada de folhas úmidas que protegia a terra. Na Etapa 2 — Queda Forte na Transpiração, o capim que colocam no lugar tem raízes rasas que secam rápido no calor. A energia do sol, que antes a floresta usava para evaporar água e manter o ambiente fresco, agora vira puro calor no chão. O solo esquenta entre 4 e 8 graus a mais, ressecando todo o ar em volta.'
      },
      {
        type: 'interaction',
        content: 'Selecionar a "Etapa 3: Alteração do Regime de Chuvas" e a "Etapa 4: Secas Severas e Estresse Hídrico".'
      },
      {
        type: 'speech',
        content: 'Na Etapa 3 — Mudança nas Chuvas, como menos vapor sobe para o céu, fica muito mais difícil formar nuvens carregadas. Medições do INPE ao longo das últimas quatro décadas mostram que a estação seca no sul da Amazônia já aumentou entre 4 e 5 semanas. O que antes era uma seca de dois a três meses agora dura quase quatro meses inteiros. Na Etapa 4 — Seca Severa e Sofrimento das Árvores, com o ar mais seco e a falta prolongada de chuva, as árvores antigas não aguentam a pressão. Ocorre o que a biologia chama de embolia: a sucção de água na madeira fica tão forte pelo calor que se formam bolhas de ar nos canais internos da árvore, cortando a água e matando milhares de árvores grandes de pé. O chão da floresta se enche de galhos e folhas mortas e secas.'
      },
      {
        type: 'interaction',
        content: 'Clicar na "Etapa 5: Vulnerabilidade Extrema ao Fogo". O painel exibe o alerta em vermelho sobre a distinção de queimas antrópicas.'
      },
      {
        type: 'speech',
        content: 'Na Etapa 5 — Floresta Pronta para Queimar, está um ponto crucial da nossa apresentação. É comum ouvirmos comentários errados dizendo que o fogo na Amazônia é "natural" ou que acontece sozinho. Nosso trabalho mostra a diferença científica essencial: em lugares adaptados ao fogo, como o Cerrado, as árvores têm casca grossa de cortiça para aguentar chamas provocadas por raios. A floresta amazônica nunca viveu com fogo. Em seu estado natural e úmido, a Amazônia simplesmente não pega fogo: se cair uma faísca, ela apaga no chão molhado. Mas quando a mata é ressecada e o chão fica coberto de folhas secas como palha, qualquer fogo acendido por pessoas — para limpar pasto ou queimar restos de desmate — invade a mata vizinha. É um fogo baixo e lento, de meio metro de altura, mas que queima a casca fina das árvores e mata até metade da vegetação adulta.'
      },
      {
        type: 'interaction',
        content: 'Selecionar a "Etapa 6: Degradação e Savanização" e a "Etapa 7: Retroalimentação Positiva do Colapso".'
      },
      {
        type: 'speech',
        content: 'Na Etapa 6 — Degradação e Perda da Floresta, as árvores mortas abrem grandes buracos na copa. O vento e o sol entram com força total, e espécies invasoras de capim seco tomam conta do espaço. A floresta original é desmontada. Por fim, na Etapa 7 — O Ciclo se Fecha, essa área degradada joga muito menos água para o ar, provocando ainda mais calor e menos chuva para a floresta vizinha que ainda estava sadia. O estrago alimenta a si mesmo, empurrando toda a região para o colapso contínuo.'
      },
      {
        type: 'projection',
        content: 'Descer a tela até a seção #carbono: "A Amazônia como Emissora de Carbono". Destacar a metodologia dos 590 perfis verticais do INPE e os seletores de região.'
      },
      {
        type: 'speech',
        content: 'O impacto desse ciclo no ar do planeta foi medido em um estudo histórico liderado pela pesquisadora Luciana Gatti, do INPE, publicado na revista Nature em 2021. Durante décadas, os cientistas do mundo inteiro acreditavam que a Amazônia funcionava como um grande filtro natural de carbono — puxando da atmosfera centenas de milhões de toneladas de gás carbônico todos os anos pelo crescimento das plantas, ajudando a compensar a queima de combustíveis das fábricas e carros. Para checar se isso ainda era verdade, o INPE fez um trabalho impressionante: durante 9 anos seguidos, pequenos aviões voaram coletando amostras de ar desde a copa das árvores até mais de 4 quilômetros de altitude, fazendo 590 perfis de gases em quatro cantos da Amazônia.'
      },
      {
        type: 'interaction',
        content: 'Na aba de comparação regional, clicar em "Amazônia Oriental (Sudeste / Pará e Mato Grosso)". Os quatro cards exibem as taxas com destaque em alerta.'
      },
      {
        type: 'speech',
        content: 'Os resultados assustaram os cientistas do mundo todo: a Amazônia Oriental — o lado leste e sudeste, medido pelas estações de Alta Floresta e Santarém — já virou uma fonte emissora de carbono para o planeta. Em vez de limpar o ar, essa região está jogando carbono na atmosfera. E os motivos ficaram claros: onde o desmatamento passou de 25%, as chuvas na época de estiagem caíram até um terço e a temperatura subiu 2,5 graus. O gás carbônico gerado pelas queimadas e pelas árvores mortas apodrecendo pelo calor é muito maior do que a fotossíntese das poucas árvores que restam.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Amazônia Ocidental (Noroeste / Tefé e Tabatinga)". Os quatro cards passam a exibir tons verdes de preservação.'
      },
      {
        type: 'speech',
        content: 'Mas olhem a diferença quando olhamos para a Amazônia Ocidental — o lado oeste e noroeste, medido em Tefé e Tabatinga: onde o desmatamento ainda está bem baixo, abaixo de 10% a 14%, a floresta continua equilibrada e sadia, absorvendo carbono, mantendo as chuvas normais e quase sem queimadas. Isso nos ensina algo fundamental: é errado e sem esperança dizer que "a Amazônia inteira já virou emissora". O oeste da floresta ainda funciona e segura o clima. Mas isso nos leva à pergunta decisiva: por que o oeste resiste? Quem está fisicamente no chão da floresta barrando a entrada das motosserras? É sobre isso que o Membro 4 vai falar ao iniciar o nosso Eixo 2.'
      }
    ]
  },
  {
    id: 4,
    memberLabel: 'Membro 04',
    roleTitle: 'Eixo 2 (Parte A): O Escudo Vivo e a Proteção das Terras',
    subtopic: 'A História Milenar dos Povos, os Dados do MapBiomas e a Força das Terras Indígenas',
    timeEstimate: '~9 minutos',
    wordCount: '~1.260 palavras',
    sectionsCovered: ['Abertura do Eixo 2', 'História Biocultural (Terras Pretas de Índio)', 'Série Histórica MapBiomas (38 Anos)', 'Casos Yanomami, Kayapó e Mamirauá', 'SAFs e Diversidade Étnica'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar até a seção #eixo-2: "A barreira viva contra o ponto de não retorno", evidenciando o box lateral de "Sociobiodiversidade em Números". Em seguida, descer para #terras-indigenas.'
      },
      {
        type: 'speech',
        content: 'Obrigado ao Membro 3 pela explicação sobre as emissões de carbono e o ciclo de degradação. Começamos agora o Eixo 2 — Justiça Climática e Povos Tradicionais, com o título: "A Barreira Viva contra o Ponto de Não Retorno". Até aqui, nós falamos de água, vento, temperatura, satélites e carbono. Mas qualquer análise científica que fale da Amazônia como se ela fosse um laboratório deserto de pessoas está errada e incompleta. A floresta viva não é um milagre da natureza intocada. É uma ilusão antiga achar que a Amazônia era um mato vazio que só conheceu a civilização quando abriram estradas no século passado.'
      },
      {
        type: 'speech',
        content: 'Pesquisas arqueológicas e históricas mostram com clareza: seres humanos habitam e cuidam da Amazônia há pelo menos 12 mil anos contínuos. Estudos de arqueólogos renomados mostram que a floresta que conhecemos hoje é resultado de séculos de convivência e manejo humano. As famosas "Terras Pretas de Índio" — que são manchas de terra muito escura e super fértil espalhadas por toda a região — foram feitas pelos povos antigos através do depósito cuidadoso de carvão vegetal, restos de cerâmica e matéria orgânica ao longo de centenas de anos. A grande quantidade de árvores úteis e cheias de alimento — como a castanheira, o cacaueiro, a seringueira e os açaizais — não nasceu por acaso: foi selecionada e plantada pelas populações indígenas ao longo de gerações. Em vez de destruir, os povos indígenas enriqueceram a diversidade da floresta.'
      },
      {
        type: 'projection',
        content: 'Na seção de Terras Indígenas, enquadrar a tabela comparativa da "Série Histórica MapBiomas (1985–2022)".'
      },
      {
        type: 'speech',
        content: 'Quando trazemos essa história para os dias de hoje e olhamos os dados de satélite, a relação entre quem tem a terra e a preservação fica incontestável. Convido vocês a olharem a tabela do MapBiomas, que acompanhou o uso do solo brasileiro de 1985 a 2022, cobrindo quase 40 anos: Nas Terras Indígenas demarcadas e homologadas, a perda de vegetação em quatro décadas foi de apenas 1,6% a 2%. Esse é o número de desmatamento mais baixo entre todas as categorias de terra do planeta. As terras indígenas funcionam como verdadeiros escudos verdes contra a motosserra. Nas Reservas Extrativistas e unidades de conservação, onde ribeirinhos e seringueiros vivem tirando o sustento sem destruir, a perda ficou entre 4% e 6,5%. Por outro lado, nas Fazendas Privadas cadastradas, a perda de mata disparou para cerca de 30% a 35%, puxada pelo pasto e lavouras. E nas Terras Públicas sem destinação — as florestas públicas que o governo ainda não protegeu —, a destruição passou de 40%, sendo o alvo preferido de grileiros e invasores ilegais.'
      },
      {
        type: 'speech',
        content: 'Esses números provam uma coisa prática: as Terras Indígenas, que ocupam quase um quarto da Amazônia brasileira, guardam sozinhas mais de 27% de todo o carbono da vegetação do bioma. São as pessoas que vivem nessas terras que protegem as árvores que bombeiam os 20 bilhões de toneladas de água por dia que o Membro 2 mostrou. Se não fossem os povos indígenas e suas terras demarcadas, a Amazônia já teria ultrapassado o ponto de não retorno há muito tempo.'
      },
      {
        type: 'interaction',
        content: 'Na área de "Estudos de Caso Documentados em Território", clicar sucessivamente nos botões "TI Yanomami", "TI Kayapó" e "RDS Mamirauá". O painel atualiza as áreas e estratégias de resistência.'
      },
      {
        type: 'speech',
        content: 'Para mostrar a realidade de perto, nosso site apresenta três casos práticos: Primeiro, a Terra Indígena Yanomami, em Roraima e Amazonas: uma área enorme, com mais de 96 mil quilômetros quadrados e 98% conservada, mas que sofreu nos últimos anos com a invasão de cerca de 20 mil garimpeiros ilegais, poluindo rios com veneno e causando fome e mortes. A resistência e a denúncia dessa situação foram lideradas pelos próprios Yanomami, com lideranças como Davi Kopenawa. Segundo, a Terra Indígena Kayapó, no sul do Pará: com quase 33 mil quilômetros quadrados, ela fica bem no centro do Arco do Desmatamento, rodeada por fazendas de gado e soja. Mesmo cercados, os Kayapó mantêm mais de 97% da mata em pé, graças a postos de vigilância organizados por eles mesmos e bancados pela venda sustentável da castanha. Terceiro, a Reserva Mamirauá, no Amazonas: onde ribeirinhos cuidam do manejo do peixe pirarucu. O resultado é exemplar: a população do peixe cresceu mais de 400% e os moradores ganham renda digna sem derrubar uma única árvore da beira do rio.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #saberes: "Saberes Tradicionais e Manejo Sustentável". Destacar as quatro dimensões e a recusa da visão homogeneizadora.'
      },
      {
        type: 'speech',
        content: 'O segredo desse sucesso são os Sistemas Agroflorestais, os chamados SAFs. Enquanto a monocultura limpa o terreno e gasta o solo, a agrofloresta imita a própria natureza: planta árvores de madeira junto com árvores de fruta, mandioca e plantas medicinais, em andares diferentes. O solo continua sempre coberto, a água não evapora à toa e as famílias colhem alimentos variados sem precisar queimar ou desmatar. Por fim, deixamos um aviso muito importante: não podemos tratar os povos tradicionais como se fossem todos iguais ou como personagens de conto de fadas. A Amazônia abriga mais de 400 povos indígenas, que falam mais de 150 línguas diferentes, com culturas e regras próprias. Respeitar essa diversidade e garantir a terra de cada um é o primeiro passo para conter a crise do clima. Mas se esses povos são tão essenciais para o planeta, por que eles sofrem tanta violência e perseguição? Passo a palavra ao Membro 5, que vai falar sobre os conflitos, o racismo ambiental e fechar a conclusão do nosso seminário.'
      }
    ]
  },
  {
    id: 5,
    memberLabel: 'Membro 05',
    roleTitle: 'Eixo 2 (Parte B): Violência, Direitos e Conclusão do Seminário',
    subtopic: 'Conflitos no Campo, o Artigo 231 da Constituição e a Conexão de Todo o Sistema',
    timeEstimate: '~9 minutos',
    wordCount: '~1.290 palavras',
    sectionsCovered: ['Conflitos no Campo (CIMI)', 'Contaminação por Mercúrio (Fiocruz)', 'Racismo Ambiental', 'Demarcação Constitucional (Art. 231)', 'Síntese Sistêmica Final', 'Referências'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar para a seção #ameacas: "Ameaças Territoriais e Racismo Ambiental". A tela projeta os dados de violência e a conceituação de racismo ambiental.'
      },
      {
        type: 'speech',
        content: 'Obrigado ao Membro 4 pela explicação fundamental sobre os povos tradicionais e a proteção da terra. Assumo a fala final para tratar de um assunto que muitas vezes é deixado de lado quando se fala de clima de forma apenas técnica: a violência no campo e a realidade dura do Racismo Ambiental. Não dá para fazer um seminário sério e honesto sobre ponto de não retorno fingindo que a Amazônia é só gráfico de computador e cálculo de carbono. Enquanto nós discutimos relatórios em salas com ar-condicionado, pessoas de carne e osso arriscam suas vidas todos os dias no meio da mata para impedir que invasores destruam as árvores.'
      },
      {
        type: 'projection',
        content: 'Destacar os três cards estatísticos da seção de ameaças (CIMI, Global Witness e Fiocruz).'
      },
      {
        type: 'speech',
        content: 'Os números levantados no nosso site mostram um cenário alarmante: Primeiro, relatórios do Conselho Indigenista Missionário (CIMI) e da Comissão Pastoral da Terra (CPT) registram mais de 1.100 casos de invasão de terras, ameaças de morte e violência contra indígenas e posseiros todos os anos no Brasil. Segundo, a organização internacional Global Witness, que acompanha mortes de ambientalistas no mundo, coloca o Brasil sempre entre os três países mais perigosos do mundo para quem defende a natureza. Os assassinatos de lideranças indígenas e comunitárias não são brigas isoladas: são consequência de quadrilhas organizadas que roubam madeira, terras públicas e minérios. Terceiro, além dos tiros, existe uma violência silenciosa: exames médicos da Fundação Oswaldo Cruz (Fiocruz) mostraram que, em aldeias Munduruku e Yanomami vizinhas ao garimpo de ouro, até 92% dos moradores têm mercúrio no sangue bem acima do limite tolerado pela Organização Mundial da Saúde. Esse mercúrio envenena os peixes e o rio, causando doenças graves no cérebro, perda de visão, tremores e problemas de formação em bebês.'
      },
      {
        type: 'interaction',
        content: 'Apontar para os pontos de "O que caracteriza o Racismo Ambiental na Amazônia?".'
      },
      {
        type: 'speech',
        content: 'É dessa realidade triste que nasce o termo Racismo Ambiental. Essa ideia mostra como os piores prejuízos, a poluição e a destruição provocados por atividades econômicas agressivas sempre caem com mais força sobre as populações mais vulneráveis: povos indígenas, quilombolas e comunidades ribeirinhas. Na Amazônia essa conta é clara e injusta: os povos da floresta são os que menos poluem o ar do planeta e os que menos lucram com a venda de produtos do agronegócio ou do ouro; no entanto, são os primeiros a ficar sem água limpa para beber por causa do mercúrio e dos agrotóxicos; são eles que respiram a fumaça tóxica das queimadas; e são eles que sofrem ameaças armadas quando cobram o direito simples de viver em paz em suas terras de origem.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #demarcacao: "Demarcação, Fiscalização e Soberania Climática". Destacar a Diretriz 01 sobre o Artigo 231 e o box de síntese governamental.'
      },
      {
        type: 'speech',
        content: 'Diante de tudo isso, qual é a ferramenta mais forte que as leis brasileiras oferecem para segurar esse colapso? É o Artigo 231 da Constituição Federal de 1988. A nossa Constituição deixou bem claro que o direito dos povos indígenas sobre as terras que ocupam é um direito originário. Isso significa que esse direito nasceu antes da própria criação do Estado brasileiro. O governo federal não "dá de presente" a terra aos indígenas. Quando o presidente assina a demarcação, o Estado está apenas reconhecendo e colocando limites oficiais em um direito que os povos já tinham antes da colonização.'
      },
      {
        type: 'speech',
        content: 'E a economia do clima já confirmou isso na prática: relatórios do Banco Mundial e da ONU provam que demarcar terras indígenas é a forma mais barata e eficiente de proteger florestas e evitar emissões de carbono em todo o mundo. Custa muito menos proteger quem já cuida da floresta do que tentar consertar a destruição depois. Mas, como destacamos em nossa pesquisa, lei escrita no papel não adianta se não houver fiscalização com autoridade em campo. O satélite do INPE mostra onde o fogo começou, mas o satélite não apreende tratores de invasores nem fecha garimpos clandestinos. Por isso, órgãos públicos como IBAMA, ICMBio, Polícia Federal e FUNAI precisam de dinheiro no orçamento, equipes completas e poder de ação para combater o crime ambiental.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #conexao: "Um sistema. Múltiplas dimensões". Destacar a matriz de quatro quadrantes que cruza as dimensões biofísicas com a proteção territorial.'
      },
      {
        type: 'speech',
        content: 'Para encerrar o seminário, peço que olhem a seção final do site: "Um sistema. Múltiplas dimensões". O nosso maior objetivo foi mostrar que os problemas da Amazônia estão todos amarrados e não podem ser vistos de forma separada: Primeiro, não existem Rios Voadores e chuva para o Brasil sem as árvores altas preservadas pelas terras indígenas. Segundo, o limite perigoso de 25% de desmatamento só não foi ultrapassado porque os povos originários seguraram as motosserras fora de seus territórios. Terceiro, o estudo de Luciana Gatti prova que a floresta joga carbono no ar onde há destruição e queimadas, mas continua limpando o ar onde os povos tradicionais cuidam da mata. E quarto, a água que enche os reservatórios de energia e irriga a comida no Centro-Sul do país depende da segurança e do respeito a quem protege a Amazônia.'
      },
      {
        type: 'projection',
        content: 'Rolar brevemente pela seção #referencias, evidenciando o acervo de periódicos (Nature, Science, Science Advances, INPE, MapBiomas, CIMI) e finalizando no #footer.'
      },
      {
        type: 'speech',
        content: 'Todas as fontes científicas que usamos — artigos de revistas internacionais com links diretos, relatórios oficiais do governo e mapas históricos — estão listadas no rodapé do site para quem quiser conferir. Concluímos com uma certeza clara: a Amazônia não precisa de discursos de pena ou promessas vazias; a Amazônia precisa de respeito às leis, apoio à ciência e cumprimento da Constituição. Para não cruzar o ponto de não retorno, precisamos de três atitudes imediatas: desmatamento zero, recuperação das áreas degradadas e demarcação de todas as terras indígenas e quilombolas pendentes. Sem as pessoas da floresta, as árvores caem; e sem a floresta, o clima do Brasil e a vida das futuras gerações entram em colapso. Muito obrigado a todos pela atenção, e estamos à disposição da banca examinadora para perguntas!'
      }
    ]
  }
];
