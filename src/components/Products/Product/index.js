import React, { useContext } from "react";
import * as Styled from "./style";
import { Context } from "../../../services/context";
import { removeSpecialCaracters } from "../../../services/utils";

const Product = ({ product }) => {
  const { inputSearchBar } = useContext(Context);
  const isStocked = product.stocked;

  const productName = removeSpecialCaracters(product.name).toUpperCase();
  const arrayName = productName.split(" ");

  const showName = product.name.split(" ");

  const renderNameProduct = () => {
    if (!inputSearchBar) {
      return <Styled.Name alertSearch={false}>{product.name}</Styled.Name>;
    }

    return arrayName.map((name, index) => {
      const includeSearch = name.includes(inputSearchBar.toUpperCase());
      if (includeSearch) {
        return (
          <Styled.Name key={index} alertSearch={true}>
            {showName[index]}&#160;
          </Styled.Name>
        );
      } else {
        return (
          <Styled.Name key={index} alertSearch={false}>
            {showName[index]}&#160;
          </Styled.Name>
        );
      }
    });
  };

  return isStocked ? (
    <Styled.Product>
      <Styled.Img src={product.img} alt={product.name} />
      <Styled.NameProduct>{renderNameProduct()}</Styled.NameProduct>
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
