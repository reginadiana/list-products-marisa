import React from "react";
import ImgShoePink from "../../assets/shoe-pink.png";
import * as Styled from "./News.style";

const News = () => {
  return (
    <Styled.Section>
      <Styled.Title>Novidades</Styled.Title>
      <Styled.List className="md-flex">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Styled.Item key={item} className="flex-column">
            <Styled.Img
              src={ImgShoePink}
              alt="Sapato rosa"
              title="Eu quero esse sapato rosa :)"
            />
            <Styled.Subtitle>
              Tênis Feminino Casual Flatform Moleca
            </Styled.Subtitle>
            <Styled.Span>De: R$ 200,00</Styled.Span>
            <Styled.Link href="./">Por: R$ 129,99</Styled.Link>
            <Styled.Span>6x de R$ 21,67 sem juros</Styled.Span>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};

export default News;
