import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div style={{ padding: "30px" }}>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go Shopping</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span>{item.title}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => increaseQty(item.id)}>➕</button>
              <button onClick={() => decreaseQty(item.id)}>➖</button>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <h3>Final Price: ${finalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
