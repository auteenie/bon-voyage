import { useState, useEffect } from "react";
import Select from "react-select";
import { getAllFlags } from "../adapters/adapters";

const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
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

  const handleSelect = (selectedOption) => {
    setSelected(selectedOption);
    onSearch(selectedOption ? [selectedOption] : []);
  };

  return (
    <div className="search-bar">
      <Select
        options={suggestions.filter((flag) =>
          flag.label.toLowerCase().includes(searchItem.toLowerCase())
        )}
        placeholder="Search for a country..."
        value={selected}
        onChange={handleSelect}
        isSearchable={true}
      />
    </div>
  );
};

export default SearchBar;
