import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const SignupForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (formData) => {
    const combinedData = { ...signupData, ...formData };
    onSubmit(combinedData);
  };

  return (
    <Form name={"Sign Up"} onSubmit={handleFormSubmit}>
      <label className="signup" aria-label="first name">
        First Name:{" "}
      </label>
      <input
        type="text"
        name="firstName"
        className="signup"
        aria-label="first name"
        placeholder="First Name"
        value={signupData.firstName}
        onChange={handleInputChange}
        required
      />

      <label className="signup" aria-label="last name">
        Last Name:{" "}
      </label>
      <input
        type="text"
        name="lastName"
        className="signup"
        aria-label="last name"
        placeholder="Last Name"
        value={signupData.lastName}
        onChange={handleInputChange}
        required
      />
  
      <label className="signup" aria-label="email">
        Email Address:{" "}
      </label>
      <input
        type="email"
        name="email"
        className="signup"
        aria-label="email"
        placeholder="Email Address"
        value={signupData.email}
        onChange={handleInputChange}
        required
      />
    
      <label className="signup" aria-label="origin country">
        Origin Country:{" "}
      </label>
      <input
        type="text"
        name="country"
        className="signup"
        aria-label="origin country"
        placeholder="Origin Country"
        value={signupData.country}
        onChange={handleInputChange}
        required
      />
   
    </Form>
  );
};

export default SignupForm;
