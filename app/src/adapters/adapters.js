import { handleFetch } from "./handleFetch";

export const getAllFlags = async () => {
  const [data, error] = await handleFetch(
    "https://restcountries.com/v3.1/independent?status=true"
  );

  if (error) {
    console.error("Error fetching flags:", error);
    return [null, error];
  }

  return [data, null];
};

export const getPassportVisas = async (passportCountry, destinationCountry) => {
  const [data, error] = await handleFetch(
    `https://rough-sun-2523.fly.dev/visa/${passportCountry}/${destinationCountry}`
  );

  if (error) {
    console.error("Error fetching visa requirements:", error);
    return [null, error];
  }

  return [data, null];
};

export const getVisaStats = async (passportCountry) => {
  const [data, error] = await handleFetch(
    `https://rough-sun-2523.fly.dev/country/${passportCountry}`
  );

  if (error) {
    console.error("Error fetching visa stats:", error);
    return [null, error];
  }

  return [data, null];
};
