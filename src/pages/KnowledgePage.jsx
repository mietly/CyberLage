import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, FileText, BookMarked, ArrowRight, Tag } from 'lucide-react';
import { knowledgeBaseArticles, glossaryTerms } from '../data/demoData';

const categoryColors = {
  Grundlagen: 'border-[#C8A96E]/30 text-[#C8A96E]',
  Technisch: 'border-[#C8A96E]/30 text-[#C8A96E]',
  Compliance: 'border-[#5A9A6B]/30 text-[#5A9A6B]',
  Praxis: 'border-[#D97B5A]/30 text-[#D97B5A]',
};

const articleCategories = ['Alle', ...new Set(knowledgeBaseArticles.map((a) => a.category))];

export default function KnowledgePage() {
  const [activeTab, setActiveTab] = useState('artikel');
  const [categoryFilter, setCategoryFilter] = useState('Alle');
  const [glossarySearch, setGlossarySearch] = useState('');

  const filteredArticles = useMemo(() => {
    if (categoryFilter === 'Alle') return knowledgeBaseArticles;
    return knowledgeBaseArticles.filter((a) => a.category === categoryFilter);
  }, [categoryFilter]);

  const filteredGlossary = useMemo(() => {
    if (!glossarySearch.trim()) return glossaryTerms;
    const q = glossarySearch.toLowerCase();
    return glossaryTerms.filter((g) => g.term.toLowerCase().includes(q) || g.full.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
  }, [glossarySearch]);

  const sortedGlossary = useMemo(() => [...filteredGlossary].sort((a, b) => a.term.localeCompare(b.term)), [filteredGlossary]);

  const tabs = [{ id: 'artikel', label: 'Artikel', icon: FileText }, { id: 'glossar', label: 'Glossar', icon: BookMarked }];

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" /><span className="text-sm font-mono">Wissen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Knowledge Base</h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">Cybersecurity-Wissen verständlich erklärt. Von Grundlagen bis zu fortgeschrittenen Themen.</p>
        </div>

        <div className="flex gap-2 mb-8 border-b border-[#1E2228] pb-0">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 font-mono text-sm transition-colors border-b-2 cursor-pointer ${activeTab === tab.id ? 'text-[#C8A96E] border-[#C8A96E]' : 'text-[#7A7D83] border-transparent hover:text-[#E8E6E0]'}`}>
              <tab.icon className="w-4 h-4" />{tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'artikel' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {articleCategories.map((cat) => (
                <button key={cat} onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-none text-sm font-mono transition-colors cursor-pointer ${categoryFilter === cat ? 'bg-[#C8A96E] text-[#0A0C0F]' : 'border border-[#1E2228] text-[#7A7D83] hover:border-[#C8A96E] hover:text-[#C8A96E]'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 hover:border-[#C8A96E]/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono px-3 py-1 rounded-none border ${categoryColors[article.category] || 'border-[#1E2228] text-[#7A7D83]'}`}>{article.category}</span>
                    <Tag className="w-4 h-4 text-[#3E4148]" />
                  </div>
                  <h3 className="text-lg font-display mb-3 group-hover:text-[#C8A96E] transition-colors">{article.title}</h3>
                  <p className="text-[#7A7D83] text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[#C8A96E] text-sm font-mono group-hover:gap-2 transition-all">Weiterlesen <ArrowRight className="w-4 h-4" /></span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'glossar' && (
          <div>
            <div className="relative mb-8 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3E4148]" />
              <input type="text" value={glossarySearch} onChange={(e) => setGlossarySearch(e.target.value)} placeholder="Begriff suchen..."
                className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none pl-10 pr-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors" />
            </div>
            <div className="space-y-3">
              {sortedGlossary.length === 0 && (<p className="text-[#3E4148] text-center py-8">Kein Begriff gefunden für &ldquo;{glossarySearch}&rdquo;</p>)}
              {sortedGlossary.map((entry) => (
                <div key={entry.term} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 hover:border-[#C8A96E]/30 transition-colors">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-lg font-display text-[#C8A96E]">{entry.term}</h3>
                    {entry.full && (<span className="text-sm text-[#3E4148]">{entry.full}</span>)}
                  </div>
                  <p className="text-[#E8E6E0] text-sm leading-relaxed">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
