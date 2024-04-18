import React from "react";
import product from "./product";
export default function Products({ search }) {
  return (
    <div className="item-container">
      {product
        .filter((item) =>
          search.toLowerCase() === ""
            ? item
            : item.name.toLocaleLowerCase().includes(search)
        )
        .map((item, idx) => {
          return (
            <div className="item" key={idx}>
              <img className="image" src={item.image} />
              <p>{item.description}</p>

              <div className="item-Name">
                <h4>{item.name}</h4>

                <p
                  style={
                    item.rating >= 4.5 ? { color: "white" } : { color: "black" }
                  }
                >
                  {item.rating}
                </p>
              </div>
              <p className="price"> $ {item.price}</p>
            </div>
          );
        })}
    </div>
  );
}
