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
    roleTitle: 'Abertura, Epistemologia e Teoria dos Sistemas Dinâmicos',
    subtopic: 'Da Complexidade da Bacia à Modelagem dos Pontos de Inflexão (Bacias de Atração e Histerese)',
    timeEstimate: '~9 minutos',
    wordCount: '~1.280 palavras',
    sectionsCovered: ['Hero Principal', 'Abertura do Seminário', 'Conceito de Ponto de Não Retorno', 'Bacias de Atração'],
    blocks: [
      {
        type: 'projection',
        content: 'O website ocupa a tela inteira em projeção. O cabeçalho fixo exibe a marca editorial. O Hero destaca a fotografia da floresta sob névoa matinal e o título: "AMAZÔNIA E PONTO DE NÃO RETORNO".'
      },
      {
        type: 'speech',
        content: 'Cumprimento com deferência os membros da banca examinadora, os professores presentes, os colegas pesquisadores e todos os participantes que nos acompanham neste seminário acadêmico. O trabalho que submetemos hoje à avaliação coletiva intitula-se "Amazônia e Ponto de Não Retorno: Os limites de um ecossistema, os mecanismos do colapso climático e as pessoas que protegem a floresta". Para fundamentar, organizar e comunicar a complexidade deste debate, nossa equipe concebeu e implementou esta plataforma digital editorial, construída sob os mais rigorosos padrões da comunicação científica contemporânea. O objetivo central deste projeto não é criar uma página promocional passageira, mas sim estruturar um ambiente documental interativo, embasado nas produções de ponta da climatologia, da ecologia teórica, da geografia socioambiental e do direito constitucional.'
      },
      {
        type: 'projection',
        content: 'Rolar suavemente pela área de texto do Hero, evidenciando o subtítulo italicizado e os dois cards de ancoragem para o Eixo 1 e o Eixo 2.'
      },
      {
        type: 'speech',
        content: 'Para inaugurar nossa reflexão, precisamos enfrentar de partida um obstáculo epistêmico recorrente: no imaginário social e na cobertura midiática tradicional, a Amazônia costuma ser retratada como um "reservatório estático de madeira" ou como um imenso estoque verde passivo de carbono, que funcionaria quase como um pulmão mecânico que apenas "respira" o ar do planeta. Essa metáfora biológica do pulmão, além de cientificamente imprecisa — uma vez que uma floresta madura em clímax consome na respiração noturna grande parte do oxigênio que gera na fotossíntese diurna —, esconde o verdadeiro papel ecológico do bioma. A Amazônia não é um reservatório inerte. A Amazônia é um motor termodinâmico e hidrológico vivo, uma bomba biótica de escala planetária que equilibra o regime térmico continental e condiciona a circulação das massas de ar sobre toda a América do Sul.'
      },
      {
        type: 'speech',
        content: 'Além disso, a existência desse ecossistema não pode ser dissociada das sociedades humanas que nele habitam. O destino biofísico da floresta está entrelaçado, de maneira inegociável, à história, à sobrevivência e aos direitos territoriais dos povos originários e comunidades tradicionais. É por essa razão que o nosso seminário se articula sobre dois eixos que não podem ser lidos separadamente: o Eixo 1 — Científico & Climático, dedicado a dissecar a mecânica termodinâmica do colapso, o funcionamento dos rios voadores, a discussão biofísica sobre o limiar de desmatamento acumulado e a inversão do balanço de carbono; e o Eixo 2 — Justiça Climática & Povos Tradicionais, que investiga a materialidade da conservação no solo, demonstrando como a garantia dos territórios demarcados e os saberes agroecológicos ancestrais operam como a barreira viva mais eficaz contra o desequilíbrio climático global.'
      },
      {
        type: 'projection',
        content: 'Descer com rolagem suave até a seção #conceito: "O que é, afinal, um Ponto de Não Retorno ecológico?".'
      },
      {
        type: 'speech',
        content: 'Entremos, pois, no alicerce conceitual da nossa pesquisa: o que significa, sob a perspectiva da ciência moderna, a expressão Ponto de Não Retorno, internacionalmente conhecida como Tipping Point? Na física estatística e na teoria dos sistemas dinâmicos complexos, um sistema ecológico não se degrada necessariamente de forma linear, suave ou previsível. Quando submetido a pressões crônicas, ele pode apresentar o que a matemática chama de transição crítica ou bifurcação de regimes. O ponto de não retorno não é simplesmente "mais uma árvore derrubada". Ele define o limiar quantitativo a partir do qual os mecanismos internos de autorregulação que sustentavam a estabilidade do sistema entram em falência, fazendo com que o ecossistema salte bruscamente de um estado de equilíbrio para outro estado qualitativamente distinto e profundamente degradado.'
      },
      {
        type: 'interaction',
        content: 'No painel conceitual à direita da seção, clicar na sub-aba "Bacia de Atração". O gráfico esquemático ilustra os dois regimes alternativos.'
      },
      {
        type: 'speech',
        content: 'Para visualizar esse fenômeno com clareza pedagógica, a ecologia contemporânea utiliza a modelagem das Bacias de Atração. Peço que acompanhem o esquema projetado na tela: Imaginemos o bioma amazônico como uma esfera situada no fundo de uma bacia profunda, que chamamos de Estado A: Floresta Densa Pluvial. Este estado possui alta resiliência. A transpiração contínua de centenas de bilhões de árvores lança vapor d\'água na atmosfera, esse vapor forma nuvens densas, essas nuvens precipitam chuvas abundantes e as chuvas reabastecem os lençóis freáticos que alimentam as árvores. A floresta produz o seu próprio clima e mantém a bacia de atração profunda e estável. No entanto, à medida que a ação humana remove a biomassa, fragmenta a copa florestal e eleva a temperatura global de fundo, as bordas dessa bacia vão sendo gradualmente erodidas. A resiliência do sistema diminui — um processo que os ecólogos detectam empiricamente através de sinais de desaceleração crítica, como o aumento da variância e da autocorrelação temporal nos dados climáticos. Se ultrapassarmos a crista da bacia, a esfera atinge uma bifurcação irreversível e rola para uma bacia alternativa: o Estado B: Savana Secundária Degradada.'
      },
      {
        type: 'speech',
        content: 'Atenção para esta distinção conceitual: o que surge após o colapso não é o exuberante e biodiverso Cerrado brasileiro, que possui espécies com milhões de anos de adaptação evolutiva ao fogo e solos profundos. O que surge é um ecossistema empobrecido, dominado por gramíneas invasoras altamente inflamáveis, arbustos raquíticos, microclima tórrido e seca permanente, incapaz de estocar carbono ou bombear umidade para a atmosfera.'
      },
      {
        type: 'interaction',
        content: 'Clicar na sub-aba "Incertezas & Modelos" e apontar para o box de alerta em destaque âmbar.'
      },
      {
        type: 'speech',
        content: 'Neste ponto, nosso grupo faz questão de registrar um rigoroso cuidado metodológico e epistemológico, amplamente enfatizado em nosso site: o ponto de não retorno não é um evento determinístico com hora marcada em um relógio apocalíptico. Ele não é uma certeza fatalista. Modelos climáticos não operam com profecias, mas com zonas estatísticas de probabilidade e risco biofísico. Além disso, a comunidade científica adverte que o colapso não ocorrerá como um "apagão instantâneo" que atinge os 6 milhões de quilômetros quadrados da bacia em um único dia. O colapso começa como um mosaico espacial de ressecamento: as porções leste e sul, severamente antropizadas, já exibem sinais evidentes de desestabilização, enquanto o oeste ainda mantém integridade funcional.'
      },
      {
        type: 'speech',
        content: 'Outro conceito fundamental que devemos reter é o da Histerese Ecológica. Uma vez empurrado para a bacia da savana degradada, restaurar a floresta exigiria condições pluviométricas e térmicas muito mais favoráveis do que aquelas em que a floresta originalmente se desenvolveu. Em termos práticos: mesmo que o desmatamento cessasse totalmente após o limiar, o clima já alterado impediria a regeneração natural da mata densa. Compreendida essa dinâmica teórica, cabe perguntar: quais são exatamente os mecanismos físicos que fazem a floresta manter o clima estável e o que acontece quando rompemos essa máquina? Para detalhar o funcionamento dos rios voadores e a evolução da tese científica sobre o limiar de desmatamento, passo a palavra ao Membro 2, que iniciará a exposição do nosso Eixo 1.'
      }
    ]
  },
  {
    id: 2,
    memberLabel: 'Membro 02',
    roleTitle: 'Eixo 1 (Parte A): Mecânica Biofísica e o Limiar de Lovejoy & Nobre',
    subtopic: 'A Teoria da Bomba Biótica, os Jatos Atmosféricos de Baixos Níveis e o Limiar de 20% a 25%',
    timeEstimate: '~9 minutos',
    wordCount: '~1.310 palavras',
    sectionsCovered: ['Abertura do Eixo 1', 'Diagrama dos Rios Voadores (4 Fases)', 'Limiar de 20% a 25%', 'Degradação Oculta (Science 2023)'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar até a seção #eixo-1: "A mecânica do colapso", destacando os três blocos métricos do topo (~20 bilhões t/dia, 5 a 6 vezes de reciclagem e o intervalo de 20%–25%). Em seguida, centralizar a tela no #rios-voadores.'
      },
      {
        type: 'speech',
        content: 'Agradeço ao Membro 1 pelas precisas considerações epistemológicas. Passamos agora a dissecar as engrenagens do Eixo 1 — Científico & Climático, analisando em profundidade a mecânica física que transforma a Amazônia no principal regulador hídrico do continente sul-americano. Se examinarmos um mapa mundi físico e traçarmos uma linha imaginária ao longo das latitudes de 20 a 30 graus no Hemisfério Sul, encontraremos uma realidade bioclimática intrigante: nessa faixa de latitude situam-se alguns dos desertos e regiões mais áridas do globo — o deserto de Kalahari e da Namíbia no sul da África, o imenso interior árido da Austrália e o deserto do Atacama no Chile. Pela física da circulação geral da atmosfera, sob as células de Hadley, o ar descendente subsidente cria cinturões subtropicais secos de alta pressão. No entanto, o centro-sul da América do Sul — que abrange o Centro-Oeste, Sudeste e Sul do Brasil, além do Paraguai, Uruguai e norte da Argentina — desafia essa regra planetária, exibindo florestas subtropicais, bacias fluviais caudalosas e a maior produtividade agropecuária do continente. Por que essa região não é um deserto? A resposta científica consolidada é uma só: a existência da cobertura florestal contínua da Amazônia e o fenômeno atmosférico dos Rios Voadores.'
      },
      {
        type: 'interaction',
        content: 'No painel do "Esquema Conceitual do Fluxo Atmosférico", clicar no botão "Fase 01: A Bomba Biótica e Evapotranspiração". O diagrama vetorial SVG ilumina a copa das árvores e as correntes ascendentes de vapor.'
      },
      {
        type: 'speech',
        content: 'Acompanhem conosco a representação conceitual vetorial estruturada em quatro fases: Na Fase 1, encontramos o motor primordial de todo o sistema: A Bomba Biótica e a Evapotranspiração Florestal. Esta teoria, formulada pelos físicos teóricos russos Anastassia Makarieva e Victor Gorshkov e amplamente documentada no Brasil pelo pesquisador Antonio Donato Nobre (do INPE e do INPA), demonstra que a floresta não é mera usuária de água, mas um condensador dinâmico. As árvores da floresta tropical primária possuem sistemas radiculares profundos, com raízes pivotantes que perfuram 10, 15 e até mais de 20 metros no subsolo, alcançando reservatórios de água subterrâneos inatingíveis para a vegetação rasteira. Uma única árvore de grande porte, com copa de 20 a 30 metros de diâmetro, é capaz de absorver e bombear para a atmosfera mais de 1.000 litros de água sob a forma de vapor a cada 24 horas. Quando multiplicamos essa fisiologia vegetal pelas centenas de bilhões de árvores distribuídas na bacia, a magnitude é estarrecedora: a floresta amazônica bombeia diariamente cerca de 20 bilhões de toneladas de vapor d\'água para a camada limite planetária. Para que a banca compreenda a escala termodinâmica desse dado: a vazão líquida do Rio Amazonas — o maior rio de superfície da Terra —, quando deságua no Oceano Atlântico, é de cerca de 17 bilhões de toneladas por dia. Isto significa que o fluxo gasoso que corre sobre as nossas cabeças na atmosfera amazônica supera em volume a descarga de água líquida do maior rio do planeta.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 02: Advecção e Ventos Alísios". O diagrama projeta as flechas de fluxo cruzando o Oceano Atlântico em direção ao continente.'
      },
      {
        type: 'speech',
        content: 'Na Fase 2, entra em ação a circulação de grande escala. A intensa condensação sobre a floresta reduz a pressão atmosférica na superfície, criando um gradiente bárico que atrai continuamente as massas de ar marítimas transportadas pelos Ventos Alísios de Leste, originados no Oceano Atlântico Equatorial. Ao entrarem no continente, essas massas de ar marítimo recebem a injeção contínua do vapor das árvores. Esse vapor condensa-se em chuvas, que caem sobre a mata, são absorvidas pelas raízes e novamente evapotranspiradas. Esse processo fenomenal de reciclagem hídrica repete-se entre 5 e 6 vezes consecutivas à medida que a massa de ar viaja em direção ao oeste, mantendo a atmosfera úmida mesmo a três mil quilômetros de distância do oceano.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 03: Barreira Orográfica dos Andes". O diagrama destaca o paredão montanhoso e a curvatura acentuada dos jatos atmosféricos rumo ao sul.'
      },
      {
        type: 'speech',
        content: 'Na Fase 3, esse gigantesco rio aéreo colide com um obstáculo geológico intransponível: a Cordilheira dos Andes, uma colossal muralha rochosa com altitudes que superam 4.000 metros. Impedida de prosseguir para o Oceano Pacífico, a umidade é defletida para o sul e sudeste, organizando-se em corredores de alta velocidade na baixa troposfera conhecidos na meteorologia como Jatos de Baixos Níveis a Leste dos Andes (JBN).'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Fase 04: Distribuição Pluviométrica Continental". O diagrama ilumina a condensação sobre o Centro-Oeste, Sudeste e a Bacia do Prata.'
      },
      {
        type: 'speech',
        content: 'Finalmente, na Fase 4, esses fluxos encontram massas frias que sobem do sul do continente e descarregam seu volume em chuvas copiosas. São essas correntes que enchem os reservatórios hidrelétricos do Sudeste — como Furnas, Ilha Solteira e o Sistema Cantareira em São Paulo —, que garantem a fertilidade do agronegócio no Centro-Oeste e abastecem toda a bacia hidrográfica do Prata. Estudos do climatologista José Marengo atestam que até 70% da precipitação estival no centro-sul da América do Sul depende direta ou indiretamente dessa advecção de umidade amazônica.'
      },
      {
        type: 'projection',
        content: 'Rolar suavemente para a seção #limiar: "O Limiar Científico de 20% a 25%". Enquadrar o grande bloco tipográfico do número e os cards comparativos.'
      },
      {
        type: 'speech',
        content: 'Compreendida essa gigantesca máquina hídrica, chegamos à pergunta mais urgente da climatologia global: o que acontece se continuarmos retirando as peças desse motor? Essa indagação nos conduz ao célebre debate sobre o Limiar de 20% a 25% de Desmatamento, hipótese formulada e aprimorada ao longo das últimas décadas pelo climatologista brasileiro Carlos Nobre e pelo biólogo conservacionista norte-americano Thomas Lovejoy, cujos artigos seminais foram publicados na prestigiosa revista Science Advances em 2018 e 2019. Ao simularem modelos numéricos de circulação acoplados à perda de biomassa, Lovejoy e Nobre demonstraram que o sistema biofísico amazônico não suporta uma amputação florestal ilimitada. Segundo seus cálculos, se o desmatamento acumulado por corte raso na bacia alcançar a faixa entre 20% e 25%, a perda combinada de evapotranspiração romperá a reciclagem de umidade, desencadeando um processo de dessecação generalizada e savanização irreversível nas porções leste, sul e central do bioma.'
      },
      {
        type: 'speech',
        content: 'Peço à banca que atente com absoluta seriedade para os dados reais que estruturamos na tela: Primeiro, segundo as séries históricas do sistema PRODES, mantido pelo INPE, o desmatamento oficial acumulado na Amazônia Legal brasileira já se encontra entre 17% e 18%. Estamos situados a uma margem infinitesimal do piso do intervalo de risco estimado por Nobre e Lovejoy. Segundo, como advertimos no início, a média nacional esconde a gravidade regional: na região que a geografia econômica batizou de "Arco do Desmatamento" — estendendo-se do leste do Pará, cruzando o norte do Mato Grosso até Rondônia —, a supressão florestal já ultrapassou largamente a marca de 30% a 35%. Nessa borda, o regime de chuvas já está severamente desfigurado. Terceiro, para agravar ainda mais o diagnóstico, trazemos as conclusões do artigo fundamental liderado por David Lapola, publicado na revista Science em 2023: além do desmatamento por corte raso, até 38% da floresta amazônica que ainda permanece em pé sofre com severa degradação oculta por efeito de borda, exploração madeireira seletiva clandestina, fogo de sub-bosque e secas extremas induzidas pela crise climática global. Lapola e seus coautores demonstraram que a perda de carbono e a queda de evapotranspiração decorrentes da degradação oculta são tão ou mais destrutivas do que o corte raso isoladamente. Como essas forças interagem na prática para transformar a floresta em um ambiente combustível e inverter o papel da bacia no balanço planetário de carbono? Esse é o tema que o Membro 3 apresentará a seguir.'
      }
    ]
  },
  {
    id: 3,
    memberLabel: 'Membro 03',
    roleTitle: 'Eixo 1 (Parte B): O Ciclo de Degradação e o Balanço de Carbono',
    subtopic: 'Retroalimentação Positiva Não-Linear e a Descoberta Observacional de Luciana Gatti (INPE / Nature 2021)',
    timeEstimate: '~9 minutos',
    wordCount: '~1.340 palavras',
    sectionsCovered: ['Ciclo de Retroalimentação (7 Etapas)', 'Fogo de Sub-bosque e Ignição Antrópica', 'Amazônia como Emissora de Carbono', 'Perfis Verticais de CO2 (INPE)'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar para a seção #retroalimentacao: "O Ciclo de Retroalimentação Climática". A tela exibe o fluxo vertical de 7 etapas conectado ao painel inspetor à direita.'
      },
      {
        type: 'speech',
        content: 'Agradeço ao Membro 2 pela brilhante exposição sobre a dinâmica dos rios voadores e a sensibilidade do limiar de desmatamento. Assumo a exposição do Eixo 1 para demonstrar de que maneira a degradação florestal deixa de ser um impacto pontual e se transforma em uma espiral autossustentável: o chamado Ciclo de Retroalimentação Climática Positiva. Na teoria dos sistemas ecológicos, é imperativo esclarecer que o termo "retroalimentação positiva" não carrega qualquer sentido de benefício. Pelo contrário: ele designa um circuito fechado no qual o efeito produzido por uma perturbação inicial retroage sobre a sua própria causa, amplificando-a e acelerando a velocidade do colapso.'
      },
      {
        type: 'interaction',
        content: 'Clicar na "Etapa 1: Supressão da Vegetação" e, logo após, na "Etapa 2: Queda Drástica na Evapotranspiração". O painel à direita detalha o mecanismo biofísico.'
      },
      {
        type: 'speech',
        content: 'Convido a banca a inspecionar detalhadamente cada uma das 7 etapas estruturadas em nossa plataforma: Na Etapa 1 — Supressão da Vegetação Primária, tudo se inicia com a motosserra, o correntão e o fogo de abertura de clareiras. A remoção do estrato arbóreo expõe um solo equatorial frágil diretamente à incidência de radiação solar ultravioleta, destruindo a camada protetora da serapilheira. Na Etapa 2 — Queda Drástica na Evapotranspiração, como explicado pelo Membro 2, as pastagens que substituem a floresta possuem raízes curtas e secam rapidamente na estiagem. A conversão de energia na superfície muda drasticamente: a energia que antes era absorvida como calor latente para evaporar água passa a ser dissipada como calor sensível, elevando a temperatura da superfície do solo em até 4°C a 8°C e ressecando a coluna de ar inferior.'
      },
      {
        type: 'interaction',
        content: 'Selecionar a "Etapa 3: Alteração do Regime de Chuvas" e a "Etapa 4: Secas Severas e Estresse Hídrico".'
      },
      {
        type: 'speech',
        content: 'Na Etapa 3 — Alteração do Regime Pluviométrico, com a quebra do bombeamento de umidade, as células de convecção perdem força. A atmosfera demora muito mais tempo para atingir o ponto de orvalho. Dados observacionais do INPE comprovam que, nas últimas quatro décadas, a estação seca no sul da Amazônia já foi prolongada entre 4 e 5 semanas. O período de estiagem, que durava de dois a três meses, hoje se arrasta por quase quatro meses. Na Etapa 4 — Secas Severas e Estresse Hídrico, com a estação seca mais longa e quente, o déficit de pressão de vapor na folhagem atinge níveis críticos. As árvores da mata madura enfrentam o fenômeno fisiológico da embolia ou colapso hidráulico nos vasos condutores de xilema: a tensão da seiva é tão violenta que bolhas de gás se formam no sistema circulatório vegetal, interrompendo o fluxo de água e matando milhares de árvores de grande biomassa. O chão da mata fica forrado de matéria orgânica desidratada.'
      },
      {
        type: 'interaction',
        content: 'Clicar na "Etapa 5: Vulnerabilidade Extrema ao Fogo". O painel exibe o alerta em vermelho sobre a distinção de queimas antrópicas.'
      },
      {
        type: 'speech',
        content: 'Na Etapa 5 — Vulnerabilidade Extrema ao Fogo, reside um dos pontos mais importantes do nosso seminário. É frequente ouvirmos declarações desinformadas sugerindo que os incêndios na Amazônia são espontâneos ou "naturais". Nosso trabalho ressalta a distinção científica fundamental: ao contrário de ecossistemas pirófilos, como o Cerrado ou as savanas africanas, onde as espécies possuem cascas grossas de cortiça e gemas subterrâneas para sobreviver ao fogo que pode ocorrer por raios, a floresta amazônica pluvial não coevoluiu com o fogo. Em estado primário e úmido, o sub-bosque amazônico não queima: o fogo simplesmente se apaga. No entanto, quando o microclima é degradado e o chão fica coberto de serapilheira seca, as queimadas antrópicas — ateadas intencionalmente para "limpar" pastos ou queimar áreas recém-desmatadas — escapam para o interior da floresta contígua. Trata-se de um fogo rasteiro e lento, que atinge apenas 30 a 50 centímetros de altura, mas cuja permanência prolongada queima a base das cascas e mata até metade das árvores adultas.'
      },
      {
        type: 'interaction',
        content: 'Selecionar a "Etapa 6: Degradação e Savanização" e a "Etapa 7: Retroalimentação Positiva do Colapso".'
      },
      {
        type: 'speech',
        content: 'Na Etapa 6 — Degradação e Savanização Secundária, a floresta atingida pelo fogo perde sua copa fechada. Clareiras permanentes se abrem, permitindo a entrada maciça de vento e luz, favorecendo a proliferação de gramíneas invasoras altamente combustíveis e espécies pioneiras agressivas. A arquitetura complexa da floresta original é irremediavelmente desfeita. Por fim, na Etapa 7 — Retroalimentação Positiva, a área degradada evapotranspira menos do que a floresta sadia, gerando mais calor e menos chuva para as áreas vizinhas que ainda estavam conservadas. O ciclo fecha-se sobre si mesmo: a perturbação gera mais vulnerabilidade, empurrando todo o mosaico regional rumo ao colapso autossustentável.'
      },
      {
        type: 'projection',
        content: 'Descer a tela até a seção #carbono: "A Amazônia como Emissora de Carbono". Destacar a metodologia dos 590 perfis verticais do INPE e os seletores de região.'
      },
      {
        type: 'speech',
        content: 'As consequências desse ciclo sobre a química atmosférica global foram quantificadas em um estudo de referência mundial liderado pela pesquisadora sênior Luciana Gatti, do INPE, publicado na revista Nature em julho de 2021. Historicamente, todos os modelos climáticos globais do IPCC contavam com a floresta amazônica como um gigantesco sumidouro natural de carbono — um bioma capaz de sequestrar anualmente centenas de milhões de toneladas de CO₂ da atmosfera através do crescimento de sua vegetação, amenizando as emissões antrópicas industriais. Para verificar se essa premissa teórica ainda correspondia à realidade, a equipe do Laboratório de Gases de Efeito Estufa do INPE implementou uma abordagem metodológica de extraordinária complexidade e rigor: durante 9 anos (de 2010 a 2018), pequenas aeronaves voaram em espiral coletando 590 perfis verticais atmosféricos desde a copa das árvores até 4,4 quilômetros de altitude sobre quatro quadrantes geográficos estratégicos da Amazônia brasileira.'
      },
      {
        type: 'interaction',
        content: 'Na aba de comparação regional, clicar em "Amazônia Oriental (Sudeste / Pará e Mato Grosso)". Os quatro cards exibem as taxas com destaque em alerta.'
      },
      {
        type: 'speech',
        content: 'Os resultados publicados na Nature deixaram a comunidade científica internacional estarrecida: A Amazônia Oriental — abrangendo o sudeste do bioma, sob influência das estações de Alta Floresta e Santarém — já se converteu em uma fonte líquida de carbono para a atmosfera. Essa porção do bioma libera entre +0,27 e +0,33 gramas de carbono por metro quadrado por dia. O estudo correlacionou essa emissão com três fatores empíricos devastadores: nessa região, o desmatamento já superou 25%, as chuvas nos meses da estação seca caíram entre 24% e 34%, e a temperatura nos meses de seca subiu até 2,5°C. As emissões provocadas por queimadas e pela decomposição de árvores mortas pelo calor superam amplamente a capacidade fotossintética de absorção da floresta sobrevivente.'
      },
      {
        type: 'interaction',
        content: 'Clicar no botão "Amazônia Ocidental (Noroeste / Tefé e Tabatinga)". Os quatro cards passam a exibir tons verdes de preservação.'
      },
      {
        type: 'speech',
        content: 'Em flagrante contraste geográfico, a Amazônia Ocidental — representada pelas estações de Tefé e Tabatinga, no coração preservado do bioma —, onde o desmatamento acumulado permanece inferior a 10% a 14%, mantém seu equilíbrio ecológico funcional: o balanço de carbono permanece neutro ou operando como leve sumidouro, oscilando entre -0,02 e +0,04 gramas de carbono por metro quadrado ao dia, com estabilidade pluviométrica e taxas desprezíveis de fogo. A ressalva científica que fazemos na tela é categórica: é equivocado e desmobilizador afirmar que "a Amazônia inteira já virou uma emissora de carbono". A ciência nos mostra que há uma fronteira de resistência geográfica. O oeste da Amazônia ainda segura a estabilidade do clima. Mas isso nos coloca uma questão inescapável: por que o oeste resiste? Quem está fisicamente no solo segurando essa fronteira viva de preservação contra o avanço das motosserras? A resposta nos conduz diretamente ao Eixo 2, que será inaugurado pelo Membro 4.'
      }
    ]
  },
  {
    id: 4,
    memberLabel: 'Membro 04',
    roleTitle: 'Eixo 2 (Parte A): A Barreira Viva e a Preservação Territorial',
    subtopic: 'A Floresta Biocultural Milenar, Evidências do MapBiomas e a Governança das Terras Indígenas',
    timeEstimate: '~9 minutos',
    wordCount: '~1.320 palavras',
    sectionsCovered: ['Abertura do Eixo 2', 'História Biocultural (Terras Pretas de Índio)', 'Série Histórica MapBiomas (38 Anos)', 'Casos Yanomami, Kayapó e Mamirauá', 'SAFs e Diversidade Étnica'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar até a seção #eixo-2: "A barreira viva contra o ponto de não retorno", evidenciando o box lateral de "Sociobiodiversidade em Números". Em seguida, descer para #terras-indigenas.'
      },
      {
        type: 'speech',
        content: 'Agradeço ao Membro 3 pela detalhada explanação sobre o balanço de carbono e a dinâmica de retroalimentação. Iniciamos agora a discussão do Eixo 2 — Justiça Climática & Povos Tradicionais, sob o título estruturante: "A Barreira Viva contra o Ponto de Não Retorno". Até este momento do seminário, nós examinamos variáveis físicas, termodinâmicas, fluxos de vapor e emissões de carbono. Contudo, qualquer análise científica que trate a Amazônia exclusivamente como um laboratório físico despovoado é incompleta, enviesada e fadada ao erro. A permanência da floresta em pé não é um milagre ecológico espontâneo, tampouco a Amazônia é uma terra virgem intocada pela humanidade. Trata-se de um mito colonial eurocêntrico — o chamado "mito da natureza intocada" — considerar que a floresta é um vazio demográfico que só encontrou a civilização quando chegaram as estradas e os projetos de colonização a partir da segunda metade do século XX.'
      },
      {
        type: 'speech',
        content: 'As evidências da arqueologia, da antropologia histórica e da etnobotânica moderna são fartas e indiscutíveis: a Amazônia é ocupada de forma contínua por sociedades humanas há pelo menos 12.000 anos. As pesquisas de cientistas como Eduardo Neves e Charles Clement comprovam que o que chamamos de "floresta primária" é, na verdade, uma paisagem cultural biocêntrica e coevoluída. As famosas "Terras Pretas de Índio" — bolsões de solo escuro com fertilidade extraordinária espalhados por toda a bacia — foram criadas antropogenicamente através de séculos de deposição controlada de biomassa carbonizada, fragmentos cerâmicos e matéria orgânica pelas comunidades ancestrais. A altíssima densidade de espécies arbóreas economicamente vitais — como a castanha-do-brasil, o cacaueiro, a seringueira, a pupunha e os açaizais — decorre de processos milenares de seleção botânica, dispersão e enriquecimento florestal realizados pelas populações originárias. Longe de degradar a floresta, o manejo tradicional multiplicou a sua heterogeneidade funcional.'
      },
      {
        type: 'projection',
        content: 'Na seção de Terras Indígenas, enquadrar a tabela comparativa da "Série Histórica MapBiomas (1985–2022)".'
      },
      {
        type: 'speech',
        content: 'Quando transpomos esse entendimento histórico para o cenário contemporâneo de combate ao ponto de não retorno, os números revelam uma correlação inequívoca entre posse territorial tradicional e conservação biofísica. Convido a banca a examinar com rigor os dados extraídos das Coleções 8 e 9 do projeto MapBiomas Brasil, que mapeou a cobertura e o uso do solo brasileiro ao longo de quase quatro décadas de imagens de satélite (de 1985 a 2022): Nas Terras Indígenas Homologadas, a perda líquida acumulada de vegetação nativa em quase 40 anos foi de apenas 1,6% a 2,0%. Este índice é o mais baixo registrado entre qualquer categoria territorial existente no planeta Terra. As TIs operam como muralhas quase intransponíveis de contenção ao desmatamento. Nas Unidades de Conservação de Uso Sustentável (como RESEXs e Reservas de Desenvolvimento Sustentável), onde populações ribeirinhas e seringueiros praticam o extrativismo florestal de baixo impacto, a perda manteve-se rigorosamente contida entre 4,0% e 6,5%. Em flagrante contraste, nas Propriedades Privadas Registradas no CAR, a supressão da mata nativa explodiu para índices entre 28,0% e 34,5%, impulsionada pelo avanço da pecuária bovina extensiva e monoculturas de grãos. E o cenário mais dramático ocorre nas Terras Públicas Não Destinadas (as chamadas florestas devolutas da União), onde a perda atingiu impressionantes 30% a 42%, constituindo a principal fronteira da grilagem de terras públicas e do roubo de madeira.'
      },
      {
        type: 'speech',
        content: 'Esses números nos mostram que as Terras Indígenas, que cobrem cerca de 23% da Amazônia Legal brasileira, estocam sozinhas mais de 27% de todo o carbono da biomassa aérea do bioma. É a presença dos povos em seus territórios ancestrais que mantém ativas as raízes que bombeiam os 20 bilhões de toneladas de água por dia que o Membro 2 descreveu. Sem essas terras demarcadas, a floresta já teria ultrapassado o limiar crítico de 25% há muitos anos.'
      },
      {
        type: 'interaction',
        content: 'Na área de "Estudos de Caso Documentados em Território", clicar sucessivamente nos botões "TI Yanomami", "TI Kayapó" e "RDS Mamirauá". O painel atualiza as áreas e estratégias de resistência.'
      },
      {
        type: 'speech',
        content: 'Para fundamentar essa análise em territórios reais, nossa pesquisa documenta três estudos de caso paradigmáticos: Primeiro, a Terra Indígena Yanomami (em Roraima e Amazonas): com seus impressionantes 96.650 km² e taxa de conservação de 98,2%, sofreu nos últimos anos a invasão de cerca de 20.000 garimpeiros ilegais, resultando em destruição de cursos d\'água e crise humanitária de saúde. A resistência e a denúncia desse genocídio silencioso foram lideradas pela mobilização da Hutukara Associação Yanomami e xamãs como Davi Kopenawa. Segundo, a Terra Indígena Kayapó (no sul do Pará): com 32.840 km², situada exatamente no olho do furacão do Arco do Desmatamento, cercada por pastagens e lavouras de soja. Os Mebêngôkre mantêm 97,4% de sua floresta primária intacta graças a um sistema autônomo de postos de fiscalização gerenciados pelo Instituto Kabu e pela Associação Floresta Protegida, financiado pela bioeconomia sustentável da castanha-do-brasil. Terceiro, a Reserva de Desenvolvimento Sustentável Mamirauá (no Amazonas): com 11.240 km² de ecossistemas de várzea intactos (99,1% preservados), onde comunidades ribeirinhas implementaram o manejo comunitário do pirarucu (Arapaima gigas). O resultado científico é espetacular: a população do peixe multiplicou-se em mais de 400% e as famílias obtiveram renda justa sem derrubar uma única árvore da mata ciliar.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #saberes: "Saberes Tradicionais e Manejo Sustentável". Destacar as quatro dimensões e a recusa da visão homogeneizadora.'
      },
      {
        type: 'speech',
        content: 'O que sustenta essa barreira viva no cotidiano são os Sistemas Agroflorestais (SAFs) e as tecnologias de conservação biocultural. Ao contrário da monocultura predatória que desmata e expõe o solo, o manejo tradicional consorcia árvores de dossel com frutíferas, mandioca e plantas medicinais em múltiplos estratos verticais. Esse sistema mantém a cobertura vegetal ininterrupta, recicla a matéria orgânica e preserva a biologia subterrânea, garantindo a soberania alimentar dos povos sem comprometer o fluxo de evapotranspiração para a atmosfera. Nosso grupo finaliza este módulo fazendo uma advertência acadêmica indispensável: os povos tradicionais não podem ser tratados como uma massa homogênea, passiva ou romantizada. A Amazônia abriga mais de 400 povos indígenas, falantes de mais de 150 línguas pertencentes a troncos linguísticos tão distintos entre si quanto o português é do mandarim — como Tupi, Macro-Jê, Aruak, Karib, Pano e Yanomami. Cada povo possui sistemas de governança próprios e complexos. Reconhecer essa pluralidade de direitos e saberes é o primeiro passo para construirmos uma política climática justa e eficaz. Mas se esses povos são a chave para a estabilidade do clima, por que eles enfrentam tanta violência e pressões territoriais? Passo a palavra ao Membro 5, que abordará os conflitos, o racismo ambiental, a demarcação constitucional e apresentará a síntese conclusiva do nosso seminário.'
      }
    ]
  },
  {
    id: 5,
    memberLabel: 'Membro 05',
    roleTitle: 'Eixo 2 (Parte B): Violência, Racismo Ambiental e Síntese Sistêmica',
    subtopic: 'Conflitos Fundiários, o Artigo 231 da CF/88 e a Matriz "Um Sistema. Múltiplas Dimensões"',
    timeEstimate: '~9 minutos',
    wordCount: '~1.350 palavras',
    sectionsCovered: ['Conflitos no Campo (CIMI)', 'Contaminação por Mercúrio (Fiocruz)', 'Racismo Ambiental', 'Demarcação Constitucional (Art. 231)', 'Síntese Sistêmica Final', 'Referências'],
    blocks: [
      {
        type: 'projection',
        content: 'Navegar para a seção #ameacas: "Ameaças Territoriais e Racismo Ambiental". A tela projeta os dados de violência e a conceituação de racismo ambiental.'
      },
      {
        type: 'speech',
        content: 'Agradeço ao Membro 4 pela exposição indispensável sobre a materialidade da preservação nos territórios indígenas e comunidades tradicionais. Assumo a palavra para tratar de uma dimensão que muitas vezes é deliberadamente silenciada ou higienizada nos debates estritamente tecnocráticos sobre o clima: a dimensão da violência no campo, a economia política da degradação e o conceito de Racismo Ambiental. Não é possível construir uma discussão eticamente honesta sobre o ponto de não retorno ignorando o sangue que é derramado no solo da floresta. Enquanto formulamos métricas de carbono em gabinetes refrigerados, lideranças comunitárias e defensores ambientais colocam suas vidas em risco diário para manter as árvores em pé.'
      },
      {
        type: 'projection',
        content: 'Destacar os três cards estatísticos da seção de ameaças (CIMI, Global Witness e Fiocruz).'
      },
      {
        type: 'speech',
        content: 'Os dados documentados em nossa plataforma revelam um quadro estarrecedor: Primeiro, os relatórios oficiais do Conselho Indigenista Missionário (CIMI) e da Comissão Pastoral da Terra (CPT) documentam anualmente mais de 1.100 ocorrências de violência possessória, invasões territoriais clandestinas, ameaças de morte e omissões de socorro contra populações originárias e camponesas no Brasil. Segundo, a ONG internacional Global Witness, que monitora a violência letal contra defensores da terra e do meio ambiente em todo o planeta, posiciona sistematicamente o Brasil entre os três países mais perigosos do mundo para ativistas socioambientais. Assassinatos emblemáticos de lideranças indígenas, sem-terra, seringueiros e indigenistas não são incidentes isolados: são o resultado de uma engrenagem de esbulho possessório promovida pelo crime ambiental organizado. Terceiro, além do confronto direto, há a violência química invisível: pesquisas laboratoriais rigorosas conduzidas pela Fundação Oswaldo Cruz (Fiocruz) revelaram que em aldeias das etnias Munduruku e Yanomami, impactadas pelo garimpo ilegal de ouro, até 92% dos indivíduos examinados apresentam teores de mercúrio no sangue e no cabelo muito acima do limite máximo de segurança fixado pela Organização Mundial da Saúde (OMS). Esse mercúrio gera sequelas neurológicas irreversíveis, perda de visão, atrofia motora e malformações congênitas em recém-nascidos.'
      },
      {
        type: 'interaction',
        content: 'Apontar para os pontos de "O que caracteriza o Racismo Ambiental na Amazônia?".'
      },
      {
        type: 'speech',
        content: 'É dessa realidade material que emerge com toda a força o conceito sociológico e jurídico de Racismo Ambiental. Formulado no âmbito das teorias de justiça ambiental, o racismo ambiental demonstra como as consequências perversas, os custos ecológicos e as contaminações químicas do desenvolvimento predatório recaem com peso desmedido sobre grupos étnicos marginalizados, negros, quilombolas e populações indígenas. Na Amazônia, a equação é brutal: Os povos da floresta são os que historicamente menos emitiram gases de efeito estufa e os que menos lucram com a especulação financeira das commodities; no entanto, são eles os primeiros e mais violentamente atingidos quando os cursos d\'água são envenenados por mercúrio e pesticidas; são eles que inalam a fuligem tóxica das queimadas criminosas durante meses seguidos de seca; e são eles que sofrem o assédio armado e a criminalização quando reivindicam o direito constitucional de viver em suas terras ancestrais.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #demarcacao: "Demarcação, Fiscalização e Soberania Climática". Destacar a Diretriz 01 sobre o Artigo 231 e o box de síntese governamental.'
      },
      {
        type: 'speech',
        content: 'Diante desse quadro, qual é o instrumento estruturante garantido pela ordem jurídica do Estado brasileiro para conter o colapso? É o Artigo 231 da Constituição Federal de 1988. A Constituição Cidadã consagrou uma ruptura histórica com o paradigma assimilacionista anterior. Ela estabeleceu que os direitos dos povos indígenas sobre as terras que tradicionalmente ocupam são direitos originários. Isso significa que o direito territorial indígena é congênito, imprescritível e pré-existe à própria criação do Estado brasileiro. O ato formal de demarcação realizado pelo Poder Executivo não tem natureza constitutiva — o Estado não está "doando" terra pública aos indígenas. O ato é puramente declaratório: o Estado apenas reconhece e delimita os contornos de um direito que já existia antes do Brasil existir como nação independente.'
      },
      {
        type: 'speech',
        content: 'E a ciência econômica do clima já demonstrou isso com números contundentes: relatórios do Banco Mundial, do Programa das Nações Unidas para o Desenvolvimento (PNUD) e do Science Panel for the Amazon atestam que demarcar e homologar Terras Indígenas é a estratégia de conservação com a melhor relação custo-benefício por tonelada de carbono evitada e por hectare preservado em todo o planeta. É incomparavelmente mais barato e eficaz assegurar a posse a quem cuida da terra do que mobilizar recursos tardios de remediação tecnológica. Contudo, como destacamos em nosso site, o direito no papel é letra morta sem o braço ostensivo da fiscalização ambiental. O monitoramento por satélite do INPE nos diz onde a árvore cai; mas o satélite não embarga a fazenda clandestina, não desmonta a draga do garimpo e não desarticula o crime de colarinho branco que lava o ouro ilegal e a madeira de grilagem. É imprescindível dotar órgãos como IBAMA, ICMBio, Polícia Federal e FUNAI de orçamento robusto, autonomia operacional e poder de polícia pleno para destruir o maquinário de destruição em campo.'
      },
      {
        type: 'projection',
        content: 'Rolar até a seção #conexao: "Um sistema. Múltiplas dimensões". Destacar a matriz de quatro quadrantes que cruza as dimensões biofísicas com a proteção territorial.'
      },
      {
        type: 'speech',
        content: 'Chegando ao ápice do nosso seminário, convido todos a fixarem o olhar na seção que coroa o nosso projeto: "Um sistema. Múltiplas dimensões". O propósito maior da nossa pesquisa foi demonstrar que a crise da Amazônia não pode ser compartimentada em caixas isoladas: Primeiro, não existe física dos Rios Voadores sem a preservação da copa contínua garantida pelas Terras Indígenas. Segundo, o limiar de 20% a 25% de Lovejoy e Nobre só não foi ultrapassado ainda porque as TIs contiveram a perda florestal abaixo de 2% nas últimas quatro décadas. Terceiro, o balanço de carbono desvelado por Luciana Gatti comprova que a floresta vira emissora onde o fogo e a invasão de terras prosperam, e permanece equilibrada onde os povos tradicionais governam seu território. E quarto, a água que sai das torneiras e irriga as lavouras no centro-sul do Brasil depende da segurança física e jurídica das populações que resistem no solo amazônico.'
      },
      {
        type: 'projection',
        content: 'Rolar brevemente pela seção #referencias, evidenciando o acervo de periódicos (Nature, Science, Science Advances, INPE, MapBiomas, CIMI) e finalizando no #footer.'
      },
      {
        type: 'speech',
        content: 'Todas as evidências apresentadas — artigos revisados por pares com DOIs ativos, relatórios oficiais, coordenadas e séries cartográficas — estão documentadas e indexadas no catálogo de referências do site para consulta e auditoria de qualquer pesquisador. Concluímos com uma mensagem definitiva: a Amazônia não precisa de discursos vazios de benevolência paternalista; a Amazônia exige justiça histórica, rigor científico e cumprimento da Constituição. Evitar o ponto de não retorno é uma urgência que depende de três decisões inadiáveis: desmatamento zero imediato, restauração ecológica ativa do Arco Oriental e demarcação soberana de todas as Terras Indígenas e territórios quilombolas do país. Sem seus povos, a floresta cai; e sem a floresta, o clima da América do Sul e o futuro das próximas gerações entram em colapso. Agradecemos profundamente a atenção de todos e estamos prontos para a arguição da banca examinadora. Muito obrigado!'
      }
    ]
  }
];
