export const filterBySearch = (products, inputSearchBar) => {
  return products.filter(({ name }) =>
    name.toUpperCase().includes(inputSearchBar.toUpperCase())
  );
};

export const filterByStocked = (products) => {
  return products.filter(({ stocked }) => stocked);
};
