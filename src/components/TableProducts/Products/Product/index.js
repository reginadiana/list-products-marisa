import React from "react";

const Product = ({ product }) => {
  const nameProduct = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "#006666" }}>{product.name}</span>
  );

  return (
    <tr className="products-Class">
      <td>{nameProduct}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
