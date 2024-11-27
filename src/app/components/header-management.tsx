"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // Importação correta do hook
import PawVet from "../../../public/veterinary_paw.svg";
import Logo from "../../../public/logo.svg";

const HeaderManagement: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // URL da imagem do perfil, se existir na sessão, senão usa a imagem padrão
  const userProfilePic = session?.user?.image || "/pet-gless.jpg"; // Caminho direto para a imagem na pasta public

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
          <Image src={PawVet} alt="Pata de pet" width={48} height={48} />
        </div>
        {/* Logo */}
        <div className="w-36 ml-4">
          <Image src={Logo} alt="Logo Mascots" width={144} height={36} />
        </div>
      </div>

      {/* Menu de opções */}
      <nav className="flex items-center space-x-4">
        {/* Avatar e botão de perfil */}
        <div className="flex items-center space-x-2">     
          
          {/* Botão de perfil */}
          <button
            onClick={handleProfile}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-800 rounded-md shadow text-white font-medium transition duration-300"
          >
            Perfil
          </button>
        </div>
        {/* Botão de logout */}
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
