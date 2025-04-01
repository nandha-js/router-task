import React from "react";

const ProductCard = ({ product, cart, setCart, addToCart }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto mb-3"
      />
      <h3 className="font-bold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-3 text-lg">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-5 py-2 rounded-lg transition-colors duration-300 hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
