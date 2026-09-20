import React from 'react';
import { CloudRain, Wind, ThermometerSnowflake } from 'lucide-react';

export const Axis1Header: React.FC = () => {
  return (
    <div id="eixo-1" className="pt-20 pb-12 border-b border-[#1c3b2c] bg-[#060e0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[#7dd3fc] uppercase tracking-widest mb-3">
          <span className="px-2 py-0.5 rounded bg-[#1c3b2c] text-[#52b788] border border-[#27523d]">
            Eixo 01
          </span>
          <span>Científico &bull; Climático &bull; Termodinâmico</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f7f9f6] tracking-tight leading-tight mb-4">
          A mecânica do colapso
        </h2>

        <p className="font-serif italic text-lg sm:text-xl text-[#98c1d9] max-w-3xl leading-relaxed mb-6">
          &ldquo;Como a floresta influencia o clima continental e como a degradação estrutural pode comprometer esse equilíbrio.&rdquo;
        </p>

        <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
          O bioma amazônico opera como um condensador e distribuidor termodinâmico planetário. As árvores profundas não apenas 
          absorvem radiação solar: elas convertem essa energia em calor latente por meio da evapotranspiração, alimentando corredores 
          aéreos de umidade que regulam o balanço térmico do planeta.
        </p>

        {/* Rapid Biophysical Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-3.5 rounded bg-[#09130e] border border-[#15291f] flex items-center gap-3">
            <div className="p-2 rounded bg-[#142820] text-[#7dd3fc]">
              <CloudRain className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-mono text-base font-bold text-[#f7f9f6]">≈ 20 bi t/dia</span>
              <span className="text-[11px] text-[#8ca396]">Evapotranspiração líquida</span>
            </div>
          </div>

          <div className="p-3.5 rounded bg-[#09130e] border border-[#15291f] flex items-center gap-3">
            <div className="p-2 rounded bg-[#142820] text-[#52b788]">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-mono text-base font-bold text-[#f7f9f6]">5 a 6 vezes</span>
              <span className="text-[11px] text-[#8ca396]">Reciclagem interna de vapor</span>
            </div>
          </div>

          <div className="p-3.5 rounded bg-[#09130e] border border-[#15291f] flex items-center gap-3">
            <div className="p-2 rounded bg-[#142820] text-[#d97706]">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-mono text-base font-bold text-[#f7f9f6]">20% a 25%</span>
              <span className="text-[11px] text-[#8ca396]">Faixa do limiar crítico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
