import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Button name="View Countries" />
        </li>
        <li>
          <Button name="Log Out" onClick={() => localStorage.clear()} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
