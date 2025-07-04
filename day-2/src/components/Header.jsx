import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between bg-violet-800 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-9">Header</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
         Content
        </li>
      </ul>
    </nav>
  );
};

export default Header;