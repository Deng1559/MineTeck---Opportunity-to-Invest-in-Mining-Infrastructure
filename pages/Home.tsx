import React from 'react';
import { ComparisonTable } from '../components/ComparisonTable';
import { Link } from 'react-router-dom';
import { Target, Zap, Shield, FileCheck, Droplets, Mountain } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex items-center border-b-2 border-brand-steel">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1600/900?grayscale" 
            alt="Industrial Infrastructure" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 pt-12">
          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-4 mb-8">
               <div className="inline-flex items-center space-x-2 border border-brand-steel bg-slate-900/80 px-4 py-1 backdrop-blur-sm">
                 <span className="font-mono text-xs text-brand-gold uppercase tracking-widest font-bold">TARGET: LEGACY TAILINGS // METHOD: CYANIDE-FREE // OUTCOME: REVENUE-READY</span>
               </div>
            </div>

            <h1 className="font-serif font-black text-5xl md:text-7xl text-white leading-tight mb-6 tracking-tight">
              UNLOCKING STRANDED <br/>
              <span className="text-brand-blue">GOLD ASSETS.</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl border-l-4 border-brand-gold pl-6">
              Deploying proprietary, zero-discharge extraction infrastructure to recover precious metals from sites where conventional mining is prohibited.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/infrastructure" className="bg-brand-blue hover:bg-blue-600 text-white font-serif font-bold py-4 px-8 uppercase tracking-widest text-sm flex items-center justify-center transition-colors">
                Explore the Infrastructure
              </Link>
              <Link to="/contact" className="border border-brand-steel hover:border-brand-gold text-slate-300 hover:text-white font-mono font-bold py-4 px-8 uppercase tracking-widest text-sm flex items-center justify-center transition-colors">
                Initiate Inquiry
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Footer of Hero */}
        <div className="absolute bottom-0 left-0 w-full h-12 border-t border-brand-steel bg-slate-950/80 backdrop-blur-sm flex items-center px-4 md:px-16">
          <div className="w-full flex justify-between items-center font-mono text-[10px] text-slate-500 uppercase tracking-widest">
             <span>STRATEGY: PERMIT-ENABLED EXECUTION</span>
             <span className="hidden md:block">ASSET: De-risked recovery for stranded resources</span>
          </div>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="py-24 bg-slate-900 border-b border-brand-steel">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
                   VALUE IS STRANDED BY <span className="text-brand-gold">PERMITTING</span>, NOT GEOLOGY.
                </h2>
                <div className="h-1 w-24 bg-brand-gold mb-8"></div>
                <p className="font-sans text-lg text-slate-300 leading-relaxed">
                  Across North America, billions in mineral inventory remain idle. Not because the grade is poor, but because conventional milling creates toxic liabilities that regulators will no longer approve.
                </p>
             </div>
             <div className="bg-slate-950 border border-brand-steel p-8 relative">
                {/* Visual Context Placeholder */}
                <div className="absolute top-0 right-0 p-2 bg-brand-gold text-slate-950 font-mono text-xs font-bold">THE BOTTLENECK</div>
                <div className="space-y-4 font-mono text-sm text-slate-500 mt-4">
                  <div className="flex justify-between border-b border-slate-800 pb-2 items-center">
                    <span className="text-white">TAILINGS PONDS</span>
                    <span className="text-slate-600">---></span>
                    <span className="text-red-500 font-bold">PERPETUAL LIABILITY</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 items-center">
                    <span className="text-white">PERPETUAL LIABILITY</span>
                    <span className="text-slate-600">---></span>
                    <span className="text-red-500 font-bold">PERMIT DENIAL</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900 p-2 border border-slate-800">
                    <span className="text-brand-blue font-bold">ASSET STATUS</span>
                    <span className="text-red-500 font-bold border border-red-900/50 bg-red-900/10 px-2">STRANDED</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution */}
      <section className="bg-slate-950 border-b-2 border-brand-steel">
        <div className="container mx-auto px-4 md:px-16 py-20">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-4">DESIGNED TO ELIMINATE LIABILITY.</h2>
            <p className="font-mono text-brand-blue uppercase tracking-widest">We don't manage risk. We remove it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-steel bg-slate-900">
            <div className="p-12 border-b md:border-b-0 md:border-r border-brand-steel group hover:bg-slate-800 transition-colors">
              <Shield className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">NO TOXICS</h3>
              <p className="font-sans text-slate-400 leading-relaxed">Cyanide, Mercury, and Acid Free.</p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-brand-steel group hover:bg-slate-800 transition-colors">
              <Droplets className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">NO DISCHARGE</h3>
              <p className="font-sans text-slate-400 leading-relaxed">Zero Liquid Discharge (ZLD) Architecture.</p>
            </div>
            <div className="p-12 group hover:bg-slate-800 transition-colors">
              <Mountain className="text-brand-green mb-6 w-12 h-12" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-3">NO TAILINGS</h3>
              <p className="font-sans text-slate-400 leading-relaxed">Residuals stabilized for 1,000+ years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison */}
      <section className="py-24 bg-slate-900 border-b border-brand-steel">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-steel pb-6">
            <div>
              <h2 className="font-serif font-black text-3xl text-white mb-2">THE WINNING ARGUMENT</h2>
              <p className="font-mono text-brand-gold text-sm uppercase tracking-widest">Conventional vs. MineTeck</p>
            </div>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Section 4: Gov Capabilities */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-16">
           <div className="border border-brand-steel p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-12 max-w-2xl">
                 <div className="flex items-center space-x-2 mb-4">
                    <FileCheck className="text-brand-blue" />
                    <span className="font-mono text-brand-blue font-bold uppercase tracking-widest text-xs">Institutional Grade</span>
                 </div>
                 <h2 className="font-serif font-black text-3xl text-white mb-4">LICENSED, INSURED & CONTRACT-READY.</h2>
                 <p className="font-sans text-lg text-slate-400 leading-relaxed">
                    MineTeck holds EPA compliance, MSHA certifications, and $5M+ in insurance coverages. We operate under 12+ NAICS codes for federal mining contracts.
                 </p>
              </div>
              <div className="flex-shrink-0">
                 <Link to="/capabilities" className="inline-block border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-mono font-bold py-4 px-8 uppercase tracking-widest transition-all">
                    View Certifications
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};