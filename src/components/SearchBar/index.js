import React, { useState } from "react";
import { Input } from "./style";

const SearchBar = ({ getInput }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (value) => {
    setInput(value);
    getInput(value);
  };

  return (
    <Input
      type="text"
      placeholder="O que você procura?"
      value={input}
      onChange={(event) => handleOnChange(event.target.value)}
    />
  );
};

export default SearchBar;
