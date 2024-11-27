"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa"; // Importando o ícone do Google
import emailjs from "emailjs-com"; // Importando o EmailJS

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showResetPassword, setShowResetPassword] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>("");
  const [name, setName] = useState<string>(""); // Estado para o nome do usuário
  const router = useRouter();

  // Login com Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Salvar os dados do usuário no localStorage
      localStorage.setItem("userProfile", JSON.stringify({
        name: user.displayName,
        email: user.email,
        profilePic: user.photoURL,
      }));
      console.log("Usuário logado:", user);
      router.push("/management"); // Redirecionar para a página de perfil
    } catch (error) {
      console.error("Erro ao logar:", error);
      setErrorMessage("Não foi possível fazer login. Tente novamente.");
    }
  };
  
  // Login com email e senha
  const handleEmailLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuário logado:", userCredential.user);
      router.push("/management");
    } catch (error) {
      console.error("Erro ao logar:", error);
      setErrorMessage("Não foi possível fazer login. Verifique suas credenciais.");
    }
  };

  // Enviar email para redefinição de senha usando o EmailJS
  const handleResetPassword = async () => {
    if (!resetEmail) {
      setErrorMessage("Por favor, insira seu e-mail.");
      return;
    }

    try {
      // Enviar o e-mail para redefinir a senha
      const templateParams = {
        to_email: resetEmail,
        user_name: name, // Adicionando o nome do usuário
        user_email: email, // Adicionando o e-mail do usuário
      };

      const result = await emailjs.send(
        "service_b0utabr", // Substitua com seu ID de serviço
        "template_rf0n65b", // Substitua com seu ID de template
        templateParams,
        "Hvf5YnW84agNU3Oal" // Substitua com seu ID de usuário EmailJS
      );

      console.log("E-mail enviado com sucesso:", result.text);
      alert("Instruções para redefinir sua senha foram enviadas ao administrador.");
    } catch (error) {
      console.error("Erro ao tentar redefinir senha:", error);
      setErrorMessage("Não foi possível enviar o e-mail. Tente novamente.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Seção de animação */}
      <motion.div
        className="w-1/2 bg-teal-100 flex items-center justify-center p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 30 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Gestão da Clínica
          </h2>

          {/* Se está pedindo redefinição de senha */}
          {showResetPassword ? (
            <>
              <h3 className="text-xl text-center mb-4">Redefinir Senha</h3>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="border p-2 w-full rounded-lg mb-4"
                />
              </div>

              <motion.button
                onClick={handleResetPassword}
                className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Enviar e-mail para redefinir senha
              </motion.button>

              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-teal-500 hover:underline"
                  onClick={() => setShowResetPassword(false)}
                >
                  Voltar ao login
                </a>
              </div>
            </>
          ) : (
            <>
              
              {/* Login com email e senha */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 w-full rounded-lg mb-4"
                />
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 w-full rounded-lg mb-4"
                />
              </div>

              <motion.button
                onClick={handleEmailLogin}
                className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Entrar
              </motion.button>

              <div className="text-gray-500 text-center p-2 ">ou</div>

            {/* Login com Google */}
            <motion.button
                onClick={handleGoogleLogin}
                className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaGoogle className="mr-2 text-lg" /> {/* Ícone do Google */}
                Login com Google
              </motion.button>

              


              {/* Texto para redefinir a senha */}
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-teal-500 hover:underline"
                  onClick={() => setShowResetPassword(true)}
                >
                  Esqueceu sua senha? Clique aqui para redefinir
                </a>
              </div>
            </>
          )}

          {/* Alerta de erro, se houver */}
          {errorMessage && (
            <motion.p
              className="text-red-500 text-sm text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errorMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
