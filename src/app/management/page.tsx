'use client'
import React, { useState } from "react";
import { Cards } from "../components/Cards";
import { motion, AnimatePresence } from "framer-motion";

export const Management: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const linksCards = [
    {
      name: "Animais",
      href: "/management/patients",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      name: "Animais internados",
      href: "/management/hospitalizationsList",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
    { name: "Exames", href: "#" },
    {
      name: "Monitoramento",
      href: "#",
      bgColor: "bg-purple-500",
      textColor: "text-white",
    },
  ];

  const items = [
    { id: "div1", content: "Div 1", bgColor: "bg-gray-200" },
    { id: "div2", content: "Div 2", bgColor: "bg-gray-300" },
    { id: "div3", content: "Div 3", bgColor: "bg-gray-400" },
    { id: "div4", content: "Div 4", bgColor: "bg-gray-500" },
  ];

  return (
    <div className="flex to-teal-200 h-full">
      <div className="flex flex-col w-full p-2 me-2 pe-2 gap-2 overflow-y-auto">
        <Cards links={linksCards} />
        <div className="w-full h-full bg-accentThree rounded-md flex gap-2 p-4">
          {/* Coluna da Esquerda */}
          <motion.div className="flex flex-col w-[20%] bg-gray-600 text-white rounded-md p-4 shadow-md">
            <p className="font-semibold">Lista de atendimento &quot;do DIA&quot;</p>
          </motion.div>
          {/* Coluna da Direita */}
          <div className="w-[80%] grid grid-cols-2 gap-2">
            {items.map(item => (
              <motion.div
                key={item.id}
                layoutId={item.id}
                className={`w-full h-full ${item.bgColor} rounded-md p-4 flex items-center justify-center text-gray-800 shadow-md cursor-pointer`}
                onClick={() => setSelectedId(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg font-medium">{item.content}</span>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId}
                  className="fixed inset-0 bg-white flex flex-col items-center justify-center rounded-lg p-8 shadow-lg"
                  style={{
                    width: '66%',
                    height: '66%',
                    margin: 'auto', // Centraliza o cartão na tela
                    backgroundColor: '#f8f9fa',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.h2 className="text-xl font-bold text-gray-800 mb-4">
                    {items.find(item => item.id === selectedId)?.content}
                  </motion.h2>
                  <motion.p className="text-gray-600 mb-8">
                    Aqui está mais informações sobre {items.find(item => item.id === selectedId)?.content}.
                  </motion.p>
                  <motion.button
                    className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => setSelectedId(null)}
                  >
                    Fechar
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
