import React from "react";

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
        <button
          onClick={() => {
            const itemAlreayInCart = CartItems.find(
              (el) => el._id === item._id
            );
            if (!itemAlreayInCart) {
              setCartItems((prev) => [...prev, { ...item, count: 1 }]);
            } else {
              const prevItems = CartItems.filter((el) => item._id !== el._id);
              setCartItems([
                ...prevItems,
                { ...itemAlreayInCart, count: itemAlreayInCart.count + 1 },
              ]);
            }
          }}
          className="cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
