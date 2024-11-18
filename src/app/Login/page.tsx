// app/login/page.tsx
"use client";

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    // Simula a autenticação
    console.log('Formulário enviado', { email, password });
    setErrorMessage('');
    // Aqui você pode redirecionar para a página de gerenciamento após login bem-sucedido
    window.location.href = '/management'; // Exemplo de redirecionamento
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bem-vindo de volta</h2>
          <p className="text-gray-500 mb-8 text-center">Entre na sua conta para continuar</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-left font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm text-left">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
