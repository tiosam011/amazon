export interface NavItem {
  id: string;
  label: string;
  axis?: 'eixo1' | 'eixo2' | 'geral';
}

export interface FeedbackLoopStep {
  step: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  mechanism: string;
  warningNote?: string;
  impactLevel: 'moderado' | 'alto' | 'crítico';
}

export interface FlyingRiverPhase {
  id: string;
  phaseNumber: number;
  title: string;
  metric: string;
  metricLabel: string;
  scientificExplanation: string;
  sourceNote: string;
}

export interface CarbonRegionData {
  region: string;
  role: 'Fonte Líquida' | 'Sumidouro Neutro';
  emissionsAnnual: string; // Ex: +0.29 GtC/ano
  deforestationLevel: string;
  precipitationTrend: string;
  temperatureAnomaly: string;
  scientificContext: string;
  paperRef: string;
}

export interface TerritoryComparison {
  territoryType: string;
  vegetationLoss30Years: string;
  deforestationStatus: string;
  legalStatus: string;
  keyVulnerability: string;
  environmentalRole: string;
}

export interface CaseStudyTI {
  name: string;
  ethnicity: string;
  state: string;
  areaKm2: string;
  conservationRate: string;
  mainThreat: string;
  resistanceStrategy: string;
  sourceAuthority: string;
}

export interface BibliographyEntry {
  id: string;
  category: 'artigo' | 'relatorio' | 'institucional' | 'cartografia';
  authors: string;
  year: number;
  title: string;
  journalOrPublisher: string;
  doiOrUrl?: string;
  summary: string;
  sectionsReferenced: string[];
}
