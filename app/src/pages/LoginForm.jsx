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
      console.log("Login successfully");
      navigate("/pages/PassportPage");
    } else {
      console.log("Invalid credentials");
      alert("Invalid username or password");
    }
  };

  return <Form name={"Log In"} onSubmit={handleSubmit} />;
};

export default LoginForm;
