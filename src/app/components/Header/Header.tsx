import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <header
        data-layername="header"
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
        </div>
      </header>
    </>
  );
};

export default Header;
