import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  return (
    <motion.nav
      data-layername="navBar"
      className="flex flex-wrap gap-8 items-center self-center px-9 py-3 ml-2 bg-white border border-solid border-neutral-200 rounded-[54px] max-md:px-5 max-md:max-w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        data-layername="mascots"
        className="self-stretch my-auto text-lg font-bold leading-none text-neutral-950"
        whileHover={{ scale: 1.05 }}
      >
        MASCOT'S
      </motion.div>

      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-10 items-center self-stretch my-auto text-sm leading-none min-w-[240px] text-neutral-950">
          <motion.div
            data-layername="consulta"
            className="self-stretch my-auto w-[77px]"
            whileHover={{ scale: 1.1, color: '#4F46E5' }}
          >
            <Link href="/consulta">Consulta</Link>
          </motion.div>
          <motion.div
            data-layername="petShop"
            className="self-stretch my-auto"
            whileHover={{ scale: 1.1, color: '#4F46E5' }}
          >
            Pet Shop
          </motion.div>
          <motion.div
            data-layername="ofertas"
            className="self-stretch my-auto"
            whileHover={{ scale: 1.1, color: '#4F46E5' }}
          >
            Ofertas
          </motion.div>
        </div>

        <motion.div
          className="flex gap-6 items-center self-stretch my-auto text-base font-medium leading-none text-center text-white"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            data-layername="buttons"
            className="gap-2 text-sm self-stretch px-6 py-3 my-auto bg-indigo-500 rounded-[48px] max-md:px-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consulta
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
