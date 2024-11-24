import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  children?:ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, bgColor = 'bg-tertiary',textColor = 'text-white', children }) => {
  return (
    <button className={`${bgColor} ${textColor} flex justify-center items-center py-2 px-4 w-[100%] active:scale-95 transition duration-300 rounded`}>
      {children}
      {label}
    </button>
  );
};

export { Button };
