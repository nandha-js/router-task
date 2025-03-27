import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333", color: "#fff" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>
        Online Shop
      </h2>
      <button
        onClick={onCartClick}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
