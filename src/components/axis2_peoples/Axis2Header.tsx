import React from 'react';
import { Award } from 'lucide-react';

export const Axis2Header: React.FC = () => {
  return (
    <div id="eixo-2" className="pt-20 pb-12 border-b border-[#1c3b2c] bg-[#060e0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[#c28242] uppercase tracking-widest mb-3">
          <span className="px-2 py-0.5 rounded bg-[#3d2113] text-[#f59e0b] border border-[#794327]">
            Eixo 02
          </span>
          <span>Justiça Climática &bull; Direitos Territoriais &bull; Etnoconservação</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f7f9f6] tracking-tight leading-tight mb-4">
          A barreira viva contra o ponto de não retorno
        </h2>

        <p className="font-serif italic text-lg sm:text-xl text-[#f3d3b0] max-w-3xl leading-relaxed mb-6">
          &ldquo;Território, conhecimento ancestral e proteção socioambiental em uma floresta sob pressão contínua.&rdquo;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 text-sm sm:text-base text-[#9eb4a6] leading-relaxed space-y-3">
            <p>
              As discussões biofísicas sobre o ponto de não retorno correm o risco de tratar a Amazônia como um laboratório desprovido de pessoas. 
              No entanto, a permanência da floresta em pé ao longo dos últimos cinco séculos não é um acidente geográfico, 
              mas o resultado direto da ocupação e da resistência de mais de <strong>400 povos indígenas</strong>, além de centenas de 
              comunidades ribeirinhas, quilombolas e seringueiros.
            </p>
            <p className="text-xs sm:text-sm text-[#8ca396]">
              A defesa dos direitos territoriais originários não é apenas um imperativo inegociável de direitos humanos: 
              é, comprovadamente, a medida de conservação climática e hídrica mais eficiente de que dispõe a humanidade.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#0d1812] border border-[#1c3b2c] p-4 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#c28242] uppercase font-semibold">
              <Award className="w-4 h-4" />
              Sociobiodiversidade em Números
            </div>
            <div className="space-y-2 text-xs text-[#8ca396]">
              <div className="flex justify-between border-b border-[#15291f] pb-1">
                <span>Terras Indígenas:</span>
                <span className="font-mono text-[#f7f9f6] font-semibold">&gt; 23% da Amazônia Legal</span>
              </div>
              <div className="flex justify-between border-b border-[#15291f] pb-1">
                <span>Carbono Aéreo Estocado:</span>
                <span className="font-mono text-[#f7f9f6] font-semibold">&gt; 27% do estoque total</span>
              </div>
              <div className="flex justify-between">
                <span>Perda de Mata em 30 Anos:</span>
                <span className="font-mono text-[#52b788] font-bold">&lt; 2,0% (MapBiomas)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
