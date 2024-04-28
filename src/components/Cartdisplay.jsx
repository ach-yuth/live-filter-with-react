import React from "react";
import DeleteButton from "../components/../buttons/DeleteButton";
import Increment from "../components/../buttons/Increment";
import Decrement from "../components/../buttons/Decrement";
import Price from "./Price";
export default function Cartdisplay({ CartItems, setCartItems }) {
  return (
    <div
      className="card-display"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {!CartItems.length ? (
        <p> cart is empty</p>
      ) : (
        CartItems.map((item, idx) => {
          return (
            <div className="cart-item" key={idx}>
              <div className="product-name">
                <img src={item.image}></img>
                <p>{item.name.slice(0, 15)}...</p>
              </div>
              <div className="buttons-container">
                <Decrement
                  item={item}
                  CartItems={CartItems}
                  setCartItems={setCartItems}
                />
                <p>{item.count}</p>

                <Increment
                  item={item}
                  CartItems={CartItems}
                  setCartItems={setCartItems}
                />
                <DeleteButton
                  item={item}
                  CartItems={CartItems}
                  setCartItems={setCartItems}
                />
              </div>
            </div>
          );
        })
      )}
      <Price CartItems={CartItems} />
    </div>
  );
}
