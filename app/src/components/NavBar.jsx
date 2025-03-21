import { Link } from "react-router-dom";
import Button from "./Button";
import ThemeToggle from './ThemeToggle';

const NavBar = ({ children, className }) => {
  return (
    <nav className={className}>
      <ul>
        {children}
        <li>
          <ThemeToggle />
        </li>
        <li>
          <Button name="Log Out" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
