import React, { useState } from 'react';
import { BIBLIOGRAPHY_ENTRIES } from '../../data/bibliographyData';
import { BookOpen, ExternalLink, Search, CheckCircle2 } from 'lucide-react';

export const BibliographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEntries = BIBLIOGRAPHY_ENTRIES.filter((entry) => {
    const matchesCategory =
      selectedCategory === 'todos' || entry.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      entry.title.toLowerCase().includes(query) ||
      entry.authors.toLowerCase().includes(query) ||
      entry.journalOrPublisher.toLowerCase().includes(query) ||
      entry.summary.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'todos', label: 'Todas as Fontes' },
    { id: 'artigo', label: 'Artigos Revisados por Pares' },
    { id: 'institucional', label: 'Institucionais & Avaliações' },
    { id: 'cartografia', label: 'Sensoriamento & MapBiomas' },
    { id: 'relatorio', label: 'Relatórios Técnicos & Sociais' }
  ];

  return (
    <section
      id="referencias"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e0a] border-b border-[#142820]"
      aria-labelledby="heading-referencias-bibliograficas"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#74c69d] uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Acervo Acadêmico &bull; Documentação Científica
          </div>
          <h3
            id="heading-referencias-bibliograficas"
            className="font-editorial text-2xl sm:text-4xl text-[#f7f9f6] font-normal tracking-tight mb-3"
          >
            Referências Bibliográficas e Fontes Oficiais
          </h3>
          <p className="text-sm sm:text-base text-[#9eb4a6] max-w-3xl leading-relaxed">
            Todas as teses, limiares, séries cartográficas e dados apresentados neste seminário possuem ancoragem direta em periódicos 
            indexados e relatórios de instituições públicas oficiais.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#09130e] border border-[#1c3b2c] p-4 rounded-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#5c7768] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por autor, título, periódico ou palavra-chave..."
                className="w-full pl-9 pr-4 py-2 bg-[#060e0a] border border-[#15291f] focus:border-[#52b788] rounded-sm text-xs sm:text-sm text-[#f7f9f6] placeholder-[#5c7768] transition-colors"
                aria-label="Buscar nas referências bibliográficas"
              />
            </div>

            {/* Category Quick Badges */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#15291f] text-[#52b788] border border-[#27523d]'
                      : 'bg-[#060e0a] text-[#8ca396] border border-[#15291f] hover:text-[#d3e0d8]'
                  }`}
                  aria-pressed={selectedCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* List of Verified Citations */}
        <div className="space-y-4">
          {filteredEntries.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#5c7768] bg-[#09130e] border border-[#15291f] rounded-sm">
              Nenhuma referência encontrada para os termos pesquisados.
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-sm bg-[#09130e] border border-[#15291f] hover:border-[#27523d] transition-all space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#52b788]">
                      {entry.authors} ({entry.year})
                    </span>
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#142820] text-[#74c69d] border border-[#27523d]">
                      {entry.category}
                    </span>
                  </div>

                  {entry.doiOrUrl && (
                    <a
                      href={entry.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#7dd3fc] hover:underline"
                    >
                      <span>Acessar Publicação</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h4 className="font-serif text-base sm:text-lg text-[#f7f9f6] font-medium leading-snug">
                  {entry.title}
                </h4>

                <p className="font-serif italic text-xs text-[#8ca396]">
                  {entry.journalOrPublisher}
                </p>

                <p className="text-xs text-[#a8b8af] leading-relaxed pt-1">
                  {entry.summary}
                </p>

                {/* Section referenced tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#15291f]">
                  <span className="text-[10px] font-mono text-[#5c7768]">Seções Ancoradas:</span>
                  {entry.sectionsReferenced.map((sec) => (
                    <span
                      key={sec}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060e0a] text-[#8ca396] border border-[#15291f]"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Ethical Academic Declaration */}
        <div className="mt-10 p-4 rounded-sm bg-[#0c1812] border border-[#1c3b2c] flex items-center justify-between text-xs font-mono text-[#74c69d]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#52b788]" />
            <span>Integridade Epistêmica: 100% das referências foram checadas contra indexadores e repositórios oficiais.</span>
          </div>
          <span className="hidden sm:inline text-[#5c7768]">Nature &bull; Science &bull; INPE &bull; SPA</span>
        </div>
      </div>
    </section>
  );
};
