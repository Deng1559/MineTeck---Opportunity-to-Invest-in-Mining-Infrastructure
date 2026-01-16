import React from 'react';
import { ComparisonTable } from '../components/ComparisonTable';
import { Link } from 'react-router-dom';
import { Target, Zap, Shield, TrendingUp, Scale, Lock } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section: Market Opportunity */}
      <section className="relative min-h-[85vh] w-full flex items-center border-b-2 border-brand-steel">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1600/900?grayscale" 
            alt="Strategic Infrastructure" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 pt-12">
          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-4 mb-8">
               <div className="inline-flex items-center space-x-2 border border-brand-steel bg-slate-900/80 px-4 py-1 backdrop-blur-sm">
                 <span className="font-mono text-xs text-brand-gold uppercase tracking-widest font-bold">MARKET: STRANDED INVENTORY // STRATEGY: REGULATORY ARBITRAGE // OUTCOME: PERMIT CERTAINTY</span>
               </div>
            </div>

            <h1 className="font-serif font-black text-5xl md:text-7xl text-white leading-tight mb-6 tracking-tight">
              UNLOCKING STRANDED <br/>
              <span className="text-brand-blue">ASSET INVENTORY.</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl border-l-4 border-brand-gold pl-6">
              The systematic conversion of economically viable but legally stranded gold & silver assets into permitted, cash-flowing operations.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/infrastructure" className="bg-brand-blue hover:bg-blue-600 text-white font-serif font-bold py-4 px-8 uppercase tracking-widest text-sm flex items-center justify-center transition-colors">
                View Operational Proof
              </Link>
              <Link to="/contact" className="border border-brand-steel hover:border-brand-gold text-slate-300 hover:text-white font-mono font-bold py-4 px-8 uppercase tracking-widest text-sm flex items-center justify-center transition-colors">
                Investor Access
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Footer of Hero */}
        <div className="absolute bottom-0 left-0 w-full h-12 border-t border-brand-steel bg-slate-950/80 backdrop-blur-sm flex items-center px-4 md:px-16">
          <div className="w-full flex justify-between items-center font-mono text-[10px] text-slate-500 uppercase tracking-widest">
             <span>THESIS: PERMIT-ENABLED RECLAMATION</span>
             <span className="hidden md:block">ASSET: Infrastructure-led precious metals exposure</span>
          </div>
        </div>
      </section>

      {/* Section 1: The Convergence (The Why Now) */}
      <section className="py-24 bg-slate-900 border-b border-brand-steel">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div>
                <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
                   THE MARKET <span className="text-brand-gold">CONVERGENCE</span>.
                </h2>
                <div className="h-1 w-24 bg-brand-gold mb-8"></div>
                <p className="font-sans text-lg text-slate-300 leading-relaxed mb-6">
                   A large segment of the gold and silver market is economically viable but operationally inaccessible. The constraint is not commodity pricing or ore grade—it is permitting, liability, and environmental risk.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-brand-blue mr-4"></div>
                    <div>
                      <h4 className="font-serif font-bold text-white">Sustained Demand</h4>
                      <p className="text-sm text-slate-400 font-sans">Monetary hedging and industrial use support long-term pricing floors.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-brand-blue mr-4"></div>
                    <div>
                      <h4 className="font-serif font-bold text-white">Regulatory Tightening</h4>
                      <p className="text-sm text-slate-400 font-sans">New permits for conventional mills are rare; projects near waterways are blocked.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-full bg-brand-blue mr-4"></div>
                    <div>
                      <h4 className="font-serif font-bold text-white">Stranded Inventory</h4>
                      <p className="text-sm text-slate-400 font-sans">Thousands of sites exist but cannot move forward due to toxic processing constraints.</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="bg-slate-950 border border-brand-steel p-8 relative">
                <div className="absolute top-0 right-0 p-2 bg-brand-gold text-slate-950 font-mono text-xs font-bold">THE ASYMMETRY</div>
                <div className="mt-8 space-y-6">
                  <div className="p-4 border border-slate-800 bg-slate-900">
                     <p className="font-mono text-sm text-brand-green font-bold">ASSETS EXIST.</p>
                  </div>
                  <div className="p-4 border border-slate-800 bg-slate-900">
                     <p className="font-mono text-sm text-brand-green font-bold">CAPITAL EXISTS.</p>
                  </div>
                  <div className="p-4 border border-red-900/50 bg-red-900/10 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                     <p className="font-mono text-sm text-red-500 font-bold relative z-10">PERMITS DO NOT.</p>
                     <p className="font-sans text-xs text-red-400 mt-2 relative z-10 italic">...Unless the processing model changes.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution (Risk Removal) */}
      <section className="bg-slate-950 border-b-2 border-brand-steel">
        <div className="container mx-auto px-4 md:px-16 py-20">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-4">RISK REMOVAL, NOT MANAGEMENT.</h2>
            <p className="font-mono text-brand-blue uppercase tracking-widest">The Arbitrage Mechanism</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-steel bg-slate-900">
            <div className="p-12 border-b md:border-b-0 md:border-r border-brand-steel group hover:bg-slate-800 transition-colors">
              <Shield className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">NON-TOXIC PROCESSING</h3>
              <p className="font-sans text-slate-400 leading-relaxed">No cyanide. Eliminates the primary vector for environmental litigation and community opposition.</p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-brand-steel group hover:bg-slate-800 transition-colors">
              <Lock className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">ZLD ARCHITECTURE</h3>
              <p className="font-sans text-slate-400 leading-relaxed">Zero Liquid Discharge. Removing discharge points removes federal oversight triggers.</p>
            </div>
            <div className="p-12 group hover:bg-slate-800 transition-colors">
              <Scale className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">NO PERPETUAL LIABILITY</h3>
              <p className="font-sans text-slate-400 leading-relaxed">Addressing the specific regulatory failure point that blocks gold projects. Balance sheet protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Investment Thesis */}
      <section className="py-24 bg-slate-900 border-b border-brand-steel">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-steel pb-6">
            <div>
              <h2 className="font-serif font-black text-3xl text-white mb-2">THE INVESTMENT THESIS</h2>
              <p className="font-mono text-brand-gold text-sm uppercase tracking-widest">Operational, Not Promotional.</p>
            </div>
            <div className="hidden md:block">
               <span className="font-mono text-xs text-slate-500">INFRASTRUCTURE-LED PRECIOUS METALS EXPOSURE</span>
            </div>
          </div>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
};