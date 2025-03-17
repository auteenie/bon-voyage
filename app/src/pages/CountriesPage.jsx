import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FlagsList from "../components/FlagsList";
import NavBar from "../components/NavBar";
import CountryModal from "../components/CountryModal";

const CountriesPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
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

        <h1>List of Countries</h1>
      </NavBar>

      <div className="search-filter">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search for a Country..."
        />

        <select className="filter">
          <option value="">All</option>
          <option value="Countries A-Z">Countries A-Z</option>
          <option value="Region">Region</option>
        </select>
      </div>

      <section className="flags-list">
        <FlagsList onClick={openModal} />
        <CountryModal isOpen={isOpen} onClose={closeModal} country={selectedCountry} />
      </section>
    </main>
  );
};

export default CountriesPage;
