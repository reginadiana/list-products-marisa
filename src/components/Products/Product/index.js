import React from "react";
import * as Styled from "./style";
import { namesOfProducts } from "../../../services/utils";
import { Context } from "../../../services/context";
import { useContext } from "react";

const Product = ({ product }) => {
  const isStocked = product.stocked;

  let { inputSearchBar } = useContext(Context);

  const { names_searched, names_unsearched } = namesOfProducts(
    product.name,
    inputSearchBar
  );

  const renderNames = (names, { isAlert }) =>
    names.map((name, index) => (
      <Styled.Name key={index} alertSearch={isAlert}>
        {name}&#160;
      </Styled.Name>
    ));

  return isStocked ? (
    <Styled.Product>
      <Styled.Img src={product.img} alt={product.name} />
      {
        <Styled.NameProduct>
          {renderNames(names_searched, {
            isAlert: true,
          })}
          {renderNames(names_unsearched, {
            isAlert: false,
          })}
        </Styled.NameProduct>
      }
      <Styled.Price isStocked={isStocked}>{product.price}</Styled.Price>
    </Styled.Product>
  ) : (
    <Styled.Product>
      <Styled.Img src={product.img} alt={product.name} />
      <Styled.Unavailable>INDISPONIVEL</Styled.Unavailable>
    </Styled.Product>
  );
};

export default Product;
