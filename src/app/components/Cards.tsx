import React from "react";

interface LinkItem {
  name: string;
  href: string;
  bgColor?: string;
  textColor?: string;
}

interface CardsProps {
  links: LinkItem[];
}

const Cards: React.FC<CardsProps> = ({ links }) => {
  return (
    <div>
      <ul className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {links.map((link, index) => (
          <div key={index} className={`${link.bgColor || 'bg-accentTwo'} ${link.textColor || 'text-white'} font-semibold rounded-lg shadow-lg hover:bg-blue-600 active:scale-95 transition duration-300 hover:scale-105`}>
            <li className="mb-1 block">
              <a 
              href={link.href}
              className="w-full h-full py-16 px-20 flex items-center justify-center rounded-lg hover:bg-blue-600 transition duration-300"
              >{link.name}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { Cards };
