'use client'
import React, { useState } from "react";
import { Cards } from "../components/Cards";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 

export const Management: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const linksCards = [
    {
      name: "Animais",
      href: "/management/patients",
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
    {
      name: "Animais internados",
      href: "/management/hospitalizationsList",
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
    { name: "Exames", href: "#", bgColor: "bg-teal-500", textColor: "text-white" },
    {
      name: "Monitoramento",
      href: "#",
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
  ];

  const items = [
    { id: "div1", content: "Calendário", bgColor: "bg-teal-700" },
    { id: "div2", content: "Pacientes Internados", bgColor: "bg-teal-700" },
    { id: "div3", content: "Relatórios de Exames", bgColor: "bg-teal-700" },
    { id: "div4", content: "Monitoramento de Estoque", bgColor: "bg-teal-700" },
  ];

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full p-4 gap-4 overflow-y-auto">
        <Cards links={linksCards} />
        <div className="w-full h-full rounded-md flex gap-4 p-6 shadow-lg">
          {/* Coluna da Esquerda */}
          <motion.div className="flex flex-col w-[20%] bg-teal-800 text-white rounded-md p-4 shadow-md">
            <p className="font-semibold text-lg">Lista de atendimento do dia</p>
            <ul className="mt-2 space-y-2">
              <li>- Procedimento: Rex, 9h</li>
              <li>- Consulta: Buddy, 10h</li>
              <li>- Consulta: Princesa, 10h</li>
              <li>- Consulta: Thor, 12h</li>
              <li>- Retorno: Luna, 14h </li>
              <li>- Retorno: Beethoven, 15h</li>
              <li>- Procedimento: Rex, 16h</li>
              <li>- Consulta: Lucky, 16h</li>
            </ul>
          </motion.div>
          {/* Coluna da Direita */}
          <div className="w-[80%] grid grid-cols-2 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className={`w-full h-full ${item.bgColor} rounded-md p-4 flex flex-col items-center justify-center text-white shadow-md cursor-pointer`}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Adicionando ícones/imagens */}
              {item.id === "div1" && (
                <>
                  <span className="text-4xl mb-2">📅</span>
                  <span className="text-lg font-medium">{item.content}</span>
                </>
              )}
              {item.id === "div2" && (
                <>
                  <span className="text-4xl mb-2">🐾</span>
                  <span className="text-lg font-medium">{item.content}</span>
                </>
              )}
              {item.id === "div3" && (
                <>
                  <span className="text-4xl mb-2">📑</span>
                  <span className="text-lg font-medium">{item.content}</span>
                </>
              )}
              {item.id === "div4" && (
                <>
                  <span className="text-4xl mb-2">📦</span>
                  <span className="text-lg font-medium">{item.content}</span>
                </>
              )}
            </motion.div>
          ))}
            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId}
                  className="fixed inset-0 bg-white flex flex-col items-center justify-center rounded-lg p-8 shadow-lg"
                  style={{
                    width: "66%",
                    height: "66%",
                    margin: "auto",
                    backgroundColor: "#e6f9f7",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {selectedId === "div1" && (
                    <div>
                      <h2 className="text-2xl font-bold text-teal-800 mb-4">Calendário</h2>
                      <p className="text-teal-600">Veja e gerencie as consultas.</p>
                      <Calendar
                        onChange={setCalendarDate}
                        value={calendarDate}
                        className="mt-4"
                      />
                    </div>
                  )}
                  {selectedId === "div2" && (
                    <div>
                      <h2 className="text-2xl font-bold text-teal-800 mb-4">Pacientes Internados</h2>
                      <p className="text-teal-600">Veja os detalhes dos animais internados atualmente.</p>
                      <ul className="list-disc list-inside mt-4 text-teal-700">
                        <li>Buddy - Em recuperação</li>
                        <li>Luna - Estável</li>
                        <li>Max - Sob observação</li>
                      </ul>
                    </div>
                  )}
                  {selectedId === "div3" && (
                    <div>
                      <h2 className="text-2xl font-bold text-teal-800 mb-4">Relatórios de Exames</h2>
                      <p className="text-teal-600">Resultados mais recentes dos exames realizados.</p>
                      <ul className="list-disc list-inside mt-4 text-teal-700">
                        <li>Buddy - Hemograma: Normal</li>
                        <li>Luna - Raio-X: Anomalia detectada</li>
                        <li>Max - Ultrassom: Resultado pendente</li>
                      </ul>
                    </div>
                  )}
                  {selectedId === "div4" && (
                    <div>
                      <h2 className="text-2xl font-bold text-teal-800 mb-4">Monitoramento de Estoque</h2>
                      <p className="text-teal-600">Status do estoque de medicamentos.</p>
                      <ul className="list-disc list-inside mt-4 text-teal-700">
                        <li>Medicamento A: 20 unidades</li>
                        <li>Medicamento B: 5 unidades (Crítico!)</li>
                        <li>Medicamento C: 50 unidades</li>
                      </ul>
                    </div>
                  )}
                  <motion.button
                    className="mt-4 p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
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
