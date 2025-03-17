import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = ({ children, className }) => {
  return (
    <nav className={className}>
      <ul>
        {children}
        <li>
          <Button name="Log Out" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
