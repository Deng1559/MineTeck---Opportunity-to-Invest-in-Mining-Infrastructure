import React from 'react';
import { Asset } from '../types';
import { Activity, MapPin } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <div className="group border border-brand-steel bg-slate-900 flex flex-col h-full hover:border-brand-blue transition-colors duration-200">
      {/* Header / Status */}
      <div className="flex justify-between items-stretch border-b border-brand-steel bg-slate-950">
        <div className="px-4 py-3 border-l-4 border-brand-blue">
          <h3 className="font-serif text-xl font-bold text-white tracking-wide">{asset.name}</h3>
          <div className="flex items-center mt-1 space-x-2">
            <MapPin size={12} className="text-brand-steel" />
            <span className="font-mono text-xs text-brand-steel uppercase">{asset.location}</span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center px-4 border-l border-brand-steel bg-slate-900">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</span>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 ${asset.status === 'OPERATIONAL' ? 'bg-brand-green animate-pulse' : 'bg-brand-gold'} rounded-none`}></div>
            <span className={`font-mono text-xs font-bold ${asset.status === 'OPERATIONAL' ? 'text-brand-green' : 'text-brand-gold'}`}>
              {asset.status}
            </span>
          </div>
        </div>
      </div>

      {/* Image / Visualization Area */}
      <div className="relative h-64 overflow-hidden border-b border-brand-steel bg-slate-800 group-hover:bg-slate-700 transition-colors">
        <img 
          src={asset.imageUrl} 
          alt={asset.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 bg-brand-blue text-white px-3 py-1 font-mono text-xs font-bold uppercase">
          {asset.type}
        </div>
      </div>

      {/* Description */}
      <div className="p-6 border-b border-brand-steel">
        <p className="font-sans text-sm text-slate-300 leading-relaxed">
          {asset.description}
        </p>
      </div>

      {/* Technical Specs Grid */}
      <div className="grid grid-cols-2 gap-px bg-brand-steel mt-auto">
        {asset.specs.map((spec, idx) => (
          <div key={idx} className="bg-slate-900 p-3 flex flex-col">
            <span className="font-mono text-[10px] text-brand-steel uppercase tracking-wider">{spec.label}</span>
            <span className="font-mono text-sm text-white font-medium mt-1">
              {spec.value} <span className="text-slate-500 text-xs">{spec.unit}</span>
            </span>
          </div>
        ))}
      </div>
      
      {/* Action Footer */}
      <div className="p-4 bg-slate-950 group-hover:bg-slate-900 transition-colors">
         <button className="w-full py-2 border border-slate-600 text-slate-400 font-mono text-xs uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue hover:bg-slate-950 transition-all flex items-center justify-center space-x-2">
            <Activity size={14} />
            <span>View Telemetry</span>
         </button>
      </div>
    </div>
  );
};