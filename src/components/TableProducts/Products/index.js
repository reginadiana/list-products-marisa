import React from "react";
import Category from "./Category";
import Product from "./Product";

const Products = ({ products }) => {
  let row = [];
  let lastCategory = null;

  products.map((product) => {
    if (product.category !== lastCategory) {
      row.push(
        <>
          <Category category={product.category} key={product.category} />
        </>
      );
    }

    row.push(<Product product={product} key={product.name} />);
    lastCategory = product.category;

    return null;
  });

  return <div>{row}</div>;
};

export default Products;
