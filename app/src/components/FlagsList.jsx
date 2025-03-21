import { useState, useEffect } from "react";
import { getAllFlags } from "../adapters/adapters";
import CouldNotLoadData from "../pages/CouldNotLoadData";
import FlagCard from "./FlagCard";

const FlagsList = ({ onClick, sortOption, filteredCountries }) => {
  const [flags, setFlags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      const [data, error] = await getAllFlags();
      error ? setError(<CouldNotLoadData />) : setFlags(data);
    };
    fetchFlags();
  }, [filteredCountries]);

  if (!filteredCountries.length)
    return <p>Does this place even exist on Earth?</p>;

  const sortFlags = (flags) => {
    let sorted = [...flags];

    switch (sortOption) {
      case "Countries A-Z":
        sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
        break;
      case "Countries Z-A":
        sorted.sort((a, b) => b.name.common.localeCompare(a.name.common));
        break;
      case "Regions A-Z":
        sorted.sort((a, b) => a.region.localeCompare(b.region));
        break;
      case "Regions Z-A":
        sorted.sort((a, b) => b.region.localeCompare(a.region));
        break;
      default:
        break;
    }

    return sorted;
  };

  return (
    <div>
      {filteredCountries.length > 0 ? (
        sortFlags(filteredCountries).map((flag, i) => (
          <FlagCard
            key={i}
            name={flag?.name?.common || "Unknown Country"}
            src={flag?.flags?.png}
            alt={flag?.flags?.alt || "No Flag Available"}
            onClick={() => onClick(flag)}
            flag={flag}
          />
        ))
      ) : (
        <p>Does this place even exist on Earth?</p>
      )}
    </div>
  );
};

export default FlagsList;
