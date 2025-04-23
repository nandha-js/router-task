import React from "react";
import { Link } from "react-router-dom"; // Import Link component

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <h2
        className="text-xl font-bold cursor-pointer"
        onClick={() => window.location.href = "/"}
      >
        Online Shop
      </h2>
      <Link
        to="/cart" // Use Link component to navigate to the Cart page
        className="bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-red-700"
      >
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
