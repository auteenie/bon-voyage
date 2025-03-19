import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllFlags } from "../adapters/adapters";
import Button from "../components/Button";
import FlagsList from "../components/FlagsList";
import NavBar from "../components/NavBar";
import CountryModal from "../components/CountryModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CouldNotLoadData from "../pages/CouldNotLoadData";

const CountriesPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  //flag & search state
  const [flags, setFlags] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Move useEffect from FlagsList to here
  useEffect(() => {
    const fetchFlags = async () => {
      const [data, error] = await getAllFlags();
      if (error) {
        setError(<CouldNotLoadData />);
      } else {
        setFlags(data);
      }
    };
    fetchFlags();
  }, []);

  // Add search handler
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter flags based on search term
  const filteredFlags = flags.filter(flag => 
    flag?.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      </NavBar>

      <div className="search-filter">
        <h1>List of Countries</h1>
        <SearchBar onSearch={handleSearch} />
        <Filter />
      </div>

      <section className="flags-list">
        {error || (
          <FlagsList 
            flags={filteredFlags} 
            onClick={openModal} 
          />
        )}
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
