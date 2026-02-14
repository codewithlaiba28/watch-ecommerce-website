const Brands = () => {
  const brandLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const brandList = [
    { name: 'Anne Klein', letter: 'A' },
    { name: 'Armani Exchange', letter: 'A' },
    { name: 'Balmain', letter: 'B' },
    { name: 'Bulova', letter: 'B' },
    { name: 'Casio', letter: 'C' },
    { name: 'Coach', letter: 'C' },
    { name: 'Diesel', letter: 'D' },
    { name: 'Emporio Armani', letter: 'E' },
    { name: 'Fossil', letter: 'F' },
    { name: 'G-Shock', letter: 'G' },
    { name: 'Guess', letter: 'G' },
    { name: 'Michael Kors', letter: 'M' },
    { name: 'Police', letter: 'P' },
    { name: 'Rolex', letter: 'R' },
    { name: 'Seiko', letter: 'S' },
    { name: 'Titan', letter: 'T' },
    { name: 'Tissot', letter: 'T' },
    { name: 'Tommy Hilfiger', letter: 'T' },
  ];

  return (
    <div className="bg-wayne-bg min-h-screen py-24">
      <div className="container mx-auto px-6">
        <header className="text-center mb-24 space-y-4 animate-in fade-in slide-in-from-top-12 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">Brands <span className="text-wayne-teal">Vault</span></h1>
          <p className="text-wayne-text-muted text-[10px] uppercase tracking-[0.5em] font-black italic">The definitive directory of horological excellence</p>
        </header>

        {/* Alphabet Filter - Refined Dark */}
        <div className="flex flex-wrap justify-center gap-6 mb-24 border-b border-wayne-border pb-12 animate-in fade-in duration-1000 delay-300">
          {brandLetters.map(letter => (
            <button
              key={letter}
              className="w-12 h-12 flex items-center justify-center text-[10px] font-black text-gray-500 hover:text-white hover:bg-wayne-teal/20 border border-wayne-border transition-all duration-500 rounded-full"
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {brandLetters.filter(l => brandList.some(b => b.letter === l)).map((letter, idx) => (
            <div key={letter} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold text-wayne-teal font-serif opacity-80">{letter}</h2>
                <div className="h-[1px] flex-grow bg-wayne-border"></div>
              </div>
              <ul className="space-y-4">
                {brandList.filter(b => b.letter === letter).map(brand => (
                  <li key={brand.name}>
                    <a href="#" className="text-[11px] text-wayne-text-muted hover:text-white hover:pl-2 border-l border-transparent hover:border-wayne-teal transition-all duration-500 uppercase tracking-[0.2em] font-bold block">
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;