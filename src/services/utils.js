import { Context } from "../services/context";
import { useContext } from "react";

export const removeSpecialCaracters = (string) =>
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const padronizeString = (string) =>
  removeSpecialCaracters(string.toUpperCase());

export const removeBlankSpaces = (string) => string.trim().split(" ");

export const filterBySearch = (products) =>
  products.filter(({ name }) => {
    let { inputSearchBar } = useContext(Context);

    return removeBlankSpaces(inputSearchBar).every((search) =>
      padronizeString(name).includes(search)
    );
  });

export const filterByStocked = (products) =>
  products.filter(({ stocked }) => stocked);

const searchedTerm = (term, inputSearchBar) =>
  inputSearchBar.some((search) =>
    term.split(" ").some((term) => term.includes(search))
  );

export const namesOfProducts = (productName, inputSearchBar) => {
  inputSearchBar = removeBlankSpaces(inputSearchBar);
  const validSearch = inputSearchBar.join("").length > 0;
  const productsName = removeBlankSpaces(padronizeString(productName));
  const names = removeBlankSpaces(productName);

  let names_searched = [];
  let names_unsearched = [];

  productsName.map((name, index) => {
    if (validSearch && searchedTerm(name, inputSearchBar))
      return names_searched.push(names[index]);

    return names_unsearched.push(names[index]);
  });

  return { names_searched, names_unsearched };
};
