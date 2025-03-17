import { handleFetch } from "./handleFetch";

export const countries = async () => {
  const [data, error] = await handleFetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,language,translations,region,subregion,maps,continents`
  );
};

export const getAllFlags = async () => {
  const [data, error] = await handleFetch(
    'https://restcountries.com/v3.1/independent?status=true'
  );
  
  if (error) {
    console.error('Error fetching flags:', error);
    return [null, error];
  }
  
  return [data, null];
};
