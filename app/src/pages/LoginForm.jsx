import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const LoginForm = ({ onSubmit }) => {
  return <Form name={"Log In"} onSubmit={onSubmit} />;
};

export default LoginForm;
