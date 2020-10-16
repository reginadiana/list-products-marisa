import React from "react";
import "./App.css";
import products from "./services/moc";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableProducts from "./components/TableProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <TableProducts products={products} />
      <Footer />
    </>
  );
}

export default App;
