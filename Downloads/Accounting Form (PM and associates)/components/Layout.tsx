
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES, INDUSTRIES } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 sticky-header ${isScrolled ? 'bg-white scroll-shadow py-5' : 'bg-white/95 py-8'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" onClick={handleLogoClick} className="flex flex-col group cursor-pointer">
          <span className="text-2xl font-bold font-serif text-primary leading-tight tracking-tight transition-none">P M & Associates</span>
          <span className="text-[10px] uppercase tracking-widest text-primary font-semibold -mt-1 transition-none">Chartered Accountants</span>
        </Link>

        <nav className="hidden md:flex space-x-10 items-center">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-secondary'}`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative h-full py-2 group" 
            ref={servicesRef} 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center space-x-1">
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-secondary'}`}
              >
                Services
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
              >
                <svg className="w-4 h-4 text-secondary/60 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-4 w-72 transition-all duration-300 origin-top transform ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-t-2 border-primary">
                <div className="py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-6 py-3 text-[11px] font-bold text-secondary hover:bg-neutralBg hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative h-full py-2 group" 
            ref={industriesRef} 
            onMouseEnter={() => setIsIndustriesOpen(true)} 
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <div className="flex items-center space-x-1">
              <Link
                to="/industries"
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith('/industries') ? 'text-primary' : 'text-secondary'}`}
              >
                Industries
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsIndustriesOpen(!isIndustriesOpen);
                }}
                className={`transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`}
              >
                <svg className="w-4 h-4 text-secondary/60 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-4 w-72 transition-all duration-300 origin-top transform ${isIndustriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-t-2 border-primary">
                <div className="py-2">
                  {INDUSTRIES.map((industry) => (
                    <Link
                      key={industry.id}
                      to={`/industries/${industry.id}`}
                      className="block px-6 py-3 text-[11px] font-bold text-secondary hover:bg-neutralBg hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/contact" className="bg-primary text-white px-7 py-3 rounded-md text-sm font-bold transition-all hover:bg-[#8e313d] hover:shadow-lg active:scale-95 ml-4">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" onClick={handleLogoClick} className="mb-6 block group">
              <span className="text-2xl font-bold font-serif text-white block">P M & Associates</span>
              <p className="text-[10px] uppercase tracking-widest text-white opacity-80 mt-1">Chartered Accountants</p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trusted advisors providing comprehensive accounting, audit, and tax solutions.
            </p>
            <div className="flex space-x-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-accentGold uppercase tracking-widest text-xs font-bold">Useful Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://www.ird.gov.np" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Inland Revenue Department</a></li>
              <li><a href="https://www.ssf.gov.np" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Social Security Fund</a></li>
              <li><a href="https://www.nrb.org.np" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nepal Rastra Bank</a></li>
              <li><a href="https://asbnepal.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Accounting Standard Board</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-accentGold uppercase tracking-widest text-xs font-bold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="font-serif text-lg mb-6 text-accentGold uppercase tracking-widest text-xs font-bold">Contact</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accentGold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kathmandu+Metropolitan+City+4+Kathmandu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Kathmandu Metropolitian City 4, Kathmandu
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accentGold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pmandassociates.com" className="hover:text-white transition-colors">info@pmandassociates.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accentGold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9779851136425" className="hover:text-white transition-colors">+977-9851136425</a>
              </li> 
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PM & Associates. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Compliance Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;