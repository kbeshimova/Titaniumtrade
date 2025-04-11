"use client";

import React, { useState } from "react";


interface InteractiveButton {
  children: React.ReactNode;
  className?: string; // Дополнительные классы
}

export default function InteractiveButton({
  children,
  className = "",
}: InteractiveButton) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const maxOffset = 10; // Максимальное смещение в пикселях
    const x = Math.min(
      Math.max(e.clientX - rect.left - rect.width / 2, -maxOffset),
      maxOffset
    );
    const y = Math.min(
      Math.max(e.clientY - rect.top - rect.height / 2, -maxOffset),
      maxOffset
    );
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Сброс позиции при уходе мыши
  };

  return (
    <button
      className={`interactive-button ${className}`} // Добавляем переданные классы
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease",
      }}
    >
      {children}
    </button>
  );
}