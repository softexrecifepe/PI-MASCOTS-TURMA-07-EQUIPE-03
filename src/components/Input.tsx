import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
