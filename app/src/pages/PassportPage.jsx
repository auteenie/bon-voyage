import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PassportPage = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleViewCountries = () => {
    navigate("/pages/CountriesPage");
  };

  return (
    <div>
      <div>
        <Button name="View Countries" onClick={handleViewCountries} />
        <h1>Welcome, {userData?.firstName}!</h1>
        <Button name="Log Out" onClick={handleLogout} />
      </div>
      <img
        src={`/assets/${userData?.country}.png`}
        alt={`${userData?.country} Passport Cover`}
      />
    </div>
  );
};

export default PassportPage;
