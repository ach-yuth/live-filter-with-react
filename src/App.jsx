import { useState } from "react";
import Products from "./components/Products";
import React from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [CartItems, setCartItems] = useState([]);

  return (
    <div className="container">
      <Header setSearch={setSearch} count={count} CartItems={CartItems} />
      <Products
        search={search}
        setCount={setCount}
        setCartItems={setCartItems}
        CartItems={CartItems}
      />
    </div>
  );
}
