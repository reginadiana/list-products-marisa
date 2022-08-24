import styled from "styled-components";
import theme from "../../styles/theme";

export const Section = styled.section`
  padding: 16px;
`;

export const List = styled.ul`
  overflow: auto;
`;

export const Item = styled.li`
  margin-bottom: 32px;
`;

export const Img = styled.img`
  @media (min-width: 900px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  margin: 24px 0 8px;
`;

export const Link = styled.a`
  font-size: 20px;
  color: ${theme.color.pink.hollywoodCerise};
  margin: 8px 0;
`;

export const Span = styled.span`
  font-size: 16px;
`;
