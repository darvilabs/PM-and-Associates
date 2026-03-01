
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Audit & Assurance',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our professional advisors will contact you shortly.');
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl">For professional inquiries, consultations, or service-related discussions, please reach out to our team.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif font-bold text-secondary mb-10">Get in Touch</h2>
              
              <div className="space-y-12">
                <div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accentGold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <p className="text-secondary font-bold">Kathmandu Office</p>
                      <p className="text-lightText text-sm leading-relaxed">Kathmandu Metropolitan City, 4 Kathmandu</p>
                    </div>
                  </div> 
                  <div className="border-b border-gray-200 mt-6"></div>
                </div>

                <div>
                  {/* mail info */}
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accentGold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <a href="mailto:info@pmandassociates.com" className="text-secondary font-medium hover:text-primary transition-colors">info@pmandassociates.com</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accentGold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <a href="tel:+9779851136425" className="text-secondary font-medium hover:text-primary transition-colors">+977-9851136425</a>
                    </div>
                    <div className="border-b border-gray-200"></div>
                  </div>
                </div>

                <div className="bg-neutralBg p-8 rounded-xl">
                  <h4 className="font-bold text-secondary mb-4">Consultation Hours</h4>
                  <p className="text-sm text-lightText mb-2">Sun - Fri: 10:00 AM - 6:00 PM</p>
                  <p className="text-xs text-primary font-bold">Saturday: Closed</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-2xl rounded-xl">
                <h2 className="text-2xl font-serif font-bold text-secondary mb-10">Professional Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-secondary tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-secondary tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-secondary tracking-widest">Contact Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="+977-..."
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-secondary tracking-widest">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Organization Name"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-secondary tracking-widest">Nature of Inquiry</label>
                    <select 
                      className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.inquiryType}
                      onChange={e => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option>Audit & Assurance</option>
                      <option>Tax Advisory & Compliance</option>
                      <option>Accounting & Bookkeeping</option>
                      <option>Business Advisory</option>
                      <option>M&A Services</option>
                      <option>Other Professional Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-secondary tracking-widest">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 bg-neutralBg border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="How can we assist you?"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full md:w-auto bg-primary text-white px-12 py-4 rounded-md font-bold transition-all hover:bg-[#8e313d] shadow-lg">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;