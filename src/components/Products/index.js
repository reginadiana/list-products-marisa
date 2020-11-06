import React, { useState } from "react";
import Product from "./Product";
import { filterByStocked, filterBySearch } from "../../services/utils";
import * as Styled from "./style";

const Products = ({ products, showStocked }) => {
  if (showStocked) products = filterByStocked(products);
  products = filterBySearch(products);
  const [amoutViewProduct, setAmoutViewProduct] = useState(5);

  let lenghtProductsDisplay = 0;

  const renderProduct = (product) => (
    <Product product={product} key={product.name} showStocked={showStocked} />
  );

  const renderProducts = () => {
    return products.map((product) => {
      lenghtProductsDisplay += 1;
      if (lenghtProductsDisplay < amoutViewProduct)
        return renderProduct(product);

      return null;
    });
  };

  return (
    <>
      <Styled.Products>{renderProducts()}</Styled.Products>
      {amoutViewProduct < products.length && (
        <button onClick={() => setAmoutViewProduct(amoutViewProduct + 5)}>
          Ver mais
        </button>
      )}
    </>
  );
};

export default Products;
