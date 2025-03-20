import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
  };

  const handleSearch = (searchResults) => {
    if (searchResults.length > 0) {
      setFilteredCountries(searchResults);
    } else {
      setFilteredCountries([]);
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
