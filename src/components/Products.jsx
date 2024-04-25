import products from "../components/../data/products";
import Product from "./Product.jsx";
import { FilterProducts } from "../utills/Filter.js";
export default function Products({
  search,
  setCount,
  CartItems,
  setCartItems,
}) {
  const liveProducts = FilterProducts(search, products);
  return (
    <div className="items-container">
      {liveProducts.map((item, idx) => {
        return (
          <div key={idx}>
            <Product
              item={item}
              setCount={setCount}
              CartItems={CartItems}
              setCartItems={setCartItems}
            />
          </div>
        );
      })}
    </div>
  );
}
