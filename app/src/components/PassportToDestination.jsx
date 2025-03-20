import { useState, useEffect } from "react";
import { handleFetch } from "../adapters/handleFetch";
import { getPassportVisas } from "../adapters/adapters";

const PassportToDestination = ({ country, origin }) => {
  const [visa, setVisa] = useState([]);
  const [countryC, setCountryC] = useState("");
  const [originC, setOriginC] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPassToDest = async () => {
      const [countryCode, countryErr] = await handleFetch(
        `https://restcountries.com/v3.1/name/${country}?fields=cca2`
      );
      countryErr
        ? setError("Failed to fetch country code")
        : setCountryC(countryCode);

      const [originCode, err] = await handleFetch(
        `https://restcountries.com/v3.1/name/${origin}?fields=cca2`
      );
      err
        ? setError("Failed to fetch origin country code")
        : setOriginC(originCode);

      const [data, error] = await getPassportVisas(originC, countryC);

      error ? setError("Failed to fetch visa") : setVisa(data);
    };

    fetchPassToDest();
  });

  return (
    <div className="visa-requirements">
      <h3>Visa Requirements</h3>
      <p>
        Origin Country: {visa.passport.name} ({visa.passport.code})
      </p>
      <p>
        Destination Country: {visa.destination.name} ({visa.country.code})
      </p>
      {error || (
        <p>
          Visa: ${visa.category.name} ({visa.category.code})
        </p>
      )}
    </div>
  );
};

export default PassportToDestination;
