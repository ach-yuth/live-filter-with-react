import React from "react";

export default function DeleteButton({ item, CartItems, setCartItems }) {
  const clearItem = () => {
    const itemAlreayInCart = CartItems.find((el) => el._id === item._id);
    if (itemAlreayInCart.count === 1) {
      setCartItems((prev) => prev.filter((el) => item._id !== el._id));
    }
  };
  return (
    <div>
      <button onClick={clearItem} className="cart-btn">
        X
      </button>
    </div>
  );
}
