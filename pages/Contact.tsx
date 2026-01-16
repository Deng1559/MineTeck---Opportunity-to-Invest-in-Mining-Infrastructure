import React from 'react';
import { InquiryRouter } from '../components/InquiryRouter';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16 flex flex-col items-center">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="font-serif font-black text-5xl text-white mb-6">SECURE INQUIRY</h1>
        <p className="font-sans text-xl text-slate-400 max-w-2xl mx-auto">
          MineTeck maintains strict communication protocols. Please identify your stakeholder category to be routed to the appropriate division.
        </p>
      </div>

      <InquiryRouter />

      <div className="mt-16 text-center">
        <p className="font-mono text-xs text-slate-600 uppercase">
          Communications are encrypted via TLS 1.3 <br/>
          Unsolicited solicitations will be discarded.
        </p>
      </div>
    </div>
  );
};