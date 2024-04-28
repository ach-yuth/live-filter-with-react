import React from "react";

export default function DeleteButton({ item, setCartItems }) {
  const clearItem = () => {
    setCartItems((prev) => prev.filter((el) => item._id !== el._id));
  };
  return (
    <div>
      <button onClick={clearItem} className="cart-btn">
        X
      </button>
    </div>
  );
}
