import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b08] text-[#8ca396] border-t border-[#142820] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-[#1c3b2c] border border-[#52b788]/40 flex items-center justify-center text-[#52b788]">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif text-base font-semibold text-[#f7f9f6] tracking-tight">
                AMAZÔNIA <span className="text-[#a25c31]">/</span> PONTO DE NÃO RETORNO
              </span>
            </div>
            <p className="text-xs text-[#8ca396] max-w-md leading-relaxed">
              Plataforma digital editorial desenvolvida para suporte e documentação do seminário acadêmico interdisciplinar 
              sobre estabilidade climática, dinâmicas de savanização e direitos territoriais originários.
            </p>
          </div>

          {/* Quick Section Shortcuts */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-mono uppercase tracking-widest text-[#74c69d] text-[10px] block mb-1">
              Eixos Temáticos
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="#conceito" className="hover:text-[#52b788] transition-colors">O Ponto Crítico</a>
              </li>
              <li>
                <a href="#eixo-1" className="hover:text-[#52b788] transition-colors">1. Mecânica do Colapso</a>
              </li>
              <li>
                <a href="#rios-voadores" className="hover:text-[#52b788] transition-colors">Rios Voadores</a>
              </li>
              <li>
                <a href="#eixo-2" className="hover:text-[#52b788] transition-colors">2. Povos Tradicionais</a>
              </li>
              <li>
                <a href="#terras-indigenas" className="hover:text-[#52b788] transition-colors">Terras Indígenas</a>
              </li>
              <li>
                <a href="#conexao" className="hover:text-[#52b788] transition-colors">Síntese Sistêmica</a>
              </li>
            </ul>
          </div>

          {/* Academic & Data Credits */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-mono uppercase tracking-widest text-[#74c69d] text-[10px] block mb-1">
              Bases Públicas & Dados
            </span>
            <p className="text-[11px] leading-relaxed text-[#5c7768]">
              Dados geográficos e climáticos referenciados de: INPE/PRODES, MapBiomas Brasil, Nature (Gatti et al.), 
              Science Advances (Nobre & Lovejoy) e Conselho Indigenista Missionário (CIMI).
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#09130e] border border-[#1c3b2c] hover:border-[#52b788] text-xs font-mono text-[#f7f9f6] transition-colors"
                aria-label="Voltar ao início da página"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#52b788]" />
                <span>Voltar ao Início</span>
              </button>
            </div>
          </div>
        </div>

        {/* Seminar Academic Authorship Area (Discreet and unpolluted) */}
        <div className="pt-6 border-t border-[#142820] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#5c7768] gap-3">
          <p>
            Seminário Projeto de Vida
          </p>
          <p>
            developed by tiosam01
          </p>
        </div>
      </div>
    </footer>
  );
};
