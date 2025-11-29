import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-8 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg mb-0 leading-none text-center">
        SHELDON
      </h1>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg leading-none text-center mb-2">
        MANIA
      </h1>
      <div className="bg-[#1E6A8F] px-4 py-1 rounded-sm shadow-md transform -skew-x-12">
        <p className="text-xs md:text-sm font-bold tracking-widest text-white transform skew-x-12 uppercase">
          Pedra Papel Tesoura Lagarto Spock
        </p>
      </div>
    </header>
  );
};
