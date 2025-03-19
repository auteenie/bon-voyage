import { useState, useEffect } from "react";
import { getVisaStats } from "../adapters/adapters";
import Filter from "./Filter";

const visaCategories = [
  { key: "VF", label: "Visa Free" },
  { key: "VOA", label: "Visa On Arrival (including eTA)" },
  { key: "VR", label: "Visa Required" },
];

const VisaStats = ({ code }) => {
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchVisaStats = async () => {
      const [data, error] = await getVisaStats(code);
      error ? setError("Failed to fetch visa stats") : setStats(data);
    };

    fetchVisaStats();
  }, [code]);

  const handleSelect = (selectedKey) => {
    setSelected(selectedKey);
  };

  const renderVisaList = (category) => {
    if (!stats || !stats[category]) return <p>Loading visa stats...</p>;

    return stats[category].length > 0 ? (
      <ul>
        {stats[category].map((country, index) => (
          <li key={index}>
            {country.name}{" "}
            {country.duration ? `- ${country.duration} days` : ""}
          </li>
        ))}
      </ul>
    ) : (
      <p>No countries available</p>
    );
  };

  return (
    <div className="visa-stats">
      <h3>Visa Statistics</h3>
      <label>Select a visa:</label>

      <Filter
        menu={visaCategories.map((item) => item.key)}
        onSelect={handleSelect}
      />

      {error && <p>{error}</p>}

      {selected && (
        <>
          <h3>{visaCategories.find((cat) => cat.key === selected)?.label}</h3>
          {renderVisaList(selected)}
        </>
      )}
    </div>
  );
};

export default VisaStats;
