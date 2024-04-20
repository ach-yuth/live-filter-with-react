export function FilterProducts(search, product) {
  return product.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.name.toLocaleLowerCase().includes(search)
  );
}
