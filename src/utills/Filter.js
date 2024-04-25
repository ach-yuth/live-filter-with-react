export function FilterProducts(search, products) {
  return products.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.name.toLocaleLowerCase().includes(search)
  );
}
