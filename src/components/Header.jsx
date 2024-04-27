import { useState } from "react";
import cart from "../../assets/shopping-cart.png";
import Cartdisplay from "./Cartdisplay";
export default function Header({ setSearch, CartItems, setCartItems }) {
  const [displayProduct, setDisplayProduct] = useState(false);

  const count = CartItems.reduce((tot, curr) => tot + curr.count, 0);
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
          {displayProduct && (
            <Cartdisplay CartItems={CartItems} setCartItems={setCartItems} />
          )}
          <img src={cart}></img>
          <p className="cart-count">{count}</p>
        </div>
      </div>
    </div>
  );
}
