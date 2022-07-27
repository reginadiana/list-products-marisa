import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.header`
  background-color: ${theme.colors.pink};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  h1 {
    color: ${theme.colors.white};
  }
  
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;