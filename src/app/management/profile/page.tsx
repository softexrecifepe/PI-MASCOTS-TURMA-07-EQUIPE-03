"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const defaultProfilePic = "/pet-gless.jpg"; // Caminho correto para a imagem na pasta public

interface UserProfile {
  name: string;
  email: string;
  profilePic: string | null;
}

const Profile: React.FC = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Carregar dados do usuário do localStorage
  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    } else {
      alert("Nenhum usuário logado!");
      router.push("/Login"); // Redireciona para a tela de login se não houver usuário
    }
  }, [router]);

  const handleEdit = () => {
    alert("Editar informações do perfil");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 px-4 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {userProfile ? (
          <>
            <div className="flex items-center mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src={userProfile.profilePic || defaultProfilePic}
                  alt="Foto de Perfil"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-teal-700"
                />
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-teal-700">{userProfile.name}</h2>
                <p className="text-gray-600">{userProfile.email}</p>
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
          </>
        ) : (
          <p>Carregando informações do usuário...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
