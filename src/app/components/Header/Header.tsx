"use client";

import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar fixa com transparência */}
      <header
        data-layername="header"
<<<<<<< Updated upstream
        className="relative flex overflow-hidden flex-col items-center justify-center w-full h-screen bg-zinc-800 bg-opacity-20"
      >
        {/* Camada semi-transparente para escurecer a imagem de fundo */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
       
        <Image
          alt=""
          src="/pet.jpg"
          fill
          className="object-cover" // Ajusta a imagem para cobrir todo o container
          sizes="100vw"
        />

        <div className="relative z-10 flex flex-col w-full max-w-6xl p-5">
          <NavBar />
    
          {/* Container do título */}
          <div className="flex flex-wrap gap-5 justify-between w-full mt-64">
            <h1
              data-layername="garantindoQueSeusAnimaisDeEstimacaoTenhamUmaVidaMelhor"
              className="text-4xl font-bold text-black drop-shadow-lg relative max-md:text-2xl"
            >
              {title}
            </h1>
          </div>
=======
        className={`fixed top-0 w-full h-16 transition-colors duration-300 ${
          isScrolled ? 'bg-zinc-800 bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
        } z-50 flex justify-center`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl px-7 h-full">
          <NavBar />
>>>>>>> Stashed changes
        </div>
      </header>

      {/* Seção da imagem de fundo */}
      <div className="relative w-full h-screen">
        <Image
          alt=""
          src="/pet.svg"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default Header;
