import { getAllFlags } from "../adapters/adapters";
import { useState, useEffect } from "react";
import CouldNotLoadData from "../pages/CouldNotLoadData";

const FlagsList = () => {
  const [flags, setFlags] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlags = async () => {
      const [data, error] = await getAllFlags();
      if (data) setFlags(data);
      if (error) setError(<CouldNotLoadData />);
    };
    fetchFlags();
  }, []);

  return (
    <div>
      {flags.map((flag) => (
        <FlagCard
          name={flag.name.common}
          src={flag.flags.png}
          alt={flag.flags.alt}
        />
      ))}
    </div>
  );
};

export default FlagsList;
