'use client'
import React from "react";

interface LinkItem {
  name: string;
  href: string;
}

interface SidebarProps {
  links: LinkItem[];
  onClickLink?:(link: LinkItem)=>void;
}

const Sidebar: React.FC<SidebarProps> = ({ links, onClickLink }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <a 
            onClick={(e) => {
              e.preventDefault(); // Impede o redirecionamento imediato
              if (onClickLink) {
                onClickLink(link); // Chama a função passada por prop, se existir
              }
            }}
            href={link.href}
            className="hover:bg-gray-700 p-2 rounded block"
            >
                {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Sidebar };
