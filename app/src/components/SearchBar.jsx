import { useState, useEffect } from "react";
import { getAllFlags } from "../adapters/adapters";

const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      const [data] = await getAllFlags();
      setSuggestions(data);
    };

    fetchFlags();
  }, []);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);

    const filteredSuggestions = suggestions.filter((flag) =>
      flag.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );

    onSearch(filteredSuggestions);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search for a Country..."
        value={searchItem}
        onChange={handleSearchChange}
      />
      {searchItem && (
        <ul className="dropdown-suggestions">
          {suggestions
            .filter((flag) =>
              flag.name.common.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((flag) => (
              <li key={flag.cca3}>{flag.name.common}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
