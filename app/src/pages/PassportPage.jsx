import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PassportPage = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <main className="profile">
      <nav className="profile-nav">
        <Button
          name="View Countries"
          onClick={() => navigate("/pages/CountriesPage")}
        />

        <h1>Welcome, {userData?.firstName}!</h1>

        <Button name="Log Out" />
      </nav>

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
