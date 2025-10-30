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
            <img 
              src="/turkish-grill-logo.png" 
              alt="Saray Kebap Cluj - Turkish Grill" 
              className="h-16 w-auto object-contain"
            />
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
