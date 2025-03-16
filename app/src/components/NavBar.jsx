import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Bon Voyage!</Link>
        </li>
        <li>
          <Link to="/pages/LoginPage">
            <Button name="Login" onClick={handleSubmit} />
          </Link>
        </li>
        <li>
          <Link to="/pages/SignupPage">
            <Button name="Sign Up" onClick={handleSubmit} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
