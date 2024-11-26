import Link from 'next/link';
import React from 'react';

const FooterLinks: React.FC = () => {
  const links = ['Consulta', 'Produtos', 'Envio', 'Devoluções', 'Sobre nós'];

  return (
    <div className="flex flex-col min-w-[150px] text-neutral-950">
      <h3 data-layername="mascots" className="text-base font-semibold">MASCOT'S</h3>
      <ul className="flex flex-col mt-2 text-xs font-light">
        {links.map((link, index) => (
          <li key={index} data-layername={link.toLowerCase()} className="mt-1 transition-colors duration-200 hover:text-teal-600">
            <Link href={`/${link.toLowerCase()}`} className="hover:underline">
              {link}
            </Link>
          </li>
        ))}
        <li className="mt-1 transition-colors duration-200 hover:text-teal-600">
          <Link href="../../Login" className="hover:underline">Gerenciamento</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
