import React from "react";

const Product = ({ product }) => {
  let nameProduct = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <>
      <p>{nameProduct}</p>
      <p>{product.price}</p>
      <img src={product.img} alt={nameProduct} />
    </>
  );
};

export default Product;
