import styled from "styled-components";

export const Products = styled.div`
  display: grid;
  width: 300px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    grid-template-columns: 320px 320px;
    width: 700px;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 320px 320px 320px;
    width: 1000px;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 320px 320px 320px 320px;
    width: 1300px;
  }
`;
