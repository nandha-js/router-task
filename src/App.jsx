import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} onCartClick={toggleModal} />
        {showModal && <CartModal cart={cart} setCart={setCart} onClose={toggleModal} />}
        <Routes>
          <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
