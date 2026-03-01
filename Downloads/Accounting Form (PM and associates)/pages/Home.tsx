import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES } from '../constants';

const CountUp: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Cubic ease-out: 1 - (1 - x)^3
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

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

const ServiceIcon: React.FC<{ id: string }> = ({ id }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'accounting-bookkeeping': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    'tax-advisory': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    'audit-assurance': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    'business-advisory': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    'financial-planning': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    'forensic-accounting': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
    'mergers-acquisitions': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    'risk-advisory': <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  };
  return <>{iconMap[id] ?? iconMap['accounting-bookkeeping']}</>;
};

const Home: React.FC = () => {
  const stats = [
    { 
      target: 13,
      suffix: '+ years',
      value: 'Experience', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      target: 20,
      suffix: '+',
      value: 'Experts', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    // { 
    //   target: 99,
    //   suffix: '%',
    //   value: 'Success Rate', 
    //   icon: (
    //     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    //     </svg>
    //   )
    // },
    // { 
    //   target: 100,
    //   suffix: '%',
    //   value: 'Satisfaction', 
    //   icon: (
    //     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    //     </svg>
    //   )
    // },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-white pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden border-b border-gray-50">
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Leading Chartered Accountants
              </div> */}
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-secondary mb-6 leading-[1.1]">
                Trusted Advisors<br/>
                for <span className="text-primary italic">Financial Clarity</span><br/>
                & Growth.
              </h1>
              <p className="text-lg md:text-xl text-lightText mb-10 leading-relaxed">
                P M & Associates provides comprehensive accounting, taxation, audit, and advisory services to businesses across diverse industries. We ensure regulatory compliance and sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-center transition-all hover:bg-[#8e313d] shadow-lg">
                  Our Services
                </Link>
                <Link to="/contact" className="border-2 border-secondary text-secondary px-8 py-4 rounded-md font-semibold text-center transition-all hover:bg-secondary hover:text-white">
                  Work With Us
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end items-center relative">
              <div className="animate-float relative z-20">
                <div className="w-[380px] h-[500px] rounded-lg p-1 border-[10px] border-white shadow-2xl overflow-hidden relative group bg-secondary">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Gradient overlay for readability and depth */}
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{
                      background: 'linear-gradient(160deg, rgba(27,38,59,0.94) 0%, rgba(51,65,85,0.7) 35%, rgba(166,58,72,0.25) 70%, rgba(27,38,59,0.9) 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-[1]"></div>
                  <div className="relative h-full flex flex-col justify-end p-10 pb-16 z-10">
                    <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-6">
                      "Integrity is the bedrock of our practice."
                    </p>
                    <div className="w-16 h-1 bg-primary mb-6"></div>
                    <p className="text-sm font-bold tracking-[0.2em] text-white/90 uppercase font-sans">
                      Managing Head
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/4 h-full bg-neutralBg -skew-x-12 translate-x-20 -z-10"></div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white relative z-20 -mt-8 md:-mt-12">
        <div className="container">
          <div className="bg-secondary rounded-2xl shadow-2xl p-2 md:p-2 lg:p-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 items-stretch text-center max-w-sm mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative flex flex-col items-center p-4 transition-all duration-300 hover:-translate-y-2 rounded-xl hover:bg-white/5">
                  <div className="mb-4 text-accentGold group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-accentGold transition-colors">
                    <CountUp end={stat.target} duration={2000} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold group-hover:text-white/70 transition-colors">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro - Who We Are */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - left */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/whoweare.jpeg"
                  alt="P M & Associates - professional team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Content - right */}
            <div className="order-1 lg:order-2 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-lightText leading-relaxed">
                <p>P M & Associates is an enterprise-level Chartered Accountancy firm that stands at the intersection of traditional values and modern financial excellence. We are a team of experienced professionals committed to delivering accurate, ethical, and timely financial solutions.</p>
                <p>Our approach combines deep technical expertise with a practical understanding of the complex business landscapes in Nepal, India, and beyond. We don't just crunch numbers; we provide the strategic foresight needed for sustainable growth and absolute compliance.</p>
              </div>
              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold text-lg flex items-center group">
                  Learn more about our heritage and values
                  <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Core Services</h2>
              <p className="text-lightText max-w-xl">Comprehensive financial and regulatory solutions tailored for enterprise needs.</p>
            </div>
            <Link to="/services" className="hidden md:block text-primary font-semibold hover:underline">View All Services</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group bg-white p-8 border border-gray-100 transition-all hover:shadow-xl hover:border-primary/20 block"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon id={service.id} />
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-lightText mb-6 line-clamp-3">{service.description}</p>
                <span className="text-xs uppercase tracking-widest font-bold text-black transition-colors group-hover:text-primary">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-accentGold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {INDUSTRIES.map((ind) => (
              <Link 
                key={ind.id} 
                to={`/industries/${ind.id}`}
                className="text-center group block"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-accentGold group-hover:text-white">
                    <IndustryIcon id={ind.id} />
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-accentGold mb-2 group-hover:text-white transition-colors">{ind.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutralBg">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">Let’s Work Together</h2>
            <p className="text-lightText mb-10">Whether you are a growing business or an established organization, we help you navigate financial and regulatory complexities with confidence.</p>
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-md font-bold transition-all hover:bg-[#8e313d]">
              Contact Professional Advisors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;