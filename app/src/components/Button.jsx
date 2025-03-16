import { useNavigate } from "react-router-dom";

const Button = ({ name, onSubmit, onClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleClick = () => {
    if (name === "Log Out") {
      handleLogout();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button type="submit" onClick={onSubmit || handleClick}>
      {name}
    </button>
  );
};

export default Button;
