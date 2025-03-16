import { handleFetch } from "./handleFetch";

// const stamps = ["Italy", "Germany"];

export const countries = async () => {
  const [data, error] = await handleFetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,language,translations,region,subregion,maps,continents`
  );
};

export const getAllFlags = async () => {
  const [data, error] = await handleFetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,flags`
  );

  if (error) return null;
  return data;
};
