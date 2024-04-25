import React from "react";

export default function Cartdisplay({ CartItems }) {
  return (
    <div className="card-display">
      <p>items not added</p>
      {CartItems.map((item, idx) => {
        return (
          <div key={idx}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
