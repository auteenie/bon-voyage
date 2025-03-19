import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FlagsList from "../components/FlagsList";
import NavBar from "../components/NavBar";
import CountryModal from "../components/CountryModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const sortByMenu = [
  "Show All",
  "Countries A-Z",
  "Countries Z-A",
  "Regions A-Z",
  "Regions Z-A",
];

const CountriesPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sortOption, setSortOption] = useState("Show All");

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <main className="view-countries">
      <NavBar className="countries-nav">
        <li>
          <Button
            name="View Account"
            onClick={() => navigate("/pages/PassportPage")}
          />
        </li>
      </NavBar>

      <div className="search-filter">
        <h1>List of Countries</h1>
        <SearchBar />
        <Filter menu={sortByMenu} onSelect={handleSortChange} />
      </div>

      <section className="flags-list">
        <FlagsList onClick={openModal} sortOption={sortOption} />
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
