import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../constants';

const IndustryIcon: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'banking-finance':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'trading-retail':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'manufacturing':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'software-companies':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    case 'communication':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
  }
};

const Industries: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Our industry-focused approach allows us to deliver tailored financial and advisory solutions across various sectors.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:border-l border-gray-100 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {INDUSTRIES.map((industry) => (
              <Link 
                key={industry.id} 
                to={`/industries/${industry.id}`}
                className="group p-10 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-neutralBg rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                     <IndustryIcon id={industry.id} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{industry.title}</h3>
                <p className="text-lightText leading-relaxed flex-grow">
                  {industry.description}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-primary font-bold text-sm tracking-widest uppercase">
                  Explore Solutions →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-neutralBg">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8">Serving Regional & International Markets</h2>
              <p className="text-lightText mb-6">
                Based in Nepal, PM & Associates leverages localized regulatory knowledge while maintaining international standards of professionalism.
              </p>
            </div>
            <div className="md:w-1/2 relative">
               <div className="bg-primary/5 rounded-2xl p-4">
                  <img src="https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg" alt="Global Markets" className="rounded-xl shadow-lg" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;