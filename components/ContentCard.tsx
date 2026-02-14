
import React from 'react';
import { MediaContent } from '../types';

export const ContentCard: React.FC<{ content: MediaContent, onClick: (c: MediaContent) => void }> = ({ content, onClick }) => (
  <div onClick={() => onClick(content)} className="group relative flex-shrink-0 w-40 md:w-64 cursor-pointer transition-all hover:scale-105 z-10">
    <div className="aspect-[2/3] overflow-hidden rounded-md bg-zinc-900 border border-zinc-800">
      <img src={content.image} alt={content.title} className="h-full w-full object-cover group-hover:opacity-50 transition-opacity" />
    </div>
    <div className="mt-2">
      <h3 className="text-sm font-bold truncate">{content.title}</h3>
      <p className="text-xs text-zinc-500">{content.year} • {content.genre}</p>
    </div>
  </div>
);

export default ContentCard;
