import { getAllFlags } from "../adapters/adapters";
import { useState, useEffect } from "react";
import CouldNotLoadData from "../pages/CouldNotLoadData";

const FlagsList = () => {
  const [flags, setFlags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      const data = await getAllFlags();
      data ? setFlags(data) : setError(<CouldNotLoadData />);
    };
    fetchFlags();
  }, []);

  return (
    <div>
      {error ||
        flags.map((flag) => (
          <FlagCard
            key={flag.name.common}
            name={flag.name.common}
            src={flag.flags.png}
            alt={flag.flags.alt}
          />
        ))}
    </div>
  );
};

export default FlagsList;
