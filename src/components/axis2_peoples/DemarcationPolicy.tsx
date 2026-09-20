import React from 'react';
import { DEMARCATION_POLICY_PILLARS } from '../../data/territoriesData';
import { Landmark, FileCheck2 } from 'lucide-react';

export const DemarcationPolicy: React.FC = () => {
  return (
    <section
      id="demarcacao"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e0a] border-b border-[#142820]"
      aria-labelledby="heading-demarcacao-fiscalizacao"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#52b788] uppercase tracking-widest mb-2">
            <Landmark className="w-3.5 h-3.5" />
            Políticas Públicas &bull; Governança Territorial
          </div>
          <h3
            id="heading-demarcacao-fiscalizacao"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            Demarcação, Fiscalização e Soberania Climática
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Como a segurança jurídica territorial e o poder de polícia ambiental articulam a defesa mais sólida contra o colapso sistêmico do bioma.
          </p>
        </div>

        {/* The 4 Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {DEMARCATION_POLICY_PILLARS.map((item, idx) => (
            <div
              key={item.pillar}
              className="p-5 rounded-sm bg-[#09130e] border border-[#1c3b2c] space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#15291f]">
                <span className="font-mono text-[11px] text-[#52b788] uppercase tracking-wider">
                  Diretriz 0{idx + 1}
                </span>
                <FileCheck2 className="w-3.5 h-3.5 text-[#52b788]" />
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#f7f9f6] font-medium">
                {item.pillar}
              </h4>
              <p className="text-xs sm:text-sm text-[#8ca396] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Comparative Analytical Synthesis */}
        <div className="bg-[#09130e] border border-[#1c3b2c] p-6 rounded-sm space-y-4">
          <h4 className="font-editorial text-lg sm:text-xl text-[#f7f9f6] font-medium">
            A Eficácia Integrada: Satélites, Lei e Presença em Campo
          </h4>
          <p className="text-xs sm:text-sm text-[#a8b8af] leading-relaxed">
            Nenhuma tecnologia isolada é suficiente. O monitoramento por satélite (DETER/PRODES) informa com precisão quase cirúrgica 
            onde as motosserras avançam em tempo quase real; no entanto, sem a presença ostensiva de agentes de fiscalização em campo 
            (IBAMA, ICMBio e forças de segurança pública), equipados com o poder legal de embargar áreas criminosas e apreender equipamentos, 
            o dado científico permanece como mero espectador da destruição.
          </p>
          <div className="pt-3 border-t border-[#15291f] text-xs font-serif italic text-[#c2cec7]">
            &ldquo;Demarcar não é concessão paternalista de terras: é o cumprimento do pacto constitucional republicano de 1988 e a blindagem biofísica dos rios que irrigam o Brasil.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
};
