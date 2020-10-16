import React from "react";

const SearchBar = () => (
  <form>
    <input className="search" type="text" placeholder="Search..." />
    <p>
      <input className="checkbox" type="checkbox" /> Only show products in stock
    </p>
  </form>
);

export default SearchBar;
