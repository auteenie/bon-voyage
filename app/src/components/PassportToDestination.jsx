import { useState, useEffect } from "react";
import { getPassportVisas } from "../adapters/adapters";

const PassportToDestination = ({ passportCode, destinationCode }) => {
  const [visa, setVisa] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPassToDest = async () => {
      const [data, error] = await getPassportVisas(
        passportCode,
        destinationCode
      );
      error ? setError("Failed to fetch visa") : setVisa(data);
    };

    fetchPassToDest();
  });

  return (
    <div className="visa-requirements">
      <h3>Visa Requirements</h3>
      <p>Origin Country: {}</p>
      <p>Destination Country:</p>
      <SearchBar />
      <p>Visa-Free:</p>
      <p>Visa-On-Arrival:</p>
      <p>Visa-Required:</p>
    </div>
  );
};

export default PassportToDestination;
