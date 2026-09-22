import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactCard: React.FC = () => {
  return (
    <div className="relative z-10 bg-gray-800 p-8 md:p-12 rounded-[3rem] shadow-xl text-center mx-auto max-w-4xl">
      <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">Zacznijmy rozmowę</h3>
      <p className="text-blue-400 mb-10 text-lg max-w-2xl mx-auto">
        Nie musisz przechodzić przez to sam. Jestem tu, by Cię wesprzeć w Twojej drodze do wolności.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
          className="group flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-700 p-6 rounded-2xl transition-all duration-300 shadow-md transform hover:-translate-y-1"
          aria-label={`Zadzwoń do Pawła Murawskiego pod numer ${CONTACT_INFO.phone}`}
        >
          <div className="w-16 h-16 bg-green-900/20 group-hover:bg-green-900/40 rounded-full flex items-center justify-center mb-4 transition-colors">
            <svg className="w-8 h-8 text-green-500 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-100">Zadzwoń</span>
          <span className="text-sm text-gray-300 mt-1">{CONTACT_INFO.phone}</span>
        </a>

        <a
          href={`mailto:${CONTACT_INFO.email}?subject=&body=`}
          className="group flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-700 p-6 rounded-2xl transition-all duration-300 shadow-md transform hover:-translate-y-1"
          aria-label={`Wyślij e-mail do Pawła Murawskiego na adres ${CONTACT_INFO.email}`}
        >
          <div className="w-16 h-16 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-4 transition-colors">
            <svg className="w-8 h-8 text-white group-hover:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-100">Napisz e-mail</span>
          <span className="text-sm text-gray-300 mt-1 underline">{CONTACT_INFO.email}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;