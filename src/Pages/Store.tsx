const Store = () => {
  return (
    <div className="bg-wayne-bg min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-wayne-card border border-wayne-border p-12 text-center space-y-12 shadow-2xl animate-in fade-in zoom-in duration-1000">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Locate <span className="text-wayne-teal">Stores</span>
          </h1>

          <div className="space-y-8 max-w-md mx-auto">
            <div className="text-left group">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-wayne-text-muted mb-4 block group-focus-within:text-wayne-teal transition-colors">Select State</label>
              <div className="relative">
                <select className="w-full border-b border-wayne-border py-4 bg-transparent text-white text-sm focus:outline-none focus:border-wayne-teal appearance-none cursor-pointer">
                  <option className="bg-wayne-card">Select State</option>
                  <option className="bg-wayne-card">Maharashtra</option>
                  <option className="bg-wayne-card">Delhi</option>
                  <option className="bg-wayne-card">Karnataka</option>
                  <option className="bg-wayne-card">Tamil Nadu</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>

            <div className="text-left group">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-wayne-text-muted mb-4 block group-focus-within:text-wayne-teal transition-colors">Select City</label>
              <div className="relative">
                <select className="w-full border-b border-wayne-border py-4 bg-transparent text-white text-sm focus:outline-none focus:border-wayne-teal appearance-none cursor-pointer">
                  <option className="bg-wayne-card">Select City</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>

            <button className="w-full btn-primary py-5 mt-12 font-black shadow-[0_10px_30px_-10px_rgba(0,163,193,0.3)]">Find Authorized Stores</button>
          </div>

          <div className="pt-12 border-t border-wayne-border">
            <p className="text-[11px] uppercase tracking-widest text-wayne-text-muted font-medium italic">
              "Experience the fusion of heritage and innovation at our flagship boutiques."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;