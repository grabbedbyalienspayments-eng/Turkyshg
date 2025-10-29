
export default function About() {
  const timeline = [
    { year: '2009', event: 'Început în Istanbul - Yilmaz Kemal își perfecționează arta culinară turcească' },
    { year: '2015', event: 'Mutarea în România - aducând rețetele autentice din Turcia' },
    { year: '2020', event: 'Deschiderea Saray Kebap Cluj pe Strada Horea' },
    { year: '2024', event: 'Peste 50.000 de clienți mulțumiți și în continuă creștere' }
  ];

  return (
    <section id="about" className="py-20 bg-[#F8E7D0] relative overflow-hidden">
      {/* Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm-20 0l20 20H0l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Despre Saray Kebap Cluj
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            O poveste de pasiune culinară care conectează Istanbul cu Cluj-Napoca
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg text-[#1C1C1C]/80 leading-relaxed">
              <p className="mb-6">
                Saray Kebap Cluj s-a născut din dorul pentru aromele Istanbulului. Yilmaz Kemal, bucătar turc cu 15 ani în restaurante de renume, a adus la Cluj rețete autentice, tehnici pe cărbuni naturali și respect pentru ingredientele originare.
              </p>
              <p className="mb-6">
                La noi, fiecare preparat e făcut la comandă, cu răbdare și atenție. Nu alergăm după fast-food: căutăm echilibrul perfect între prospețime, condimente și textură.
              </p>
              <p>
                Ospitalitatea e standardul casei: salutul cald, ceaiul turnat în pahare în formă de lalea, porțiile generoase și ritmul plăcut al cinei.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#C8A46B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-1">Bucătar turcesc certificat</h4>
                  <p className="text-[#1C1C1C]/70 text-sm">15 ani experiență în restaurante de renume din Istanbul</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#C8A46B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-1">Rețete din Istanbul</h4>
                  <p className="text-[#1C1C1C]/70 text-sm">Tehnici tradiționale și ingrediente autentice</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#C8A46B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-1">Gătit pe cărbuni naturali</h4>
                  <p className="text-[#1C1C1C]/70 text-sm">Flacără adevărată pentru aromă de neuitat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20turkish%20chef%20Yilmaz%20Kemal%20grilling%20kebab%20on%20natural%20charcoal%2C%20traditional%20turkish%20restaurant%20kitchen%2C%20warm%20lighting%2C%20chef%20wearing%20white%20apron%2C%20focused%20on%20cooking%2C%20authentic%20middle%20eastern%20culinary%20scene%2C%20portrait%20style%20photography&width=600&height=800&seq=chef-portrait&orientation=portrait"
                alt="Bucătarul Yilmaz Kemal la grătar"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#B41E1E] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Ani experiență</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Din Istanbul în Cluj - Povestea noastră
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C8A46B]"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-[#F8E7D0] p-4 rounded-xl">
                      <div className="text-[#B41E1E] font-bold text-lg mb-2">{item.year}</div>
                      <div className="text-[#1C1C1C]/80">{item.event}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#B41E1E] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
