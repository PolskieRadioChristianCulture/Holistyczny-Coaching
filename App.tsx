import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VerseOfTheDay from './components/VerseOfTheDay';
import ContactCard from './components/ContactCard';
import HeroSection from './components/HeroSection'; // Używamy standardowego importu dla domyślnego eksportu
import { CONTACT_INFO } from './constants'; // Importujemy CONTACT_INFO

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-950 text-gray-100 selection:bg-blue-700">
      {showWelcome && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[100] transition-opacity duration-1000">
          <div className="text-center px-6 animate-fadeIn">
             <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-100 text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Dobrze, że jesteś.
            </p>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-md mx-auto">
              Zrób pierwszy krok ku wolności razem z nami.
            </p>
          </div>
        </div>
      )}

      <Header />

      <main>
        <div className="container mx-auto px-4 py-12 lg:py-20">
          {/* Sekcja do wgrywania zdjęcia profilowego została przeniesiona do HeroSection */}

          <section id="hero" className="mb-32">
            <HeroSection /> {/* Usunięto prop profileImageUrl */}
          </section>

          <section id="verse" className="mb-32">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full"></div>
              <div className="relative">
                <VerseOfTheDay />
              </div>
            </div>
          </section>

          <section id="contact" className="mb-20">
            <ContactCard />
          </section>
        </div>
      </main>

      <Footer />

      {/* Pływające przyciski kontaktowe */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 md:bottom-10 md:right-10 z-50">
        {/* Pływający przycisk słuchawki telefonu - Zmieniony na zielony */}
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
          className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400"
          aria-label={`Zadzwoń do Pawła Murawskiego pod numer ${CONTACT_INFO.phone}`}
        >
          <svg className="w-8 h-8 animate-pulse-call" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
        </a>

        {/* Pływający przycisk e-mail - Zmieniony na biały */}
        <a
          href={`mailto:${CONTACT_INFO.email}?subject=&body=`}
          className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300"
          aria-label={`Wyślij e-mail do Pawła Murawskiego na adres ${CONTACT_INFO.email}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;