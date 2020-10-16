import React from "react";

const CheckStocked = ({ showStockedProducts }) => {
  return (
    <form>
      <inpu type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" onChange={showStockedProducts} /> Ver somente
        produtos disponiveis
      </p>
    </form>
  );
};

export default CheckStocked;
