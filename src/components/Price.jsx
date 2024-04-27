import React from "react";

export default function Price({ CartItems }) {
  const price = CartItems.reduce(
    (tot, curr) => tot + curr.price * curr.count,
    0
  ).toFixed(2);
  return <div>{price > 0 && <p>Total price : {price}</p>}</div>;
}
