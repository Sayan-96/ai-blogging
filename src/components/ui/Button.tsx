'use client';

import React from 'react';

const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
