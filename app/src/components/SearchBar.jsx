import { useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <input
      type="text"
      name="search"
      className="search"
      placeholder="Search for a Country..."
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
    />
  );
};

export default SearchBar;
