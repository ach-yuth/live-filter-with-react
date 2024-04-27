import { useState } from "react";
import Products from "./components/Products";
import React from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState("");
  const [CartItems, setCartItems] = useState([]);

  return (
    <div className="container">
      <Header
        setSearch={setSearch}
        CartItems={CartItems}
        setCartItems={setCartItems}
      />
      <Products
        search={search}
        setCartItems={setCartItems}
        CartItems={CartItems}
      />
    </div>
  );
}
