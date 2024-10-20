// src/app/page.tsx
import React from 'react';
import Input from '@/components/input';
import Title from '@/components/title';
import '@/app/globals.css';
import Button from '@/components/button';

const HomePage = () => {
  return (
    <div>
      <Title text="Gerencie sua clínica veterinária" />
      <form>
        <Input label="Nome do Pet" placeholder="Digite o nome do pet" />
        <Input label="Nome do Dono" placeholder="Digite o nome do dono" />
        <Button label="Enviar" />
      </form>
    </div>
  );
};

export default HomePage;
