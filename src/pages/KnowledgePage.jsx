import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Search,
  FileText,
  BookMarked,
  ArrowRight,
  Tag,
} from 'lucide-react';
import { knowledgeBaseArticles, glossaryTerms } from '../data/demoData';

const categoryColors = {
  Grundlagen: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Technisch: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Compliance: 'bg-green-500/20 text-green-400 border-green-500/30',
  Praxis: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
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
    return glossaryTerms.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.full.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
    );
  }, [glossarySearch]);

  const sortedGlossary = useMemo(() => {
    return [...filteredGlossary].sort((a, b) => a.term.localeCompare(b.term));
  }, [filteredGlossary]);

  const tabs = [
    { id: 'artikel', label: 'Artikel', icon: FileText },
    { id: 'glossar', label: 'Glossar', icon: BookMarked },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Wissen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Base</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cybersecurity-Wissen verständlich erklärt. Von Grundlagen bis zu fortgeschrittenen
            Themen.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-800 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 font-medium text-sm transition-colors border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'text-red-400 border-red-500'
                  : 'text-gray-400 border-transparent hover:text-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Articles Tab */}
        {activeTab === 'artikel' && (
          <div>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {articleCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        categoryColors[article.category] || 'bg-gray-800 text-gray-400 border-gray-700'
                      }`}
                    >
                      {article.category}
                    </span>
                    <Tag className="w-4 h-4 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-red-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Glossar Tab */}
        {activeTab === 'glossar' && (
          <div>
            {/* Search */}
            <div className="relative mb-8 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Begriff suchen..."
                className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            {/* Glossary List */}
            <div className="space-y-3">
              {sortedGlossary.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Kein Begriff gefunden für &ldquo;{glossarySearch}&rdquo;
                </p>
              )}
              {sortedGlossary.map((entry) => (
                <div
                  key={entry.term}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-lg font-bold text-red-400">{entry.term}</h3>
                    {entry.full && (
                      <span className="text-sm text-gray-500">{entry.full}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
