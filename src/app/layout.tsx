// src/app/layout.tsx
import React from 'react';
import Header from '@/components/header'
import Footer from '@/components/footer';

export const metadata = {
  title: 'Clínica Veterinária',
  description: 'Seu pet é nossa prioridade',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
