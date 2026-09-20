import React from 'react';
import { GitMerge, CloudRain, Shield, ArrowRight } from 'lucide-react';

export const SystemicConnection: React.FC = () => {
  const connections = [
    {
      biophysical: 'Evapotranspiração & Rios Voadores',
      territorial: 'Terras Indígenas demarcadas impedem a fragmentação dos corredores contínuos de umidade.',
      nexus: 'A integridade da cobertura vegetal mantida pelos povos tradicionais viabiliza o bombeamento hídrico continental.'
    },
    {
      biophysical: 'Limiar de 20% a 25% (Nobre & Lovejoy)',
      territorial: 'As TIs e RESEXs contêm o avanço do corte raso abaixo de 2% de perda histórica.',
      nexus: 'Sem a demarcação das Terras Indígenas, o desmatamento acumulado da Amazônia brasileira já teria ultrapassado 25%.'
    },
    {
      biophysical: 'Amazônia como Emissora de Carbono (Gatti et al.)',
      territorial: 'Onde há posse territorial comunitária reconhecida, a taxa de queimadas antrópicas despenca.',
      nexus: 'A governança territorial é a ferramenta empírica mais eficaz para evitar a conversão da floresta de sumidouro em fonte de emissão.'
    },
    {
      biophysical: 'Ciclo de Retroalimentação e Fogo',
      territorial: 'Sistemas agroflorestais e saberes etnobotânicos preservam a umidade do microclima e a serapilheira viva.',
      nexus: 'O manejo indígena da paisagem constrói resistência biológica contra a infiltração de fogo no sub-bosque.'
    }
  ];

  return (
    <section
      id="conexao"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-b border-[#142820]"
      aria-labelledby="heading-sintese-sistemica"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#52b788] uppercase tracking-widest mb-3">
            <GitMerge className="w-3.5 h-3.5" />
            Síntese Conceitual Interdisciplinar
          </div>
          <h3
            id="heading-sintese-sistemica"
            className="font-editorial text-3xl sm:text-5xl text-[#f7f9f6] font-normal tracking-tight mb-4"
          >
            Um sistema. Múltiplas dimensões.
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-[#c2cec7] leading-relaxed">
            Separar a física da atmosfera amazônica da luta política pelos direitos territoriais dos povos da floresta 
            é um erro analítico que impede a compreensão da crise.
          </p>
        </div>

        {/* Matrix Visualization: Biophysical <-> Territorial */}
        <div className="space-y-4 mb-12">
          {connections.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-[#060e0a] border border-[#1c3b2c] hover:border-[#52b788]/60 transition-all grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              {/* Biophysical Axis */}
              <div className="lg:col-span-4 space-y-1">
                <span className="font-mono text-[10px] text-[#7dd3fc] uppercase tracking-wider flex items-center gap-1.5">
                  <CloudRain className="w-3 h-3 text-[#38bdf8]" />
                  Eixo 1 &bull; Dimensão Biofísica
                </span>
                <p className="font-serif text-sm sm:text-base font-medium text-[#f7f9f6]">
                  {item.biophysical}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <ArrowRight className="w-4 h-4 text-[#52b788]" />
              </div>

              {/* Territorial Axis */}
              <div className="lg:col-span-3 space-y-1">
                <span className="font-mono text-[10px] text-[#f59e0b] uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-[#a25c31]" />
                  Eixo 2 &bull; Salvaguarda Territorial
                </span>
                <p className="text-xs text-[#a8b8af] leading-relaxed">
                  {item.territorial}
                </p>
              </div>

              {/* Systemic Nexus */}
              <div className="lg:col-span-4 bg-[#0d1c14] p-3 rounded border border-[#1b3d2b] space-y-1">
                <span className="font-mono text-[10px] text-[#52b788] uppercase tracking-wider block font-semibold">
                  Nexo Sistêmico Comprovado
                </span>
                <p className="text-xs text-[#d3e0d8] leading-relaxed">
                  {item.nexus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Academic Takeaway */}
        <div className="p-6 rounded-sm bg-[#0c1812] border-l-4 border-[#52b788] text-xs sm:text-sm text-[#c2cec7] space-y-2">
          <h4 className="font-editorial text-lg text-[#f7f9f6] font-medium">
            Conclusão do Seminário: O Futuro da Floresta é Biocultural
          </h4>
          <p className="leading-relaxed">
            Salvar a Amazônia do ponto de não retorno não depende de geoengenharia atmosférica ou de soluções tecnológicas 
            descoladas do chão. Depende de uma escolha civilizatória clara: <strong>desmatamento zero imediato</strong>, restauração 
            ecológica ativa no Arco oriental e garantia irrestrita da demarcação e posse das Terras Indígenas e territórios tradicionais. 
            Sem seus povos, a floresta tomba; sem a floresta, o clima da América do Sul entra em colapso.
          </p>
        </div>
      </div>
    </section>
  );
};
