import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Compass, Shield, CloudRain, GitMerge } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setIsScrolled(currentScroll > 40);

      // Section tracking
      const sections = ['inicio', 'conceito', 'eixo-1', 'rios-voadores', 'limiar', 'retroalimentacao', 'carbono', 'eixo-2', 'terras-indigenas', 'saberes', 'ameacas', 'demarcacao', 'conexao', 'referencias'];
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#conceito', label: 'O Conceito' },
    { href: '#eixo-1', label: '1. Ciência & Clima', icon: CloudRain },
    { href: '#eixo-2', label: '2. Povos Tradicionais', icon: Shield },
    { href: '#conexao', label: 'Síntese', icon: GitMerge },
    { href: '#referencias', label: 'Referências', icon: BookOpen }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09130e]/95 backdrop-blur-md border-b border-[#1c3b2c]/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#060e0a]/90 via-[#060e0a]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Seminar Title */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ir para o topo da página do seminário"
          >
            <div className="w-8 h-8 rounded-sm bg-[#1c3b2c] border border-[#52b788]/40 flex items-center justify-center text-[#52b788] group-hover:border-[#52b788] transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#74c69d]">
                Seminário Acadêmico
              </span>
              <span className="font-serif text-sm sm:text-base font-semibold text-[#f7f9f6] tracking-tight group-hover:text-[#52b788] transition-colors">
                AMAZÔNIA <span className="text-[#a25c31] font-normal">/</span> PONTO DE NÃO RETORNO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#52b788] bg-[#15291f] border border-[#27523d]'
                      : 'text-[#c2cec7] hover:text-[#f7f9f6] hover:bg-[#15291f]/50'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  {link.label}
                </a>
              );
            })}

            <div className="h-4 w-px bg-[#1c3b2c] mx-2" />

            <a
              href="#referencias"
              className="text-xs font-mono font-medium text-[#74c69d] hover:text-white px-3 py-1.5 rounded border border-[#27523d] hover:border-[#52b788] bg-[#0f1f16]/60 transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Fontes & Dados
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#c2cec7] hover:text-white hover:bg-[#15291f] transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#142820]">
          <div
            className="h-full bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#98c1d9] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#060e0a]/95 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#74c69d] border-b border-[#1c3b2c] pb-2">
              Sumário do Seminário
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 text-base font-medium text-[#e8ece9] hover:text-[#52b788] border-b border-[#15291f]/50"
                >
                  {Icon && <Icon className="w-4 h-4 text-[#52b788]" />}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#1c3b2c] text-xs font-mono text-[#8ca396] space-y-2">
            <p>Seminário Acadêmico Interdisciplinar</p>
            <p className="text-[10px] text-[#5c7768]">Climatologia &bull; Ecologia Teórica &bull; Direitos Territoriais</p>
          </div>
        </div>
      )}
    </>
  );
};
