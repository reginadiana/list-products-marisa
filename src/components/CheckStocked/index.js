import React from "react";
import * as Styled from "./style";

const CheckStocked = () => {
  return (
    <Styled.Form>
      <input id="search" name="search" type="checkbox" /> 
      <label htmlFor="search">Ver somente produtos disponiveis</label>
    </Styled.Form>
  );
};

export default CheckStocked;
