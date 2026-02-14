
import React, { useState, useEffect } from 'react';
import { MediaContent } from '../types';

const VideoPlayer: React.FC<{ content: MediaContent, onClose: () => void }> = ({ content, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = isPlaying && setInterval(() => setProgress(p => p < 100 ? p + 0.1 : 0), 100);
    return () => clearInterval(timer as any);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-fadeIn">
      <div className="p-6 flex items-center gap-4 bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={onClose} className="text-2xl hover:text-indigo-500"><i className="fas fa-arrow-left"></i></button>
        <h2 className="text-xl font-bold">{content.title}</h2>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <div className="text-9xl text-indigo-500/20"><i className="fas fa-play"></i></div>
      </div>
      <div className="p-6 bg-gradient-to-t from-black to-transparent space-y-4">
        <input type="range" value={progress} readOnly className="w-full h-1 bg-zinc-800 accent-indigo-500 appearance-none cursor-pointer" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-2xl"><i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i></button>
            <i className="fas fa-volume-up text-xl"></i>
            <span className="text-sm font-mono">05:22 / 45:00</span>
          </div>
          <i className="fas fa-expand text-xl"></i>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
