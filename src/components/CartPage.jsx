import React from "react";

const CartPage = ({ cart, setCart }) => {
  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
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
    <div style={{ padding: "30px" }}>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/">Go Shopping</a></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
              <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}
          <div className="total">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <h3>Final Price: ${finalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
