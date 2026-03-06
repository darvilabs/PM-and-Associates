
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INDUSTRIES, IndustryExtended } from '../constants';

const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();

  // make the return of `find` explicit so that TypeScript knows the
  // resulting value may be undefined.  we guard against that below.
  const industry: IndustryExtended | undefined = INDUSTRIES.find(
    (i) => i.id === industryId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  // if there was no match (or the param itself was missing) redirect
  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Industry Header */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src={`https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg`} 
            className="w-full h-full object-cover" 
            alt="Industry Background" 
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 whitespace-nowrap">{industry.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Sector Insight</h2>
                <div className="prose prose-lg text-lightText max-w-none">
                  <p>{industry.detailedDescription}</p>
                  <p className="mt-4">We understand the specific operational and regulatory drivers that impact the {industry.title} sector. Our multi-disciplinary team provides the necessary assurance and strategic advice to help your business thrive.</p>
                </div>
              </div>
              <div className="bg-neutralBg p-10 rounded-xl border-l-8 border-primary">
                <h3 className="text-xl font-bold text-secondary mb-8 uppercase tracking-widest">Industry Focus Areas</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {industry.focusAreas.map((item, index) => (
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
                  src={`https://www.cygnet-face.com/wp-content/uploads/2020/12/Story-of-Evolution.jpg`} 
                  alt={industry.title} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-8">
                  <h4 className="text-xl font-serif font-bold text-secondary mb-4">Our Value Proposition</h4>
                  <ul className="space-y-4">
                    {[
                      'Tailored regulatory compliance strategies',
                      'Operational efficiency and cost optimization',
                      'Sector-specific risk mitigation',
                      'Accurate and transparent financial reporting'
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                        <span className="text-sm text-lightText">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-secondary text-white p-8 rounded-xl text-center">
                <h4 className="text-xl font-bold mb-4 text-accentGold">Expert Advisory</h4>
                <p className="text-sm text-white/80 mb-6">Need a professional review of your {industry.title} operations?</p>
                <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-[#8e313d] transition-all shadow-lg">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Section */}
      <section className="py-24 bg-neutralBg">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-12">Other Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {INDUSTRIES.filter(i => i.id !== industry.id).slice(0, 4).map((i) => (
              <Link 
                key={i.id} 
                to={`/industries/${i.id}`} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{i.title}</h3>
                <p className="text-sm text-lightText line-clamp-2">{i.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;