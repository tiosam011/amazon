import React, { useState } from 'react';
import { FLYING_RIVERS_PHASES } from '../../data/scientificData';
import { Wind, AlertTriangle, HelpCircle } from 'lucide-react';

export const FlyingRiversDiagram: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = FLYING_RIVERS_PHASES[activePhaseIndex];

  return (
    <section
      id="rios-voadores"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-b border-[#142820]"
      aria-labelledby="heading-rios-voadores"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#7dd3fc] uppercase tracking-widest mb-2">
            <Wind className="w-3.5 h-3.5" />
            Biofísica Atmosférica &bull; Seção Interativa
          </div>
          <h3
            id="heading-rios-voadores"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            A Dinâmica dos Rios Voadores
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Correntes aéreas invisíveis de vapor de água percorrem milhares de quilômetros sobre a América do Sul. 
            A integridade das florestas do norte é a condição física para a segurança hídrica e a produtividade agrícola do centro-sul.
          </p>
        </div>

        {/* Interactive Conceptual SVG Flow Canvas */}
        <div className="bg-[#060e0a] rounded-sm border border-[#1c3b2c] p-4 sm:p-6 mb-8 relative overflow-hidden">
          {/* Header Bar of Diagram */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#15291f] mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="font-mono text-xs text-[#f7f9f6] uppercase tracking-wider">
                Esquema Conceitual do Fluxo Atmosférico
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#74c69d]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clique nas 4 etapas para analisar cada mecanismo</span>
            </div>
          </div>

          {/* Interactive Phase Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {FLYING_RIVERS_PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`text-left p-3 rounded-sm border transition-all ${
                    isActive
                      ? 'bg-[#15291f] border-[#38bdf8] text-[#f7f9f6] shadow-lg'
                      : 'bg-[#09130e] border-[#15291f] text-[#8ca396] hover:border-[#27523d] hover:text-[#d3e0d8]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#7dd3fc]">
                    Fase 0{phase.phaseNumber}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-medium leading-snug block mt-0.5">
                    {idx === 0 && 'A Bomba Biótica'}
                    {idx === 1 && 'Advecção & Alísios'}
                    {idx === 2 && 'Barreira dos Andes'}
                    {idx === 3 && 'Chuvas no Centro-Sul'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[360px] bg-[#081510] rounded border border-[#142820] flex items-center justify-center p-4">
            <svg
              viewBox="0 0 900 360"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Representação vetorial conceitual do fluxo dos rios voadores na América do Sul"
            >
              {/* Background Geographic Silhouette (Stylized South America) */}
              <path
                d="M 280 50 C 450 40, 680 70, 720 130 C 740 180, 620 220, 580 270 C 530 330, 480 340, 430 330 C 370 310, 320 240, 300 180 C 270 120, 240 80, 280 50 Z"
                fill="#0d2117"
                stroke="#1c3b2c"
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Atlantic Ocean Moisture Injection (Phase 2 & 1) */}
              <g className={`transition-opacity duration-300 ${activePhaseIndex === 1 ? 'opacity-100' : 'opacity-60'}`}>
                <path
                  d="M 820 100 C 760 110, 680 120, 580 120"
                  stroke="#38bdf8"
                  strokeWidth={activePhaseIndex === 1 ? '4' : '2'}
                  strokeDasharray="6 6"
                  className="animate-pulse"
                />
                <text x="730" y="85" fill="#93c5fd" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="1">
                  Ventos Alísios (Oceano Atlântico)
                </text>
              </g>

              {/* Dense Forest Canopy Evapotranspiration Area (Phase 1) */}
              <g className={`transition-opacity duration-300 ${activePhaseIndex === 0 ? 'opacity-100' : 'opacity-70'}`}>
                {/* Stylized Canopy Trees */}
                <circle cx="500" cy="140" r="28" fill="#1b4332" stroke="#52b788" strokeWidth={activePhaseIndex === 0 ? '2' : '1'} />
                <circle cx="450" cy="155" r="32" fill="#2d6a4f" stroke="#74c69d" strokeWidth={activePhaseIndex === 0 ? '2' : '1'} />
                <circle cx="550" cy="160" r="30" fill="#1b4332" stroke="#52b788" strokeWidth="1" />
                <circle cx="490" cy="180" r="35" fill="#2d6a4f" stroke="#52b788" strokeWidth={activePhaseIndex === 0 ? '2.5' : '1'} />

                {/* Upward Evaporation Arrows */}
                <path d="M 450 120 Q 455 100, 450 80" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M 490 130 Q 495 110, 490 90" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M 530 125 Q 535 105, 530 85" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />

                <text x="440" y="65" fill="#74c69d" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600">
                  Evapotranspiração (20 bi t/dia)
                </text>
              </g>

              {/* Andes Mountain Wall (Phase 3) */}
              <g className={`transition-opacity duration-300 ${activePhaseIndex === 2 ? 'opacity-100' : 'opacity-70'}`}>
                {/* Mountain Peaks Silhouette */}
                <polygon points="310,60 330,120 300,180 320,240 290,320 270,310 280,230 260,170 290,110 280,60" fill="#263b31" stroke="#52b788" strokeWidth="1.5" />
                <text x="235" y="195" fill="#d3e0d8" fontSize="12" fontFamily="Newsreader" fontStyle="italic" transform="rotate(-75 235 195)">
                  Cordilheira dos Andes (4.000m)
                </text>
                {/* Deflection Curve */}
                <path
                  d="M 430 150 Q 340 180, 370 240 Q 410 290, 520 310"
                  stroke="#38bdf8"
                  strokeWidth={activePhaseIndex === 2 ? '5' : '3'}
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Continental Rain Distribution to Center-South (Phase 4) */}
              <g className={`transition-opacity duration-300 ${activePhaseIndex === 3 ? 'opacity-100' : 'opacity-70'}`}>
                {/* Rain Distribution Droplets */}
                <path d="M 460 270 L 460 285 M 485 280 L 485 295 M 510 265 L 510 280 M 535 290 L 535 305" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="510" cy="290" r="16" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
                
                <text x="500" y="335" fill="#93c5fd" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600">
                  Precipitação no Centro-Sul & Bacia do Prata
                </text>
              </g>
            </svg>

            {/* Subtle Overlay Note */}
            <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#5c7768] bg-[#060e0a]/80 px-2 py-0.5 rounded border border-[#15291f]">
              Esquema Conceitual &bull; Nobre, A. D. / Marengo et al.
            </div>
          </div>

          {/* Detailed Scientific Card for Selected Phase */}
          <div className="p-4 sm:p-5 rounded bg-[#0b1711] border border-[#1c3b2c] grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#1c3b2c] pb-3 md:pb-0 md:pr-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc] block mb-1">
                Fase 0{currentPhase.phaseNumber} de 04
              </span>
              <h4 className="font-editorial text-lg sm:text-xl text-[#f7f9f6] font-medium mb-1">
                {currentPhase.title}
              </h4>
              <div className="mt-2 inline-block px-2.5 py-1 rounded bg-[#142820] border border-[#27523d] text-xs font-mono text-[#74c69d]">
                <span className="font-bold text-[#f7f9f6]">{currentPhase.metric}</span>
                <span className="text-[#8ca396] block text-[10px]">{currentPhase.metricLabel}</span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-2">
              <p className="text-xs sm:text-sm text-[#c2cec7] leading-relaxed">
                {currentPhase.scientificExplanation}
              </p>
              <p className="text-[11px] font-mono text-[#74c69d]">
                <strong>Evidência:</strong> {currentPhase.sourceNote}
              </p>
            </div>
          </div>
        </div>

        {/* Epistemological Warning Box */}
        <div className="p-4 rounded border border-[#27523d] bg-[#0c1812] flex items-start gap-3 text-xs text-[#8ca396]">
          <AlertTriangle className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#e8ece9]">Nota de Rigor Acadêmico:</strong> Este diagrama representa uma síntese esquemática dos fluxos atmosféricos de grande escala documentados pela teoria da Bomba Biótica (Makarieva & Gorshkov) e pesquisas de circulação de jatos de baixos níveis (Marengo et al., INPE). Não substitui saídas numéricas de modelos sinóticos ou dados de radiossondagem em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
};
