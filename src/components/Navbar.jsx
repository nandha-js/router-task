import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <h2
        className="text-xl font-bold cursor-pointer"
        onClick={() => window.location.href = "/"}
      >
        Online Shop
      </h2>
      <button
        onClick={onCartClick}
        className="bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-red-700"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
