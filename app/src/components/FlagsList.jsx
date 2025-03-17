import { getAllFlags } from "../adapters/adapters";
import { useState, useEffect } from "react";
import CouldNotLoadData from "../pages/CouldNotLoadData";
import FlagCard from "./FlagCard";

const FlagsList = ({ onClick }) => {
  const [flags, setFlags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      const [data, error] = await getAllFlags();
      if (error) {
        setError(<CouldNotLoadData />);
      } else {
        setFlags(data);
      }
    };
    fetchFlags();
  }, []);

  return (
    <div>
      {error ||
        (flags.length ? (
          flags.map((flag, i) => (
            <FlagCard
              key={i}
              name={flag?.name?.common || "Unknown Country"}
              src={flag?.flags?.png}
              alt={flag?.flags?.alt || "No Flag Available"}
              onClick={() => onClick(flag)}
            />
          ))
        ) : (
          <p>Loading...</p>
        ))}
    </div>
  );
};

export default FlagsList;
