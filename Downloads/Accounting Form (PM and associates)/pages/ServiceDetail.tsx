
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Service Header - bg image from public folder (white) + strong blue overlay */}
      <section className="bg-secondary text-white py-24 min-h-[20rem] flex flex-col justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: 'url("/image-46.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <div className="absolute inset-0 z-[1] bg-secondary/80 pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 whitespace-nowrap">{service.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 min-h-[20rem]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Service Overview</h2>
                <div className="prose prose-lg text-lightText max-w-none">
                  <p>At PM & Associates, our approach to {service.title} is built on precision, regulatory adherence, and strategic insight. We recognize that every enterprise has unique requirements, and we tailor our processes to ensure maximum value and absolute compliance.</p>
                  <p className="mt-4">Our dedicated team of professionals brings deep domain expertise to help you navigate complexities while focusing on your core business objectives.</p>
                </div>
              </div>

              <div className="bg-neutralBg p-10 rounded-xl border-l-8 border-primary">
                <h3 className="text-xl font-bold text-secondary mb-8 uppercase tracking-widest">Key Areas of Focus</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {service.scope.map((item, index) => (
                    <li key={index} className="flex items-center text-secondary font-medium">
                      <span className="w-2 h-2 bg-accentGold rounded-full mr-4 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sticky top-32 space-y-8">
              <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200`} 
                  alt={service.title} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-8">
                  <h4 className="text-xl font-serif font-bold text-secondary mb-4">Why P M & Associates?</h4>
                  <ul className="space-y-4">
                    {[
                      'Indepth knowledge of accounting standards and tax regimes',
                      'Commitment to professional ethics and integrity',
                      'Personalized partner-led engagement',
                      'Structured and transparent reporting'
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                        <span className="text-sm text-lightText">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-xl text-center">
                <h4 className="text-xl font-bold mb-4">Ready to consult?</h4>
                <p className="text-sm text-white/80 mb-6">Schedule a session with our specialists to discuss your requirements.</p>
                <Link to="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-accentGold hover:text-white transition-all shadow-lg">
                  Contact an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-24 min-h-[22rem] bg-neutralBg">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.id !== service.id).slice(0, 3).map((s) => (
              <Link 
                key={s.id} 
                to={`/services/${s.id}`} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-lightText line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;