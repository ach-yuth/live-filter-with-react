import React, { useState } from "react";

export default function Header({ setSearch, count }) {
  return (
    <div className="header">
      <h2>ShopElectronic</h2>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="cart-icon">
          <img src="https://cdn-icons-png.flaticon.com/128/891/891407.png"></img>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
}
