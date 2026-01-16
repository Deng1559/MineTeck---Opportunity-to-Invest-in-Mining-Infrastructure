import React from 'react';
import { NaicsCode } from '../types';

interface QuadChartProps {
  title: string;
  naics: NaicsCode[];
  certs: string[];
  capabilities: string[];
  clients: string[];
}

export const QuadChart: React.FC<QuadChartProps> = ({ title, naics, certs, capabilities, clients }) => {
  return (
    <div className="border-2 border-brand-steel bg-slate-900 w-full max-w-4xl mx-auto shadow-2xl">
      {/* Header */}
      <div className="bg-slate-950 border-b-2 border-brand-steel p-4 flex justify-between items-center">
        <h2 className="font-serif font-bold text-xl text-white uppercase tracking-wider">{title}</h2>
        <span className="font-mono text-xs text-brand-gold border border-brand-gold px-2 py-1 uppercase">CAGE: 8XJ92</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
        
        {/* Q1: Capabilities */}
        <div className="border-b border-r border-brand-steel p-6 h-full relative group hover:bg-slate-850 transition-colors">
           <span className="absolute top-2 right-2 font-mono text-[10px] text-slate-600">Q1 // CAPABILITIES</span>
           <h3 className="font-bold text-brand-blue mb-4 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Core Competencies</h3>
           <ul className="list-square list-inside space-y-2">
              {capabilities.map((cap, i) => (
                <li key={i} className="font-sans text-sm text-slate-300">{cap}</li>
              ))}
           </ul>
        </div>

        {/* Q2: NAICS Codes & Data */}
        <div className="border-b border-brand-steel p-6 h-full relative group hover:bg-slate-850 transition-colors">
           <span className="absolute top-2 right-2 font-mono text-[10px] text-slate-600">Q2 // CLASSIFICATION</span>
           <h3 className="font-bold text-brand-blue mb-4 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">NAICS Codes</h3>
           <div className="grid grid-cols-1 gap-2">
             {naics.map((n, i) => (
               <div key={i} className="flex justify-between font-mono text-xs">
                 <span className="text-white font-bold">{n.code}</span>
                 <span className="text-slate-400">{n.description}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Q3: Past Performance */}
        <div className="border-r border-brand-steel p-6 h-full relative group hover:bg-slate-850 transition-colors">
           <span className="absolute top-2 right-2 font-mono text-[10px] text-slate-600">Q3 // TRACTION</span>
           <h3 className="font-bold text-brand-blue mb-4 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Key Clients</h3>
           <div className="grid grid-cols-2 gap-4">
             {clients.map((client, i) => (
               <div key={i} className="border border-slate-700 p-2 flex items-center justify-center text-center">
                 <span className="font-sans text-xs font-bold text-slate-300">{client}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Q4: Differentiators/Certs */}
        <div className="p-6 h-full relative group hover:bg-slate-850 transition-colors">
           <span className="absolute top-2 right-2 font-mono text-[10px] text-slate-600">Q4 // VALIDATION</span>
           <h3 className="font-bold text-brand-blue mb-4 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Certifications</h3>
           <div className="flex flex-wrap gap-2">
             {certs.map((cert, i) => (
               <span key={i} className="px-3 py-1 bg-slate-800 border border-brand-steel text-brand-gold font-mono text-xs">
                 {cert}
               </span>
             ))}
           </div>
           <div className="mt-6 border-t border-slate-700 pt-4">
              <h4 className="font-bold text-white text-xs uppercase mb-2">Insurance Limits</h4>
              <p className="font-mono text-xs text-slate-400">$10M General Liability</p>
              <p className="font-mono text-xs text-slate-400">$5M Environmental</p>
           </div>
        </div>

      </div>
    </div>
  );
};