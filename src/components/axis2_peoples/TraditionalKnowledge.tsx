import React from 'react';
import { TRADITIONAL_KNOWLEDGE_PILLARS } from '../../data/territoriesData';
import { Trees } from 'lucide-react';

export const TraditionalKnowledge: React.FC = () => {
  return (
    <section
      id="saberes"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e0a] border-b border-[#142820]"
      aria-labelledby="heading-saberes-tradicionais"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#52b788] uppercase tracking-widest mb-2">
            <Trees className="w-3.5 h-3.5" />
            Ecologia Histórica &bull; Sistemas Socioecológicos
          </div>
          <h3
            id="heading-saberes-tradicionais"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            Saberes Tradicionais e Manejo Sustentável
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Longe de ser uma paisagem intocada e vazia, a floresta amazônica resulta de milênios de manejo biocultural. 
            Os modos de vida tradicionais não apenas conservam a mata, mas ampliam ativamente sua diversidade genética e funcional.
          </p>
        </div>

        {/* Framing Anthropology & Agroecology Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-5 rounded-sm bg-[#09130e] border border-[#1c3b2c] space-y-3">
            <span className="font-mono text-xs text-[#74c69d] uppercase tracking-wider block">
              Paradigma Antropocêntrico Predatório
            </span>
            <h4 className="font-serif text-lg text-[#f7f9f6] font-medium">
              A Lógica da &ldquo;Terra Arrasada&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-[#8ca396] leading-relaxed">
              O modelo econômico convencional impõe o desmatamento total da mata primária para implantar pastagens homogêneas de 
              braquiária ou monoculturas de grãos. O solo equatorial, desprovido do dossel que o protegia, sofre lixiviação 
              severa em poucos anos, exigindo adubação química intensiva e abertura contínua de novas fronteiras especulativas.
            </p>
          </div>

          <div className="p-5 rounded-sm bg-[#0d1f16] border border-[#27523d] space-y-3">
            <span className="font-mono text-xs text-[#52b788] uppercase tracking-wider block">
              Paradigma Biocultural dos Povos Originários
            </span>
            <h4 className="font-serif text-lg text-[#f7f9f6] font-medium">
              A Floresta Viva em Camadas
            </h4>
            <p className="text-xs sm:text-sm text-[#a8b8af] leading-relaxed">
              Povos indígenas, ribeirinhos e comunidades quilombolas desenvolveram tecnologias sofisticadas de convivência: 
              sistemas agroflorestais multiespecíficos que imitam a estratificação natural, respeitam os períodos de rotação e pousio 
              do solo e mantêm a circulação hídrica ininterrupta, garantindo soberania alimentar sem colapsar o dossel protetor.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Traditional Knowledge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {TRADITIONAL_KNOWLEDGE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 rounded-sm bg-[#09130e] border border-[#15291f] hover:border-[#27523d] transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#15291f]">
                <span className="font-mono text-[11px] text-[#52b788] uppercase tracking-wider">
                  Dimensão 0{idx + 1}
                </span>
                <span className="font-mono text-[10px] text-[#8ca396] px-2 py-0.5 rounded bg-[#142820]">
                  {pillar.keyConcept}
                </span>
              </div>
              <h5 className="font-serif text-base sm:text-lg text-[#f7f9f6] font-medium">
                {pillar.title}
              </h5>
              <p className="text-xs sm:text-sm text-[#8ca396] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note on Diversity & Heterogeneity */}
        <div className="p-4 rounded-sm bg-[#0e1712] border-l-2 border-[#52b788] text-xs sm:text-sm text-[#9eb4a6] leading-relaxed">
          <strong className="text-[#f7f9f6]">Diversidade e Não-Homogeneização:</strong> Não existe um único &ldquo;saber indígena&rdquo; 
          padronizado. A Amazônia abriga centenas de etnias com línguas de troncos diversos (Tupi, Karib, Aruak, Macro-Jê, Yanomami, Pano) 
          e ecologias adaptativas distintas — das terras firmes aos arquipélagos de várzea e igapó. Reconhecer essa pluralidade de governança 
          territorial é indispensável para desenhar políticas públicas respeitosas e eficazes.
        </div>
      </div>
    </section>
  );
};
