
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceIcon: React.FC<{ id: string }> = ({ id }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'accounting-bookkeeping': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    'tax-advisory': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    'audit-assurance': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    'business-advisory': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    'financial-planning': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    'forensic-accounting': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
    'mergers-acquisitions': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    'risk-advisory': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  };
  return iconMap[id] || <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
};

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-neutralBg">
      {/* Page Header */}
      <section className="bg-secondary text-white py-24 min-h-[20rem] flex flex-col justify-center border-b border-white/5">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Expertise & Services</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Tailored financial solutions for enterprises. We provide absolute accuracy and strategic foresight in every engagement across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 min-h-[22rem]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES.map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex flex-col bg-white border border-gray-100 p-10 rounded-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-2 h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                    <ServiceIcon id={service.id} />
                  </div>
                  <span className="bg-neutralBg text-secondary/40 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    PM-ADVISORY
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lightText text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <p className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.2em]">Practice Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {service.scope.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-[10px] bg-neutralBg text-secondary/60 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {service.scope.length > 3 && (
                      <span className="text-[10px] text-primary font-bold italic">
                        +{service.scope.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-10 flex items-center text-xs font-bold uppercase tracking-widest text-primary">
                  View Service Details 
                  <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 min-h-[22rem] bg-white border-t border-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8">Our Service Methodology</h2>
              <div className="space-y-8">
                {[
                  { t: "Rigorous Compliance", d: "Every report is cross-checked against the latest statutory requirements of Nepal." },
                  { t: "Partner-Led Service", d: "Senior partners are directly involved in all critical decision-making processes." },
                  { t: "Technological Edge", d: "Using modern accounting and auditing tools to ensure zero-error outcomes." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary font-bold mr-6 flex-shrink-0">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-2 uppercase tracking-wide">{item.t}</h4>
                      <p className="text-lightText text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutralBg p-12 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-6 italic">"Excellence is not a singular act, but a professional habit."</h3>
                <div className="w-12 h-1 bg-accentGold mb-6"></div>
                <p className="text-lightText leading-relaxed">
                  Our commitment to professional ethics means we don't just provide services; we provide the peace of mind that comes from knowing your financial matters are in the hands of the most capable experts in the region.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;