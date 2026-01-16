import React from 'react';
import { Briefcase, Building2, Landmark, Users } from 'lucide-react';
import { InquiryType } from '../types';

export const InquiryRouter: React.FC = () => {
  const options = [
    {
      id: InquiryType.OWNER,
      label: 'Asset Owners',
      desc: 'I own mining rights or brownfield sites.',
      icon: Building2,
      action: 'Initiate Audit'
    },
    {
      id: InquiryType.INVESTOR,
      label: 'Institutional Capital',
      desc: 'I am an accredited investor.',
      icon: Landmark,
      action: 'Access Data Room'
    },
    {
      id: InquiryType.GOV,
      label: 'Government / Federal',
      desc: 'I am sourcing contractors for federal projects.',
      icon: Briefcase,
      action: 'View Capability Statement'
    },
    {
      id: InquiryType.PARTNER,
      label: 'Engineering Partners',
      desc: 'I represent an engineering firm.',
      icon: Users,
      action: 'Contact Relations'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
      {options.map((opt) => (
        <button 
          key={opt.id}
          className="group relative flex flex-col items-start p-8 bg-slate-900 border border-brand-steel hover:border-brand-blue transition-all duration-300 text-left h-64"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-brand-blue transition-colors duration-300"></div>
          
          <div className="mb-auto">
            <opt.icon size={32} className="text-brand-steel group-hover:text-brand-gold mb-6 transition-colors" />
            <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{opt.label}</h3>
            <p className="font-sans text-slate-400 group-hover:text-slate-200 transition-colors">{opt.desc}</p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between border-t border-slate-800 pt-4 group-hover:border-slate-700">
             <span className="font-mono text-xs text-brand-blue uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors">
               {opt.action} &rarr;
             </span>
          </div>
        </button>
      ))}
    </div>
  );
};