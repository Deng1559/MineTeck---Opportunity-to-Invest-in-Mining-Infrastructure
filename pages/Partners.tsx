import React from 'react';
import { Network, ArrowRight } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
           <Network className="mx-auto text-brand-steel w-16 h-16 mb-4" strokeWidth={1} />
           <h1 className="font-serif font-bold text-4xl text-white mb-2">STRATEGIC NETWORK</h1>
           <p className="font-mono text-slate-500">INTEGRATED SUPPLY CHAIN ARCHITECTURE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Engineering & EPC', 'Logistics & Rail', 'Smelting & Offtake', 'Capital Partners'].map((category, i) => (
            <div key={i} className="bg-slate-900 border-t-4 border-brand-steel p-6 h-64 flex flex-col justify-between hover:bg-slate-850 transition-colors">
              <h3 className="font-serif font-bold text-xl text-white">{category}</h3>
              <div className="space-y-4">
                <div className="h-px w-full bg-slate-800"></div>
                <div className="h-2 w-12 bg-slate-800"></div>
                <div className="h-2 w-24 bg-slate-800"></div>
                <div className="h-2 w-16 bg-slate-800"></div>
              </div>
              <button className="self-end text-brand-blue hover:text-white transition-colors">
                <ArrowRight />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-24 border border-brand-steel p-12 flex flex-col md:flex-row items-center justify-between bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
          <div>
            <h2 className="font-serif font-bold text-2xl text-white mb-2">JOIN THE ALLIANCE</h2>
            <p className="font-sans text-slate-400">Restricted access for qualified vendors and strategic partners.</p>
          </div>
          <button className="mt-6 md:mt-0 bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 font-mono font-bold uppercase tracking-widest transition-all">
            Vendor Prequalification
          </button>
        </div>
      </div>
    </div>
  );
};