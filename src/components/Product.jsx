import React from "react";

export default function Product({ item, setCount }) {
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
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
