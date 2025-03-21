import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllFlags } from "../adapters/adapters";
import Button from "../components/Button";
import FlagsList from "../components/FlagsList";
import NavBar from "../components/NavBar";
import CountryModal from "../components/CountryModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const sortByMenu = [
  "Default",
  "Countries A-Z",
  "Countries Z-A",
  "Regions A-Z",
  "Regions Z-A",
];

const CountriesPage = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sortOption, setSortOption] = useState("Show All");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      const [data] = await getAllFlags();
      setAllCountries(data);
      setFilteredCountries(data);
    };

    fetchFlags();
  });

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
  };

  const handleSearch = (searchResults) => {
    console.log("Search Results:", searchResults); // Debugging

    if (searchResults.length > 0) {
      const filtered = allCountries.filter((flag) =>
        searchResults.some((selected) => selected.value === flag.cca3)
      );

      console.log("Filtered Countries:", filtered); // Debugging
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(allCountries); // Reset to all if nothing is selected
    }
  };

  return (
    <main className="view-countries">
      <NavBar className="countries-nav">
        <li>
          <Button
            name="View Account"
            onClick={() => navigate(`/pages/PassportPage/${currentUser.id}`)}
          />
        </li>
      </NavBar>

      <div className="search-filter">
        <h1>List of Countries</h1>
        <SearchBar onSearch={handleSearch} />
        <Filter
          menu={sortByMenu}
          onSelect={(option) => setSortOption(option)}
        />
      </div>

      <section className="flags-list">
        <FlagsList
          onClick={openModal}
          sortOption={sortOption}
          filteredCountries={filteredCountries}
        />

        <CountryModal
          isOpen={isOpen}
          onClose={closeModal}
          country={selectedCountry}
        />
      </section>
    </main>
  );
};

export default CountriesPage;
