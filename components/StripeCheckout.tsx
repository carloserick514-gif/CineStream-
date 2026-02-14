
import React, { useState } from 'react';
import { ANNUAL_PRICE } from '../constants';

const StripeCheckout: React.FC<{ onSuccess: () => void, onCancel: () => void }> = ({ onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-5/12 bg-slate-50 p-8 border-r">
          <button onClick={onCancel} className="text-slate-400 mb-8"><i className="fas fa-arrow-left mr-2"></i> Voltar</button>
          <h2 className="text-2xl font-black mb-2">CineStream+ Anual</h2>
          <div className="flex justify-between items-end pt-4 border-t">
            <span className="text-3xl font-black">R$ {ANNUAL_PRICE.toFixed(2)}</span>
          </div>
        </div>
        <div className="md:w-7/12 p-8 space-y-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-6" />
          <div className="space-y-4">
            <input placeholder="E-mail" className="w-full p-3 border rounded-lg" />
            <input placeholder="Número do Cartão" className="w-full p-3 border rounded-lg" />
            <div className="flex gap-4">
              <input placeholder="MM / AA" className="w-1/2 p-3 border rounded-lg" />
              <input placeholder="CVC" className="w-1/2 p-3 border rounded-lg" />
            </div>
          </div>
          <button onClick={() => {setLoading(true); setTimeout(onSuccess, 1500);}} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg">
            {loading ? 'Processando...' : `Pagar R$ ${ANNUAL_PRICE.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
};
export default StripeCheckout;
