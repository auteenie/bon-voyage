import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import StampModal from "../components/StampModal";

const PassportPage = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

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

      <section className="flipbook">
        <img
          src={`/assets/${userData?.country}.png`}
          alt={`${userData?.country} Passport Cover`}
        />
        <StampModal />
        {/* 1. Need to implement the isOpen functionality
        2. Pass in the userData to the StampModal to grab the origin country */}
      </section>
    </main>
  );
};

export default PassportPage;
