import React from "react";

export default function Increment({ item, setCartItems }) {
  const increment = () => {
    setCartItems((prev) =>
      prev.map((el) => {
        if (el._id === item._id) {
          return {
            ...el,
            count: el.count + 1,
          };
        } else {
          return el;
        }
      })
    );
  };
  return (
    <div>
      <button className="green-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}
