import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Clínica Veterinária</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="hover:text-secondary">Consultas</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Internamentos</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Inventário</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
