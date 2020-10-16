import React, { useContext } from "react";
import Category from "./Category";
import Product from "./Product";
import { Context } from "../../services/context";
import { filterByStocked, filterBySearch } from "../../services/utils";

const Products = ({ products, showStocked }) => {
  const { inputSearchBar } = useContext(Context);

  if (showStocked) products = filterByStocked(products);
  if (inputSearchBar) products = filterBySearch(products, inputSearchBar);

  let listProducts = [];
  let lastCategory = null;

  const addCategory = (category) =>
    listProducts.push(<Category category={category} key={category} />);

  const addProduct = (product) =>
    listProducts.push(
      <Product product={product} key={product.name} showStocked={showStocked} />
    );

  products.map((product) => {
    if (product.category !== lastCategory) addCategory(product.category);

    addProduct(product);

    lastCategory = product.category;

    return null;
  });

  return <div>{listProducts}</div>;
};

export default Products;
