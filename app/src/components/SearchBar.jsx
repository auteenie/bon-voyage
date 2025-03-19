const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  }

  return (
    <input
      type="text"
      name="search"
      className="search"
      placeholder="Search for a Country..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;