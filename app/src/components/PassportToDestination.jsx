import { useState, useEffect } from "react";
import { handleFetch } from "../adapters/handleFetch";
import { getPassportVisas } from "../adapters/adapters";

const PassportToDestination = ({ country, origin }) => {
  const [visa, setVisa] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPassToDest = async () => {
      try {
        const [countryCode, countryErr] = await handleFetch(
          `https://restcountries.com/v3.1/name/${country}?fields=cca2`
        );
        if (countryErr || !countryData.length) {
          setError("Failed to fetch country code");
          return;
        }

        const [originCode, originErr] = await handleFetch(
          `https://restcountries.com/v3.1/name/${origin}?fields=cca2`
        );
        if (originErr || !originData.length) {
          setError("Failed to fetch origin country code");
          return;
        }

        const [visaData, visaError] = await getPassportVisas(
          originCode,
          countryCode
        );

        if (visaError) {
          setError("Failed to fetch visa");
          return;
        }
        setVisa(visaData);
      } catch (err) {
        setError("Try again.");
      }
    };

    fetchPassToDest();
  }, [country, origin]);

  return (
    <div className="visa-requirements">
      <h3>Visa Requirements</h3>
      {error && <p className="error">{error}</p>}
      {visa ? (
        <>
          <p>
            Origin Country: {visa.passport?.name} ({visa.passport?.code})
          </p>
          <p>
            Destination Country: {visa.destination?.name} (
            {visa.destination?.code})
          </p>
          <p>
            Visa: {visa.category?.name} ({visa.category?.code})
          </p>
        </>
      ) : (
        <p>Loading visa details...</p>
      )}
    </div>
  );
};

export default PassportToDestination;
