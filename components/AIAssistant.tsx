
import React, { useState } from 'react';
import { getSmartRecommendation } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const rec = await getSmartRecommendation(mood);
    setRecommendation(rec || "Não consegui pensar em nada agora, mas que tal uma comédia?");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce hover:scale-110 transition-transform"
        >
          🤖
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl w-80 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-4 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <span>🤖</span> Assistente Smart
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          <div className="p-4 space-y-4">
            {recommendation ? (
              <div className="space-y-3">
                <p className="text-sm text-slate-300 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  {recommendation}
                </p>
                <button 
                  onClick={() => {setRecommendation(''); setMood('');}}
                  className="text-xs text-indigo-400 font-bold uppercase"
                >
                  Perguntar de novo
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Como você está se sentindo hoje? Vou sugerir algo perfeito.</p>
                <input 
                  type="text" 
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="Ex: Animado, Cansado, Romântico..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button 
                  disabled={loading}
                  onClick={handleAsk}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 text-white font-bold py-2 rounded-lg text-sm transition-colors"
                >
                  {loading ? 'Pensando...' : 'Obter Sugestão'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
