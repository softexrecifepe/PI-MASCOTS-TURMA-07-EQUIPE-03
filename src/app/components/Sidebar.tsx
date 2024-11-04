'use client';
import React from "react";

interface LinkItem {
  name: string;
  href: string;
}

interface SidebarProps {
  links: LinkItem[];
  onClickLink?: (link: LinkItem) => void;
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
              className="p-2 rounded block transition duration-200 hover:bg-gray-300 hover:shadow-md hover:text-gray-900"
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
