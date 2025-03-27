import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Router>
      <div class="font-sans min-h-screen">
        <Navbar cartCount={cart.length} onCartClick={toggleModal} />
        {showModal && <CartModal cart={cart} setCart={setCart} onClose={toggleModal} />}
        <Routes>
          <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
