import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

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
      </section>
    </main>
  );
};

export default PassportPage;
