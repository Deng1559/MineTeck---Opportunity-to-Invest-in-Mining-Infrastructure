import React from 'react';
import { AssetCard } from '../components/AssetCard';
import { Asset } from '../types';

const assets: Asset[] = [
  {
    id: 'GTM-01',
    name: 'Gladstone Toll Mill',
    type: 'The Precedent',
    status: 'OPERATIONAL',
    location: 'Colorado, USA',
    description: 'FROM LIABILITY TO REVENUE-READY INFRASTRUCTURE. Gladstone demonstrates that when liability is eliminated, permits are granted. It is the first permit of its kind on this waterway since 2002.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    specs: [
      { label: 'Status', value: 'Operational', unit: '' },
      { label: 'Capacity', value: 'Commercial', unit: 'Scale' },
      { label: 'Throughput', value: '500', unit: 'TPD' },
      { label: 'Outcome', value: 'Permitted', unit: 'Fully' },
    ]
  },
  {
    id: 'MRU-04',
    name: 'Mobile Research Unit (MRU)',
    type: 'The Validator',
    status: 'COMMISSIONING',
    location: 'Nevada, USA',
    description: 'VALIDATE BEFORE YOU BUILD. The MRU is a decision engine. It answers three questions: Is it recoverable? Is it non-toxic? Will it permit? This prevents CapEx risk.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    specs: [
      { label: 'Function', value: 'Validation', unit: '' },
      { label: 'Target', value: 'CapEx', unit: 'Risk' },
      { label: 'Setup Time', value: '14', unit: 'Days' },
      { label: 'Discharge', value: '0', unit: '%' },
    ]
  }
];

export const Infrastructure: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="border-l-4 border-brand-gold pl-6 mb-12">
           <h1 className="font-serif font-bold text-4xl text-white mb-2">OPERATING ASSETS</h1>
           <p className="font-sans text-slate-400">Deployed infrastructure and active processing nodes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assets.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>

        {/* Technical Schematic Placeholder Section */}
        <div className="mt-16 border border-brand-steel bg-slate-900 p-8">
          <div className="flex justify-between items-center mb-8 border-b border-brand-steel pb-4">
             <h3 className="font-serif font-bold text-xl text-white">PROCESS FLOW DIAGRAM (ZLD)</h3>
             <span className="font-mono text-xs text-brand-green animate-pulse">● LIVE SCHEMATIC</span>
          </div>
          <div className="aspect-video bg-slate-950 border border-slate-800 relative flex items-center justify-center overflow-hidden">
             {/* Abstract grid lines to simulate a map/schematic */}
             <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-20 pointer-events-none">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-brand-steel/30"></div>
                ))}
             </div>
             <div className="text-center">
               <p className="font-mono text-slate-600 text-sm">ZERO LIQUID DISCHARGE PROCESS RENDERING...</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};