import React from "react";

export default function Increment({ item, CartItems, setCartItems }) {
  const increment = () => {
    const itemAlreayInCart = CartItems.find((el) => el._id === item._id);

    const prevItems = CartItems.filter((el) => item._id !== el._id);
    setCartItems([
      ...prevItems,
      {
        ...itemAlreayInCart,
        count: itemAlreayInCart.count + 1,
      },
    ]);
  };
  return (
    <div>
      <button className="green-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}
