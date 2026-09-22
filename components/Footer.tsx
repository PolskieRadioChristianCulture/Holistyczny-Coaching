import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="py-10 text-center container mx-auto px-4 border-b border-gray-800/50">
        <div className="mb-6">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold italic text-blue-400">
            "Odkryj drogę do prawdziwej wolności i harmonii. Paweł Murawski jest gotowy, by Cię wesprzeć w tej podróży."
          </p>
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Paweł Murawski. Wszystkie prawa zastrzeżone.
        </p>
      </div>
      <div className="py-4 text-center bg-gray-900">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-500/60 font-medium">
          CREATED BY {' '}
          <a
            href="https://wa.me/48537137043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 py-1 bg-blue-800/50 border border-blue-700 rounded-full text-blue-200 hover:bg-blue-700 transition-colors"
            aria-label="Skontaktuj się z Nazirem przez WhatsApp"
          >
            <span>NAZIR</span>
          </a>
          {' '}2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;