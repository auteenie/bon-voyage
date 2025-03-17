import { handleFetch } from "./handleFetch";

export const countries = async () => {
  const [data, error] = await handleFetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,language,translations,region,subregion,maps,continents`
  );
};

export const getAllFlags = async () => {
  const data = await handleFetch(
    `https://restcountries.com/v3.1/name/all?fields=name,flags`
  );
  console.log(data);
  return data;
};
