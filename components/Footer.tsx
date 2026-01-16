import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 border-t-2 border-brand-steel mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-steel">
        <div className="p-8 border-b md:border-b-0 md:border-r border-brand-steel">
          <h4 className="font-serif font-bold text-brand-steel mb-4">HEADQUARTERS</h4>
          <p className="font-mono text-xs text-slate-400 leading-relaxed">
            100 Industrial Parkway<br/>
            Sector 7G, Logistics Hub<br/>
            Nevada, USA 89434
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-brand-steel">
          <h4 className="font-serif font-bold text-brand-steel mb-4">CONTACT</h4>
          <p className="font-mono text-xs text-slate-400 leading-relaxed">
            SYSops: +1 (555) 019-2834<br/>
            Secure: comms@mineteck.infra<br/>
            DUNS: 884-291-002
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-brand-steel">
          <h4 className="font-serif font-bold text-brand-steel mb-4">LEGAL</h4>
          <ul className="font-mono text-xs text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-brand-blue underline decoration-brand-steel">Privacy Protocol</a></li>
            <li><a href="#" className="hover:text-brand-blue underline decoration-brand-steel">Terms of Engagement</a></li>
            <li><a href="#" className="hover:text-brand-blue underline decoration-brand-steel">Vendor Code</a></li>
          </ul>
        </div>
        <div className="p-8 flex flex-col justify-end">
           <p className="font-mono text-[10px] text-slate-600 uppercase">
             Authorized Personnel Only.<br/>
             © 2024 MineTeck Infrastructure Corp.<br/>
             System Build v4.0.2
           </p>
        </div>
      </div>
    </footer>
  );
};