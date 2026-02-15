import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const boutiques = [
    { city: 'MUMBAI', location: 'Wayne Tower, Level 42', phone: '+91 1800 202 2026', email: 'mumbai@wayne.com', hours: '10:00 - 20:00' },
    { city: 'LONDON', location: '17-19 New Bond Street', phone: '+44 20 7493 2714', email: 'london@wayne.com', hours: '10:00 - 18:30' },
    { city: 'DUBAI', location: 'The Dubai Mall, Fashion Avenue', phone: '+971 4 339 8000', email: 'dubai@wayne.com', hours: '10:00 - 23:00' },
    { city: 'PARIS', location: '12 Place Vendôme', phone: '+33 1 55 04 60 00', email: 'paris@wayne.com', hours: '11:00 - 19:00' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-wayne-bg min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-wayne-teal/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-32 animate-in fade-in slide-in-from-top-12 duration-1000">
            <h4 className="text-wayne-teal text-[10px] font-black uppercase tracking-[0.6em] mb-6">World-Wide Presence</h4>
            <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-white leading-[0.8] mb-12">
              The Global <br />
              <span className="text-wayne-teal font-serif italic lowercase tracking-normal">Experience</span>
            </h1>
            <p className="text-wayne-text-muted text-[11px] uppercase tracking-[0.5em] font-black max-w-xl">
              From historic European squares to modern Asian skylines, our boutiques serve as sanctuaries for horological excellence.
            </p>
          </div>

          {/* Boutique Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
            {boutiques.map((bot, idx) => (
              <div
                key={bot.city}
                className="bg-wayne-card border border-wayne-border p-10 hover:border-wayne-teal/30 transition-all duration-700 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-wayne-teal/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-wayne-teal/10 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-white mb-8 group-hover:text-wayne-teal transition-colors">{bot.city}</h3>
                <div className="space-y-6 text-[10px] uppercase tracking-[0.2em] font-bold text-wayne-text-muted">
                  <div className="pb-4 border-b border-wayne-border">
                    <p className="text-white mb-1">Location</p>
                    <p>{bot.location}</p>
                  </div>
                  <div className="pb-4 border-b border-wayne-border">
                    <p className="text-white mb-1">Contact</p>
                    <p>{bot.phone}</p>
                    <p className="lowercase tracking-normal text-wayne-teal/80">{bot.email}</p>
                  </div>
                  <div>
                    <p className="text-white mb-1">Hours</p>
                    <p>{bot.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Protocol with Atmosphere */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-wayne-border bg-wayne-card shadow-2xl overflow-hidden mb-32">
            {/* Visual Side */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-auto overflow-hidden group">
              <img
                src="/images/generated/all_watches_hero.png"
                alt="Boutique Atmosphere"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s] grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-wayne-card via-wayne-card/40 to-transparent lg:bg-gradient-to-b"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <h4 className="text-3xl font-bold uppercase tracking-tighter text-white mb-4">Concierge Protocol</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-wayne-teal mb-8 italic">Bespoke Acquisition Inquiry</p>
                <div className="space-y-2 opacity-50 text-[9px] uppercase tracking-widest text-white font-bold">
                  <p>● Priority Authentication</p>
                  <p>● Private Gallery Viewing</p>
                  <p>● Global Logistics Support</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 p-12 md:p-20 relative">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-700">
                  <div className="w-20 h-20 bg-wayne-teal/10 rounded-full flex items-center justify-center border border-wayne-teal/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wayne-teal"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">Entry Authorized</h3>
                    <p className="text-wayne-text-muted text-[10px] uppercase tracking-[0.3em] max-w-xs mx-auto">Your correspondence has been encrypted and transmitted. An advisor will contact you within 12 standard hours.</p>
                  </div>
                  <button onClick={() => setStatus('idle')} className="text-[10px] font-black uppercase tracking-widest text-wayne-teal border-b border-wayne-teal pb-1 hover:text-white hover:border-white transition-all">New Transmission</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4 group">
                      <label className="text-[9px] uppercase tracking-[0.4em] font-black text-wayne-text-muted group-focus-within:text-wayne-teal transition-colors">Client Name</label>
                      <input
                        required
                        type="text"
                        placeholder="FORMAL NAME"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-wayne-border py-4 text-white placeholder-gray-800 focus:outline-none focus:border-wayne-teal transition-all font-bold text-sm"
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label className="text-[9px] uppercase tracking-[0.4em] font-black text-wayne-text-muted group-focus-within:text-wayne-teal transition-colors">Digital Identity</label>
                      <input
                        required
                        type="email"
                        placeholder="MAIL@ACQUISITION.COM"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-wayne-border py-4 text-white placeholder-gray-800 focus:outline-none focus:border-wayne-teal transition-all font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 group">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-black text-wayne-text-muted group-focus-within:text-wayne-teal transition-colors">Inquiry Nature</label>
                    <select
                      className="w-full bg-transparent border-b border-wayne-border py-4 text-white focus:outline-none focus:border-wayne-teal transition-all font-bold text-sm appearance-none cursor-pointer"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    >
                      <option className="bg-wayne-card text-white">HERITAGE PRODUCT ACQUISITION</option>
                      <option className="bg-wayne-card text-white">PRIVATE COLLECTION VIEWING</option>
                      <option className="bg-wayne-card text-white">CURATION & VALUATION SERVICES</option>
                      <option className="bg-wayne-card text-white">MAINTENANCE & RESTORATION</option>
                    </select>
                  </div>

                  <div className="space-y-4 group">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-black text-wayne-text-muted group-focus-within:text-wayne-teal transition-colors">Briefing Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="SPECIFY YOUR COLLECTION REQUIREMENTS..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b border-wayne-border py-4 text-white placeholder-gray-800 focus:outline-none focus:border-wayne-teal transition-all font-bold text-sm resize-none"
                    />
                  </div>

                  <button
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full bg-wayne-teal text-white py-6 text-[11px] font-black uppercase tracking-[0.6em] hover:shadow-[0_20px_40px_-10px_rgba(0,163,193,0.3)] transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'ENCRYPTING & TRANSMITTING...' : 'AUTHORIZE PROTOCOL'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: 'Authentication', desc: 'Formal horological certification of lineage and authenticity for heritage timepieces.' },
            { title: 'Global Valuation', desc: 'Secure appraisal services for insurance and estate purposes by our master evaluators.' },
            { title: 'Restoration', desc: 'Bespoke maintenance and aesthetic preservation within our high-security Geneva laboratories.' }
          ].map((svc, i) => (
            <div key={svc.title} className="space-y-4 animate-in fade-in" style={{ animationDelay: `${i * 200}ms` }}>
              <h4 className="text-white text-lg font-bold uppercase tracking-tight flex items-center">
                <span className="w-1.5 h-1.5 bg-wayne-teal rounded-full mr-3"></span>
                {svc.title}
              </h4>
              <p className="text-[10px] text-wayne-text-muted uppercase tracking-widest font-bold leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Presence */}
        <div className="flex flex-wrap items-center justify-between gap-12 pt-12 border-t border-wayne-border opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white">Wayne Enterprises Global Archives © 2026</p>
          <div className="flex gap-8">
            {['Instagram', 'LinkedIn', 'Twitter', 'WeChat'].map(social => (
              <a key={social} href="#" className="text-[9px] font-black uppercase tracking-[0.3em] text-white hover:text-wayne-teal transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
