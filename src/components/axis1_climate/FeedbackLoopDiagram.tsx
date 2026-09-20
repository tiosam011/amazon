import React, { useState } from 'react';
import { FEEDBACK_LOOP_STEPS } from '../../data/scientificData';
import { RefreshCw, ArrowDown, Flame, AlertCircle, ChevronRight } from 'lucide-react';
import type { FeedbackLoopStep } from '../../types/seminar';

export const FeedbackLoopDiagram: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<FeedbackLoopStep>(FEEDBACK_LOOP_STEPS[0]);

  return (
    <section
      id="retroalimentacao"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09130e] border-b border-[#142820]"
      aria-labelledby="heading-ciclo-retroalimentacao"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d97706] uppercase tracking-widest mb-2">
            <RefreshCw className="w-3.5 h-3.5" />
            Dinâmica de Sistemas Não-Lineares
          </div>
          <h3
            id="heading-ciclo-retroalimentacao"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            O Ciclo de Retroalimentação Climática
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Como a perturbação inicial desencadeia um circuito fechado de amplificação que retroalimenta a dessecação e o fogo florestal.
          </p>
        </div>

        {/* Interactive Layout: Steps List + Detailed Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Vertical / Responsive Flow of Steps */}
          <div className="lg:col-span-7 space-y-2">
            {FEEDBACK_LOOP_STEPS.map((stepItem, idx) => {
              const isSelected = selectedStep.step === stepItem.step;
              const isCritical = stepItem.impactLevel === 'crítico';
              return (
                <div key={stepItem.step} className="relative">
                  {/* Step Button Card */}
                  <button
                    onClick={() => setSelectedStep(stepItem)}
                    onMouseEnter={() => setSelectedStep(stepItem)}
                    className={`w-full text-left p-3.5 rounded-sm border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#15291f] border-[#52b788] text-[#f7f9f6] shadow-md ring-1 ring-[#52b788]/40'
                        : 'bg-[#060e0a] border-[#15291f] text-[#a8b8af] hover:border-[#27523d] hover:bg-[#0c1812]'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold ${
                          isCritical
                            ? 'bg-[#b45309]/30 text-[#f59e0b] border border-[#b45309]'
                            : 'bg-[#142820] text-[#74c69d] border border-[#27523d]'
                        }`}
                      >
                        {stepItem.step}
                      </div>
                      <div>
                        <span className="font-serif text-sm sm:text-base font-medium block">
                          {stepItem.title}
                        </span>
                        <span className="text-[11px] text-[#8ca396] line-clamp-1">
                          {stepItem.shortDesc}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#52b788] translate-x-1' : 'text-[#3d5447]'
                      }`}
                    />
                  </button>

                  {/* Visual Arrow Connecting Steps (except last) */}
                  {idx < FEEDBACK_LOOP_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-3.5 h-3.5 text-[#27523d]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Panel for Selected Step */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#060e0a] border border-[#1c3b2c] p-6 rounded-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#1c3b2c] mb-4">
              <span className="font-mono text-xs text-[#74c69d] uppercase tracking-wider">
                Detalhamento do Mecanismo
              </span>
              <span
                className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${
                  selectedStep.impactLevel === 'crítico'
                    ? 'border-[#b45309] text-[#f59e0b] bg-[#2a1708]'
                    : 'border-[#27523d] text-[#74c69d] bg-[#0f1f16]'
                }`}
              >
                Nível: {selectedStep.impactLevel}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs text-[#5c7768] block">Etapa {selectedStep.step} de 07</span>
                <h4 className="font-editorial text-xl sm:text-2xl text-[#f7f9f6] font-medium mt-0.5">
                  {selectedStep.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#c2cec7] leading-relaxed">
                {selectedStep.fullDesc}
              </p>

              <div className="p-3 bg-[#0d1c14] rounded border border-[#1c3b2c] text-xs space-y-1">
                <span className="font-mono text-[11px] text-[#74c69d] uppercase tracking-wider block font-semibold">
                  Mecanismo Biofísico:
                </span>
                <p className="text-[#9eb4a6]">{selectedStep.mechanism}</p>
              </div>

              {/* Specific Warning for Fires */}
              {selectedStep.warningNote && (
                <div className="p-3 bg-[#1e150b] rounded border border-[#d97706]/40 text-xs space-y-1 text-[#f3d3b0]">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d97706] font-semibold uppercase">
                    <Flame className="w-3.5 h-3.5 flex-shrink-0" />
                    Distinção Científica
                  </div>
                  <p>{selectedStep.warningNote}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c3b2c] text-[11px] font-mono text-[#5c7768] flex items-center justify-between">
              <span>Interativo: toque ou passe o cursor</span>
              <RefreshCw className="w-3.5 h-3.5 text-[#52b788]" />
            </div>
          </div>
        </div>

        {/* Crucial Scientific Callout */}
        <div className="p-4 rounded border border-[#27523d] bg-[#0c1812] flex items-start gap-3 text-xs text-[#8ca396]">
          <AlertCircle className="w-4 h-4 text-[#74c69d] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#e8ece9]">Loop Fechado de Retroalimentação Positiva:</strong> Na teoria dos sistemas, uma retroalimentação &ldquo;positiva&rdquo; não significa benéfica, mas sim que o efeito intensifica a causa inicial. A perda florestal reduz as chuvas, o que mata mais árvores, o que reduz ainda mais as chuvas — tornando o colapso autossustentável mesmo que o desmatamento inicial seja estancado tardiamente.
          </p>
        </div>
      </div>
    </section>
  );
};
