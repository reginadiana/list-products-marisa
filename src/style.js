import styled from "styled-components";
import theme from "./styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  background-color: ${theme.colors.pink};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  h1 {
    color: ${theme.colors.white};
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
`;
