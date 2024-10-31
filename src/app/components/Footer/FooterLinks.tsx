import Link from 'next/link';
import React from 'react';

const FooterLinks: React.FC = () => {
  const links = ['Consulta', 'Produtos', 'Envio', 'Devoluções', 'Sobre nós'];
  return (
    <div className="flex flex-col min-w-[240px] text-neutral-950 w-[270px]">
      <h3 data-layername="mascots" className="text-2xl font-medium">Mascot's</h3>
      <ul className="flex flex-col mt-6 max-w-full text-xl font-light w-[270px]">
        {links.map((link, index) => (
          <li key={index} data-layername={link.toLowerCase()} className={index > 0 ? "mt-3" : ""}>
            {link}
          </li>
        ))}
        <li>
          <Link href="../../management">Gerenciamento</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;