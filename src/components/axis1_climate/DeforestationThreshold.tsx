import React from 'react';
import { DEFORESTATION_THRESHOLD_DATA } from '../../data/scientificData';
import { Percent, ShieldAlert, BarChart3, Layers, BookOpen } from 'lucide-react';

export const DeforestationThreshold: React.FC = () => {
  return (
    <section
      id="limiar"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e0a] border-b border-[#142820]"
      aria-labelledby="heading-limiar-20-25"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d97706] uppercase tracking-widest mb-2">
            <Percent className="w-3.5 h-3.5" />
            Climatologia Teórica &bull; Modelagem de Risco
          </div>
          <h3
            id="heading-limiar-20-25"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            O Limiar Científico de 20% a 25%
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Como um cálculo de sensibilidade biofísica formulado por Carlos Nobre e Thomas Lovejoy transformou o debate 
            global sobre a resiliência da bacia amazônica.
          </p>
        </div>

        {/* Central Threshold Graphic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09130e] border border-[#1c3b2c] p-6 sm:p-8 rounded-sm mb-10">
          {/* Big Number Editorial Block */}
          <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#1c3b2c] pb-6 lg:pb-0 lg:pr-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#74c69d] block mb-2">
              Intervalo Estimado de Transição
            </span>
            <div className="font-editorial text-6xl sm:text-7xl md:text-8xl font-normal text-[#f7f9f6] tracking-tighter leading-none mb-3">
              20%<span className="text-[#d97706] font-light">–</span>25%
            </div>
            <p className="font-serif italic text-sm text-[#d3e0d8] leading-snug">
              &ldquo;Faixa associada a uma hipótese científica histórica sobre o risco de transição da floresta.&rdquo;
            </p>
            <div className="mt-4 pt-3 border-t border-[#15291f] text-[11px] font-mono text-[#5c7768]">
              Nobre & Lovejoy (Science Advances, 2018 / 2019)
            </div>
          </div>

          {/* Academic Context & Limits */}
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#9eb4a6] leading-relaxed">
            <h4 className="font-serif text-base sm:text-lg text-[#f7f9f6] font-medium">
              Origem e Significado da Hipótese
            </h4>
            <p>
              Ao cruzarem simulações de circulação geral da atmosfera com a taxa de perda de biomassa, os pesquisadores 
              Carlos Nobre e Thomas Lovejoy projetaram que, ao se atingir uma supressão acumulada entre 20% e 25% da cobertura florestal 
              original da bacia, o ciclo hidrológico entraria em colapso nas porções leste, sul e central do bioma.
            </p>
            <p>
              Esse limiar, contudo, <strong>não funciona como um relógio aritmético uniforme</strong>. 
              O colapso não espera um valor nacional exato: a degradação já produz efeitos severos em escala microrregional muito antes 
              de a média pan-amazônica atingir o número teórico.
            </p>
          </div>
        </div>

        {/* Real Data vs. Conceptual Threshold Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-sm bg-[#09130e] border border-[#15291f]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#52b788] mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              Média Geral da Amazônia Legal
            </div>
            <div className="font-mono text-2xl font-bold text-[#f7f9f6] mb-1">
              {DEFORESTATION_THRESHOLD_DATA.currentStatusLegalAmazon.split(' ')[1]} {DEFORESTATION_THRESHOLD_DATA.currentStatusLegalAmazon.split(' ')[2]} {DEFORESTATION_THRESHOLD_DATA.currentStatusLegalAmazon.split(' ')[3]}
            </div>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              {DEFORESTATION_THRESHOLD_DATA.currentStatusLegalAmazon}
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#09130e] border border-[#a25c31]/40">
            <div className="flex items-center gap-2 text-xs font-mono text-[#d97706] mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              Arco do Desmatamento
            </div>
            <div className="font-mono text-2xl font-bold text-[#f7f9f6] mb-1">
              {DEFORESTATION_THRESHOLD_DATA.arcOfDeforestationStatus.split(' ')[0]} {DEFORESTATION_THRESHOLD_DATA.arcOfDeforestationStatus.split(' ')[1]} {DEFORESTATION_THRESHOLD_DATA.arcOfDeforestationStatus.split(' ')[2]} {DEFORESTATION_THRESHOLD_DATA.arcOfDeforestationStatus.split(' ')[3]}
            </div>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              {DEFORESTATION_THRESHOLD_DATA.arcOfDeforestationStatus}
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#09130e] border border-[#15291f]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#98c1d9] mb-2">
              <Layers className="w-3.5 h-3.5" />
              Degradação Florestal Oculta
            </div>
            <div className="font-mono text-2xl font-bold text-[#f7f9f6] mb-1">
              Até 38%
            </div>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              {DEFORESTATION_THRESHOLD_DATA.degradationImpact}
            </p>
          </div>
        </div>

        {/* Epistemological Balance Box */}
        <div className="p-5 rounded-sm bg-[#0e1b14] border border-[#1c3b2c] text-xs sm:text-sm text-[#a8b8af] space-y-3">
          <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-[#52b788] text-xs font-semibold">
            <BookOpen className="w-4 h-4" />
            Evolução Recente das Pesquisas (Science Panel for the Amazon - SPA)
          </div>
          <p className="leading-relaxed">
            As avaliações científicas mais recentes indicam que <strong>a interação entre desmatamento local e o aquecimento global 
            planetário antecipa os riscos</strong>. Um aquecimento médio global de +1,5°C a +2,0°C reduz o limiar seguro de desmatamento 
            para patamares ainda mais restritivos. Tratar o número de forma descontextualizada como se restasse uma &ldquo;margem segura 
            para desmatar até 20%&rdquo; constitui um grave equívoco de política pública.
          </p>
        </div>
      </div>
    </section>
  );
};
