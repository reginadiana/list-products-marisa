import React from "react";
import Products from "./Products";

const TableProducts = ({ products }) => (
  <div className="ProductTable-Class">
    <Products products={products} />
  </div>
);

export default TableProducts;
