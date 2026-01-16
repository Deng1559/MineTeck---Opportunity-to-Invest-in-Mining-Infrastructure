import React from 'react';
import { ComparisonRow } from '../types';
import { X, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';

const comparisonData: ComparisonRow[] = [
  { factor: 'Primary Risk Profile', conventional: 'Geological / Exploration Risk', mineteck: 'Execution / Infrastructure Risk' },
  { factor: 'Regulatory Outlook', conventional: 'Blocked / Permit Denial', mineteck: 'Permitting Certainty' },
  { factor: 'Asset Class', conventional: 'Speculative Exploration', mineteck: 'Cash-Flowing Infrastructure' },
  { factor: 'Liability Structure', conventional: 'Perpetual Balance Sheet Risk', mineteck: 'Risk Eliminated (Zero Liability)' },
  { factor: 'Capital Efficiency', conventional: 'High-Risk CapEx (Uncertain)', mineteck: 'Validation-First Deployment' },
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full border border-brand-steel bg-slate-900">
      <div className="grid grid-cols-12 border-b-2 border-brand-steel bg-slate-950">
        <div className="col-span-4 p-4 border-r border-brand-steel">
          <h4 className="font-serif font-bold text-slate-400 uppercase tracking-widest text-sm">Thesis Factor</h4>
        </div>
        <div className="col-span-4 p-4 border-r border-brand-steel bg-slate-900/50">
          <h4 className="font-serif font-bold text-slate-500 uppercase tracking-widest text-sm">Conventional Play</h4>
        </div>
        <div className="col-span-4 p-4 bg-brand-blue/10 border-l-4 border-brand-blue">
          <h4 className="font-serif font-bold text-brand-blue uppercase tracking-widest text-sm">MineTeck Arbitrage</h4>
        </div>
      </div>

      {comparisonData.map((row, idx) => (
        <div key={idx} className={`grid grid-cols-12 border-b border-brand-steel last:border-0 ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-850'}`}>
          <div className="col-span-4 p-4 border-r border-brand-steel flex items-center">
            <span className="font-sans font-medium text-sm text-slate-200">{row.factor}</span>
          </div>
          
          <div className="col-span-4 p-4 border-r border-brand-steel flex items-center space-x-3 text-slate-500">
            <AlertTriangle size={16} className="text-brand-gold/50" />
            <span className="font-mono text-xs uppercase">{row.conventional}</span>
          </div>

          <div className="col-span-4 p-4 flex items-center space-x-3 bg-brand-blue/5 border-l-4 border-transparent hover:border-brand-blue transition-colors">
            <TrendingUp size={16} className="text-brand-green" />
            <span className="font-mono text-xs uppercase font-bold text-white">{row.mineteck}</span>
          </div>
        </div>
      ))}
    </div>
  );
};