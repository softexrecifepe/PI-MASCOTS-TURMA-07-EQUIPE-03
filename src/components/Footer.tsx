import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Clínica Veterinária. Todos os direitos reservados.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#" className="hover:text-secondary">Política de privacidade</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Termos de serviço</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
