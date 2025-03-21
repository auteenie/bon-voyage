import { useState, useEffect } from "react";
import Select from "react-select";
import { getAllFlags } from "../adapters/adapters";

const SearchBar = ({ onSearch }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      const [data] = await getAllFlags();
      const formattedFlags = data.map((flag) => ({
        value: flag.cca3,
        label: flag.name.common,
      }));
      setSuggestions(formattedFlags);
    };

    fetchFlags();
  }, []);

  const handleSelect = (selected) => {
    setSelected(selected);
    onSearch(selected || []);
  };

  return (
    <div className="search-bar">
      <Select
        options={suggestions}
        placeholder="Search for a country..."
        value={selected}
        onChange={handleSelect}
        isSearchable={true}
        isMulti
      />
    </div>
  );
};

export default SearchBar;
