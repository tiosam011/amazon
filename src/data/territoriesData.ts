import type { TerritoryComparison, CaseStudyTI } from '../types/seminar';

export const TERRITORY_COMPARISONS: TerritoryComparison[] = [
  {
    territoryType: 'Terras Indígenas Homologadas (TIs)',
    vegetationLoss30Years: '1,6% a 2,0%',
    deforestationStatus: 'Forte barreira contra desmatamento',
    legalStatus: 'Art. 231 CF/88 — Posse originária inalienável',
    keyVulnerability: 'Invasões ilegais de garimpo, extração madeireira e assédio de grileiros',
    environmentalRole: 'Estocam mais de 27% do carbono aéreo da Amazônia Legal e mantêm integridade hídrica'
  },
  {
    territoryType: 'Unidades de Conservação de Uso Sustentável (RESEX / RDS)',
    vegetationLoss30Years: '4,0% a 6,5%',
    deforestationStatus: 'Perda contida, pressão nas bordas',
    legalStatus: 'SNUC (Lei 9.985/2000)',
    keyVulnerability: 'Falta de fiscalização contínua e conflitos de regularização fundiária',
    environmentalRole: 'Conservação associada ao extrativismo de castanha, borracha e manejo sustentável de pesca'
  },
  {
    territoryType: 'Propriedades Privadas Registradas (CAR)',
    vegetationLoss30Years: '28,0% a 34,5%',
    deforestationStatus: 'Maior volume absoluto de perda de vegetação',
    legalStatus: 'Código Florestal (Lei 12.651/2012) — Reserva Legal de 80%',
    keyVulnerability: 'Conversão para pastagem extensiva e monoculturas de grãos',
    environmentalRole: 'Frequente descumprimento do passivo ambiental e fracionamento de remanescentes'
  },
  {
    territoryType: 'Terras Públicas Não Destinadas (Florestas Públicas)',
    vegetationLoss30Years: '30,0% a 42,0%',
    deforestationStatus: 'Principal vetor de nova fronteira de desmatamento',
    legalStatus: 'Terras devolutas da União e dos Estados sem destinação agrária/ambiental',
    keyVulnerability: 'Grilagem especulativa via autodeclarações fraudulentas no CAR e queima criminosa',
    environmentalRole: 'Áreas sem governança ativa que sofrem a pressão mais destrutiva do crime organizado'
  }
];

export const INDIGENOUS_CASE_STUDIES: CaseStudyTI[] = [
  {
    name: 'Terra Indígena Yanomami',
    ethnicity: 'Yanomami e Ye\'kwana (além de grupos isolados Moxihatëtëa)',
    state: 'Roraima e Amazonas',
    areaKm2: '96.650 km²',
    conservationRate: '98,2% de vegetação primária conservada',
    mainThreat: 'Invasão massiva de garimpo ilegal com contaminação mercurial das bacias dos rios Uraricoera e Mucajaí, destruição do leito dos rios e crise humanitária de saúde.',
    resistanceStrategy: 'Articulação de lideranças através da Hutukara Associação Yanomami, protocolos de monitoramento aéreo comunitário e denúncias internacionais aos órgãos de direitos humanos.',
    sourceAuthority: 'Hutukara Associação Yanomami / ISA / Ministério dos Povos Indígenas (MPI)'
  },
  {
    name: 'Terra Indígena Kayapó',
    ethnicity: 'Mebêngôkre (Kayapó)',
    state: 'Pará (sul do estado)',
    areaKm2: '32.840 km²',
    conservationRate: '97,4% de floresta contínua preservada',
    mainThreat: 'Pressão voraz do agronegócio e de garimpos clandestinos na borda leste do Arco do Desmatamento.',
    resistanceStrategy: 'Vigilância territorial autônoma com postos de fiscalização gerenciados pelo Instituto Kabu e Associação Floresta Protegida, combinada ao manejo comunitário de castanha-do-brasil.',
    sourceAuthority: 'Instituto Kabu / Associação Floresta Protegida / MapBiomas'
  },
  {
    name: 'Reserva de Desenvolvimento Sustentável Mamirauá',
    ethnicity: 'Comunidades Ribeirinhas Tradicionais',
    state: 'Amazonas (médio Solimões)',
    areaKm2: '11.240 km²',
    conservationRate: '99,1% de ecossistemas de várzea intactos',
    mainThreat: 'Pesca predatória ilegal e alterações hidrológicas extremas provocadas por secas históricas.',
    resistanceStrategy: 'Manejo comunitário participativo do pirarucu (Arapaima gigas), que resultou em aumento de mais de 400% na população da espécie e geração de renda justa para os moradores.',
    sourceAuthority: 'Instituto de Desenvolvimento Sustentável Mamirauá (IDSM / MCTI)'
  }
];

export const TRADITIONAL_KNOWLEDGE_PILLARS = [
  {
    title: 'Florestas Socioculturais e Domesticação Milenar',
    description: 'A Amazônia contemporânea não é um vazio ecológico intocado, mas uma paisagem coevoluída com a presença humana ao longo de mais de 12.000 anos. Pesquisas arqueobotânicas comprovam que castanhais, cacauais e as ricas "Terras Pretas de Índio" são legados de enriquecimento do solo e seleção de espécies realizados por povos ancestrais.',
    keyConcept: 'Paisagem Cultural Biocêntrica'
  },
  {
    title: 'Sistemas Agroflorestais (SAFs) e Policultura',
    description: 'Em contraste com a monocultura que requer desmatamento total e agrotóxicos pesados, os manejos tradicionais e quilombolas consorciam árvores de dossel com frutíferas, tubérculos e ervas medicinais, simulando a estratificação da mata, conservando a serapilheira e mantendo os fluxos de evapotranspiração ativos.',
    keyConcept: 'Resiliência Estrutural do Solo'
  },
  {
    title: 'Manejo de Recursos Hídricos e Ictiofauna',
    description: 'Protocolos de pesca artesanal que respeitam os ciclos de cheia e vazante dos rios ("tempo das águas" e "tempo da praia"), estabelecendo acordos comunitários de lagos de reprodução intocados e cotas sustentáveis que impedem o esgotamento dos cardumes.',
    keyConcept: 'Governança Comunitária de Bens Comuns'
  },
  {
    title: 'Redes de Coleta e Regeneração de Sementes',
    description: 'Iniciativas como a Rede de Sementes do Xingu articulam centenas de coletores indígenas, assentados e ribeirinhos que coletam dezenas de toneladas de sementes florestais nativas anualmente para restauração de nascentes e matas ciliares degradadas no entorno das bacias.',
    keyConcept: 'Restauração Ecológica Conectada'
  }
];

export const THREATS_AND_CONFLICTS_DATA = {
  cimiStats: {
    conflictsYear: 'Relatório CIMI (2022-2023)',
    keyStat1: 'Mais de 1.100 casos de omissão de socorro, conflitos fundiários e invasões a territórios indígenas no país em um único biênio.',
    keyStat2: 'Brasil recorrentemente listado entre os três países mais letais do mundo para defensores ambientais e lideranças territoriais (Global Witness).',
    mercuryContamination: 'Estudos da Fiocruz revelam contaminação por mercúrio acima do limite seguro da OMS em até 92% das pessoas avaliadas em aldeias próximas a garimpos no Tapajós e Yanomami.'
  },
  environmentalRacism: {
    definition: 'O racismo ambiental manifesta-se na imposição desproporcional dos custos ecológicos e da contaminação do desenvolvimento predatório sobre grupos étnicos marginalizados e povos da floresta, que são expropriados de seus modos de vida sem acesso aos benefícios econômicos gerados pela destruição de seus territórios.',
    manifestations: [
      'Contaminação dos peixes e da água potável por mercúrio e agrotóxicos lixiviados.',
      'Inalação crônica de fumaça e fuligem por meses a fio durante as queimadas ilegais de pasto.',
      'Insegurança jurídica e morosidade proposital nos processos de demarcação e titulação territorial.',
      'Criminalização e assassinato de lideranças comunitárias que defendem as matas.'
    ]
  }
};

export const DEMARCATION_POLICY_PILLARS = [
  {
    pillar: 'O Mandato Constitucional (Artigo 231)',
    detail: 'A Constituição Federal de 1988 estabelece que os direitos dos indígenas sobre as terras que tradicionalmente ocupam são originários — anteriores à própria formação do Estado brasileiro. O ato de demarcação não "concede" a terra, mas tão somente reconhece formalmente um direito pré-existente.'
  },
  {
    pillar: 'Custo-Benefício na Mitigação Climática',
    detail: 'Estudos do Banco Mundial e do Science Panel for the Amazon (SPA) comprovam que titular Terras Indígenas e territórios quilombolas é a estratégia de preservação com a melhor relação custo-benefício por tonelada de carbono mantida e hectare protegido em toda a zona tropical.'
  },
  {
    pillar: 'Fiscalização Integrada e Presença do Estado',
    detail: 'O monitoramento por satélite (DETER/PRODES/INPE) é uma ferramenta científica indispensável, mas atinge eficácia máxima somente quando conectado à fiscalização ostensiva em campo por órgãos ambientais (IBAMA, ICMBio, PF) munidos de poder de embargo, apreensão e inutilização de maquinário criminoso.'
  },
  {
    pillar: 'Desafios Atuais de Governança',
    detail: 'Tentativas de restrição de direitos territoriais (como teses retrógradas de Marco Temporal), asfixia orçamentária dos órgãos indigenistas e a judicialização prolongada representam vulnerabilidades críticas que enfraquecem a barreira viva da floresta.'
  }
];
