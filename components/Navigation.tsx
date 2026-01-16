import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, ShieldCheck, Activity, Network, FileText, Mail } from 'lucide-react';

const NavItem = ({ to, label, icon: Icon }: { to: string; label: string; icon: any }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`
        flex items-center space-x-2 px-6 h-full border-r border-brand-steel transition-colors duration-150
        ${isActive 
          ? 'bg-brand-blue text-white border-brand-blue' 
          : 'text-slate-400 hover:text-brand-gold hover:bg-slate-800'
        }
      `}
    >
      <Icon size={16} strokeWidth={2} />
      <span className="font-mono text-xs uppercase tracking-wider font-bold">{label}</span>
    </NavLink>
  );
};

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b-2 border-brand-steel shadow-xl">
      {/* Top Status Bar */}
      <div className="w-full bg-slate-950 border-b border-brand-steel py-1 px-4 flex justify-between items-center text-[10px] font-mono text-slate-500 tracking-widest uppercase">
        <span>System Status: <span className="text-brand-green">Nominal</span></span>
        <span>Secure Connection: <span className="text-brand-blue">TLS 1.3</span></span>
      </div>

      {/* Main Nav */}
      <div className="flex items-stretch h-16">
        <div className="flex items-center px-8 border-r-2 border-brand-steel bg-slate-950 min-w-[240px]">
           <div className="w-8 h-8 bg-brand-blue flex items-center justify-center mr-3">
              <span className="font-serif font-black text-slate-900 text-lg">M</span>
           </div>
           <div>
             <h1 className="font-serif font-bold text-lg leading-none text-white tracking-tight">MINETECK</h1>
             <p className="font-mono text-[10px] text-brand-steel tracking-widest">INFRASTRUCTURE</p>
           </div>
        </div>

        <nav className="flex-1 flex items-stretch overflow-x-auto">
          <NavItem to="/" label="Thesis" icon={Terminal} />
          <NavItem to="/infrastructure" label="Assets" icon={Activity} />
          <NavItem to="/capabilities" label="Capabilities" icon={ShieldCheck} />
          <NavItem to="/regulatory" label="Compliance" icon={FileText} />
          <NavItem to="/partners" label="Network" icon={Network} />
          <NavItem to="/contact" label="Inquiry" icon={Mail} />
        </nav>

        <div className="flex items-center px-6 bg-slate-950 border-l border-brand-steel">
           <button className="px-4 py-2 border border-brand-gold text-brand-gold font-mono text-xs font-bold hover:bg-brand-gold hover:text-slate-900 transition-colors uppercase tracking-widest">
             Client Portal
           </button>
        </div>
      </div>
    </header>
  );
};