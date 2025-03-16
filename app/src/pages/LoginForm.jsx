import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const savedData = JSON.parse(localStorage.getItem("userData"));

    if (
      savedData &&
      data.username === savedData.username &&
      data.password === savedData.password
    ) {
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return <Form name={"Log In"} onSubmit={handleSubmit} />;
};

export default LoginForm;
