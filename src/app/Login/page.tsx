"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"; // Importando o Framer Motion

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [inviteMessage, setInviteMessage] = useState<string>("");
  const router = useRouter();

  // Função de login com Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuário logado:", result.user);
      // Redireciona para a página de gestão após login
      router.push("/management");
    } catch (error: any) {
      console.error("Erro ao logar:", error);
      setErrorMessage("Não foi possível fazer login. Tente novamente.");
    }
  };

  // Função para solicitar convite
  const handleRequestInvite = async () => {
    if (!email) {
      setInviteMessage("Por favor, insira seu e-mail para solicitar um convite.");
      return;
    }

    try {
      // Envia o e-mail de solicitação de convite usando EmailJS
      await emailjs.send(
        "service_b0utabr", // Substitua pelo Service ID do EmailJS
        "template_rf0n65b", // Substitua pelo Template ID do EmailJS
        {
          user_email: email,  // Passa o e-mail do usuário para o template
          admin_email: "jonasrdl261007@gmail.com", // E-mail do administrador
        },
        "Hvf5YnW84agNU3Oal" // Substitua pelo User ID do EmailJS
      );

      setInviteMessage("Solicitação enviada com sucesso! Aguarde a aprovação.");
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      setInviteMessage("Erro ao enviar solicitação. Tente novamente.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Animação para a primeira seção */}
      <motion.div 
        className="w-1/2 bg-teal-100 flex items-center justify-center p-2"
        initial={{ opacity: 1.1 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.2 }} // Suavizando a transição
      >
        <img
          src="/Component-Logo.svg"
          alt="Logo"
          className="w-2/4 h-auto object-contain"
        />
      </motion.div>

      <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-teal-100 to-teal-200 p-4">
        <motion.div 
          className="bg-white shadow-2xl rounded-lg max-w-md w-full p-8"
          initial={{ scale: 0.98, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 150, damping: 30 }} // Aumentando a suavidade da transição
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Gestão da Clínica
          </h2>
          <p className="text-gray-500 mb-6 text-center">
            Faça login com sua conta Google
          </p>
          {errorMessage && (
            <motion.p
              className="text-red-500 text-sm text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errorMessage}
            </motion.p>
          )}
          
          {/* Botão de login com Google com animação */}
          <motion.button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 mb-4"
            whileHover={{ scale: 1.05 }} // Efeito de zoom ao passar o mouse
            transition={{ type: "spring", stiffness: 250, damping: 20 }} // Suavizando o efeito
          >
            Login com Google
          </motion.button>

          <p className="text-gray-500 text-center mb-4">Ou solicite um convite:</p>
          
          {/* Campo de input com animação */}
          <motion.input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded-lg mb-4"
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Suavizando a entrada do input
          />
          
          {/* Botão de solicitação de convite com animação */}
          <motion.button
            onClick={handleRequestInvite}
            className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300"
            whileHover={{ scale: 1.05 }} // Efeito de zoom ao passar o mouse
            transition={{ type: "spring", stiffness: 250, damping: 20 }} // Suavizando o efeito
          >
            Solicitar Convite
          </motion.button>
          
          {inviteMessage && (
            <motion.p
              className="text-teal-600 text-sm text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Transição mais suave e lenta
            >
              {inviteMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
