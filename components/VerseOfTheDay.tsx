import React, { useState, useCallback } from 'react';
import { BIBLE_VERSES } from '../constants';

const VerseOfTheDay: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState<{ text: string; reference: string } | null>(null);

  const getRandomVerse = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * BIBLE_VERSES.length);
    setCurrentVerse(BIBLE_VERSES[randomIndex]);
  }, []);

  return (
    <div className="bg-gray-800 p-8 rounded-3xl shadow-lg text-center max-w-xl mx-auto border-t-8 border-blue-600 transform transition hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-blue-400 mb-6">Słowo dla Twojego serca</h3>
      <div className="min-h-[120px] flex flex-col justify-center">
        {currentVerse ? (
          <div className="animate-fadeIn">
            <p className="italic text-lg md:text-xl text-gray-300 leading-relaxed font-serif">
              &bdquo;{currentVerse.text}&rdquo;
            </p>
            <p className="mt-4 text-blue-500 font-bold tracking-wider">
              {currentVerse.reference}
            </p>
          </div>
        ) : (
          <p className="text-gray-400 text-lg mb-4">
            Zatrzymaj się na chwilę. Pozwól Słowu Cię odświeżyć.
          </p>
        )}
      </div>
      <button
        onClick={getRandomVerse}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-xl uppercase tracking-widest text-sm"
      >
        {currentVerse ? "Inne Słowo" : "Odbierz inspirację"}
      </button>
    </div>
  );
};

export default VerseOfTheDay;