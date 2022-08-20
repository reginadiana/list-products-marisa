import styled from "styled-components";
import theme from "../../styles/theme";

export const Footer = styled.footer`
  background-color: ${theme.color.white.whiteSmoke};
  padding: 32px;

  @media (min-width: 1450px) {
    padding: 64px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
`;

export const Article = styled.article`
  color: ${theme.color.gray.charcoal};

  .article__title {
    margin-bottom: 32px;
  }

  .article__item {
    margin-bottom: 16px;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 900px) {
    margin-bottom: 32px;
  }
`;

export const Summary = styled.summary`
  cursor: pointer;
  color: ${theme.color.pink.hollywoodCerise};
`;

export const Details = styled.details`
  margin-bottom: 48px;
  text-transform: capitalize;

  @media (min-width: 900px) {
    margin-right: 64px;
    height: 314px;
    width: 230px;
  }
`;

export const Item = styled.li`
  color: ${theme.color.gray.charcoal};
  margin-top: 8px;

  :hover {
    color: ${theme.color.pink.hollywoodCerise};
  }
`;
