import React, { useState } from "react";

export default function Header({ setSearch }) {
  return (
    <div className="input">
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
