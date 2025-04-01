import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      alert("⚠️ Product already in the cart!");
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      alert("✅ Product added to the cart!");
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
