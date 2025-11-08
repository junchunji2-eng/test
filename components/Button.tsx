
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-gradient-to-r from-cyan-500 to-blue-500 
        hover:from-cyan-600 hover:to-blue-600 
        text-white 
        font-bold 
        py-3 
        px-6 
        rounded-full 
        shadow-lg 
        hover:shadow-cyan-500/50
        transition 
        duration-300 
        ease-in-out 
        transform 
        hover:scale-105
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-300
        dark:focus:ring-cyan-800"
    >
      {children}
    </button>
  );
};
