import React from "react";

export default function Decrement({ item, CartItems, setCartItems }) {
  const decrement = () => {
    const itemAlreayInCart = CartItems.find((el) => el._id === item._id);
    if (itemAlreayInCart.count === 1) {
      setCartItems((prev) => prev.filter((el) => item._id !== el._id));
    } else {
      const prevItems = CartItems.filter((el) => item._id !== el._id);
      setCartItems([
        ...prevItems,
        {
          ...itemAlreayInCart,
          count: itemAlreayInCart.count - 1,
        },
      ]);
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
