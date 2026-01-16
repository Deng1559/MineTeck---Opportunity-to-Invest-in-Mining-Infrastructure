import React from 'react';
import { QuadChart } from '../components/QuadChart';

export const Capabilities: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="font-serif font-black text-4xl md:text-5xl text-white mb-4 uppercase">Statement of Qualifications</h1>
          <div className="h-1 w-24 bg-brand-blue mb-6"></div>
          <p className="font-sans text-slate-400 max-w-2xl">
            MineTeck provides critical mineral processing infrastructure supporting the Defense Industrial Base and North American energy independence.
          </p>
        </div>

        <div className="flex justify-center">
          <QuadChart 
            title="Capability Statement // FY2024"
            naics={[
              { code: '212399', description: 'All Other Metal Ore Mining' },
              { code: '562910', description: 'Remediation Services' },
              { code: '541330', description: 'Engineering Services' }
            ]}
            certs={[
              'EPA Compliance',
              'MSHA Certified',
              'OSHA HAZWOPER'
            ]}
            capabilities={[
              'Custom Mineral Flotation Circuit Design',
              'Remote Site Infrastructure Deployment',
              'Tailings Reprocessing & Reclamation',
              'Heavy Metal Water Treatment',
              'Strategic Mineral Stockpiling'
            ]}
            clients={[
              'US Army Corps of Engineers',
              'Dept of Interior (BLM)',
              'Tier 1 Mining Operators',
              'Strategic Reserve Partners'
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
           <a href="#" className="inline-flex items-center space-x-2 border-b-2 border-brand-gold pb-1 text-brand-gold font-mono font-bold uppercase text-sm hover:text-white hover:border-white transition-colors">
             <span>Download Full Capabilities Deck (PDF)</span>
             <span>&darr;</span>
           </a>
        </div>
        
        {/* Insurance Limits Footnote */}
        <div className="mt-8 text-center border-t border-slate-800 pt-8">
             <h4 className="font-mono font-bold text-slate-500 text-xs uppercase mb-2">Coverage Limits</h4>
             <div className="flex justify-center space-x-8">
                <span className="font-mono text-xs text-slate-400">General Liability: $5,000,000</span>
                <span className="font-mono text-xs text-slate-400">Professional Liability: $2,000,000</span>
             </div>
        </div>
      </div>
    </div>
  );
};