import { handleFetch } from "./handleFetch";

const stamps = ["Italy", "Germany"];

export const countries = () => {
  return stamps.map((country) =>
    handleFetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,language,translations,region,subregion,maps,continents`
    )
  );
};

export const getAllFlags = () => {
  return stamps.map((country) =>
    handleFetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,flags`
    )
  );
};
