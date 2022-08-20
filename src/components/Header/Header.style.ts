import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.header`
  background-color: ${theme.color.pink.hollywoodCerise};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  h1 {
    color: ${theme.color.white.default};
  }
  
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;