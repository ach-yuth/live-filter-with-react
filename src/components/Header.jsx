import React, { useState } from "react";

export default function Header({ setSearch }) {
  return (
    <div className="header">
      <h2>ShopElectronic</h2>
      <input
        type="text"
        placeholder="search"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
