import React from "react";
import { Input } from "./style";
import { padronizeString } from "../../services/utils";

const SearchBar = ({ getInput }) => (
  <Input
    type="text"
    placeholder="O que você procura?"
    onChange={(event) => getInput(padronizeString(event.target.value))}
  />
);
export default SearchBar;
