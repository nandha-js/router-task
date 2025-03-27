import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError("Failed to fetch product."));
  }, [id]);

  if (error) return <p class="text-red-500">{error}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <div class="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <button 
        onClick={() => navigate("/")}
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg mb-5 transition"
      >
        Back to Home
      </button>
      <div class="bg-white p-6 rounded-lg shadow-xl text-center max-w-md">
        <img src={product.image} alt={product.title} class="h-56 mx-auto mb-5" />
        <h2 class="text-xl font-bold">{product.title}</h2>
        <p class="text-green-600 font-bold text-lg mb-3">${product.price.toFixed(2)}</p>
        <p class="text-gray-700">{product.description}</p>
        <button 
          onClick={() => setCart([...cart, { ...product, quantity: 1 }])}
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
