import React from 'react';
import { THREATS_AND_CONFLICTS_DATA } from '../../data/territoriesData';
import { ShieldAlert, AlertOctagon, Scale, FileSpreadsheet, Eye } from 'lucide-react';

export const ThreatsAndViolations: React.FC = () => {
  return (
    <section
      id="ameacas"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-b border-[#142820]"
      aria-labelledby="heading-ameacas-violencia"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d97706] uppercase tracking-widest mb-2">
            <AlertOctagon className="w-3.5 h-3.5" />
            Conflitos Fundiários &bull; Direitos Humanos
          </div>
          <h3
            id="heading-ameacas-violencia"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            Ameaças Territoriais e Racismo Ambiental
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            A contenção do ponto de não retorno não ocorre no vácuo: os povos que protegem a floresta enfrentam pressões assimétricas, 
            violência sistemática no campo e a sobreposição predatória de cadeias produtivas ilegais.
          </p>
        </div>

        {/* Statistical Overview from CIMI / CPT / Fiocruz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-sm bg-[#060e0a] border border-[#3d2411] space-y-2">
            <div className="font-mono text-xs text-[#d97706] uppercase tracking-wider flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Relatório CIMI 2022/2023
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#f7f9f6]">
              &gt; 1.100 Ocorrências
            </div>
            <p className="text-xs text-[#a8b8af] leading-relaxed">
              Casos documentados de omissão de assistência, conflitos possessórios e invasões clandestinas a terras indígenas em dois anos.
            </p>
          </div>

          <div className="p-5 rounded-sm bg-[#060e0a] border border-[#3d2411] space-y-2">
            <div className="font-mono text-xs text-[#d97706] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Letalidade contra Lideranças
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#f7f9f6]">
              Entre os 3 mais letais
            </div>
            <p className="text-xs text-[#a8b8af] leading-relaxed">
              Posição recorrente do Brasil no levantamento anual da ONG Global Witness sobre assassinatos de defensores da terra e do meio ambiente.
            </p>
          </div>

          <div className="p-5 rounded-sm bg-[#060e0a] border border-[#3d2411] space-y-2">
            <div className="font-mono text-xs text-[#d97706] uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              Contaminação Mercurial
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#f7f9f6]">
              Até 92% da população
            </div>
            <p className="text-xs text-[#a8b8af] leading-relaxed">
              Apresenta níveis de mercúrio acima do limite da OMS em aldeias monitoradas pela Fiocruz nas bacias afetadas pelo garimpo ilegal.
            </p>
          </div>
        </div>

        {/* Environmental Racism Conceptual Framing */}
        <div className="bg-[#060e0a] border border-[#1c3b2c] p-6 sm:p-8 rounded-sm mb-8 space-y-6">
          <div className="border-b border-[#1c3b2c] pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d97706] block mb-1">
              Conceito Sociológico & Jurídico
            </span>
            <h4 className="font-editorial text-xl sm:text-2xl text-[#f7f9f6] font-medium">
              O que caracteriza o Racismo Ambiental na Amazônia?
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-[#c2cec7] leading-relaxed">
            {THREATS_AND_CONFLICTS_DATA.environmentalRacism.definition}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {THREATS_AND_CONFLICTS_DATA.environmentalRacism.manifestations.map((manifestation, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#09130e] rounded border border-[#15291f] text-xs text-[#a8b8af] flex items-start gap-2.5"
              >
                <span className="font-mono text-[#d97706] font-bold">0{idx + 1}.</span>
                <span className="leading-relaxed">{manifestation}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#15291f] text-[11px] font-mono text-[#5c7768] flex items-center justify-between">
            <span>Fontes: Conselho Indigenista Missionário (CIMI) &bull; Fundação Oswaldo Cruz (Fiocruz) &bull; Global Witness</span>
            <Eye className="w-3.5 h-3.5 text-[#52b788]" />
          </div>
        </div>
      </div>
    </section>
  );
};
