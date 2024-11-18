// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setErrorMessage("Por favor, preencha todos os campos.");
//       return;
//     }
//     console.log("Formulário enviado", { email, password });
//     setErrorMessage("");
//     if (email === "usuario@usuario" || password === "senha") {
      
//       window.location.href = "/management";
//       return;
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 to-teal-200">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//         className="bg-white shadow-2xl rounded-lg max-w-md w-full p-8"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//           className="text-3xl font-bold text-gray-800 mb-4 text-center"
//         >
//           Gestão da Clínica
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
//           className="text-gray-500 mb-6 text-center"
//         >
//           Entre na sua conta para acessar o sistema
//         </motion.p>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           >
//             <label
//               htmlFor="email"
//               className="block font-medium text-gray-700 text-center"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Digite seu email"
//               className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
//           >
//             <label
//               htmlFor="password"
//               className="block font-medium text-gray-700 text-center"
//             >
//               Senha
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Digite sua senha"
//               className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
//             />
//           </motion.div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center">{errorMessage}</p>
//           )}
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//             type="submit"
//             className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//           >
//             Entrar
//           </motion.button>
//         </form>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
//           className="text-sm text-gray-500 text-center mt-4"
//         >
//           Esqueceu sua senha?{" "}
//           <a href="/forgot-password" className="text-teal-600 hover:underline">
//             Clique aqui
//           </a>
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;

// 

"use client"; // Adicione esta linha para garantir que o componente seja renderizado no cliente

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Importe o hook useRouter

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter(); // Instancia o hook useRouter para navegação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Formulário enviado", { email, password });
    setErrorMessage("");
    if (email === "usuario@usuario" || password === "senha") {
      // Redireciona para a página de gestão
      router.push("/management"); 
      return;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 to-teal-200">
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
          Gestão da Clínica
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-gray-500 mb-6 text-center"
        >
          Entre na sua conta para acessar o sistema
        </motion.p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
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
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            Entrar
          </motion.button>

          {/* Botão para redirecionar para a página de cadastro */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            type="button"
            className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            onClick={() => router.push("/NovoUsuario")} // Redireciona para a página de cadastro
          >
            Cadastrar Novo Usuário
          </motion.button>
        </form>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="text-sm text-gray-500 text-center mt-4"
        >
          Esqueceu sua senha?{" "}
          <a href="/forgot-password" className="text-teal-600 hover:underline">
            Clique aqui
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;