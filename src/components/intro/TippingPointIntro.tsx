import React, { useState } from 'react';
import { AlertCircle, Activity, Info } from 'lucide-react';

export const TippingPointIntro: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bacia' | 'fatores' | 'incertezas'>('bacia');

  return (
    <section
      id="conceito"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-t border-[#142820]"
      aria-labelledby="heading-ponto-de-inflexao"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#74c69d] mb-3">
            <Activity className="w-3.5 h-3.5" />
            Fundamentação Teórica
          </div>
          <h2
            id="heading-ponto-de-inflexao"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f9f6] tracking-tight leading-tight mb-4"
          >
            O que é, afinal, um <br />
            <span className="text-[#52b788] italic">Ponto de Não Retorno</span> ecológico?
          </h2>
          <p className="font-serif text-lg text-[#b8c7bf] max-w-3xl leading-relaxed">
            Na ecologia contemporânea e na termodinâmica de sistemas complexos, o <em>tipping point</em> (ponto de inflexão) 
            descreve o limiar crítico a partir do qual uma perturbação externa modesta é capaz de disparar uma transição qualitativa, 
            abrupta e frequentemente irreversível no regime de um ecossistema.
          </p>
        </div>

        {/* Editorial Body: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#9eb4a6] leading-relaxed">
            <p>
              A floresta amazônica não subsiste apenas como receptora passiva do clima tropical: ela é a 
              <strong> produtora primária do seu próprio microclima</strong>. Graças à transpiração de centenas de bilhões de árvores, 
              o bioma recicla sua água entre cinco e seis vezes à medida que as massas de ar se deslocam do Oceano Atlântico até os Andes.
            </p>
            <p>
              Todavia, quando a remoção de cobertura florestal ultrapassa a capacidade de bombeamento hídrico, a atmosfera local 
              perde vapor, a estação seca se dilata e o índice de umidade despenca. Sob essas condições, o sistema atinge uma 
              bifurcação dinâmica: a vegetação florestal densa perde sua resiliência e não consegue mais se regenerar após distúrbios, 
              cedendo lugar a formações abertas empobrecidas, análogas a savanas degradadas.
            </p>
            
            {/* Scientific Caveat Callout */}
            <div className="p-4 rounded-sm border-l-2 border-[#d97706] bg-[#1a1710] text-xs sm:text-sm text-[#e6cfb3] leading-normal">
              <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-[#d97706] font-semibold mb-1">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Cuidado Metodológico Fundamental
              </div>
              O ponto de inflexão <strong>não é um evento datado em calendário</strong> nem uma previsão fatalista inevitável. 
              Trata-se de uma zona de risco estatístico e termodinâmico calculada por modelos de circulação global acoplados à biofísica vegetal. 
              Diferenciar a hipótese de risco do determinismo cego é o primeiro passo para uma atuação preventiva rigorosa.
            </div>
          </div>

          {/* Interactive Conceptual Card */}
          <div className="lg:col-span-5 bg-[#0f1f16] border border-[#1c3b2c] p-6 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1c3b2c] mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#74c69d]">
                  Bifurcação de Estados
                </span>
                <span className="font-mono text-[11px] text-[#5c7768]">Dinâmica de Sistemas</span>
              </div>

              {/* Sub-tabs inside conceptual card */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('bacia')}
                  className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === 'bacia'
                      ? 'bg-[#1b382d] text-[#52b788] border border-[#27523d]'
                      : 'text-[#8ca396] hover:text-white'
                  }`}
                >
                  Bacia de Atração
                </button>
                <button
                  onClick={() => setActiveTab('fatores')}
                  className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === 'fatores'
                      ? 'bg-[#1b382d] text-[#52b788] border border-[#27523d]'
                      : 'text-[#8ca396] hover:text-white'
                  }`}
                >
                  Fatores Sinérgicos
                </button>
                <button
                  onClick={() => setActiveTab('incertezas')}
                  className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                    activeTab === 'incertezas'
                      ? 'bg-[#1b382d] text-[#52b788] border border-[#27523d]'
                      : 'text-[#8ca396] hover:text-white'
                  }`}
                >
                  Incertezas & Modelos
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === 'bacia' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#09130e] rounded border border-[#142820] text-xs space-y-2">
                    <p className="font-medium text-[#f7f9f6] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#52b788]" />
                      Estado A: Floresta Densa Pluvial
                    </p>
                    <p className="text-[#8ca396]">
                      Bacia de atração profunda e autorregulada: a umidade gerada pelas árvores sustenta a chuva necessária para a sobrevivência das próprias árvores.
                    </p>
                  </div>
                  <div className="p-3 bg-[#09130e] rounded border border-[#142820] text-xs space-y-2">
                    <p className="font-medium text-[#d97706] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                      Estado B: Savana Secundária Degradada
                    </p>
                    <p className="text-[#8ca396]">
                      Bacia alternativa empobrecida: biomassa rasteira inflamável, déficit hídrico permanente e incapacidade de retornar ao dossel fechado sem intervenção massiva.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'fatores' && (
                <div className="space-y-2 text-xs text-[#9eb4a6]">
                  <p className="border-b border-[#15291f] pb-1.5">
                    <strong className="text-[#f7f9f6]">1. Supressão Vegetal:</strong> Corte raso e estradas que fracionam o tecido florestal contínuo.
                  </p>
                  <p className="border-b border-[#15291f] pb-1.5">
                    <strong className="text-[#f7f9f6]">2. Aquecimento Global:</strong> Elevação térmica de fundo que acelera a evaporação superficial do solo.
                  </p>
                  <p className="border-b border-[#15291f] pb-1.5">
                    <strong className="text-[#f7f9f6]">3. Secas Extremas:</strong> Oscilações anômalas no Atlântico Tropical e no Pacífico (El Niño).
                  </p>
                  <p>
                    <strong className="text-[#f7f9f6]">4. Ignição Antrópica:</strong> Queimadas sistemáticas para abertura e renovação de pastos.
                  </p>
                </div>
              )}

              {activeTab === 'incertezas' && (
                <div className="space-y-2 text-xs text-[#9eb4a6]">
                  <p>
                    A comunidade científica não converge sobre um limiar aritmético único (por exemplo, 20% ou 25%), pois o impacto é 
                    <strong> espacialmente heterogêneo</strong>.
                  </p>
                  <p>
                    O leste e sul da Amazônia já experimentam sintomas avançados de ressecamento, enquanto o oeste mantém alta estabilidade biofísica. 
                    Portanto, o ponto de inflexão pode se manifestar primeiro em mosaico regional antes de se tornar um colapso pan-amazônico.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#1c3b2c] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5c7768]">
              <span>Fonte: SPA Assessment Report (2021)</span>
              <Info className="w-3.5 h-3.5 text-[#52b788]" />
            </div>
          </div>
        </div>

        {/* 3 Epistemological Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#1c3b2c] pt-8">
          <div className="p-4 rounded border border-[#15291f] bg-[#0c1812]/50">
            <span className="font-mono text-xs text-[#52b788] block mb-1">01 / Não-Linearidade</span>
            <h3 className="font-serif text-base font-semibold text-[#f7f9f6] mb-1.5">Degradação Desproporcional</h3>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              Pequenos aumentos adicionais no desmatamento podem produzir quedas exponenciais na precipitação, quebrando a proporcionalidade direta.
            </p>
          </div>

          <div className="p-4 rounded border border-[#15291f] bg-[#0c1812]/50">
            <span className="font-mono text-xs text-[#52b788] block mb-1">02 / Histerese Ecológica</span>
            <h3 className="font-serif text-base font-semibold text-[#f7f9f6] mb-1.5">Dificuldade de Retorno</h3>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              Uma vez cruzado o limiar para savana degradada, restaurar a floresta exigirá condições climáticas muito mais favoráveis do que as que permitiram sua perda.
            </p>
          </div>

          <div className="p-4 rounded border border-[#15291f] bg-[#0c1812]/50">
            <span className="font-mono text-xs text-[#52b788] block mb-1">03 / Escala Continental</span>
            <h3 className="font-serif text-base font-semibold text-[#f7f9f6] mb-1.5">Impacto Extraterritorial</h3>
            <p className="text-xs text-[#8ca396] leading-relaxed">
              O descolamento hídrico atinge diretamente as hidrelétricas, safras agrícolas e o abastecimento de água do centro-sul da América do Sul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
