import { useState } from "react";
import Products from "./components/Products";
import React from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header setSearch={setSearch} count={count} />
      <Products search={search} setCount={setCount} />
    </div>
  );
}
