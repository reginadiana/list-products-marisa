import React, { useState } from "react";
import "./App.css";
import products from "./services/moc";
import SearchBar from "./components/SearchBar";
import CheckStocked from "./components/CheckStocked";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Context } from "./services/context";
import * as Styled from "./style";

function App() {
  const [showStocked, setShowStocked] = useState(false);
  const [inputSearchBar, setInputSearchBar] = useState("");

  const getInput = (value) => setInputSearchBar(value);

  return (
    <Context.Provider value={{ inputSearchBar }}>
      <Styled.Container>
        <Styled.Header>
          <h1>marisa</h1>
          <SearchBar getInput={getInput} />
          <Styled.SubHeader>
            <h2>CONFIRA NOSSA COLEÇÃO</h2>
          </Styled.SubHeader>
        </Styled.Header>
        <CheckStocked
          showStockedProducts={() => setShowStocked(!showStocked)}
        />
        <Products products={products} showStocked={showStocked} />
        <Footer />
      </Styled.Container>
    </Context.Provider>
  );
}

export default App;
