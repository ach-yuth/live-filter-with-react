import React from "react";
import product from "./product";
import Product from "./Product.jsx";
import { FilterProducts } from "../utills/Filter.js";
export default function Products({ search }) {
  const liveProducts = FilterProducts(search, product);
  return (
    <div className="items-container">
      {liveProducts.map((item, idx) => {
        return (
          <div key={idx}>
            <Product item={item} />
          </div>
        );
      })}
    </div>
  );
}
