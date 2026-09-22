import React, { useState, useRef } from 'react';
import { MAIN_DESCRIPTION } from '../constants';
import Typewriter from './Typewriter';

// Stałe, docelowe zdjęcie profilowe Pawła Murawskiego
const PAWEL_MURAWSKI_REAL_IMAGE = "https://lh3.googleusercontent.com/d/1uSUhnXOFGkMn5T6OQTh0PBswdQfSVJmk";

// Fotorealistyczne tła tematyczne dla kart
const BIBLE_BG = "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800";
const FREEDOM_BG = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800";

// Precyzyjna, fotorealistyczna grafika tematyczna dla nagłówka karty (DALL-E style)
const PROFILE_CARD_HEADER_BG = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop"; 

const HeroSection: React.FC = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-12 items-start">
      {/* Kolumna z kartą profilową */}
      <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10">
        <div className="relative mx-auto max-w-sm lg:max-w-none bg-gray-800 rounded-[2.5rem] shadow-2xl text-center border border-gray-700 overflow-visible">
          
          {/* Nagłówek karty */}
          <div className="h-40 relative rounded-t-[2.5rem] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url('${PROFILE_CARD_HEADER_BG}')` }}
              aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-black/20" aria-hidden="true"></div>
          </div>

          {/* Zdjęcie profilowe */}
          <div className="absolute left-1/2 -translate-x-1/2 top-24 z-30 p-1.5 bg-gray-800 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-gray-700">
            <div
              className="w-32 h-32 rounded-full border-4 border-blue-600 cursor-pointer overflow-hidden flex items-center justify-center shadow-inner group transition-all duration-300 hover:border-blue-400 hover:shadow-blue-500/20"
              onClick={handleAvatarClick}
              onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleAvatarClick(); }}
              tabIndex={0}
              role="button"
              aria-label="Kliknij, aby zmienić zdjęcie profilowe"
            >
              <img
                src={uploadedImageUrl || PAWEL_MURAWSKI_REAL_IMAGE}
                alt="Paweł Murawski"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599305445656-ae498877527c?q=80&w=400&h=400&fit=crop";
                }}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
                aria-label="Prześlij nowe zdjęcie profilowe"
              />
            </div>
          </div>

          <div className="px-8 pt-24 pb-10">
              <h3 className="text-2xl font-bold text-gray-100 tracking-tight">Paweł Murawski</h3>
              <p className="text-blue-400 font-medium italic mt-1 uppercase text-xs tracking-[0.2em]">Holistyczny Coach Biblijny</p>
              
              <div className="mt-8 flex justify-center gap-3">
                <span className="px-4 py-1.5 bg-blue-900/40 text-white text-[10px] uppercase font-bold rounded-full border border-blue-700/30 backdrop-blur-sm">Ciało</span>
                <span className="px-4 py-1.5 bg-blue-900/40 text-white text-[10px] uppercase font-bold rounded-full border border-blue-700/30 backdrop-blur-sm">Dusza</span>
                <span className="px-4 py-1.5 bg-blue-900/40 text-white text-[10px] uppercase font-bold rounded-full border border-blue-700/30 backdrop-blur-sm">Duch</span>
              </div>
          </div>
        </div>
      </div>

      {/* Kolumna z tekstem */}
      <div className="w-full lg:w-7/12 space-y-12 py-4">
        <div className="prose prose-invert lg:prose-xl max-w-none">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-50 leading-[1.1] mb-8 min-h-[120px] md:min-h-[150px] text-center">
            <Typewriter
              text="Odzyskaj harmonię i zacznij żyć pełnią Bożego planu. "
              highlightWord="harmonię"
              highlightClassName="text-blue-400"
              delay={60}
              cursorClassName="bg-blue-400 w-1.5 h-[1.1em] align-middle ml-1"
            />
          </h2>
          
          <div className="bg-gray-800/80 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-700/50 leading-relaxed text-gray-300 text-lg md:text-xl relative overflow-hidden mx-auto">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
            <p className="whitespace-pre-line relative z-10 font-light text-center">
              {MAIN_DESCRIPTION}
            </p>
          </div>
        </div>
        
        {/* Sekcja cech dostosowana do zrzutu ekranu */}
        <div className="grid grid-cols-1 gap-8">
          {/* Karta: Fundament Biblijny */}
          <div className="group relative min-h-[320px] rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-600/20">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${BIBLE_BG}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>
            
            <div className="relative h-full flex flex-col p-10 md:p-12 z-10">
              {/* Ikona Zakładki (Bookmark) - jak na zdjęciu */}
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl ring-4 ring-blue-600/20 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v16.192l-7-3.5-7 3.5V5z" />
                </svg>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Fundament Biblijny</h4>
                <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-xl">
                  Opieramy Twój rozwój na ponadczasowej prawdzie Słowa Bożego.
                </p>
              </div>
            </div>
          </div>

          {/* Karta: Pełna Wolność */}
          <div className="group relative min-h-[320px] rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-600/20">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${FREEDOM_BG}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>
            
            <div className="relative h-full flex flex-col p-10 md:p-12 z-10">
              {/* Ikona Uśmiechu (Smile) - jak na zdjęciu */}
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl ring-4 ring-blue-600/20 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  <circle cx="8.5" cy="10.5" r="1.5" />
                  <circle cx="15.5" cy="10.5" r="1.5" />
                  <path d="M12 18c2.28 0 4.37-1.1 5.7-2.71l-1.45-1.04C15.17 15.5 13.68 16 12 16s-3.17-.5-4.25-1.75l-1.45 1.04C7.63 16.9 9.72 18 12 18z" />
                </svg>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Pełna Wolność</h4>
                <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-xl">
                  Pracujemy nad wyjściem z nałogów i kryzysów ku radosnemu życiu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/10 border border-blue-800/30 p-8 rounded-[2.5rem] text-center backdrop-blur-sm shadow-inner">
          <p className="text-blue-300 font-medium italic text-lg leading-relaxed">
            "Wierzę, że nie ma sytuacji bez wyjścia. Z Jezusem każda ciemność staje się światłem. Pozwól, że pomogę Ci je odnaleźć."
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;