import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded">
      {label}
    </button>
  );
};

export { Button };
