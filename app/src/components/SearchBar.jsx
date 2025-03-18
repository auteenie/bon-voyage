import { useState, useEffect } from "react";
import { getAllFlags } from "../adapters/adapters";

const SearchBar = () => {
  return (
    <input
      type="text"
      name="search"
      className="search"
      placeholder="Search for a Country..."
    />
  );
};

export default SearchBar;
