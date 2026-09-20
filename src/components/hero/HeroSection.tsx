import React from 'react';
import { ArrowDown, CloudRain, Shield, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060e0a]"
      aria-label="Abertura do seminário acadêmico"
    >
      {/* Background with Atmospheric Canopy & Mist Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=80"
          alt="Dossel da floresta amazônica coberto por névoa úmida e evapotranspiração matinal"
          className="w-full h-full object-cover object-center scale-105 opacity-30 filter saturate-75 brightness-75 transition-transform duration-1000"
          loading="eager"
        />
        {/* Editorial Gradients for Readability and Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e0a] via-[#060e0a]/80 to-[#060e0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e0a] via-[#060e0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-topo-grid opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-left">
        {/* Academic Tag & Context */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded border border-[#27523d] bg-[#0f1f16]/90 backdrop-blur-sm text-xs font-mono text-[#74c69d] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#52b788] animate-pulse" />
          Seminário Projeto de Vida
        </div>

        {/* Main Title - Pure Editorial Stature */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#f7f9f6] leading-[1.05] mb-6">
          AMAZÔNIA <br className="hidden sm:inline" />
          <span className="text-[#a8b8af] font-light">E PONTO DE</span> <br />
          <span className="text-[#f7f9f6] font-medium border-b-2 border-[#52b788]/60 pb-1">
            NÃO RETORNO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#cdd8d2] max-w-3xl leading-relaxed mb-6 font-normal">
          &ldquo;Os limites de um ecossistema, os mecanismos do colapso climático e as pessoas que protegem a floresta.&rdquo;
        </p>

        {/* Framing Abstract */}
        <div className="max-w-2xl text-sm sm:text-base text-[#9eb4a6] leading-relaxed mb-10 border-l-2 border-[#27523d] pl-4 sm:pl-5 space-y-2">
          <p>
            A bacia amazônica não é um reservatório passivo de vegetação, mas um sistema biofísico de alta complexidade. 
            Sua estabilidade térmica e hídrica depende do equilíbrio dinâmico entre a transpiração da floresta, a dinâmica das 
            chuvas continentais e a salvaguarda territorial garantida pelos povos originários e comunidades tradicionais.
          </p>
        </div>

        {/* The Two Axes Cards / Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-12">
          <a
            href="#eixo-1"
            className="group p-4 rounded-sm border border-[#1c3b2c] bg-[#0c1812]/90 hover:border-[#52b788]/60 hover:bg-[#12241b] transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#74c69d] uppercase tracking-wider flex items-center gap-1.5">
                <CloudRain className="w-3.5 h-3.5 text-[#52b788]" />
                Eixo 1 &bull; Biofísico
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5c7768] group-hover:text-[#52b788] transition-colors" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#f7f9f6] group-hover:text-[#52b788] transition-colors">
              A Mecânica do Colapso & Rios Voadores
            </h2>
            <p className="text-xs text-[#8ca396] mt-1.5">
              Evapotranspiração, o limiar de 20%–25%, o ciclo de retroalimentação e a assimetria do balanço de carbono.
            </p>
          </a>

          <a
            href="#eixo-2"
            className="group p-4 rounded-sm border border-[#1c3b2c] bg-[#0c1812]/90 hover:border-[#a25c31]/60 hover:bg-[#1b1914] transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#c28242] uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#a25c31]" />
                Eixo 2 &bull; Territorial & Social
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5c7768] group-hover:text-[#c28242] transition-colors" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#f7f9f6] group-hover:text-[#c28242] transition-colors">
              A Barreira Viva contra o Tipping Point
            </h2>
            <p className="text-xs text-[#8ca396] mt-1.5">
              Terras Indígenas como freio ao desmatamento, manejo sustentável, racismo ambiental e demarcação constitucional.
            </p>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#5c7768]">
          <a
            href="#conceito"
            className="flex items-center gap-2 hover:text-[#52b788] transition-colors group"
            aria-label="Rolar para a introdução sobre o ponto de não retorno"
          >
            <span className="p-1 rounded-full border border-[#1c3b2c] group-hover:border-[#52b788]">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </span>
            <span>Introdução aos pontos de inflexão ecológicos</span>
          </a>
        </div>
      </div>
    </section>
  );
};
