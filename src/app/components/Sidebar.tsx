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
      className="w-64 bg-gray-100 p-4 shadow-lg rounded-md"
    >
      <ul>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <motion.li
              className="flex items-center justify-start ps-2 rounded-md transition duration-200 hover:bg-gray-300 hover:shadow-md hover:text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.icon && (
                <Image
                  src={link.icon}
                  alt={`${link.name} Icon`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              <Link
                onClick={() => {
                  if (onClickLink) {
                    onClickLink(link);
                  }
                }}
                href={link.href}
                className="p-2 rounded block"
              >
                {link.name}
              </Link>
              {link.sublinks && (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="ml-2 text-gray-400 hover:shadow-md hover:bg-gray-300 hover:text-gray-900"
                >
                  {openDropdowns[link.name] ? "▲" : "▼"}
                </button>
              )}
            </motion.li>
            <AnimatePresence>
              {link.sublinks && openDropdowns[link.name] && (
                <motion.div
                  className="ml-4 flex flex-col space-y-1"
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
                        className="text-gray-600 hover:bg-gray-300 hover:shadow-md hover:text-gray-900 transition duration-300"
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
