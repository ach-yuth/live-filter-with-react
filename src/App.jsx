import { useState } from "react";
import Products from "./components/Products";
import React from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Header setSearch={setSearch} />
      <Products search={search} />
    </div>
  );
}
