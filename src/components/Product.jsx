import React from "react";
import AddToCartButton from "../components/../buttons/AddToCartButton";

export default function Product({ item, CartItems, setCartItems }) {
  return (
    <div className="item">
      <img className="image" src={item.image} />
      <div className="item-description">
        <p>{item.description.slice(0, 100)}...</p>

        <p>
          Rating:<span>{item.rating}</span>
        </p>
        <h3>
          {item.name.slice(0, 25)}
          {item.name.length > 25 && "..."}
        </h3>
        <p className="price"> $ {item.price}</p>
        <AddToCartButton
          item={item}
          CartItems={CartItems}
          setCartItems={setCartItems}
        />
      </div>
    </div>
  );
}
