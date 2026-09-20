import type { FeedbackLoopStep, FlyingRiverPhase, CarbonRegionData } from '../types/seminar';

export const FLYING_RIVERS_PHASES: FlyingRiverPhase[] = [
  {
    id: 'evapotranspiracao',
    phaseNumber: 1,
    title: 'A Bomba Biótica e Evapotranspiração',
    metric: '≈ 20 bilhões de t/dia',
    metricLabel: 'de vapor d\'água bombeados na atmosfera',
    scientificExplanation: 'Árvores de grande porte com raízes de até 15 metros de profundidade acessam a umidade do lençol freático e realizam transpiração contínua. Uma única árvore de copa larga pode bombear mais de 1.000 litros de água para a atmosfera diariamente, transformando a floresta em um motor termodinâmico.',
    sourceNote: 'Nobre, A. D. (2014) — O Futuro Climático da Amazônia; Makarieva & Gorshkov (2007).'
  },
  {
    id: 'alisios',
    phaseNumber: 2,
    title: 'Advecção e Ventos Alísios',
    metric: 'Ventos Alísios de Leste',
    metricLabel: 'transporte contínuo do Oceano Atlântico',
    scientificExplanation: 'A baixa pressão atmosférica gerada pela intensa condensação sobre a floresta atrai massas de ar carregadas de umidade marítima pelo Atlântico Equatorial. Esse vapor é continuamente reciclado pela cobertura florestal à medida que avança para o interior do continente.',
    sourceNote: 'Makarieva et al. (Biotic Pump Theory); Marengo et al. (INPE).'
  },
  {
    id: 'andes',
    phaseNumber: 3,
    title: 'Barreira Orográfica dos Andes',
    metric: '4.000 m de altitude',
    metricLabel: 'desvio das massas para o centro-sul',
    scientificExplanation: 'Ao atingir o paredão rochoso da Cordilheira dos Andes no extremo oeste da bacia, os fluxos de vapor não conseguem transpor a barreira e são defletidos para o sul e sudeste, organizando-se em jatos de baixos níveis (JBN) que cruzam o continente.',
    sourceNote: 'Marengo, J. A. et al. (2004) — Low-level jet east of the Andes; IPCC AR6.'
  },
  {
    id: 'precipitacao',
    phaseNumber: 4,
    title: 'Distribuição Pluviométrica Continental',
    metric: 'Até 70% das chuvas',
    metricLabel: 'na bacia do Prata e Sudeste/Centro-Oeste no verão',
    scientificExplanation: 'A umidade transportada alimenta os sistemas meteorológicos que abastecem reservatórios hidroelétricos, centros urbanos e a agricultura no Centro-Oeste, Sudeste e Sul do Brasil, além de Paraguai, Uruguai e Argentina. Sem a floresta íntegra, esse regime sofre quebra de regularidade.',
    sourceNote: 'Marengo et al. (2016); Sparovek et al.; Fearnside, P. (INPA).'
  }
];

export const DEFORESTATION_THRESHOLD_DATA = {
  range: '20% a 25%',
  concept: 'Hipótese de Transição em Escala Biômica (Nobre & Lovejoy, 2018)',
  currentStatusLegalAmazon: '≈ 17% a 18% de desmatamento acumulado por corte raso (PRODES/INPE)',
  arcOfDeforestationStatus: '> 30% a 35% de desmatamento em regiões críticas do Arco Sul e Leste',
  degradationImpact: 'Até 38% da floresta remanescente afetada por degradação (Lapola et al., Science 2023)',
  methodologyClarification: 'O limiar de 20%-25% não é uma data de calendário rígida ou um botão liga-desliga uniforme. Modelos biofísicos indicam que a combinação de corte raso com o aquecimento global (acima de 2°C a 2,5°C) e a proliferação de secas extremas pode romper a capacidade de autorregulação das chuvas, iniciando uma savanização secundária irreversível nas porções leste, central e sul.'
};

export const FEEDBACK_LOOP_STEPS: FeedbackLoopStep[] = [
  {
    step: 1,
    title: 'Supressão da Vegetação (Desmatamento)',
    shortDesc: 'Remoção direta da biomassa por corte raso e abertura de clareiras.',
    fullDesc: 'A perda da cobertura arbórea expõe o solo à radiação solar direta, elimina o estrato vegetal que amortecia ventos e rompe a ciclagem local de nutrientes.',
    mechanism: 'Perda imediata de dossel e aumento da temperatura do solo em até 4°C a 8°C.',
    impactLevel: 'moderado'
  },
  {
    step: 2,
    title: 'Queda Drástica na Evapotranspiração',
    shortDesc: 'Menos árvores profundas bombeando água para a atmosfera.',
    fullDesc: 'Pastagens e culturas anuais possuem raízes superficiais (menos de 1 metro) que secam rapidamente na estiagem, reduzindo o volume de vapor devolvido à atmosfera em mais de 60% comparado à mata primária.',
    mechanism: 'Redução do calor latente e elevação do calor sensível na coluna atmosférica local.',
    impactLevel: 'alto'
  },
  {
    step: 3,
    title: 'Alteração do Regime de Chuvas',
    shortDesc: 'Atraso de semanas no início da estação chuvosa e menor volume pluviométrico.',
    fullDesc: 'Com menos umidade no ar reciclada pela floresta, a atmosfera necessita de mais tempo para atingir o ponto de orvalho, prolongando a estação seca em até 1 mês no sul e leste da Amazônia.',
    mechanism: 'Desregulação das células de convecção e enfraquecimento dos jatos atmosféricos de umidade.',
    impactLevel: 'alto'
  },
  {
    step: 4,
    title: 'Secas Severas e Estresse Hídrico',
    shortDesc: 'Déficit persistente de água no solo e mortalidade arbórea.',
    fullDesc: 'Árvores de grande biomassa não conseguem manter a condução hídrica por embolia nos vasos condutores de xilema. Registra-se aumento na taxa de mortalidade de espécies da floresta madura.',
    mechanism: 'Colapso hidráulico vegetal e acúmulo de serapilheira seca no chão da floresta.',
    impactLevel: 'crítico'
  },
  {
    step: 5,
    title: 'Vulnerabilidade Extrema ao Fogo',
    shortDesc: 'Incêndios provocados escapam e penetram no interior da mata degradada.',
    fullDesc: 'Na floresta primária intocada, a alta umidade impede a propagação de fogo no sub-bosque. Com o microclima ressecado e serapilheira inflamável, queimas de pasto e fogo antrópico transformam-se em incêndios florestais descontrolados.',
    warningNote: 'Diferenciação científica: os incêndios na Amazônia não são fenômenos espontâneos de combustão estival; são quase invariavelmente deflagrados por ignição antrópica associada à limpeza de pastagens e grilagem.',
    mechanism: 'Infiltração de fogo rasteiro que queima raízes superficiais e mata até 50% das árvores jovens.',
    impactLevel: 'crítico'
  },
  {
    step: 6,
    title: 'Degradação e Savanização Secundária',
    shortDesc: 'Substituição estrutural por vegetação empobrecida e inflamável.',
    fullDesc: 'Áreas queimadas repetidamente perdem a arquitetura florestal complexa, abrindo espaço para gramíneas invasoras, espécies pioneiras e bambuzais, com perda drástica de biodiversidade e biomassa estocada.',
    mechanism: 'Transição estrutural irreversível sob condições climáticas desfavoráveis à regeneração natural.',
    impactLevel: 'crítico'
  },
  {
    step: 7,
    title: 'Retroalimentação Positiva do Colapso',
    shortDesc: 'O sistema degradado reforça o aquecimento e as secas regionais.',
    fullDesc: 'A nova paisagem degradada evapotranspira ainda menos e emite carbono em vez de absorver, expandindo as condições de seca para as florestas vizinhas ainda intactas, empurrando o bioma rumo ao limiar irreversível.',
    mechanism: 'Loop fechado de reforço não-linear (positive feedback loop).',
    impactLevel: 'crítico'
  }
];

export const CARBON_BALANCE_DATA: {
  studyOverview: string;
  sourceAuthority: string;
  regions: CarbonRegionData[];
  keyFinding: string;
  scientificCaveat: string;
} = {
  studyOverview: 'Estudo pioneiro liderado por Luciana Gatti (INPE), publicado na revista Nature (2021), analisou 590 perfis aéreos verticais de dióxido de carbono (CO2) e monóxido de carbono (CO) de 2010 a 2018 sobre quatro quadrantes estratégicos da bacia amazônica.',
  sourceAuthority: 'Gatti, L. V. et al. (2021). Amazonia as a carbon source linked to deforestation and fires. Nature, 595, 388–393.',
  regions: [
    {
      region: 'Amazônia Oriental (Sudeste / Pará e Mato Grosso)',
      role: 'Fonte Líquida',
      emissionsAnnual: '+0,27 a +0,33 gC m⁻² d⁻¹',
      deforestationLevel: '> 25% a 35% de desmatamento acumulado',
      precipitationTrend: '-24% a -34% de chuva nos meses de seca',
      temperatureAnomaly: '+1,9°C a +2,5°C durante a estação seca',
      scientificContext: 'Nas regiões com desmatamento superior a 20%, a combinação de queimadas para abertura de pastagens com o estresse térmico fez as emissões superarem a absorção fotossintética da floresta.',
      paperRef: 'Nature 595 (2021) — Estações Alta Floresta e Santarém'
    },
    {
      region: 'Amazônia Ocidental (Noroeste / Tefé e Tabatinga)',
      role: 'Sumidouro Neutro',
      emissionsAnnual: '-0,02 a +0,04 gC m⁻² d⁻¹ (quase neutro)',
      deforestationLevel: '< 10% a 14% de desmatamento acumulado',
      precipitationTrend: 'Precipitação relativamente estável',
      temperatureAnomaly: '+0,4°C a +0,8°C de variação térmica',
      scientificContext: 'Onde a cobertura florestal contínua foi preservada, a vegetação mantém alta umidade, índices baixos de fogo e continua exercendo sua função de reter e estocar carbono.',
      paperRef: 'Nature 595 (2021) — Estações Rio Branco e Tefé'
    }
  ],
  keyFinding: 'A Amazônia não se comporta de forma homogênea: enquanto o oeste ainda resiste, o leste e sudeste tornaram-se fontes líquidas de carbono para a atmosfera, impulsionadas principalmente por queimadas antrópicas e secas prolongadas.',
  scientificCaveat: 'É incorreto generalizar que "toda a floresta amazônica já virou emissora". O estudo demonstra assimetria regional geográfica e destaca a urgência de estancar o desmatamento no Arco oriental para evitar a propagação do desequilíbrio para o oeste preservado.'
};
