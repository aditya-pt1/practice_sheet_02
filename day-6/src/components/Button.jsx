import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
