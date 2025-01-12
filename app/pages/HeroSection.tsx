export default function HeroSection() {
    return (
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      >
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Konten Hero */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Empowering Your Digital Presence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl">
            We help businesses grow with stunning web design and cutting-edge technology.
          </p>
          <div className="flex space-x-4">
            <a
              href="#services"
              className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-gray-700 px-6 py-3 rounded-full text-white hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }
  