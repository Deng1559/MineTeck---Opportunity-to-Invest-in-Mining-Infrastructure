import React from 'react';
import { ComparisonRow } from '../types';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

const comparisonData: ComparisonRow[] = [
  { factor: 'Chemistry', conventional: 'Toxic Chemistry', mineteck: 'Benign Chemistry' },
  { factor: 'Waste Management', conventional: 'Tailings Ponds', mineteck: 'Closed Loop (ZLD)' },
  { factor: 'Permitting Status', conventional: 'Permit Blocked', mineteck: 'PERMIT APPROVED' },
  { factor: 'Liability Profile', conventional: 'Liability: Perpetual', mineteck: 'Liability: Eliminated' },
  { factor: 'Federal Status', conventional: 'High Risk', mineteck: 'Contract-Ready' },
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full border border-brand-steel bg-slate-900">
      <div className="grid grid-cols-12 border-b-2 border-brand-steel bg-slate-950">
        <div className="col-span-4 p-4 border-r border-brand-steel">
          <h4 className="font-serif font-bold text-slate-400 uppercase tracking-widest text-sm">Decision Factor</h4>
        </div>
        <div className="col-span-4 p-4 border-r border-brand-steel bg-slate-900/50">
          <h4 className="font-serif font-bold text-slate-500 uppercase tracking-widest text-sm">Conventional Mill</h4>
        </div>
        <div className="col-span-4 p-4 bg-brand-blue/10 border-l-4 border-brand-blue">
          <h4 className="font-serif font-bold text-brand-blue uppercase tracking-widest text-sm">MineTeck Infra</h4>
        </div>
      </div>

      {comparisonData.map((row, idx) => (
        <div key={idx} className={`grid grid-cols-12 border-b border-brand-steel last:border-0 ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-850'}`}>
          <div className="col-span-4 p-4 border-r border-brand-steel flex items-center">
            <span className="font-sans font-medium text-sm text-slate-200">{row.factor}</span>
          </div>
          
          <div className="col-span-4 p-4 border-r border-brand-steel flex items-center space-x-3 text-slate-500">
            <ShieldAlert size={16} className="text-red-900" />
            <span className="font-mono text-xs uppercase">{row.conventional}</span>
          </div>

          <div className="col-span-4 p-4 flex items-center space-x-3 bg-brand-blue/5 border-l-4 border-transparent hover:border-brand-blue transition-colors">
            <ShieldCheck size={16} className="text-brand-green" />
            <span className="font-mono text-xs uppercase font-bold text-white">{row.mineteck}</span>
          </div>
        </div>
      ))}
    </div>
  );
};