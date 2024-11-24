"use client"; // Adicione esta linha para garantir que o componente seja renderizado no cliente

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Importe o hook useRouter

const NovoUsuario: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter(); // Instancia o hook useRouter para navegação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    console.log("Cadastro realizado", { username, email, password });
    setErrorMessage("");
    // Redireciona para a página de login
    router.push("/Login"); 
  };

  return (
    <div className="flex min-h-screen">
      {/* Coluna da imagem */}
      <div className="w-1/2 bg-teal-100 flex items-center justify-center p-2">
        <img
          src="/Component-Logo.svg" // Caminho da imagem dentro da pasta public
          alt="Logo"
          className="w-2/4 h-auto object-contain" // Tamanho da logo
        />
      </div>

      {/* Coluna do formulário de cadastro */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-teal-100 to-teal-200 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white shadow-2xl rounded-lg max-w-md w-full p-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-4 text-center"
          >
            Cadastro de Novo Usuário
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-gray-500 mb-6 text-center"
          >
            Preencha os campos abaixo para criar uma nova conta
          </motion.p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <label
                htmlFor="username"
                className="block font-medium text-gray-700 text-center"
              >
                Nome de Usuário
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu nome de usuário"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 text-center"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 text-center"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-gray-700 text-center"
              >
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </motion.div>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              Cadastrar
            </motion.button>
          </form>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="text-sm text-gray-500 text-center mt-4"
          >
            Já tem uma conta?{" "}
            <a href="/Login" className="text-teal-600 hover:underline">
              Faça login
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NovoUsuario;
