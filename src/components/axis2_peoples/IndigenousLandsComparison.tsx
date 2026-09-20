import React, { useState } from 'react';
import { TERRITORY_COMPARISONS, INDIGENOUS_CASE_STUDIES } from '../../data/territoriesData';
import { ShieldCheck, MapPin, AlertCircle, Info } from 'lucide-react';
import type { CaseStudyTI } from '../../types/seminar';

export const IndigenousLandsComparison: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudyTI>(INDIGENOUS_CASE_STUDIES[0]);

  return (
    <section
      id="terras-indigenas"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-b border-[#142820]"
      aria-labelledby="heading-terras-indigenas"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#52b788] uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Evidência Geoespacial &bull; Séries Temporais (1985–2022)
          </div>
          <h3
            id="heading-terras-indigenas"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            Terras Indígenas como Escudo da Floresta
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            O cruzamento de imagens de satélite Landsat e Sentinel ao longo de quatro décadas pelo projeto MapBiomas 
            demonstra uma disparidade categórica na preservação florestal conforme o regime fundiário.
          </p>
        </div>

        {/* Comparative Table / Grid of Territorial Regimes */}
        <div className="bg-[#060e0a] border border-[#1c3b2c] rounded-sm overflow-hidden mb-12">
          <div className="p-4 sm:p-5 border-b border-[#1c3b2c] flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#74c69d] block">
                Série Histórica MapBiomas (Coleções 8 e 9)
              </span>
              <span className="font-serif text-base text-[#f7f9f6] font-medium">
                Perda Líquida de Vegetação Nativa por Categoria Fundiária
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#5c7768] bg-[#0c1812] px-2.5 py-1 rounded border border-[#15291f]">
              Período Analisado: 1985 a 2022
            </span>
          </div>

          <div className="divide-y divide-[#15291f]">
            {TERRITORY_COMPARISONS.map((item, idx) => {
              const isTI = idx === 0;
              return (
                <div
                  key={item.territoryType}
                  className={`p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors ${
                    isTI ? 'bg-[#0e2117]/60' : 'hover:bg-[#0c1812]'
                  }`}
                >
                  <div className="md:col-span-4">
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#f7f9f6] block">
                      {item.territoryType}
                    </span>
                    <span className="text-[11px] font-mono text-[#74c69d]">
                      {item.legalStatus}
                    </span>
                  </div>

                  <div className="md:col-span-3">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-mono text-xl sm:text-2xl font-bold ${
                          isTI ? 'text-[#52b788]' : 'text-[#f59e0b]'
                        }`}
                      >
                        {item.vegetationLoss30Years}
                      </span>
                      <span className="text-[10px] text-[#8ca396]">perda acumulada</span>
                    </div>
                    <span className="text-xs text-[#8ca396] block">{item.deforestationStatus}</span>
                  </div>

                  <div className="md:col-span-5 text-xs text-[#9eb4a6] space-y-1">
                    <p>
                      <strong className="text-[#d3e0d8]">Papel Ecológico:</strong> {item.environmentalRole}
                    </p>
                    <p className="text-[#8ca396]">
                      <strong className="text-[#c28242]">Vulnerabilidade:</strong> {item.keyVulnerability}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-[#0a140f] border-t border-[#1c3b2c] text-[11px] font-mono text-[#5c7768] flex items-center justify-between">
            <span>Fonte Primária: MapBiomas Brasil &bull; Coleções 8 e 9 (Destaques Amazônia)</span>
            <Info className="w-3.5 h-3.5 text-[#52b788]" />
          </div>
        </div>

        {/* Case Studies: Yanomami, Kayapó, Mamirauá */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-editorial text-xl sm:text-2xl text-[#f7f9f6] font-normal">
              Estudos de Caso Documentados em Território
            </h4>
            <span className="text-xs font-mono text-[#8ca396]">Selecione uma área para analisar</span>
          </div>

          {/* Case Study Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {INDIGENOUS_CASE_STUDIES.map((c) => {
              const isSelected = selectedCase.name === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedCase(c)}
                  className={`p-3.5 rounded-sm border text-left transition-all ${
                    isSelected
                      ? 'bg-[#15291f] border-[#52b788] text-[#f7f9f6] shadow-md'
                      : 'bg-[#060e0a] border-[#15291f] text-[#8ca396] hover:border-[#27523d] hover:text-[#d3e0d8]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c28242] mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{c.state}</span>
                  </div>
                  <span className="font-serif text-sm sm:text-base font-semibold block text-[#f7f9f6]">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-[#74c69d] font-mono mt-1 block">
                    {c.conservationRate}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Case Card */}
          <div className="bg-[#060e0a] border border-[#1c3b2c] p-6 rounded-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#1c3b2c] gap-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#74c69d]">
                  Povo / Comunidade: {selectedCase.ethnicity}
                </span>
                <h5 className="font-editorial text-xl sm:text-2xl text-[#f7f9f6] font-medium">
                  {selectedCase.name} ({selectedCase.state})
                </h5>
              </div>
              <div className="font-mono text-xs text-[#8ca396] bg-[#142820] px-3 py-1.5 rounded border border-[#27523d]">
                Extensão: <strong className="text-[#f7f9f6]">{selectedCase.areaKm2}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#9eb4a6]">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#d97706] font-semibold block">
                  Ameaças & Pressões Externas
                </span>
                <p className="leading-relaxed bg-[#141009] p-3 rounded border border-[#3d2411] text-[#f1d0b1]">
                  {selectedCase.mainThreat}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#52b788] font-semibold block">
                  Estratégia de Resistência & Gestão Coletiva
                </span>
                <p className="leading-relaxed bg-[#0b1b13] p-3 rounded border border-[#1b3d2b] text-[#cfe3d6]">
                  {selectedCase.resistanceStrategy}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#15291f] flex items-center justify-between text-[11px] font-mono text-[#5c7768]">
              <span>Fonte Oficial: {selectedCase.sourceAuthority}</span>
              <span className="text-[#52b788]">Dados Cartográficos Consolidados</span>
            </div>
          </div>
        </div>

        {/* Epistemological Caveat */}
        <div className="p-4 rounded border border-[#27523d] bg-[#0c1812] flex items-start gap-3 text-xs text-[#8ca396]">
          <AlertCircle className="w-4 h-4 text-[#74c69d] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#e8ece9]">Cuidados Metodológicos de Comparação:</strong> As Terras Indígenas possuem 
            diferentes graus de isolamento geográfico e pressões demográficas. A eficiência ecológica das TIs decorre não de uma 
            &ldquo;inércia&rdquo;, mas sim da vigilância ativa de seus guardiões e da eficácia do arcabouço protetivo constitucional.
          </p>
        </div>
      </div>
    </section>
  );
};
