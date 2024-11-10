"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface LinkItem {
  icon?: string;
  name: string;
  href: string;
  sublinks?: LinkItem[];
}

interface SidebarProps {
  links: LinkItem[];
  onClickLink?: (link: LinkItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ links, onClickLink }) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <>
            <li key={index} className="flex items-center justify-start ps-2 rounded-md transition duration-200 hover:bg-gray-300 hover:shadow-md hover:text-gray-900">
            {link.icon && (
                  <Image
                    src={link.icon}
                    alt={`${link.name} Icon`}
                    width={20} // ajuste o tamanho conforme necessário
                    height={20}
                  />
                )}
              <Link
                onClick={() => {
                  // e.preventDefault(); // Impede o redirecionamento imediato
                  if (onClickLink) {
                    onClickLink(link); // Chama a função passada por prop, se existir
                  }
                }}
                href={link.href}
                className="p-2 rounded block "
              >
                {link.name}
              </Link>
              {link.sublinks && (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="text-gray-400 hover:shadow-md hover:bg-gray-300 hover:text-gray-900 "
                >
                  {openDropdowns[link.name] ? "▲" : "▼"}
                </button>
              )}
            </li>
            {link.sublinks && openDropdowns[link.name] && (
              <div className="ml-4 flex flex-col space-y-1 ">
                {link.sublinks.map((sublink) => (
                  <Link
                    key={sublink.name}
                    href={sublink.href}
                    className="text-gray-600  hover:bg-gray-300 hover:shadow-md hover:text-gray-900 transition duration-300"
                  >
                    {sublink.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export { Sidebar };
