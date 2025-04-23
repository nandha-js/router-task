import React from "react";

const CartPage = ({ cart, setCart }) => {
  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity of the product in cart
  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        🛒 Your Cart
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <p>Your cart is empty. <a href="/" className="text-blue-600">Go Shopping</a></p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <span className="text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      ➖
                    </button>
                    <span>Quantity: {item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      ➕
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount (10%):</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Final Price:</span>
                <span>${finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
