// src/app/page.tsx
import React from 'react';
import Input from '@/components/Input';
import Title from '@/components/Title';
import '@/app/globals.css';
import {Button} from '@/components/Button';

const HomePage = () => {
  return (
    <div>
      <Title text="Internamentos" />
      <form>
        <Input label="Nome do Pet" placeholder="Digite o nome do pet" />
        <Input label="Nome do Dono" placeholder="Digite o nome do dono" />
        <Button label="Enviar" />
      </form>
    </div>
  );
};

export default HomePage;
