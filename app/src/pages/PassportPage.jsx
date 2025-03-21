import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import StampModal from "../components/StampModal";
import { Earth, ArrowLeft, ArrowRight } from "lucide-react";
import stamps from "../stamps.js";

const PassportPage = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stampsArray = Object.entries(stamps);
  const stampsPerPage = 6;
  const totalPages = Math.ceil(stampsArray.length / (stampsPerPage * 2));

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
      return;
    }

    console.log("URL ID:", userID);
    console.log("Does this match current user?", currentUser.id === userID);

    if (currentUser.id !== userID) {
      navigate('/');
    }
  }, [currentUser, userID, navigate]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 2));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages * 2 - 2, prev + 2));
  };

  const renderStamps = (pageIndex) => {
    const startIdx = pageIndex * stampsPerPage;
    const pageStamps = stampsArray.slice(startIdx, startIdx + stampsPerPage);

    return (
      <div className="passport-page">
        {pageStamps.map(([country, stampSrc], idx) => (
          <div
            key={country}
            className="stamp-container"
            onClick={() => {
              setSelectedCountry(country);
              setIsModalOpen(true);
            }}
          >
            <img className="stamp" src={stampSrc} alt={`${country} stamp`} />
            {/* <p>{country}</p> */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="profile">
      <NavBar className="profile-nav">
        <div className="nav-content">
          <Button
            name="View Countries"
            onClick={() => navigate("/pages/CountriesPage")}
          />
        </div>
      </NavBar>

      <h1 className="welcome-text">Welcome, {currentUser?.firstName}!</h1>

      <section className="passport-container">
        {!isOpen ? (
          <>
            <div className="front-cover">
              <h1>Passport</h1>
              <Earth className="globeIcon" />
              <h2>{currentUser?.country}</h2>
            </div>
            <button className="open-button" onClick={() => setIsOpen(true)}>
              <ArrowRight size={50} className="move-right" />
            </button>
          </>
        ) : (
          <div className="arrow-container">
            <ArrowLeft className="arrow" onClick={handlePrevPage} />
            <div className="open-passport">
              {renderStamps(currentPage)}
              {renderStamps(currentPage + 1)}
            </div>
            <ArrowRight className="arrow" onClick={handleNextPage} />
          </div>
        )}

        <StampModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          country={selectedCountry}
          origin={currentUser?.country}
        />
      </section>
    </main>
  );
};

export default PassportPage;
