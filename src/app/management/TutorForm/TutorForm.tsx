// components/TutorForm.tsx
"use client"

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
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Tutor</h2>
      <input type="text" name="owners_cpf" placeholder="CPF" value={tutor.owners_cpf} onChange={handleChange} required />
      <input type="text" name="owners_name" placeholder="Nome" value={tutor.owners_name} onChange={handleChange} required />
      <input type="text" name="owners_rg" placeholder="RG" value={tutor.owners_rg} onChange={handleChange} required />
      <input type="tel" name="owners_contact" placeholder="Contato" value={tutor.owners_contact} onChange={handleChange} required />
      <input type="text" name="owners_adress" placeholder="Endereço" value={tutor.owners_adress} onChange={handleChange} required />
      <button type="submit">Cadastrar Tutor</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default TutorForm;
