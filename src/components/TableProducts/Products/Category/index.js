import React from "react";

const ProductCategoryRow = ({ category }) => (
  <tr>
    <th colSpan="2" className="category-Class">
      {category}
    </th>
  </tr>
);

export default ProductCategoryRow;
