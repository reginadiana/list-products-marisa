import React, { useState } from "react";
import "./App.css";
import products from "./services/moc";
import SearchBar from "./components/SearchBar";
import CheckStocked from "./components/CheckStocked";
import { Context } from "./services/context";
import * as Styled from "./style";
import Products from "./components/Products";

function App() {
  const [showStocked, setShowStocked] = useState(false);
  const [inputSearchBar, setInputSearchBar] = useState("");

  return (
    <Context.Provider value={{ inputSearchBar }}>
      <Styled.Container>
        <Styled.Header>
          <h1>marisa</h1>
          <SearchBar getInput={setInputSearchBar} />
        </Styled.Header>
        <Styled.SubHeader>
          <h2>CONFIRA NOSSA COLEÇÃO</h2>
        </Styled.SubHeader>
        <CheckStocked
          showStockedProducts={() => setShowStocked(!showStocked)}
        />
        <Styled.ProductsContainer>
          <Products products={products} showStocked={showStocked} />
        </Styled.ProductsContainer>
      </Styled.Container>
    </Context.Provider>
  );
}

export default App;
