
import React, { useRef } from 'react';
import { CORE_VALUES} from '../constants';

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About PM & Associates</h1>
          <p className="text-xl text-gray-400 max-w-2xl">A professional Chartered Accountants firm delivering end-to-end financial, audit, taxation, and advisory services.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
            <p className="text-2xl font-serif italic text-secondary leading-relaxed mb-12">
              "To support organizations in achieving compliance, transparency, and financial efficiency through ethical and structured professional solutions."
            </p>
            <div className="h-0.5 w-24 bg-accentGold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Values & Beliefs */}
      <section className="py-24 bg-neutralBg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">Our Values</h2>
              <div className="space-y-8">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="flex group">
                    <div className="mr-6 text-3xl font-serif text-primary/20 group-hover:text-primary/100 transition-colors">0{idx+1}</div>
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{val.title}</h3>
                      <p className="text-sm text-lightText">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-32">
              <h2 className="text-3xl font-serif font-bold text-secondary mb-12 mt-16">Our Beliefs</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Strong financial systems build strong businesses",
                  "Compliance is a foundation, not a burden",
                  "Advisory should be practical and actionable"
                ].map((belief, idx) => (
                  <div key={idx} className="bg-white p-6 shadow-sm border-l-4 border-accentGold italic text-secondary">
                    "{belief}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Slider Section */}
      {/* <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Our Professional Team</h2>
              <p className="text-lightText max-w-2xl">P M & Associates is a team of skilled Chartered Accountants and audit professionals delivering reliable, high-quality auditing, accounting, and taxation services. Backed by experienced specialists, we provide tailored solutions that add real value to our clients.</p>
            </div>
            <div className="flex space-x-4 mb-2">
              <button 
                onClick={() => scroll('left')}
                className="p-3 border border-secondary/10 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 border border-secondary/10 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar snap-x snap-mandatory"
          >
            {TEAM.map((member, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group text-center"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-xl shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">Partner</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-1">{member.name}</h3>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-24 bg-neutralBg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">Our Approach</h2>
              <p className="text-lightText mb-10">We follow a structured and disciplined approach to every client engagement to ensure high accuracy and reliability.</p>
              <div className="space-y-4">
                {[
                  "Understand client objectives",
                  "Assess risks and compliance requirements",
                  "Design tailored solutions",
                  "Implement with accuracy",
                  "Monitor and review continuously"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">{idx+1}</div>
                    <span className="text-secondary font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary p-12 text-white rounded-lg shadow-2xl">
              <h2 className="text-2xl font-serif font-bold text-accentGold mb-8">Why Choose Us</h2>
              <ul className="space-y-8">
                {[
                  { t: "Domain Expertise", d: "Experienced professionals with deep regulatory knowledge." },
                  { t: "Personalized Solutions", d: "Specific strategies, not generic advice." },
                  { t: "Clear Communication", d: "Structured reporting and transparency at every step." },
                  { t: "Partnership Mindset", d: "Long-term commitment to your business growth." }
                ].map((item, idx) => (
                  <li key={idx}>
                    <h4 className="font-bold mb-2">{item.t}</h4>
                    <p className="text-sm text-gray-400">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default About;