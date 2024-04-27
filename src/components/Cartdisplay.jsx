import React from "react";

export default function Cartdisplay({ CartItems, setCartItems }) {
  console.log(CartItems);
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
            <div className="items-container" key={idx}>
              <p>{item.name}</p>
              <p>{item.count}</p>
              <button
                onClick={() => {
                  const itemAlreayInCart = CartItems.find(
                    (el) => el._id === item._id
                  );
                  if (itemAlreayInCart.count === 0) {
                    setCartItems((prev) => prev);
                  } else {
                    const prevItems = CartItems.filter(
                      (el) => item._id !== el._id
                    );
                    setCartItems([
                      ...prevItems,
                      {
                        ...itemAlreayInCart,
                        count: itemAlreayInCart.count - 1,
                      },
                    ]);
                  }
                }}
                className="cart-btn"
              >
                Add To Cart
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
