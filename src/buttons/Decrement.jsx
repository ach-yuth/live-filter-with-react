import React from "react";

export default function Decrement({ item, CartItems, setCartItems }) {
  const decrement = () => {
    const itemAlreayInCart = CartItems.find((el) => el._id === item._id);
    if (itemAlreayInCart.count === 1) {
      setCartItems((prev) => prev.filter((el) => item._id !== el._id));
    } else {
      setCartItems((prev) =>
        prev.map((el) => {
          if (el._id === item._id) {
            return {
              ...el,
              count: el.count - 1,
            };
          } else {
            return el;
          }
        })
      );
    }
  };
  return (
    <div>
      <button className="green-btn" onClick={decrement}>
        -
      </button>
    </div>
  );
}
