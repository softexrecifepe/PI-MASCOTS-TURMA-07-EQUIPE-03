"use client";

import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import Image from 'next/image';

const Header: React.FC = () => {
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
      <header
        data-layername="header"
        className={`fixed top-0 w-full h-16 transition-colors duration-300 ${
          isScrolled ? 'bg-zinc-800 bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
        } z-50 flex justify-center`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl px-7 h-full">
          <NavBar />
        </div>
      </header>

      <div className="relative w-full h-screen">
        <Image
          alt="Background image"
          src="/pet.svg"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 flex flex-col w-full max-w-6xl p-5">
          {/* Container do título - removido */}
          <div className="flex flex-wrap gap-5 justify-between w-full mt-64">
            {/* O título foi removido, caso precise de um título diferente, basta adicionar aqui */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
