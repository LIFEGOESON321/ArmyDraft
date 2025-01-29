import React, { useState } from 'react';

interface CardProps {
  frontImage: string;
  backImage: string;
  name: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ frontImage, backImage, name, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={isHovered ? backImage : frontImage}
        alt={name}
        className="rounded-lg shadow-lg w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
        <h3 className="text-center font-semibold">{name}</h3>
      </div>
    </div>
  );
};