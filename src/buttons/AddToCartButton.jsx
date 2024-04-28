import React from "react";

export default function AddToCartButton({ item, CartItems, setCartItems }) {
  const handleClick = () => {
    const itemAlreayInCart = CartItems.find((el) => el._id === item._id);
    if (!itemAlreayInCart) {
      setCartItems((prev) => [...prev, { ...item, count: 1 }]);
    } else {
      setCartItems((prev) => [
        ...prev.filter((el) => item._id !== el._id),
        { ...itemAlreayInCart, count: itemAlreayInCart.count + 1 },
      ]);
    }
  };
  return (
    <div>
      <button onClick={handleClick} className="cart-btn">
        Add To Cart
      </button>
    </div>
  );
}
