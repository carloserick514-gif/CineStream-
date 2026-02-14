
import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_CONTENT, TRIAL_DAYS } from './constants.ts';
import { MediaContent, UserSubscription } from './types.ts';
import ContentCard from './components/ContentCard.tsx';
import Navbar from './components/Navbar.tsx';
import VideoPlayer from './components/VideoPlayer.tsx';
import StripeCheckout from './components/StripeCheckout.tsx';
import TrialBanner from './components/TrialBanner.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { getContentAnalysis } from './services/geminiService.ts';

const ContentRow = ({ title, items, onPlay }: any) => (
  <div className="mb-8 px-4 md:px-12">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
      {items.map((item: any) => (
        <ContentCard key={item.id} content={item} onClick={onPlay} />
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [selected, setSelected] = useState<MediaContent | null>(null);
  const [playing, setPlaying] = useState<MediaContent | null>(null);
  const [showPay, setShowPay] = useState(false);
  const [analysis, setAnalysis] = useState('');
  
  const [sub, setSub] = useState<UserSubscription>(() => {
    const s = localStorage.getItem('cs_sub');
    if (s) return JSON.parse(s);
    const now = Date.now();
    return { status: 'trial', startDate: now, trialEndsAt: now + (TRIAL_DAYS * 86400000) };
  });

  useEffect(() => {
    localStorage.setItem('cs_sub', JSON.stringify(sub));
    if (sub.status === 'trial' && Date.now() > sub.trialEndsAt) {
      setSub(p => ({...p, status: 'expired'}));
    }
  }, [sub]);

  const handleSelect = async (c: MediaContent) => {
    setSelected(c);
    setAnalysis('Analisando...');
    const res = await getContentAnalysis(c.title, c.description);
    setAnalysis(res || 'Uma história imperdível!');
  };

  const startWatch = (c: MediaContent) => {
    if (sub.status === 'expired') {
      setShowPay(true);
      return;
    }
    setPlaying(c);
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {playing && <VideoPlayer content={playing} onClose={() => setPlaying(null)} />}
      {showPay && (
        <StripeCheckout 
          onSuccess={() => {setSub(p => ({...p, status: 'active'})); setShowPay(false);}} 
          onCancel={() => setShowPay(false)} 
        />
      )}
      
      <TrialBanner subscription={sub} onSubscribe={() => setShowPay(true)} />
      <Navbar onSearch={() => {}} activeCategory="all" setActiveCategory={() => {}} />

      {MOCK_CONTENT[0] && (
        <div className="relative h-[70vh] w-full mb-12">
          <img src={MOCK_CONTENT[0].image} className="w-full h-full object-cover opacity-40" alt="Banner" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-xl space-y-6">
            <h1 className="text-6xl font-black uppercase italic">{MOCK_CONTENT[0].title}</h1>
            <p className="text-lg text-zinc-300">{MOCK_CONTENT[0].description}</p>
            <button 
              onClick={() => startWatch(MOCK_CONTENT[0])} 
              className="bg-white text-black px-12 py-4 rounded-md font-black hover:bg-zinc-200 transition-colors"
            >
              ASSISTIR AGORA
            </button>
          </div>
        </div>
      )}

      <ContentRow title="Populares no CineStream+" items={MOCK_CONTENT} onPlay={handleSelect} />
      <ContentRow title="Agregado de Outros Streamings" items={[...MOCK_CONTENT].reverse()} onPlay={handleSelect} />

      {selected && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/90 animate-fadeIn">
          <div className="bg-[#181818] w-full max-w-4xl rounded-xl overflow-hidden flex flex-col md:flex-row border border-zinc-800">
            <img src={selected.image} className="md:w-1/3 object-cover" alt={selected.title} />
            <div className="p-8 flex-1 space-y-6">
              <h2 className="text-4xl font-bold">{selected.title}</h2>
              <p className="text-zinc-400">{selected.description}</p>
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm italic text-indigo-200">
                {analysis}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => startWatch(selected)} 
                  className="flex-1 bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  REPRODUZIR
                </button>
                <button 
                  onClick={() => setSelected(null)} 
                  className="px-6 py-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AIAssistant />
    </div>
  );
};

export default App;
