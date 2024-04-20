import React from "react";

export default function Product({ item }) {
  return (
    <div className="item">
      <img className="image" src={item.image} />
      <div className="item-description">
        <p>{item.description}</p>
        <h3>{item.name}</h3>
        <p>
          Rating:<span>{item.rating}</span>
        </p>
        <p className="price"> $ {item.price}</p>
        <button className="cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}
