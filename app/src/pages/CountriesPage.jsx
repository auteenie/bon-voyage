import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FlagsList from "../components/FlagsList";

const CountriesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Button
          name="View Account"
          onClick={() => navigate("/pages/PassportPage")}
        />

        <h1>List of Countries</h1>
        <input type="text" name="search" />

        <Button name="Log Out" />
      </div>

      <FlagsList />
    </div>
  );
};

export default CountriesPage;
