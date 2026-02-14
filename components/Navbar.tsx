
import React from 'react';

interface NavbarProps {
  onSearch: (term: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', label: 'Início' },
    { id: 'movie', label: 'Filmes' },
    { id: 'series', label: 'Séries' },
    { id: 'novela', label: 'Novelas' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black text-indigo-500 tracking-tighter">CINESTREAM<span className="text-white">+</span></h1>
          
          <ul className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeCategory === cat.id ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Pesquisar..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full md:w-64 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold border border-white/20 cursor-pointer">
            JD
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
