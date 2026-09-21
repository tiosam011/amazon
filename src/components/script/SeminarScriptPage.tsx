import React, { useState, useEffect } from 'react';
import { SEMINAR_SCRIPTS } from '../../data/seminarScriptData';
import type { MemberScript } from '../../data/seminarScriptData';
import { getPersistedScripts } from '../../services/adminScriptStorage';
import { Clock, Copy, Check, Eye, EyeOff, ArrowLeft, MonitorPlay, Sparkles } from 'lucide-react';

export const SeminarScriptPage: React.FC = () => {
  const [scripts, setScripts] = useState<MemberScript[]>(SEMINAR_SCRIPTS);
  const [selectedMemberId, setSelectedMemberId] = useState<number | 'todos'>('todos');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [showCues, setShowCues] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getPersistedScripts();
      setScripts(data);
    }
    load();
  }, []);

  const handleCopy = (memberId: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(memberId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredScripts = selectedMemberId === 'todos'
    ? scripts
    : scripts.filter((s) => s.id === selectedMemberId);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'normal':
        return 'text-sm sm:text-base leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-2xl leading-loose';
      case 'large':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="min-h-screen bg-[#050b08] text-[#e8ece9] selection:bg-[#2d6a4f] selection:text-white pb-24">
      {/* Top Teleprompter Header Bar */}
      <header className="sticky top-0 z-50 bg-[#09130e]/95 backdrop-blur-md border-b border-[#1c3b2c] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb / Back */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="p-1.5 rounded bg-[#142820] border border-[#27523d] text-[#74c69d] hover:text-white hover:border-[#52b788] transition-colors"
              title="Voltar ao portal público do seminário"
            >
              <ArrowLeft className="w-4 h-4" />
            </a>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#74c69d] block">
                Área de Apresentação &bull; Ensaio Oficial
              </span>
              <h1 className="font-serif text-base sm:text-lg font-semibold text-[#f7f9f6] tracking-tight">
                Roteiro das Falas &bull; 5 Membros (45 Minutos)
              </h1>
            </div>
          </div>

          {/* Quick Metrics & Controls */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {/* Total Duration Badge */}
            <div className="px-3 py-1.5 rounded bg-[#0f1f16] border border-[#27523d] text-[#52b788] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Tempo Total: 45 min (~9 min/membro)</span>
            </div>

            {/* Toggle Stage Cues */}
            <button
              onClick={() => setShowCues(!showCues)}
              className="px-3 py-1.5 rounded bg-[#142820] border border-[#1c3b2c] hover:border-[#52b788] text-[#8ca396] hover:text-white transition-colors flex items-center gap-1.5"
            >
              {showCues ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showCues ? 'Ocultar Cenas' : 'Exibir Cenas'}</span>
            </button>

            {/* Font Size Adjusters */}
            <div className="flex rounded border border-[#1c3b2c] overflow-hidden bg-[#09130e]">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 ${fontSize === 'normal' ? 'bg-[#1b382d] text-[#52b788]' : 'text-[#8ca396] hover:text-white'}`}
                title="Fonte Normal"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 ${fontSize === 'large' ? 'bg-[#1b382d] text-[#52b788]' : 'text-[#8ca396] hover:text-white'}`}
                title="Fonte Média"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2.5 py-1 ${fontSize === 'xlarge' ? 'bg-[#1b382d] text-[#52b788]' : 'text-[#8ca396] hover:text-white'}`}
                title="Fonte Grande (Teleprompter)"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Member Selector Tabs */}
        <div className="max-w-6xl mx-auto mt-3 pt-2 border-t border-[#15291f] flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedMemberId('todos')}
            className={`px-3 py-1 rounded text-xs font-mono whitespace-nowrap transition-all ${
              selectedMemberId === 'todos'
                ? 'bg-[#1b382d] text-[#52b788] border border-[#52b788]'
                : 'bg-[#09130e] text-[#8ca396] border border-[#15291f] hover:text-white'
            }`}
          >
            Todos os Membros (Sequência Plena)
          </button>
          {scripts.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMemberId(m.id)}
              className={`px-3 py-1 rounded text-xs font-mono whitespace-nowrap transition-all ${
                selectedMemberId === m.id
                  ? 'bg-[#1b382d] text-[#52b788] border border-[#52b788]'
                  : 'bg-[#09130e] text-[#8ca396] border border-[#15291f] hover:text-white'
              }`}
            >
              {m.memberLabel} ({m.timeEstimate})
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {filteredScripts.map((member) => {
          const fullSpeechText = member.blocks
            .filter((b) => b.type === 'speech')
            .map((b) => b.content)
            .join('\n\n');

          return (
            <article
              key={member.id}
              className="bg-[#09130e] border border-[#1c3b2c] rounded-sm p-6 sm:p-10 shadow-2xl space-y-6 relative"
            >
              {/* Member Card Header */}
              <div className="border-b border-[#1c3b2c] pb-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-sm bg-[#1b382d] text-[#52b788] font-mono text-xs font-bold border border-[#27523d]">
                      {member.memberLabel}
                    </span>
                    <span className="font-mono text-xs text-[#74c69d]">
                      {member.timeEstimate} &bull; {member.wordCount}
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(member.id, fullSpeechText)}
                    className="px-3 py-1 rounded-sm bg-[#142820] border border-[#27523d] hover:border-[#52b788] text-xs font-mono text-[#f7f9f6] transition-colors flex items-center gap-1.5"
                    title="Copiar texto falado deste membro para a área de transferência"
                  >
                    {copiedId === member.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#52b788]" />
                        <span className="text-[#52b788]">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#74c69d]" />
                        <span>Copiar Fala</span>
                      </>
                    )}
                  </button>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl text-[#f7f9f6] font-normal tracking-tight">
                  {member.roleTitle}
                </h2>

                <p className="font-serif italic text-sm sm:text-base text-[#98c1d9]">
                  {member.subtopic}
                </p>

                {/* Tags of Sections Covered */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-mono text-[#5c7768]">Seções Ancoradas:</span>
                  {member.sectionsCovered.map((sec) => (
                    <span
                      key={sec}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060e0a] text-[#8ca396] border border-[#15291f]"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Speech Blocks with Cues */}
              <div className="space-y-6">
                {member.blocks.map((block, idx) => {
                  if (block.type === 'projection' && showCues) {
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-sm bg-[#1a1710] border-l-4 border-[#d97706] text-xs sm:text-sm text-[#f3d3b0] space-y-1 my-4 font-sans shadow-sm"
                      >
                        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#d97706] font-bold">
                          <MonitorPlay className="w-3.5 h-3.5" />
                          <span>Instrução de Projeção na Tela:</span>
                        </div>
                        <p className="leading-relaxed">{block.content}</p>
                      </div>
                    );
                  }

                  if (block.type === 'interaction' && showCues) {
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-sm bg-[#0d1c14] border-l-4 border-[#52b788] text-xs sm:text-sm text-[#cfe3d6] space-y-1 my-4 font-sans shadow-sm"
                      >
                        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#52b788] font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Ação Interativa (Clique / Destaque no Site):</span>
                        </div>
                        <p className="leading-relaxed">{block.content}</p>
                      </div>
                    );
                  }

                  if (block.type === 'speech') {
                    return (
                      <p
                        key={idx}
                        className={`text-[#d3e0d8] font-serif ${getFontSizeClass()} text-justify`}
                      >
                        {block.content}
                      </p>
                    );
                  }

                  return null;
                })}
              </div>

              {/* End of Member Speech Divider */}
              <div className="pt-6 border-t border-[#1c3b2c] flex items-center justify-between text-xs font-mono text-[#5c7768]">
                <span>Fim da intervenção do {member.memberLabel}</span>
                <span className="text-[#52b788]">&bull; Próximo integrante assume com ponte verbal</span>
              </div>
            </article>
          );
        })}

        {/* Global Footer Note for Speakers */}
        <div className="p-6 rounded-sm bg-[#08120c] border border-[#1c3b2c] text-center space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#52b788]">
            Dica Prática para a Equipe
          </span>
          <p className="text-xs sm:text-sm text-[#8ca396] max-w-2xl mx-auto leading-relaxed">
            Mantenham uma velocidade cadenciada de fala (em torno de 130 palavras por minuto) e utilizem as indicações de 
            interação no site como pausas respiratórias naturais. O tempo de 45 minutos é ideal para que a banca aprecie a profundidade 
            da pesquisa sem pressa.
          </p>
        </div>
      </main>
    </div>
  );
};
