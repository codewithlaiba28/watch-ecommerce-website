import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-wayne-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Branding & Contact Info */}
          <div className="space-y-12 animate-in slide-in-from-left-8 duration-1000">
            <div className="space-y-6">
              <h4 className="text-wayne-teal text-xs font-black uppercase tracking-[0.5em]">Executive Concierge</h4>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.9]">
                Personal <br />
                <span className="text-wayne-teal">Inquiry</span>
              </h1>
              <p className="text-wayne-text-muted text-sm leading-relaxed max-w-md italic tracking-wide">
                "Our specialist advisors are available to provide private consultations regarding our current acquisitions and bespoke heritage services."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-widest font-black text-white underline decoration-wayne-teal decoration-2 underline-offset-8 mb-6">Global HQ</h5>
                <p className="text-xs text-wayne-text-muted leading-loose uppercase tracking-widest">
                  Wayne Tower, Level 42<br />
                  Financial District, Mumbai<br />
                  110001, India
                </p>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-widest font-black text-white underline decoration-wayne-teal decoration-2 underline-offset-8 mb-6">Inquiries</h5>
                <p className="text-xs text-wayne-text-muted leading-loose uppercase tracking-widest">
                  Concierge@Wayne.co.in<br />
                  +91 1800 202 2026<br />
                  Available 24/7
                </p>
              </div>
            </div>

            <div className="pt-10 flex gap-8 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              {['INSTAGRAM', 'LINKEDIN', 'TWITTER'].map(social => (
                <a key={social} href="#" className="text-[10px] font-black tracking-widest text-white hover:text-wayne-teal transition-colors"># {social}</a>
              ))}
            </div>
          </div>

          {/* Right: Formal Contact Form */}
          <div className="bg-wayne-card p-10 border border-wayne-border shadow-2xl relative animate-in fade-in zoom-in duration-1000 delay-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-wayne-teal/5 blur-3xl rounded-full"></div>

            {status === 'success' ? (
              <div className="py-20 text-center space-y-8 animate-in zoom-in duration-700">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-wayne-teal/10 rounded-full flex items-center justify-center border border-wayne-teal/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wayne-teal"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Inquiry Received</h3>
                  <p className="text-wayne-text-muted text-xs uppercase tracking-widest leading-relaxed max-w-xs mx-auto">An advisor will review your correspondence and respond within 12 business hours.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-[10px] font-black uppercase tracking-widest text-wayne-teal hover:text-white transition-colors">Submit Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-wayne-teal mb-10">Formal Correspondence</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 group-focus-within:text-wayne-teal transition-colors">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent border-b border-wayne-border py-4 text-white text-sm focus:outline-none focus:border-wayne-teal transition-all placeholder-gray-600"
                      placeholder="YOUR FULL NAME"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 group-focus-within:text-wayne-teal transition-colors">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-transparent border-b border-wayne-border py-4 text-white text-sm focus:outline-none focus:border-wayne-teal transition-all placeholder-gray-600"
                      placeholder="MAIL@EXAMPLE.COM"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 group-focus-within:text-wayne-teal transition-colors">Subject of Inquiry</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-wayne-border py-4 text-white text-sm focus:outline-none focus:border-wayne-teal transition-all placeholder-gray-600"
                    placeholder="PRODUCT INQUIRY / HERITAGE SERVICE"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 group-focus-within:text-wayne-teal transition-colors">Correspondence</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-wayne-border py-4 text-white text-sm focus:outline-none focus:border-wayne-teal transition-all placeholder-gray-800 resize-none"
                    placeholder="PLEASE DESCRIBE YOUR REQUIREMENT IN DETAIL..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full btn-primary py-5 text-sm font-black shadow-[0_10px_30px_-10px_rgba(0,163,193,0.3)] disabled:opacity-50"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'AUTHORIZE TRANSMISSION'}
                </button>

                <p className="text-center text-[8px] text-gray-500 uppercase tracking-widest">
                  By submitting, you agree to our formal privacy and correspondence protocols.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;