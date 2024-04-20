import React from "react";
import product from "./product";
import Product from "./Product.jsx";
export default function Products({ search }) {
  const liveProduct = product.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.name.toLocaleLowerCase().includes(search)
  );
  return (
    <div className="items-container">
      {liveProduct.map((item, idx) => {
        return (
          <div key={idx}>
            <Product item={item} />
          </div>
        );
      })}
    </div>
  );
}
