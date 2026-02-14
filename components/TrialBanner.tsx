
import React from 'react';
import { UserSubscription } from '../types';
import { ANNUAL_PRICE } from '../constants';

interface TrialBannerProps {
  subscription: UserSubscription;
  onSubscribe: () => void;
}

const TrialBanner: React.FC<TrialBannerProps> = ({ subscription, onSubscribe }) => {
  const now = Date.now();
  const timeLeft = subscription.trialEndsAt - now;
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  if (subscription.status === 'active') return null;

  return (
    <div className="bg-indigo-600 px-4 py-2 text-center text-white font-medium text-sm flex items-center justify-center gap-4 flex-wrap">
      {subscription.status === 'expired' ? (
        <span>Sua avaliação gratuita terminou. Assine agora para continuar assistindo!</span>
      ) : (
        <span>Você tem <strong>{daysLeft} {daysLeft === 1 ? 'dia' : 'dias'}</strong> de teste grátis restantes!</span>
      )}
      <button 
        onClick={onSubscribe}
        className="bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
      >
        Assinar por R$ {ANNUAL_PRICE.toFixed(2)}/ano
      </button>
    </div>
  );
};

export default TrialBanner;
