import React from "react";

const ProductCard = ({ product, cart, setCart }) => {
  const addToCart = () => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      alert("⚠️ Already in cart! Quantity updated.");
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      alert(`✅ Added to cart: ${product.title}`);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div
      class="bg-white p-5 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={product.image}
        alt={product.title}
        class="h-40 mx-auto mb-3"
      />
      <h3 class="font-bold mb-2">{product.title}</h3>
      <p class="text-gray-600 mb-3 text-lg">${product.price.toFixed(2)}</p>
      <button
        onClick={addToCart}
        class="bg-green-500 text-white px-5 py-2 rounded-lg transition-colors duration-300 hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
