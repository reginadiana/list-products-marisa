import React from "react";
import * as Styled from "./style";

const CheckStocked = ({ showStockedProducts }) => {
  return (
    <Styled.Form>
      <inpu type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" onChange={showStockedProducts} /> Ver somente
        produtos disponiveis
      </p>
    </Styled.Form>
  );
};

export default CheckStocked;
