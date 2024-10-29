import React from 'react';
import NavBar from './NavBar';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header
      data-layername="header"
      className="relative flex overflow-hidden flex-col items-center px-20 pt-20 w-full bg-zinc-800 bg-opacity-20 max-md:px-5 max-md:max-w-full"
      style={{
        backgroundImage: 'url(/images/pet.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
      
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative flex z-10 flex-col -mb-8 w-full max-w-[1212px] max-md:mb-2.5 max-md:max-w-full">
        <NavBar />
        <div className="flex flex-wrap gap-5 justify-between w-full mt-[624px] max-md:mt-10 max-md:max-w-full">
          <h1
            data-layername="garantindoQueSeusAnimaisDeEstimacaoTenhamUmaVidaMelhor"
            className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl drop-shadow-lg"
          >
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
