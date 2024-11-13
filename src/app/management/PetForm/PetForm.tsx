"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PetForm = () => {
  const [pet, setPet] = useState({
    pet_name: '',
    microchip_code: '',
    behavior: '',
    species: '',
    gender: '',
    age: '',
    breed: '',
    weight: '',
    physical_characteristics: '',
    allergies: '',
    diseases: '',
    owners_cpf: '' 
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pi-t1-gp2-clinica.onrender.com/pets', pet);
      setMessage(`Pet cadastrado com sucesso: ${response.data.pet_name}`);
    } catch (error) {
      setMessage('Erro ao cadastrar pet.');
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 bg-white shadow-md rounded-lg max-w-md"
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-bold mb-2 text-center"
        >
          Cadastrar Pet
        </motion.h2>

        {/* Campos do formulário */}
        <fieldset className="space-y-2">
          <legend className="font-semibold text-base">Informações Gerais</legend>
          <motion.input type="text" name="pet_name" placeholder="Nome do Pet" value={pet.pet_name} onChange={handleChange} required className="input-field" />
          <motion.input type="text" name="microchip_code" placeholder="Código do Microchip" value={pet.microchip_code} onChange={handleChange} className="input-field" />
          <motion.input type="text" name="behavior" placeholder="Comportamento" value={pet.behavior} onChange={handleChange} className="input-field" />
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="font-semibold text-base">Características Físicas</legend>
          <motion.input type="text" name="species" placeholder="Espécie" value={pet.species} onChange={handleChange} required className="input-field" />
          <motion.input type="text" name="gender" placeholder="Gênero" value={pet.gender} onChange={handleChange} required className="input-field" />
          <motion.input type="text" name="age" placeholder="Idade" value={pet.age} onChange={handleChange} required className="input-field" />
          <motion.input type="text" name="breed" placeholder="Raça" value={pet.breed} onChange={handleChange} required className="input-field" />
          <motion.input type="number" step="0.01" name="weight" placeholder="Peso" value={pet.weight} onChange={handleChange} required className="input-field" />
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="font-semibold text-base">Informações do Tutor</legend>
          <motion.input type="text" name="owners_cpf" placeholder="CPF do Tutor (opcional)" value={pet.owners_cpf} onChange={handleChange} className="input-field" />
        </fieldset>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white font-bold py-1.5 rounded-md mt-3"
        >
          Cadastrar Pet
        </motion.button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-3 font-semibold"
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default PetForm;
