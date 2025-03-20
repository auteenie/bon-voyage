import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import StampModal from "../components/StampModal";

const PassportPage = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => {
    setIsOpen(true);
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
  };

  return (
    <main className="profile">
      <NavBar className="profile-nav">
        <li>
          <Button
            name="View Countries"
            onClick={() => navigate("/pages/CountriesPage")}
          />
        </li>

        <h1>Welcome, {userData?.firstName}!</h1>
      </NavBar>

      <section className="flipbook" onClick={openModal}>
        <img
          src={`/assets/${userData?.country}.png`}
          alt={`${userData?.country} Passport Cover`}
        />

        <StampModal
          isOpen={isOpen}
          onClose={closeModal}
          country={selectedCountry}
          origin={userData?.country}
        />
      </section>
    </main>
  );
};

export default PassportPage;
