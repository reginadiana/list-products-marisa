import { Context } from "../services/context";
import { useContext } from "react";

export const removeSpecialCaracters = (string) =>
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const filterBySearch = (products) =>
  products.filter(({ name }) => {
    name = name.toUpperCase();

    let { inputSearchBar } = useContext(Context);

    name = removeSpecialCaracters(name);
    inputSearchBar = inputSearchBar.toUpperCase();

    return name.includes(inputSearchBar);
  });

export const filterByStocked = (products) =>
  products.filter(({ stocked }) => stocked);
