import { useState } from "react";
import cart from "../../assets/shopping-cart.png";
import Cartdisplay from "./Cartdisplay";
export default function Header({ setSearch, count, CartItems }) {
  const [displayProduct, setDisplayProduct] = useState(false);
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
        <div
          className="cart-icon"
          onClick={() => {
            setDisplayProduct((prev) => !prev);
          }}
        >
          {displayProduct && <Cartdisplay CartItems={CartItems} />}
          <img src={cart}></img>
          <p className="cart-count">{count}</p>
        </div>
      </div>
    </div>
  );
}
