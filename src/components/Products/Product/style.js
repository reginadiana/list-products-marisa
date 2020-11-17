import styled from "styled-components";
import theme from "../../../styles/theme";

export const Product = styled.div`
  margin: auto;
`;

export const NameProduct = styled.div`
  display: flex;
  width: 300px;
`;

export const Name = styled.p`
  color: ${({ alertSearch }) => alertSearch && theme.colors.pink};
  line-height: 25px;
  margin: 5px 0 10px;
  font-size: ${theme.fontSize.regular};
  word-break: normal;
`;

export const Price = styled.p`
  margin: 0px 0 15px;
  color: ${theme.colors.pink};
`;

export const Unavailable = styled.p`
  color: ${theme.colors.red};
  text-align: center;
`;

export const Img = styled.img`
  width: 300px;
`;
