"use client"


// components/PetForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

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
    owners_cpf: '' // CPF do tutor inserido manualmente
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
      console.log(pet)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Pet</h2>
      <input type="text" name="pet_name" placeholder="Nome do Pet" value={pet.pet_name} onChange={handleChange} required />
      <input type="text" name="microchip_code" placeholder="Código do Microchip" value={pet.microchip_code} onChange={handleChange} />
      <input type="text" name="behavior" placeholder="Comportamento" value={pet.behavior} onChange={handleChange} />
      <input type="text" name="species" placeholder="Espécie" value={pet.species} onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gênero" value={pet.gender} onChange={handleChange} required />
      <input type="text" name="age" placeholder="Idade" value={pet.age} onChange={handleChange} required />
      <input type="text" name="breed" placeholder="Raça" value={pet.breed} onChange={handleChange} required />
      <input type="number" step="0.01" name="weight" placeholder="Peso" value={pet.weight} onChange={handleChange} required />
      <input type="text" name="physical_characteristics" placeholder="Características Físicas" value={pet.physical_characteristics} onChange={handleChange} />
      <input type="text" name="allergies" placeholder="Alergias" value={pet.allergies} onChange={handleChange} />
      <input type="text" name="diseases" placeholder="Doenças" value={pet.diseases} onChange={handleChange} />

      {/* Campo de CPF do tutor inserido manualmente */}
      <input
        type="text"
        name="owners_cpf"
        placeholder="CPF do Tutor (opcional)"
        value={pet.owners_cpf}
        onChange={handleChange}
      />

      <button type="submit">Cadastrar Pet</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default PetForm;
