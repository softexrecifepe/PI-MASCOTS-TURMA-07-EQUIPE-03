"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-teal-700 p-5 text-white shadow-lg rounded-lg"
    >
      <ul>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <motion.li
              className="flex items-center justify-between py-3 px-4 mb-2 rounded-lg bg-teal-600 hover:bg-teal-500 shadow-md transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                {link.icon && (
                  <Image
                    src={link.icon}
                    alt={`${link.name} Icon`}
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                )}
                <Link
                  href={link.href}
                  onClick={() => onClickLink && onClickLink(link)}
                  className="text-white font-medium hover:underline"
                >
                  {link.name}
                </Link>
              </div>
              {link.sublinks && (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="text-white hover:text-gray-200"
                >
                  {openDropdowns[link.name] ? "▲" : "▼"}
                </button>
              )}
            </motion.li>
            <AnimatePresence>
              {link.sublinks && openDropdowns[link.name] && (
                <motion.div
                  className="ml-6 flex flex-col space-y-1"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.sublinks.map((sublink) => (
                    <motion.div
                      key={sublink.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={sublink.href}
                        className="block py-2 px-4 text-gray-200 hover:bg-teal-500 hover:text-white rounded-md transition duration-300"
                      >
                        {sublink.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </ul>
    </motion.nav>
  );
};

export { Sidebar };
