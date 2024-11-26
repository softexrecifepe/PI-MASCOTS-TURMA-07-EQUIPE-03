"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import defaultProfilePic from "../../../../public/pet-gless.jpg"; // Adicione uma imagem padrão para o perfil

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  profilePic: any;
}

const Profile: React.FC = () => {
  const router = useRouter();

  // Estado para armazenar as informações do usuário
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Dr. Ana Silva",
    email: "ana.silva@clinica.com",
    phone: "(11) 98765-4321",
    role: "Veterinário",
    profilePic: defaultProfilePic, // Pode ser alterado por uma imagem de perfil real
  });

  // Função para editar as informações
  const handleEdit = () => {
    // A lógica de edição pode ser implementada, talvez uma modal ou redirecionamento para uma página de edição
    alert("Editar informações do perfil");
  };

  // Função para voltar para a tela anterior
  const handleBack = () => {
    router.back(); // Volta para a página anterior
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 px-4 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          {/* Imagem de Perfil */}
          <div className="relative w-24 h-24">
            <Image
              src={userProfile.profilePic}
              alt="Foto de Perfil"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-teal-700"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-teal-700">{userProfile.name}</h2>
            <p className="text-gray-600">{userProfile.role}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">E-mail</span>
            <span className="text-gray-600">{userProfile.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Telefone</span>
            <span className="text-gray-600">{userProfile.phone}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md transition duration-200"
          >
            Voltar
          </button>
          <button
            onClick={handleEdit}
            className="px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition duration-200"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
