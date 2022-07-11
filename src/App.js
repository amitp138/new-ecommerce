import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "reactstrap";
import Navbar from "./components/Navbar";
import { CartProvider } from "./lib/cart.context";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/category/:id" exact element={<Category />} />

          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
