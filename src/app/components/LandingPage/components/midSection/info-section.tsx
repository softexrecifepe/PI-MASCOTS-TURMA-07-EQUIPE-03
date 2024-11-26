"use client";

import React from "react";
import { motion } from "framer-motion";

const InfoSection: React.FC = () => {
  return (
    <div id="info-section" className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-lg max-w-2xl w-full p-8 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-teal-900 mb-4"
        >
          Bem-vindo à Mascot&apos;s!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 mb-6"
        >
          Sua clínica veterinária de confiança, oferecendo cuidado, carinho e
          tecnologia para o bem-estar do seu pet. Aqui, sua mascote é nossa
          prioridade!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="p-4 bg-teal-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">+1000 Pets</h3>
            <p className="text-gray-500 text-sm">
              Já atendemos mais de 1000 mascotes com qualidade e dedicação.
            </p>
          </div>
          <div className="p-4 bg-teal-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Equipe Especializada</h3>
            <p className="text-gray-500 text-sm">
              Nossos veterinários são apaixonados pelo que fazem.
            </p>
          </div>
          <div className="p-4 bg-teal-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Tecnologia Avançada</h3>
            <p className="text-gray-500 text-sm">
              Usamos o que há de mais moderno para o bem-estar do seu pet.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoSection;
