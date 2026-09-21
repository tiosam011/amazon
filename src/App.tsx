import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { TippingPointIntro } from './components/intro/TippingPointIntro';
import { Axis1Header } from './components/axis1_climate/Axis1Header';
import { FlyingRiversDiagram } from './components/axis1_climate/FlyingRiversDiagram';
import { DeforestationThreshold } from './components/axis1_climate/DeforestationThreshold';
import { FeedbackLoopDiagram } from './components/axis1_climate/FeedbackLoopDiagram';
import { CarbonBalanceSection } from './components/axis1_climate/CarbonBalanceSection';
import { Axis2Header } from './components/axis2_peoples/Axis2Header';
import { IndigenousLandsComparison } from './components/axis2_peoples/IndigenousLandsComparison';
import { TraditionalKnowledge } from './components/axis2_peoples/TraditionalKnowledge';
import { ThreatsAndViolations } from './components/axis2_peoples/ThreatsAndViolations';
import { DemarcationPolicy } from './components/axis2_peoples/DemarcationPolicy';
import { SystemicConnection } from './components/synthesis/SystemicConnection';
import { BibliographySection } from './components/references/BibliographySection';
import { Footer } from './components/layout/Footer';
import { SeminarScriptPage } from './components/script/SeminarScriptPage';
import { AdminEditorPage } from './components/admin/AdminEditorPage';

export const App: React.FC = () => {
  const getRouteType = (): 'script' | 'admin' | 'main' => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path === '/admin' ||
      path === '/admin/' ||
      path.startsWith('/admin') ||
      hash === '#/admin' ||
      hash.startsWith('#/admin')
    ) {
      return 'admin';
    }

    if (
      path === '/roteiro' ||
      path === '/roteiro/' ||
      path.startsWith('/roteiro') ||
      hash === '#/roteiro' ||
      hash.startsWith('#/roteiro')
    ) {
      return 'script';
    }

    return 'main';
  };

  const [currentRoute, setCurrentRoute] = useState<'script' | 'admin' | 'main'>(getRouteType);

  useEffect(() => {
    const checkRoute = () => {
      setCurrentRoute(getRouteType());
    };

    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // Rota administrativa secreta para edição de textos
  if (currentRoute === 'admin') {
    return <AdminEditorPage />;
  }

  // Visualizador oficial de teleprompter e ensaio
  if (currentRoute === 'script') {
    return <SeminarScriptPage />;
  }

  return (
    <div className="min-h-screen bg-[#060e0a] text-[#e8ece9] flex flex-col font-sans selection:bg-[#2d6a4f] selection:text-white">
      {/* Fixed Sticky Header with Reading Progress (no link to /roteiro) */}
      <Navbar />

      {/* Main Single-Page Seminar Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Theoretical Introduction to Ecological Tipping Points */}
        <TippingPointIntro />

        {/* ========================================================================= */}
        {/* EIXO 1 — CIENTÍFICO & CLIMÁTICO */}
        {/* ========================================================================= */}
        <section aria-label="Eixo 1: Dimensão Científica e Climática">
          <Axis1Header />
          <FlyingRiversDiagram />
          <DeforestationThreshold />
          <FeedbackLoopDiagram />
          <CarbonBalanceSection />
        </section>

        {/* ========================================================================= */}
        {/* EIXO 2 — JUSTIÇA CLIMÁTICA & POVOS TRADICIONAIS */}
        {/* ========================================================================= */}
        <section aria-label="Eixo 2: Dimensão de Justiça Climática e Territórios Tradicionais">
          <Axis2Header />
          <IndigenousLandsComparison />
          <TraditionalKnowledge />
          <ThreatsAndViolations />
          <DemarcationPolicy />
        </section>

        {/* ========================================================================= */}
        {/* SÍNTESE SISTÊMICA — ARTICULAÇÃO ENTRE OS DOIS EIXOS */}
        {/* ========================================================================= */}
        <SystemicConnection />

        {/* ========================================================================= */}
        {/* ACERVO DE REFERÊNCIAS ACADÊMICAS & FONTES OFICIAIS */}
        {/* ========================================================================= */}
        <BibliographySection />
      </main>

      {/* Minimalist Structured Footer (no link to /roteiro) */}
      <Footer />
    </div>
  );
};

export default App;
