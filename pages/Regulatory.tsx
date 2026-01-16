import React from 'react';
import { FileText, ShieldCheck, AlertTriangle, FlaskConical } from 'lucide-react';

export const Regulatory: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="border-b border-brand-steel pb-8 mb-12">
          <h1 className="font-serif font-bold text-4xl text-white mb-2">WHY REGULATORS APPROVE MINETECK</h1>
          <p className="font-mono text-brand-blue">THE FOREVER PROBLEM: SOLVED</p>
          <p className="font-sans text-slate-400 mt-4 max-w-3xl leading-relaxed">
            Regulators approve MineTeck because we solve the "Forever Problem." By stabilizing residuals and eliminating discharge, we remove the long-term liability that blocks permits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Permits */}
          <div className="col-span-2 space-y-6">
            <h2 className="font-serif font-bold text-2xl text-white mb-6 flex items-center">
              <ShieldCheck className="mr-3 text-brand-green" /> Active Permits
            </h2>
            
            {[
              { id: 'CDPHE-wq-001', agency: 'CDPHE', type: 'Water Quality Control', status: 'Active', renewal: '2028' },
              { id: 'DRMS-112', agency: 'DRMS', type: 'Reclamation Permit', status: 'Active', renewal: '2026' },
              { id: 'EPA-NPDES', agency: 'EPA', type: 'NPDES Discharge', status: 'Pending Review', renewal: 'N/A' },
            ].map((permit, i) => (
              <div key={i} className="bg-slate-900 border border-brand-steel p-6 flex justify-between items-center group hover:border-brand-blue transition-colors">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-bold text-white text-lg">{permit.agency}</span>
                    <span className="font-mono text-xs text-slate-500 px-2 py-1 bg-slate-950 border border-slate-700">{permit.id}</span>
                  </div>
                  <p className="text-slate-400 font-sans">{permit.type}</p>
                </div>
                <div className="text-right">
                   <span className={`block font-mono text-xs font-bold uppercase ${permit.status === 'Active' ? 'text-brand-green' : 'text-brand-gold'}`}>{permit.status}</span>
                   <span className="text-xs text-slate-600 font-mono">Renewal: {permit.renewal}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Standards & Protocols */}
          <div className="col-span-1 border-l border-brand-steel pl-8">
            <h3 className="font-serif font-bold text-xl text-white mb-6">TESTING STANDARDS</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <FlaskConical size={20} className="text-brand-steel mt-1 mr-3 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">EPA Method 1311 (TCLP)</h4>
                  <p className="text-xs text-brand-green mt-1 font-mono uppercase">Non-hazardous</p>
                  <p className="text-xs text-slate-500 mt-1">Toxicity Characteristic Leaching Procedure</p>
                </div>
              </li>
              <li className="flex items-start group">
                <FlaskConical size={20} className="text-brand-steel mt-1 mr-3 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">EPA Method 1312 (SPLP)</h4>
                  <p className="text-xs text-brand-green mt-1 font-mono uppercase">Stable</p>
                  <p className="text-xs text-slate-500 mt-1">Synthetic Precipitation Leaching Procedure</p>
                </div>
              </li>
              <li className="flex items-start group">
                <FlaskConical size={20} className="text-brand-steel mt-1 mr-3 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">ABA (Acid-Base)</h4>
                  <p className="text-xs text-brand-green mt-1 font-mono uppercase">Neutralizing</p>
                  <p className="text-xs text-slate-500 mt-1">Acid-Base Accounting</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-slate-800 pt-6">
                <h4 className="font-bold text-white text-xs uppercase mb-2">Compliance</h4>
                <ul className="space-y-2">
                    <li className="font-mono text-xs text-slate-400">NI 43-101 Reporting</li>
                    <li className="font-mono text-xs text-slate-400">S-K 1300 Compliance</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};