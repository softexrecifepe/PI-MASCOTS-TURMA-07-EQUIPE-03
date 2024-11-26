"use client";

import React, { useState } from 'react';
import axios from 'axios';

const TutorForm = () => {
  const [tutor, setTutor] = useState({
    owners_cpf: '',
    owners_name: '',
    owners_rg: '',
    owners_contact: '',
    owners_adress: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTutor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pi-t1-gp2-clinica.onrender.com/pet-owners', tutor);
      setMessage(`Tutor cadastrado com sucesso: ${response.data.owners_name}`);
    } catch (error) {
      setMessage('Erro ao cadastrar tutor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-white drop-shadow-2xl shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center">Cadastrar Tutor</h2>

      <input
        type="text"
        name="owners_cpf"
        placeholder="CPF"
        value={tutor.owners_cpf}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="text"
        name="owners_name"
        placeholder="Nome"
        value={tutor.owners_name}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="text"
        name="owners_rg"
        placeholder="RG"
        value={tutor.owners_rg}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="tel"
        name="owners_contact"
        placeholder="Contato"
        value={tutor.owners_contact}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="text"
        name="owners_adress"
        placeholder="Endereço"
        value={tutor.owners_adress}
        onChange={handleChange}
        required
        className="input-field"
      />
      
      <button type="submit" className="w-full bg-teal-500 text-white font-bold py-1.5 rounded-md">
        Cadastrar Tutor
      </button>

      {message && <p className="text-center mt-3 font-semibold">{message}</p>}
    </form>
  );
};

export default TutorForm;
