import React, { useState, useEffect } from 'react';
import type { MemberScript, ScriptBlock } from '../../data/seminarScriptData';
import { 
  getPersistedScripts, 
  savePersistedScripts, 
  resetToDefaultScripts, 
  ADMIN_CREDENTIALS,
  checkIsAdminAuthenticated,
  setAdminAuthenticated
} from '../../services/adminScriptStorage';
import { 
  Lock, 
  Unlock, 
  Save, 
  RotateCcw, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Edit3, 
  Plus, 
  Trash2, 
  Cloud,
  MonitorPlay,
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const AdminEditorPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(checkIsAdminAuthenticated);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [scripts, setScripts] = useState<MemberScript[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await getPersistedScripts();
      setScripts(data);
      setIsLoading(false);
    }
    load();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      usernameInput.trim() === ADMIN_CREDENTIALS.username &&
      passwordInput.trim() === ADMIN_CREDENTIALS.password
    ) {
      setAdminAuthenticated(true);
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Usuário ou senha inválidos. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
  };

  const handleBlockChange = (blockIndex: number, newContent: string) => {
    setScripts(prev => prev.map(member => {
      if (member.id !== selectedMemberId) return member;
      const updatedBlocks = [...member.blocks];
      updatedBlocks[blockIndex] = {
        ...updatedBlocks[blockIndex],
        content: newContent
      };
      return {
        ...member,
        blocks: updatedBlocks
      };
    }));
  };

  const handleAddBlock = (type: 'speech' | 'projection' | 'interaction') => {
    setScripts(prev => prev.map(member => {
      if (member.id !== selectedMemberId) return member;
      const newBlock: ScriptBlock = {
        type,
        content: type === 'speech' ? 'Novo parágrafo de fala...' : 'Nova instrução...'
      };
      return {
        ...member,
        blocks: [...member.blocks, newBlock]
      };
    }));
  };

  const handleDeleteBlock = (blockIndex: number) => {
    if (!window.confirm('Deseja realmente remover este bloco?')) return;
    setScripts(prev => prev.map(member => {
      if (member.id !== selectedMemberId) return member;
      return {
        ...member,
        blocks: member.blocks.filter((_, idx) => idx !== blockIndex)
      };
    }));
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    setSaveStatus({ type: null, message: '' });
    try {
      const res = await savePersistedScripts(scripts);
      setSaveStatus({
        type: 'success',
        message: res.message
      });
      setTimeout(() => setSaveStatus({ type: null, message: '' }), 5000);
    } catch (e) {
      console.error(e);
      setSaveStatus({
        type: 'error',
        message: 'Erro ao salvar alterações. Tente novamente.'
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza de que deseja restaurar as falas originais do seminário? As alterações feitas serão substituídas.')) {
      const defaults = resetToDefaultScripts();
      setScripts(defaults);
      handleSaveAll();
    }
  };

  // Tela de Login se não autenticado
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050b08] text-[#e8ece9] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#09130e] border border-[#1c3b2c] p-8 rounded-sm shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#142820] border border-[#27523d] flex items-center justify-center mx-auto text-[#52b788]">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#f7f9f6]">Painel Administrativo</h1>
            <p className="text-xs font-mono text-[#8ca396]">
              Acesso restrito para edição dos textos e roteiro do seminário
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#74c69d] mb-1">
                Usuário
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                placeholder="admin"
                className="w-full px-3 py-2 bg-[#060e0a] border border-[#1c3b2c] rounded focus:border-[#52b788] text-white text-sm outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#74c69d] mb-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-[#060e0a] border border-[#1c3b2c] rounded focus:border-[#52b788] text-white text-sm outline-none transition-colors"
                required
              />
            </div>

            {authError && (
              <div className="p-2.5 rounded bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded bg-[#1b382d] hover:bg-[#23493b] border border-[#52b788] text-[#52b788] hover:text-white font-mono text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Entrar no Editor</span>
            </button>
          </form>

          <div className="pt-4 border-t border-[#15291f] text-center">
            <a href="/" className="text-xs font-mono text-[#8ca396] hover:text-[#52b788] transition-colors">
              &larr; Voltar para a página principal
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentMember = scripts.find(m => m.id === selectedMemberId) || scripts[0];

  return (
    <div className="min-h-screen bg-[#050b08] text-[#e8ece9] pb-24">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#09130e]/95 backdrop-blur-md border-b border-[#1c3b2c] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/roteiro"
              className="p-1.5 rounded bg-[#142820] border border-[#27523d] text-[#74c69d] hover:text-white transition-colors"
              title="Ir para o visualizador do Roteiro"
            >
              <ArrowLeft className="w-4 h-4" />
            </a>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#1b382d] text-[#52b788] border border-[#52b788]">
                  Modo Admin Ativo
                </span>
                <span className="text-xs font-mono text-[#8ca396] flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5 text-[#52b788]" /> Sincronização em Nuvem Ativa
                </span>
              </div>
              <h1 className="font-serif text-lg font-bold text-[#f7f9f6]">
                Editor de Textos & Falas do Seminário
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded bg-[#142820] border border-[#27523d] hover:border-red-500 text-xs font-mono text-[#8ca396] hover:text-red-300 transition-colors flex items-center gap-1.5"
              title="Restaurar falas originais"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restaurar Padrão</span>
            </button>

            <button
              onClick={handleSaveAll}
              disabled={isSaving}
              className="px-4 py-1.5 rounded bg-[#1b382d] hover:bg-[#23493b] border border-[#52b788] text-xs font-mono font-bold text-[#52b788] hover:text-white transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Salvando...' : 'Salvar para Todos'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded bg-red-950/40 border border-red-800/80 hover:bg-red-900/60 text-xs font-mono text-red-300 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Notificação de Status */}
        {saveStatus.type && (
          <div className={`max-w-7xl mx-auto mt-2 p-2.5 rounded text-xs font-mono flex items-center gap-2 ${
            saveStatus.type === 'success' 
              ? 'bg-[#0f2419] border border-[#52b788] text-[#74c69d]' 
              : 'bg-red-950/80 border border-red-700 text-red-300'
          }`}>
            {saveStatus.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
            <span>{saveStatus.message}</span>
          </div>
        )}

        {/* Member Selector Tabs */}
        <div className="max-w-7xl mx-auto mt-3 pt-2 border-t border-[#15291f] flex items-center gap-2 overflow-x-auto pb-1">
          {scripts.map(m => (
            <button
              key={m.id}
              onClick={() => setSelectedMemberId(m.id)}
              className={`px-3 py-1 rounded text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedMemberId === m.id
                  ? 'bg-[#1b382d] text-[#52b788] border border-[#52b788]'
                  : 'bg-[#09130e] text-[#8ca396] border border-[#15291f] hover:text-white'
              }`}
            >
              <Edit3 className="w-3 h-3" />
              <span>{m.memberLabel}: {m.roleTitle.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Editor Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {isLoading ? (
          <div className="text-center py-20 font-mono text-sm text-[#8ca396]">
            Carregando textos do seminário...
          </div>
        ) : (
          <div className="bg-[#09130e] border border-[#1c3b2c] rounded-sm p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-[#1c3b2c] pb-4">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#1b382d] text-[#52b788] border border-[#27523d] font-bold">
                {currentMember.memberLabel}
              </span>
              <h2 className="font-serif text-2xl text-[#f7f9f6] mt-2 font-bold">
                {currentMember.roleTitle}
              </h2>
              <p className="text-sm font-serif italic text-[#98c1d9] mt-1">
                {currentMember.subtopic}
              </p>
            </div>

            {/* List of Blocks for Selected Member */}
            <div className="space-y-6">
              {currentMember.blocks.map((block, idx) => {
                let badgeClass = 'bg-[#142820] text-[#52b788] border-[#27523d]';
                let Icon = MessageSquare;
                let label = 'Texto Falado pelo Membro';

                if (block.type === 'projection') {
                  badgeClass = 'bg-[#291f11] text-[#d97706] border-[#d97706]/40';
                  Icon = MonitorPlay;
                  label = 'Instrução de Projeção na Tela';
                } else if (block.type === 'interaction') {
                  badgeClass = 'bg-[#0d2218] text-[#52b788] border-[#52b788]/40';
                  Icon = Sparkles;
                  label = 'Ação Interativa no Site';
                }

                return (
                  <div key={idx} className="p-4 rounded border border-[#1c3b2c] bg-[#060e0a] space-y-2.5 relative group">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono uppercase font-semibold border ${badgeClass}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{label} (Bloco #{idx + 1})</span>
                      </span>

                      <button
                        onClick={() => handleDeleteBlock(idx)}
                        className="p-1 rounded text-[#8ca396] hover:text-red-400 hover:bg-red-950/50 transition-colors"
                        title="Excluir este bloco"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <textarea
                      value={block.content}
                      onChange={e => handleBlockChange(idx, e.target.value)}
                      rows={block.type === 'speech' ? 5 : 2}
                      className="w-full bg-[#09130e] border border-[#1c3b2c] rounded p-3 text-sm text-[#e8ece9] font-sans leading-relaxed focus:border-[#52b788] outline-none transition-colors"
                    />
                  </div>
                );
              })}
            </div>

            {/* Add New Block Buttons */}
            <div className="pt-4 border-t border-[#1c3b2c] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#8ca396]">Adicionar ao final:</span>
              <button
                onClick={() => handleAddBlock('speech')}
                className="px-3 py-1.5 rounded bg-[#0f1f16] border border-[#27523d] hover:border-[#52b788] text-xs font-mono text-[#74c69d] hover:text-white transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Parágrafo de Fala</span>
              </button>

              <button
                onClick={() => handleAddBlock('projection')}
                className="px-3 py-1.5 rounded bg-[#1a1710] border border-[#d97706]/40 hover:border-[#d97706] text-xs font-mono text-[#f3d3b0] hover:text-white transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Instrução de Projeção</span>
              </button>

              <button
                onClick={() => handleAddBlock('interaction')}
                className="px-3 py-1.5 rounded bg-[#0d1c14] border border-[#52b788]/40 hover:border-[#52b788] text-xs font-mono text-[#cfe3d6] hover:text-white transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Ação Interativa</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
