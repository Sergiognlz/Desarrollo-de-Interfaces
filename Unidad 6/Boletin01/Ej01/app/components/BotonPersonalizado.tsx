import React from "react";

interface BotonPersonalizadoProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function BotonPersonalizado({ children, onClick, className = "" }: BotonPersonalizadoProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
