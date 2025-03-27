import React from "react";

const CartModal = ({ cart, setCart, onClose }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    alert("🚫 Product removed from cart!");
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total - total * 0.1; // 10% Discount
  };

  return (
    <div class="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-6 shadow-lg z-50 rounded-lg w-96">
      <h3 class="text-lg font-bold">🛒 Your Cart</h3>
      <button onClick={onClose} class="float-right text-red-500 hover:text-red-700">Close</button>
      {cart.length === 0 ? (
        <p class="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} class="flex justify-between items-center py-2 border-b">
              <span>{item.title} - ${item.price.toFixed(2)} x {item.quantity}</span>
              <div class="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  class="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4 class="mt-4 font-semibold">Total: ${calculateTotal().toFixed(2)} (10% discount applied)</h4>
    </div>
  );
};

export default CartModal;