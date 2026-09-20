import React, { useState } from 'react';
import { CARBON_BALANCE_DATA } from '../../data/scientificData';
import { Scale, ArrowUpRight, ArrowDownRight, Plane, AlertTriangle, FileText } from 'lucide-react';

export const CarbonBalanceSection: React.FC = () => {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  const currentRegion = CARBON_BALANCE_DATA.regions[selectedRegionIndex];

  return (
    <section
      id="carbono"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e0a] border-b border-[#142820]"
      aria-labelledby="heading-balanco-carbono"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#74c69d] uppercase tracking-widest mb-2">
            <Scale className="w-3.5 h-3.5" />
            Balanço Geoquímico &bull; Pesquisa INPE
          </div>
          <h3
            id="heading-balanco-carbono"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            A Amazônia como Emissora de Carbono
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Historicamente considerada um dos maiores sumidouros terrestres de carbono do planeta, porções cruciais do bioma 
            já liberam mais CO₂ para a atmosfera do que são capazes de fixar.
          </p>
        </div>

        {/* Methodology & Context Header */}
        <div className="p-4 sm:p-5 rounded-sm bg-[#09130e] border border-[#1c3b2c] mb-8 text-xs sm:text-sm text-[#9eb4a6] space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#52b788] font-semibold uppercase">
            <Plane className="w-4 h-4" />
            Metodologia Observacional Rigorosa (2010–2018)
          </div>
          <p className="leading-relaxed">
            {CARBON_BALANCE_DATA.studyOverview}
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#5c7768]">
            {CARBON_BALANCE_DATA.sourceAuthority}
          </div>
        </div>

        {/* Regional Contrast Interactive Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CARBON_BALANCE_DATA.regions.map((reg, idx) => {
            const isSelected = selectedRegionIndex === idx;
            const isSource = reg.role === 'Fonte Líquida';
            return (
              <button
                key={reg.region}
                onClick={() => setSelectedRegionIndex(idx)}
                className={`px-4 py-2.5 rounded-sm border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  isSelected
                    ? isSource
                      ? 'bg-[#211208] border-[#b45309] text-[#f59e0b]'
                      : 'bg-[#0f1f16] border-[#52b788] text-[#74c69d]'
                    : 'bg-[#09130e] border-[#15291f] text-[#8ca396] hover:text-[#e8ece9]'
                }`}
                aria-pressed={isSelected}
              >
                {isSource ? (
                  <ArrowUpRight className="w-4 h-4 text-[#f59e0b]" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-[#52b788]" />
                )}
                <span>{reg.region}</span>
                <span className="font-mono text-[10px] uppercase opacity-75">
                  ({reg.role})
                </span>
              </button>
            );
          })}
        </div>

        {/* Regional Analysis Data Grid */}
        <div className="bg-[#09130e] border border-[#1c3b2c] p-6 sm:p-8 rounded-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1c3b2c] gap-2 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#5c7768]">
                Região Selecionada
              </span>
              <h4 className="font-editorial text-xl sm:text-2xl text-[#f7f9f6] font-medium">
                {currentRegion.region}
              </h4>
            </div>
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold uppercase ${
                currentRegion.role === 'Fonte Líquida'
                  ? 'bg-[#b45309]/20 text-[#f59e0b] border border-[#b45309]/60'
                  : 'bg-[#52b788]/20 text-[#74c69d] border border-[#52b788]/60'
              }`}
            >
              Comportamento: {currentRegion.role}
            </div>
          </div>

          {/* 4 Quantitative Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-3.5 bg-[#060e0a] rounded border border-[#15291f]">
              <span className="text-[10px] font-mono uppercase text-[#8ca396] block mb-1">
                Taxa Líquida de Carbono
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-[#f7f9f6] block">
                {currentRegion.emissionsAnnual}
              </span>
              <span className="text-[10px] text-[#5c7768]">gramas de C / m² / dia</span>
            </div>

            <div className="p-3.5 bg-[#060e0a] rounded border border-[#15291f]">
              <span className="text-[10px] font-mono uppercase text-[#8ca396] block mb-1">
                Desmatamento no Quadrante
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-[#f7f9f6] block">
                {currentRegion.deforestationLevel}
              </span>
              <span className="text-[10px] text-[#5c7768]">estimativa acumulada</span>
            </div>

            <div className="p-3.5 bg-[#060e0a] rounded border border-[#15291f]">
              <span className="text-[10px] font-mono uppercase text-[#8ca396] block mb-1">
                Déficit Pluviométrico
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-[#f7f9f6] block">
                {currentRegion.precipitationTrend}
              </span>
              <span className="text-[10px] text-[#5c7768]">durante a estiagem</span>
            </div>

            <div className="p-3.5 bg-[#060e0a] rounded border border-[#15291f]">
              <span className="text-[10px] font-mono uppercase text-[#8ca396] block mb-1">
                Aquecimento Local
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-[#f7f9f6] block">
                {currentRegion.temperatureAnomaly}
              </span>
              <span className="text-[10px] text-[#5c7768]">anomalia na estação seca</span>
            </div>
          </div>

          {/* Qualitative Scientific Context */}
          <div className="p-4 bg-[#0c1812] rounded border border-[#1c3b2c] text-xs sm:text-sm text-[#c2cec7] space-y-2">
            <p className="leading-relaxed">
              {currentRegion.scientificContext}
            </p>
            <div className="text-[11px] font-mono text-[#74c69d] flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Estações de Amostragem: {currentRegion.paperRef}</span>
            </div>
          </div>
        </div>

        {/* Rigorous Caveat */}
        <div className="p-4 rounded border border-[#d97706]/40 bg-[#1a140b] flex items-start gap-3 text-xs text-[#e6cfb3]">
          <AlertTriangle className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#f59e0b] block mb-0.5 font-mono uppercase">
              Ressalva Científica Obrigatória
            </strong>
            <p className="leading-relaxed">{CARBON_BALANCE_DATA.scientificCaveat}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
