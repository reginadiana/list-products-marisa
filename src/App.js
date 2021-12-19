import React from "react";
import SearchBar from "./components/SearchBar";
import CheckStocked from "./components/CheckStocked";
import Products from "./components/Products";
import * as Styled from "./style";
import "./App.css";

function App() {
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>marisa</h1>
        <SearchBar />
      </Styled.Header>
      <Styled.SubHeader>
        <h2>CONFIRA NOSSA COLEÇÃO</h2>
      </Styled.SubHeader>
      <CheckStocked />
      <Styled.ProductsContainer>
        <Products />
      </Styled.ProductsContainer>
    </Styled.Container>
  );
}

export default App;
