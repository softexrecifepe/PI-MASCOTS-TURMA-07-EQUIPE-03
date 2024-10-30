import React from 'react';
import NavBar from './NavBar';
import ImgBackground from '@/assets/pet.jpg'; // Importa a imagem de fundo
import Image from 'next/image'; // Importa o componente Image do Next.js para otimização de imagens

interface HeaderProps {
  title: string; // Define o título que será exibido no header, passado como prop
}

// Componente Header que recebe um título como prop
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <header
        data-layername="header"
        className="relative border border-primary flex overflow-hidden flex-col items-center px-20 pt-20 w-full bg-zinc-800 bg-opacity-20 max-md:px-5 max-md:max-w-full"
      >
        {/* Camada semi-transparente para escurecer a imagem de fundo */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Componente Next.js Image para otimizar o carregamento e a responsividade da imagem de fundo */}
        <Image
          fill // Preenche todo o container do componente
          src="/pet.jpg" // Caminho da imagem
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define tamanhos responsivos para otimizar o carregamento
        />

        <div className="relative flex z-10 flex-col -mb-8 w-full max-w-[1212px] max-md:mb-2.5 max-md:max-w-full">
          {/* Componente NavBar - navegação da página */}
          <NavBar />
    
          {/* Container do título e ajustes de responsividade */}
          <div className="flex flex-wrap gap-5 justify-between w-full h-full mt-[400px] max-md:mt-10 max-md:max-w-full">
            <h1
              data-layername="garantindoQueSeusAnimaisDeEstimacaoTenhamUmaVidaMelhor"
              className="text-4xl font-bold text-black drop-shadow-lg relative max-md:text-2xl"
            >
              {title} {/* Exibe o título recebido via prop */}
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
