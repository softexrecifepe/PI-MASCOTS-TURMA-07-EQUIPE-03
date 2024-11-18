import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      data-layername="navBar"
      className={`fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between px-9 py-2 bg-white border border-solid border-neutral-200 rounded-[54px] shadow-md transition-all duration-300 ${
        isSticky ? 'rounded-none' : 'mt-6'
      } max-md:px-5 max-md:max-w-full`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        data-layername="mascots"
        className="text-lg font-bold leading-none text-neutral-950"
        whileHover={{ scale: 1.05 }}
      >
        MASCOT&apos;S
      </motion.div>

      <div className="flex flex-wrap gap-10 items-center text-sm text-neutral-950">
        <motion.div
          data-layername="infoSection"
          className="hover:text-teal-700 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection('#info-section')}
        >
          Bem-Vindo
        </motion.div>
        <motion.div
          data-layername="prioritizingSection"
          className="hover:text-teal-700 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection('#prioritizing-section')}
        >
          Nossa Prioridade
        </motion.div>
        <motion.div
          data-layername="contactSection"
          className="hover:text-teal-700 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection('#contact-section')}
        >
          Contato
        </motion.div>
        {/* Links que levam para outras páginas permanecem normais */}
        <motion.div
          data-layername="consulta"
          className="hover:text-teal-700"
          whileHover={{ scale: 1.2 }}
        >
          <a href="/consulta">Consulta</a>
        </motion.div>
        <motion.div
          data-layername="petShop"
          className="hover:text-teal-700"
          whileHover={{ scale: 1.2 }}
        >
          <a href="/pet-shop">Pet Shop</a>
        </motion.div>
        <motion.div
          data-layername="ofertas"
          className="hover:text-teal-700"
          whileHover={{ scale: 1.2 }}
        >
          <a href="/ofertas">Ofertas</a>
        </motion.div>
      </div>

      <motion.button
        data-layername="buttons"
        className="px-6 py-3 bg-teal-500 text-white rounded-[48px] hover:bg-teal-700 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('#appointment-section')}
      >
        Agendar Consulta
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;
