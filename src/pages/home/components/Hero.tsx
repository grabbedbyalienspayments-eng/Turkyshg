
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(180, 30, 30, 0.4), rgba(180, 30, 30, 0.4)), url('https://readdy.ai/api/search-image?query=professional%20turkish%20chef%20grilling%20authentic%20kebab%20on%20natural%20charcoal%20flames%2C%20traditional%20turkish%20restaurant%20kitchen%20with%20warm%20golden%20lighting%2C%20smoke%20rising%20from%20grill%2C%20appetizing%20meat%20preparation%2C%20authentic%20middle%20eastern%20cooking%20atmosphere%2C%20professional%20food%20photography&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15H0l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* Program Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <i className="ri-time-line text-[#C8A46B] mr-2"></i>
          <span className="text-white text-sm font-medium">Deschis zilnic 10:00–23:00</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Gustul autentic al Turciei, acum în Cluj
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
          La Saray Kebap Cluj găsești kebab pe cărbuni, lahmacun, baklava și ceai turcesc, preparate cu ingrediente aduse direct din Istanbul.
        </p>

        {/* Livrare Badge */}
        <div className="inline-flex items-center bg-[#C8A46B] text-white rounded-full px-6 py-3 mb-10">
          <i className="ri-truck-line mr-2"></i>
          <span className="font-semibold">Livrare gratuită la comenzi peste 80 lei</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-[#B41E1E] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#9A1A1A] transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center space-x-2"
          >
            <i className="ri-restaurant-line"></i>
            <span>Vezi meniul</span>
          </button>
          
          <a
            href="tel:+40728888404"
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center space-x-2"
          >
            <i className="ri-phone-line"></i>
            <span>Comandă telefonic: 0728 888 404</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors"
        >
          <i className="ri-arrow-down-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
}
