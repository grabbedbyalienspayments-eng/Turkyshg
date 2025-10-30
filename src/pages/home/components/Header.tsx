import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
              {/* Semiluna și steaua turcească */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Semiluna roșie */}
                <path
                  d="M 30 50 A 20 20 0 1 1 30 50 A 16 16 0 1 0 30 50 Z"
                  fill="#C8102E"
                  transform="translate(15, 0)"
                />
                {/* Steaua roșie */}
                <polygon
                  points="65,35 68,44 77,44 70,49 73,58 65,53 57,58 60,49 53,44 62,44"
                  fill="#C8102E"
                />
              </svg>
            </div>
            <div className="ml-3">
              <div className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-[#C8102E]' : 'text-white'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Saray Kebap
              </div>
              <div className={`text-xs -mt-1 transition-colors ${
                isScrolled ? 'text-[#C8102E]/70' : 'text-white/80'
              }`}>
                Cluj-Napoca
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:0728888404"
              className="bg-[#B41E1E] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#9A1A1A] transition-colors whitespace-nowrap flex items-center space-x-2"
            >
              <i className="ri-phone-line"></i>
              <span>SUNĂ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
