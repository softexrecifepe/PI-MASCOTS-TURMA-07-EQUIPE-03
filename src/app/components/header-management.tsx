"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PawVet from "../../../public/veterinary_paw.svg";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const HeaderManagement: React.FC = () => {
  const router = useRouter();

  // Função de logout
  const handleLogout = () => {
    router.push("/Login");
  };

  // Função para redirecionar ao perfil
  const handleProfile = () => {
    router.push("/management/profile");
  };

  return (
    <header className="px-6 flex justify-between items-center bg-teal-700 text-white py-4 shadow-lg">
      <div className="flex items-center">
        {/* Ícone da Pata */}
        <div className="border-2 border-teal-500 rounded-full w-12 h-12 p-2 flex items-center justify-center bg-white shadow-md">
          <Image src={PawVet} alt="Pata de pet" sizes="100%" />
        </div>
        {/* Logo */}
        <div className="w-36 ml-4">
          <Image src={Logo} alt="Logo Mascots" sizes="100%" />
        </div>
      </div>

      {/* Menu de opções */}
      <nav className="flex items-center space-x-6">
        <button
          onClick={handleProfile}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-800 rounded-md shadow text-white font-medium transition duration-300"
        >
          Perfil
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md shadow text-white font-medium transition duration-300"
        >
          Sair
        </button>
      </nav>
    </header>
  );
};

export default HeaderManagement;
