import type { BibliographyEntry } from '../types/seminar';

export const BIBLIOGRAPHY_ENTRIES: BibliographyEntry[] = [
  {
    id: 'nobre-lovejoy-2018',
    category: 'artigo',
    authors: 'Lovejoy, T. E., & Nobre, C. A.',
    year: 2018,
    title: 'Amazon tipping point',
    journalOrPublisher: 'Science Advances, 4(2), eaat2340',
    doiOrUrl: 'https://doi.org/10.1126/sciadv.aat2340',
    summary: 'Artigo seminal que formalizou a hipótese do limiar de 20% a 25% de desmatamento acumulado como o intervalo crítico em que o ciclo hídrico da bacia amazônica pode deixar de se auto-sustentar, desencadeando um processo de savanização não linear.',
    sectionsReferenced: ['O Limiar de 20% a 25%', 'A Mecânica do Colapso']
  },
  {
    id: 'lovejoy-nobre-2019',
    category: 'artigo',
    authors: 'Lovejoy, T. E., & Nobre, C. A.',
    year: 2019,
    title: 'Amazon tipping point: Last chance for action',
    journalOrPublisher: 'Science Advances, 5(12), eaba2949',
    doiOrUrl: 'https://doi.org/10.1126/sciadv.aba2949',
    summary: 'Atualização do alerta científico, enfatizando que as secas extremas de 2005, 2010 e 2015/2016 e o prolongamento da estação seca no sul da Amazônia já representam os primeiros sinais empíricos de oscilação crítica do sistema.',
    sectionsReferenced: ['O Limiar de 20% a 25%', 'Ciclo de Retroalimentação']
  },
  {
    id: 'gatti-nature-2021',
    category: 'artigo',
    authors: 'Gatti, L. V., Basso, L. S., Miller, J. B., Gloor, M., Gatti, L., et al.',
    year: 2021,
    title: 'Amazonia as a carbon source linked to deforestation and fires',
    journalOrPublisher: 'Nature, 595, 388–393',
    doiOrUrl: 'https://doi.org/10.1038/s41586-021-03629-6',
    summary: 'Análise de cerca de 600 perfis aéreos verticais atmosféricos coletados ao longo de 9 anos pelo INPE. Demonstrou empiricamente que a porção sudeste da Amazônia tornou-se uma fonte líquida de carbono em decorrência do estresse hídrico e das queimadas agrícolas.',
    sectionsReferenced: ['A Amazônia como Emissora de Carbono']
  },
  {
    id: 'lapola-science-2023',
    category: 'artigo',
    authors: 'Lapola, D. M., Pinho, P., Barlow, J., Aragão, L. E. O. C., Berenguer, E., et al.',
    year: 2023,
    title: 'The drivers and impacts of Amazon forest degradation',
    journalOrPublisher: 'Science, 379(6630), eabp8622',
    doiOrUrl: 'https://doi.org/10.1126/science.abp8622',
    summary: 'Estudo fundamental que revelou que até 38% da floresta remanescente sofre com degradação (fogo no sub-bosque, extração seletiva, efeito de borda e secas), gerando perdas de carbono comparáveis ou superiores ao desmatamento por corte raso.',
    sectionsReferenced: ['O Limiar de 20% a 25%', 'Ciclo de Retroalimentação']
  },
  {
    id: 'nobre-ad-2014',
    category: 'relatorio',
    authors: 'Nobre, A. D.',
    year: 2014,
    title: 'O Futuro Climático da Amazônia: Relatório de Avaliação Científica',
    journalOrPublisher: 'Articulação Regional Amazônica (ARA) / CCST-INPE / INPA',
    doiOrUrl: 'https://www.inpa.gov.br',
    summary: 'Síntese monumental que popularizou e detalhou o conceito dos "Rios Voadores", a teoria da bomba biótica florestal e a vulnerabilidade da precipitação na América do Sul à degradação amazônica.',
    sectionsReferenced: ['Rios Voadores', 'A Mecânica do Colapso']
  },
  {
    id: 'spa-report-2021',
    category: 'institucional',
    authors: 'Science Panel for the Amazon (SPA)',
    year: 2021,
    title: 'Amazon Assessment Report 2021',
    journalOrPublisher: 'United Nations Sustainable Development Solutions Network (SDSN)',
    doiOrUrl: 'https://www.theamazonwewant.org',
    summary: 'Maior avaliação científica já realizada sobre o bioma amazônico, reunindo mais de 200 cientistas e lideranças indígenas para avaliar estados ecológicos, pontos de inflexão e alternativas de bioeconomia e direitos territoriais.',
    sectionsReferenced: ['Introdução ao Ponto de Inflexão', 'Demarcação e Fiscalização', 'Conexão Sistêmica']
  },
  {
    id: 'mapbiomas-2023',
    category: 'cartografia',
    authors: 'MapBiomas Brasil',
    year: 2023,
    title: 'Destaques do Mapeamento Anual da Cobertura e Uso da Terra no Brasil (1985-2022)',
    journalOrPublisher: 'Coleção 8 e 9 — Rede MapBiomas',
    doiOrUrl: 'https://mapbiomas.org',
    summary: 'Série histórica geoespacial de quase 4 décadas comprovando que as Terras Indígenas foram as áreas mais eficientes na conservação florestal em todo o território nacional, com menos de 2% de perda de vegetação primária.',
    sectionsReferenced: ['Terras Indígenas e Preservação', 'Eixo 2']
  },
  {
    id: 'inpe-prodes',
    category: 'institucional',
    authors: 'Instituto Nacional de Pesquisas Espaciais (INPE)',
    year: 2024,
    title: 'Programa de Monitoramento da Floresta Amazônica Brasileira por Satélite (PRODES / DETER)',
    journalOrPublisher: 'MCTI / INPE',
    doiOrUrl: 'http://terrabrasilis.dpi.inpe.br',
    summary: 'Sistema oficial do Estado brasileiro para estimativa anual de desmatamento por corte raso e alertas diários de supressão florestal, padrão ouro de monitoramento satelital mundial.',
    sectionsReferenced: ['O Limiar de 20% a 25%', 'Demarcação e Fiscalização']
  },
  {
    id: 'isa-2022',
    category: 'institucional',
    authors: 'Instituto Socioambiental (ISA)',
    year: 2022,
    title: 'Povos Indígenas no Brasil e Terras Indígenas',
    journalOrPublisher: 'ISA — Banco de Dados e Cartografia Territorial',
    doiOrUrl: 'https://terrasindigenas.org.br',
    summary: 'Monitoramento contínuo das 732 Terras Indígenas brasileiras, mapeando pressões, invasões, garimpos ilegais e a sobreposição fraudulenta de cadastros rurais.',
    sectionsReferenced: ['Terras Indígenas e Preservação', 'Ameaças e Violência no Campo']
  },
  {
    id: 'cimi-2023',
    category: 'relatorio',
    authors: 'Conselho Indigenista Missionário (CIMI)',
    year: 2023,
    title: 'Relatório de Violência contra os Povos Indígenas no Brasil (Dados de 2022 e 2023)',
    journalOrPublisher: 'CIMI — Conferência Nacional dos Bispos do Brasil',
    doiOrUrl: 'https://cimi.org.br',
    summary: 'Registro anual minucioso de conflitos fundiários, esbulho possessório, assassinatos de lideranças, desnutrição provocada por invasões e manifestações de racismo ambiental.',
    sectionsReferenced: ['Ameaças e Violência no Campo']
  }
];
