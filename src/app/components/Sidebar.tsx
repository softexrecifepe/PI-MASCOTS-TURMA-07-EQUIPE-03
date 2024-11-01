import React from "react";

interface LinkItem {
  name: string;
  href: string;
}

interface SidebarProps {
  links: LinkItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <a 
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
