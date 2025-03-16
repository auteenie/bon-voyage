import { useNavigate } from "react-router-dom";

const Button = ({ name, onClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button
      type="submit"
      onClick={onClick || (name === "Log Out" && handleLogout)}
    >
      {name}
    </button>
  );
};

export default Button;
