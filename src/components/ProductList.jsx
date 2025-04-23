import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart with alert
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      alert("⚠️ Product is already in the cart!");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert("✅ Product added to the cart!");
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
