'use client'
import React from "react";
import { Cards } from "../components/Cards";

export const Management: React.FC = () => {

  const linksCards = [
    {
      name: "Atendimento",
      href: "/management/atendimento",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
    {
      name: "Vacinas",
      href: "#",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    { name: "Exames", href: "#" },
    {
      name: "Internamentos",
      href: "#",
      bgColor: "bg-purple-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="flex h-full">
        <div className="flex flex-col w-full p-2 me-2 pe-2 gap-2 overflow-y-auto">
          <Cards links={linksCards} />
          <div className="w-full h-full bg-accentThree rounded-md flex gap-2">
            {/* Coluna da Esquerda */}
            <div className="flex flex-col w-[20%] bg-gray-600 rounded-md">
              <p>Conteúdo da Coluna Esquerda</p>
            </div>

            {/* Coluna da Direita */}
            <div className="w-[80%] grid grid-cols-2 gap-2">
              <div className="w-full h-full bg-gray-200 rounded-md">Div 1</div>
              <div className="w-full h-full bg-gray-300 rounded-md">Div 2</div>
              <div className="w-full h-full bg-gray-400 rounded-md">Div 3</div>
              <div className="w-full h-full bg-gray-500 rounded-md">Div 4</div>
            </div>
          </div>
        </div>
      </div>
  );  
};

export default Management;
