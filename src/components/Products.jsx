import React from "react";
import products from "./products";
import Product from "./Product.jsx";
import { FilterProducts } from "../utills/Filter.js";
export default function Products({ search, setCount }) {
  const liveProducts = FilterProducts(search, products);
  return (
    <div className="items-container">
      {liveProducts.map((item, idx) => {
        return (
          <div key={idx}>
            <Product item={item} setCount={setCount} />
          </div>
        );
      })}
    </div>
  );
}
