import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      alert("⚠️ Product is already in the cart!");
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      alert("✅ Product added to your cart!");
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseFromCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      if (inCart.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.id !== product.id));
      }
    }
  };

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          class="bg-white p-4 shadow-lg rounded-lg text-center"
        >
          <img
            src={product.image}
            alt={product.title}
            class="h-40 mx-auto mb-3 cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <h3 class="font-bold">{product.title}</h3>
          <p class="text-gray-600">${product.price.toFixed(2)}</p>
          <div class="flex justify-center items-center gap-4 mt-2">
            <button
              onClick={() => decreaseFromCart(product)}
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              -
            </button>
            <span class="text-lg">{cart.find((item) => item.id === product.id)?.quantity || 0}</span>
            <button
              onClick={() => addToCart(product)}
              class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart(product)}
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mt-3"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
