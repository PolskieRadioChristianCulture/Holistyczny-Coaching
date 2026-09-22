import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 md:py-6 bg-gray-900 shadow-md text-gray-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Paweł Murawski <span className="block text-sm md:inline md:ml-4 md:text-base font-normal opacity-80 text-gray-400 uppercase tracking-widest">Holistyczny Coaching</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;