import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-auto object-contain rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg w-full transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
